// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'what is your Github username?',

},
{
    type: 'input',
    name:'email',
    message:'What is your email address?',
},
{
    type: 'input',
    name: 'title',
    message: 'What is your projects name?',
},
{ 
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
