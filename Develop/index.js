// Including packages required for application
const inquirer = require('inquirer');
const fs   = require('fs');
const utilMarkdown = require('./utils/generateMarkdown');

// Array of Function questions 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Please provide List of Collaborators/Tutorials/Third party assets',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide license information.',
    },
    {
        type: 'input',
        name: 'Badges',
        message: 'Please provide Badges',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please provide features',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contributing information.',
    },
//     {
//         type: 'input',
//         name: 'Tests',
//         message: 'Please provide Tests',
//     },
    { 
        type: 'input',
        name: 'github_username',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Nailed it');
        }
    });
}


// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', utilMarkdown(answers));
    });
}

// Function call to initialize app
init();
