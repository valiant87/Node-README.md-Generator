// require() file system module
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
        //this will prompt the user hpt to contribuite to the project
        type: "input",
        name: "contributors",
        message: "How one can make contributions to your project?"
    },
    {
        //this will get test instruction form the user
        type: "input",
        name: "tests",
        message: "What are the tesing instructions for your project?"
    },
    {
        //this will list a choise of licenses user can choose from
        type: "list",
        name: "license",
        massage: "What type of license for your project?",
        choices: ["MIT", "Apache", "Boost", "IBM"]
    },

    {
        // this will ask the user github username
        type: 'input',
        name: 'name',
        message: 'What is your Github username?',
    },
    {
        //this will ask the user email address
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to write README file (keep data)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
    //this is console log "success" message if the operation complete
    console.log("Success!")
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions).then(function(response) {
            writeToFile("README.md", generateMarkdown(response)); //this module will transfer  user input to the linked page responses
        })


}

// function call to initialize program
init();