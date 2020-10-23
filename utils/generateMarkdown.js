// function passing in liscense as an arg
// validare lisene exists
// return ![Github license] (https://img.shield.io/badge/license- ROUTE HERE -blue svg)
// require generateMarkdown in the index

// function to generate markdown for README- all done!- maybe i can remember 
function generateMarkdown(data) {
  return `
  [github.com/${data.github}](github.com/${data.github})

  <${data.email}>

  ${data.projectTitle}

  ${data.projectInstallation}
  
  ${data.projectTest}

  ${data.projectUsage}

  ${data.projectContributing}

  ${data.projectLicense}

  ${data.projectDescription}
`;
}

module.exports = generateMarkdown;
