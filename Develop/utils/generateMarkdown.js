//const index = require('C:\\Users\\madel\\Documents\\Bootcamp\\readme-generator\\Develop\\index.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge = 'this is a string'
  if (data.userLicense === 'MIT') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.userLicense === 'The GNU General Public License v3.0') {
   badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (data.userLicense === 'Apache License Version 2.0') {
   badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.userLicense === 'Mozilla Public Licence') {
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (data.userLicense === 'No License') {
    badge = ' '
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(data) {
  let finalLicense = null
  let badge = 'this is a string'
  if (data.userLicense === 'MIT') {
    finalLicense = 'https://opensource.org/licenses/MIT'
  } else if (data.userLicense === 'The GNU General Public License v3.0') {
   finalLicense = 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (data.userLicense === 'Apache License Version 2.0') {
   finalLicense = 'https://opensource.org/licenses/Apache-2.0'
  } else if (data.userLicense === 'Mozilla Public Licence') {
    finalLicense = 'https://opensource.org/licenses/MPL-2.0'
  } else if (data.userLicense === 'No License') {
    finalLicense = 'The project creator has chosen not to use a license'
  }
  return finalLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.badge)

  return `# ${data.userProject} ${data.badge}
  
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

module.exports = {generateMarkdown, renderLicenseSection, renderLicenseBadge};

