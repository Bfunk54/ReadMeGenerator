// Require the packages needed for this project
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('generatorMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Enter a description for your project:',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter usage information for your project:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is the full branch name of your project for contributions? ',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Enter testing instructions:',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'What license is your project under:',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Github Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + 'README.md', data, (err) => 
    err ? console.log(err) : console.log('Your README file has been saved.')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>  writeToFile(response.name.project, response));
}
// Function call to initialize app
init();
