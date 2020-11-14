// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}


  ![License](https://img.shields.io/badge/License-${response.license}%202.0-blue.svg)


  ![](https://drive.google.com/file/d/1pAoRhXh0UCiht0mwwqcTA-31fTvC0eOw/view?usp=sharing)

  ![](https://github.com/nbmc1991/readmegenerator/blob/main/visual/2020-11-13.png)


## Table of Contents:


[Description](#description)


[Installation](#installation)

[Usage Information](#usage)


[Test](#test)


[License](#license)


[Contributing](#contributing)


[Questions](#questions)



## Description:

${response.description}

## Installation :

To install dependencies run:
${response.installation}

## Usage Information :

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


*GIT-HUB:(https://github.com/${response.username})

*EMAIL :${response.email}
  

`
}

module.exports = generateMarkdown;
