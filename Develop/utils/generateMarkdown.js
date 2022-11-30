// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }
  if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
  }
  if (license == 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  }
  else (license == 'None') {
    return 'No License in use on this project';
  }
};

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  }
  if (license == 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  if (license == 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else (license == 'None') {
    return 'No License in use on this project';
  }
};

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT') {
    return 'Licensed under the MIT license.';
  }
  if (license == 'Apache') {
    return 'Licensed under the Apache license.';
  }
  if (license == 'GNU') {
    return 'Licensed under the GNU license.';
  }
  else (license == 'None') {
    return 'No License in use on this project';

  }
};

  function generateMarkdown(data) {
    return (`
    # ${data.title}
    # Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Credits](#credits)
    5. [License](#license)
    6. [Badges](#badges)
    7. [Features](#features)
    8. [Contributing](#contributing)
    # Description
    ${data.description}
    # Installation
    ${data.installation}
    # Usage
    ${data.usage}
    # Credits
    ${data.credits}
    # License protecting this Project\n 
    ${data.license}
    ${renderLicenseBadge(data.license)}\n
    ${renderLicenseLink(data.license)}\n
    ${renderLicenseSection(data.license)}\n
    # Badges
    ${data.badges}
    # Features
    ${data.features}
    # Contributing
    ${data.contributing}
    # Check out my other work at:
    ${data.github_username}
    # I'm also available at:
    ${data.email}
    `);
  };


  module.exports = generateMarkdown;
