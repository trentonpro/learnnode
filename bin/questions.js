import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'number',
        name: 'age',
        message: 'What is your age?',
    },
   {
        type: 'checkbox',
        name: 'school',
        message: 'What school do you go to?',
        choices: ['Polütehnikum', 'Gustav Adolf', 'Idk'],
    },
    {
        type: 'confirm',
        name: 'coding',
        message: 'Do you like coding?',
        default: true,
    },
    {
        type: 'list',
        name: 'colors',
        message: 'What is your favorite color?',
        choices: ['Red', 'Blue', 'Green', 'Yellow'],
    },
    {
        type: 'rawlist',
        name: 'subjects',
        message: 'what subjects do you like?',
        choices: ['Math', 'Science', 'Art', 'History'],
    },
    {
        type: 'editor',
        name: 'bio',
        message: 'Tell us about yourself:',
        default: '',
    },
    {
        type: 'password',
        name: 'secret',
        message: 'what is the secret password?',
        mask: '*',
    },
    {
        type: "expand",
        name: "action",
        message: "Choose an action:",
        choices: [
            { key: "a", name: "Add", value: "add" },
            { key: "d", name: "Delete", value: "delete" }
  ]
}

]);

console.log(`Hello ${answers.name}!!!!`);
console.log(`You are ${answers.age} years old!`);
console.log(`You go to ${answers.school}.`);
console.log(`You ${answers.coding ? 'like' : "don't like"} coding!`);
console.log(`Your favorite color is ${answers.colors}.`);
console.log(`You like ${answers.subjects}.`);
console.log(`Your bio: ${answers.bio}`);
console.log(`The secret password is ${answers.secret}.`);
console.log(`You chose to ${answers.action}.`);


