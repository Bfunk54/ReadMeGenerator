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
        message: 'What is the name of your project?',
        name: 'projectName',
    },
    {
      type: 'input',
      message: 'LinkedIn Url:',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'Github Url:',
      name: 'github',
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
