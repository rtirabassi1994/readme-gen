const inquirer = require("inquirer")
const fs = require("fs")
const path = require('path')
// install inquirer. Rich did npm i

//you will want to pull in utils/generateMarkdown.js so you can use it as render function
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: "input",
    name: "github",
    message: "What is your github username?"
},{
    type: "input",
    name: "email",
    message: "What is your email address?"
},{
    type: "input",
    name: "projectTitle",
    message: "What is your project's title?"
},{
    type: "input",
    name: "projectDescription",
    message: "Please enter a short description of your repository."
},{
    type: "input",
    name: "projectInstallation",
    message: "What command should be executed to install dependencies?"
},{
    type: "input",
    name: "projectTest",
    message: "What command should be executed to run tests?"
},{
    type: "input",
    name: "projectUsage",
    message: "What should the user know about using this repo"
},{
    type: "input",
    name: "projectContributing",
    message: "what should the user know so they can contribute?"
},{
    type: "list",
    name: "projectLicense",
    message: "What license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
}
];

// function to write README file
function writeToFile(fileName, data) {
    //path join combines cwd and the file name (aka the readme)
    return fs.writeFileSync(path.join(process.cwd(), fileName), data) 
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    // promise function
    .then(response => {
        console.log("Rendering ReadMe...");
        // call the function writeToFile using the data that we pass (ie the inquirer responses)
        writeToFile("README.md", generateMarkdown(response));
    })
}

// function call to initialize program
init();
