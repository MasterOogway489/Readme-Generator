// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: userTitle => {
            if (userTitle) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of this project.',
        validate: userDescription => {
            if (userDescription) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please enter a table of contents for this project.',
        validate: userTableOfContents => {
            if (userTableOfContents) {
                return true;
            } else {
                console.log('Please enter a table of contents!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for this project.',
        validate: userInstallation => {
            if (userInstallation) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for this project.',
        validate: userUsage => {
            if (userUsage) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to add to this project?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines for this project.',
        validate: userContributing => {
            if (userContributing) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions for this project.',
        validate: userTests => {
            if (userTests) {
                return true;
            } else {
                console.log('Please enter test instructions!');
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
