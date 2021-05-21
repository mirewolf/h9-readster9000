// function to generate markdown for README
function renderLicenseBadge(license) {
  var result = '';

  if (license !== 'None') {
    result = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }

  return result;
}

function renderLicenseLink(license) {
  var result = '';

  if (license !== 'None') {
    result = `\n* [License](#License)\n`;
  }

  return result;
}

function renderLicenseSection(license) {
  var result = '';

  if (license !== 'None') {
    result = `\n\n## License:\n\nThis app is licensed under the ${license} license.\n`;
  }
  return result;
}

function renderRepositoryLink(repository) {
  var result = '';

  if (repository !== 'N/A') {
    result = `\n* [Repository](#Repository)`;
  }

  return result;
}

function renderRepositorySection(repository) {
  var result = '';

  if (repository !== 'N/A') {
    result = `\n\n## Repository:\n\n[${repository}](${repository})\n`;
  }

  return result;
}

function renderWebsiteLink(website) {
  var result = '';

  if (website !== 'N/A') {
    result = `\n* [Website](#Website)\n`;
  }

  return result;
}

function renderWebsiteSection(website) {
  var result = '';

  if (website !== 'N/A') {
    result = `\n\n## Website:\n\n[${website}](${website})\n\n`;
  }

  return result;
}

function generateMarkdown(data) {
  return (
`# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
${renderLicenseLink(data.license)}
* [Contributing](#Contributing)
* [Tests](#Tests)
${renderRepositoryLink(data.repository)}
${renderWebsiteLink(data.website)}
* [Questions](#Questions)
## Installation:
Run the following command:
\`\`\`bash
${data.installation}
\`\`\`
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing:
${data.contributing}
## Tests:
Run the following command:
\`\`\`bash
${data.tests}
\`\`\`
${renderRepositorySection(data.repository)}
${renderWebsiteSection(data.website)}
## Questions:
If you have any questions, please contact me at ${data.email}.  My github profile can be found at [https://github.com/${data.github}/](https://github.com/${data.github}/).
`)
}

module.exports = generateMarkdown;
