// function to generate markdown for README
function generateMarkdown(response) {
  return `# Title :${response.title}

  ![License](https://img.shields.io/badge/License-${response.license}%202.0-blue.svg)

##Table of Contents


[Description](#description)
[Installation](#installation)
[Test](#test)
[License](#license)
[Contributing](#contributing)
[Questions](#questions)

## Description:

${response.description}

## Installation :
To install dependencies run:
${response.installation}

## Usage :

${response.usage}

## Contributing: 

You can contribute to this application by:

${response.contributing}

## Test :


${response.test}

## License :

 ${response.license}


## Questions :
Hi! 
Please feel free to contact me if you have any questions and     or feedback.


*GIT-HUB:${response.username}

*EMAIL :${response.email}
  

`
}

module.exports = generateMarkdown;
