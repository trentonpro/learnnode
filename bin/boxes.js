import boxen from 'boxen';
import chalk from 'chalk';

console.log(boxen(chalk.red('unicorn'), {padding: 1}));

console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));

console.log(boxen('unicorns love rainbows', {title: 'magical', titleAlignment: 'center'}));

console.log(boxen('Hello World', {borderColor: 'green', backgroundColor: 'black'}));

console.log(boxen(chalk.green('turtles'), {padding: 1, margin: 1, borderStyle: 'round', backgroundColor: 'white'}));

console.log(boxen(chalk.red('EMERGENCY!'), {title: 'EMERGENCY', borderColor: 'red', titleAlignment: 'center', padding: 1, margin: 1, borderStyle: 'classic', backgroundColor: 'yellow'}));

console.log(boxen(chalk.blue('singledouble box'), {textAlignment: 'left', dimBorder: true, padding: 2, margin: 1, borderStyle: 'singleDouble', backgroundColor: 'red'}));

console.log(boxen(chalk.yellow('bold magenta box'), {padding: 1, margin: 1, borderStyle: 'bold', borderColor: 'magenta'}));

console.log(boxen(chalk.yellow('cool above right side'), {title: 'cool', titleAlignment: 'right', borderStyle: 'single'}));

