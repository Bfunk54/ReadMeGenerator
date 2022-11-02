// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT License' :
      return '[MIT License](https://opensource.org/licenses/MIT)'

    case 'GNU' :
      return '[GNU](https://www.gnu.org/licenses/)'

    case 'Creative Commons' :
      return '[Creative Commons](https://creativecommons.org/)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT License' :
      return '[![MIT License](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)'

    case 'GNU' :
      return '[![GNU](https://img.shields.io/badge/License-GNU-red)](https://www.gnu.org/licenses/)'

    case 'Creative Commons' :
      return '[![Creative Commons](https://img.shields.io/badge/License-Creative%20Commons-orange)](https://creativecommons.org/)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderLicenseBadge(data.license)}

# ${data.project}

## Description
${data.desc}

## Table of Contents
1. [Installation](#installation)
#
2. [Description](#description)
#
3. [Usage](#usage)
#
4. [Contribution](#contribution)
#
5. [Instructions](#instructions)
#
6. [License](#license)

## Installation
${data.install}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
${data.usage}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License
${renderLicenseLink(data.license)}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing
${data.contributions}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests
${data.test}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions
Github: https://github.com/${data.github}

Email me with any questions: ${data.email}
<p align="right">(<a href="#readme-top">back to top</a>)</p>
`;}

module.exports = generateMarkdown;
