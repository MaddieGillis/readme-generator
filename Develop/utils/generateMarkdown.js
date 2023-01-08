//const index = require('C:\\Users\\madel\\Documents\\Bootcamp\\readme-generator\\Develop\\index.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //const mit
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(data) {
  let finalLicense = null
  if (data.userLicense === 'MIT') {
    finalLicense = 'mit'
  } else if (data.userLicense === 'The GNU General Public License v3.0') {
   finalLicense = 'gnu'
  } else if (data.userLicense === 'Apache License Version 2.0') {
   finalLicense = 'apache'
  } else if (data.userLicense === 'Mozilla Public Licence') {
    finalLicense = 'mozilla'
  } else if (data.userLicense === 'No License') {
    finalLicense = 'The project creator has chosen not to use a license'
  }
  return finalLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //renderLicenseSection(data);
  return `# ${data.userProject}
  
  ## Description
  ${data.userDescription}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.userInstallation}
  
  ## Usage
  ${data.userUsage}
  
  ## Credits
  ${data.userCredit}
  
  ## Tests
  ${data.userTest}
  
  ## License
  
  ${data.finalLicense}
  
  ## Contact for questions
  
  ${data.userGithub}
  ${data.userEmail}
  
  
  `;

}

module.exports = {generateMarkdown, renderLicenseSection};

