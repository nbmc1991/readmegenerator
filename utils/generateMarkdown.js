// function to generate markdown for README
function generateMarkdown(response) {
  return `# Title :${response.title}

  #Table of Contents


-[Description] (#description)
-[Installation] (#installation)
-[Test] (#test)
-[License] (#license)
-[Contributing](#contributing)
-[Questions] (#questions)

## Description:
${response.description}

## Installation :
${response.installation}

## Usage :
${response.usage}

## Contributing: 
${response.contributing}

## Test :
${response.test}

## License :
${response.license}


## Questions :
Hi! 
Please feel free to contact me if you have any questions :)
# GIT-HUB:${response.username}

# EMAIL :${response.email}
  

`
}

module.exports = generateMarkdown;
