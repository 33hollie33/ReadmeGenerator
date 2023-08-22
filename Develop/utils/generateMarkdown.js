// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'APACHE2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'GPL3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD3':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    case 'None':
      return '';
    default:
      return '';
  }

}
// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'APACHE2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GPL3.0':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD3':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return '';
    default:
      return '';
  }
}

//  Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == '' || license == 'None') {
    return '';
  }
  else {
    return `## License \n  ${renderLicenseBadge(license)}\nThis project is licensed under the terms of ${license}.  ${renderLicenseLink(license)}`;
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}



module.exports = generateMarkdown;
