// function to generate markdown for README
function generateMarkdown(answers) {
    return `# ${answers.title}
 
    
## About the project
    ${answers.description}
   
## Installation
    ${answers.installation}

## Usage
    ${answers.usage}    

## Contributors
    ${answers.contributors}    

## Tests
    ${answers.tests}    
    



        
  `;
}

module.exports = generateMarkdown;