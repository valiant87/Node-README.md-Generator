const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
---
![project-video]()

## Table of contents

* [About the project](#About-the-project)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)
    
## About the project
    ${data.description}
   
## Installation
    ${data.installation}

## Usage
    ${data.usage}    

## Contributors
    ${data.contributors}    

## Tests
    ${data.tests}    
    
## License
    ${data.license}

## Questions
For addtional questions contact me at:
<${data.email}>
[My Repository](http://github.com/${data.name})
`;
}

module.exports = generateMarkdown;