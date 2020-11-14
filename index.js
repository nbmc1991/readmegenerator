
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
       
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
        name: 'installation',
        message: 'Which command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to your application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['Apache License 2.0','MIT license','GNU Public License v3.0','Boost Software License 1.0','None'],

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
        validate: (value)=> {
            if(value){return true}
            else{return 'Please give a value!'}
        }

    },
        {
        type: 'checkbox',
        name: 'questions',
        message: 'How can the user contact you should they have questions?',
        choices: ['Email','Github'],
        
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




