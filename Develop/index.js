// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'userProject',
    },
    {
        type: 'input',
        message: 'What is the description of your project? I.E. why, motivation, problems solved, what you learned',
        name: 'userDescription',
    },
    {
        type: 'input',
        message: 'If applicable, please explain the installation process, if not please leave blank',
        name: 'userInstallation',

    },
    {
        type: 'input',
        message: 'Please explain how to use your application',
        name: 'userUsage'
    },
    {
        type: 'input',
        message: 'Please list any collaborators, and any sources you used such as tutorials, art, other code, ect.',
        name: 'userCredit',
    },
    {
        type: 'input',
        message: 'Please write tests for your program. If this is not applicable, please leave blank',
        name: 'userTest'
    },
    {
        type: 'list',
        message: 'Which license do you require?',
        choices: ['MIT', 'The GNU General Public License v3.0', 'Apache License Version 2.0', 'Mozilla Public Licence', 'No License'],
        name: 'userLic'
    },
    {
        type: 'input',
        message: 'For contact purposes, what is your github?',
        name: 'userGithub',

    },
    {
        type: 'input',
        message: 'For contact purposes, what is your email?',
        name: 'userEmail',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then(answers => {
    console.info('Answer:', answers.userDescription);
  });
}

// Function call to initialize app

init();
