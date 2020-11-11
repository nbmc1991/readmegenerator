
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'confirm',
        name: 'welcome',
        message: 'Welcome to README generator, would you liket to generate a new readme?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate : (value) => {
            if (value){return true}
            else {return "Please give a value!"}
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'input',
        name: 'table',
        message: 'List table of contents',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies ?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?(if applicable)',
        choices: ['Apache License 2.0','MIT license','GNU Public License v3.0','Boost Software License 1.0']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What does the user need to know about contributing to the repository?',
    },
    
    {
        type: 'input',
        name: 'questions',
        message: 'Where can user contact you if any questions arise?',
    },

];

// function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(),fileName),data)



}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(response=>{
        console.log(response)
        writeToFile('readme.md',generateMarkdown({...response}))
    })

}

// function call to initialize program
init();




