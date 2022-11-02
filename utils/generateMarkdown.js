// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.project}

##Description
${data.description}

##Table of Contents

##Installation
${data.install}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

##Usage
${data.usage}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

##License
${data.license}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

##Contributing
${data.contributions}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

##Tests
${data.test}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

##Questions
Github: ${data.github}

Email me with any questions: ${data.email}
`;}

module.exports = generateMarkdown;
