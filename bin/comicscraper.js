import * as cheerio from "cheerio";
import fs from "fs";
import md5 from "md5";

const sleep = ms => new Promise(r => setTimeout(r, ms));

let cacheDir = import.meta.dirname + "/../cache";
if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
}

const BASE_URL = "https://www.qwantz.com/";
const START_ID = 4413;
const COUNT = 10;

for (let id = START_ID; id > START_ID - COUNT; id--) {
    const url = `${BASE_URL}/comics/${id}`;
    const cacheFile = `${cacheDir}/${md5(url)}.html`;

    let body;

    if (fs.existsSync(cacheFile)) {
        body = fs.readFileSync(cacheFile, "utf8");
    } else {
        await sleep(1000);
        const res = await fetch(url);
        body = await res.text();
        fs.writeFileSync(cacheFile, body);
    }

    const $ = cheerio.load(body);
    const img = $("#comic img");

    console.log("PAGE:", url);
    console.log("IMAGE:", BASE_URL + img.attr("src"));
    console.log("TITLE:", img.attr("alt") || "");
    console.log("---------------------------------------");
}