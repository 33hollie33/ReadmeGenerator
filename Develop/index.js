//  Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


//  Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description for the project',

    },
    {
        type: 'input',
        name: 'tools',
        message: 'What tools did you use to build this project?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'],
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        else {
            console.log("File with name '" + fileName + "' has been generated!");
        }
    })
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => writeToFile("PROJ-README.md", generateMarkdown(answers)));
}

// Function call to initialize app
init();
