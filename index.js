function hello() {
    console.log("Hello, world!");
}

function helloName(name) {
    console.log(`Hello, ${name}!`);
}

helloName("Trent");
helloName("Bob");
helloName("bsasd");

function hi(name='nameless', age='Infinite') {
    console.log(`Hi ${name}, you are ${age} years old!`);
}
hi("trent", 32);
hi("bob", 67);
hi("bsasd", 41);
hi();

let sum = function(a, b) {
    return a + b;
}

let answer = sum(4, 5);
console.log(answer);
console.log(sum(10, 20));
sum (5, 6);

let sub = (a, b) => {
    return a - b;
};

console.log(sub(10, 5));

let mult = (a, b) => a * b;

console.log(mult(10, 5));

let root = a => a * a;

console.log(root(10));

let cool = () => console.log('cool');

cool();

let awesome = {
    party: function() {
        console.log('PARTY');
    },
    cool: () => console.log('cool'),
    nice () {
        console.log('nice');
    }
};

awesome.party();
awesome.cool();
awesome.nice(); 