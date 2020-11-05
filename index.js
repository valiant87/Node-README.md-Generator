const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
    // array of questions for user
const questions = [{
        //this will get the title from the user
        type: "input",
        name: "title",
        message: "What is the tile of your project?"

    }, {
        //this will get desctiption of the project
        type: "input",
        name: "description",
        message: "What is the description onf your project?"

    },
    {
        //this will get instruction for installing the project
        type: "input",
        name: "installation",
        message: "What is the installation procedure for your project?"
    },
    {
        // this will get usage information from the user
        type: "input",
        name: "usage",
        message: "What is the usage information of your project?"
    },
    {
        //this will get the contributors to the project
        type: "input",
        name: "contributors",
        message: "Who or what, contribuited to your project?"
    },
    {
        //this will get test instruction form the user
        type: "input",
        name: "tests",
        message: "What are the tesing instructions?"
    },
];

// function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) => {
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