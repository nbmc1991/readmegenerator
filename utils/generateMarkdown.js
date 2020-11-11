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
## Test :
${response.test}
## License :

## Contributing: 

## Questions :
  

`
}

module.exports = generateMarkdown;
