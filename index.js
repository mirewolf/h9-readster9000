const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [{
    name: 'title',
    type: 'input',
    message: 'What is the title of your app?'
  }, {
    name: 'description',
    type: 'input',
    message: 'Provide a description of your app:'
  }, {
    type: "list",
    name: "license",
    message: "What kind of license does the app have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  }, {
    name: 'installation',
    type: 'input',
    message: 'What is the command to install the app?',
    default: 'npm i'
  }, {
    name: 'usage',
    type: 'input',
    message: 'Provide app usage information:'
  }, {
    name: 'contributing',
    type: 'input',
    message: 'Provide info for contributions to the app:',
    default: 'N/A'
  }, {
    name: 'tests',
    type: 'input',
    message: 'What is the command to run tests?',
    default: 'npm test'
  }, {
    name: 'repository',
    type: 'input',
    message: 'What is the url to the repository?',
    default: 'N/A'
  }, {
    name: 'website',
    type: 'input',
    message: 'What is the url to the website?',
    default: 'N/A'
  }, {
    name: 'github',
    type: 'input',
    message: 'What is your GitHub username?'
  }, {
    name: 'email',
    type: 'input',
    message: 'What is your email address?'
  }
];

// function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// initialize program
function init() {
  inquirer.prompt(questions)
  .then((responses) => {

    console.log('Generating README.md file...');

    let markDown = generateMarkdown(responses);
    writeToFile('README.md', markDown);
  });
}

// start
init();
