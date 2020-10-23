// function passing in liscense as an arg
// validare lisene exists
// return ![Github license] (https://img.shield.io/badge/license- ROUTE HERE -blue svg)
// require generateMarkdown in the index

// function to generate markdown for README- all done!- maybe i can remember 
function generateMarkdown(data) {
  return `
  
  # ${data.projectTitle}
  
  ## Username and Email
  ***
  [github.com](github.com/${data.github})

  <${data.email}>
  
  ## Descriptiom
  ***

  ${data.projectDescription}

## Table of Contents
***
- Installation 
- Usage
- License
- Contributing
- Tests
  

  ## Installation
  ***
  ${data.projectInstallation}
  
  ## Usage
  ***
  ${data.projectUsage}
  
  ## License
  ***
  ${data.projectLicense}
  
  ## Tests
  ***
  ${data.projectTest}

  ## Contributing
  ***
  ${data.projectContributing}

  

`;
}

module.exports = generateMarkdown;
