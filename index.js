const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
    // array of questions for user
const questions = [{
    type: "input",
    message: "What is the tile of your project?",
    name: "title"

}, {
    type: "input",
    message: "What is the description onf your project?",
    name: "description"
}, ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions).then(function(response) {
            writeToFile("README.md", generateMarkdown(response));
        })


}

// function call to initialize program
init();