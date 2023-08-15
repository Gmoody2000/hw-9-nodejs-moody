import inquirer from 'inquirer';

import fs from 'fs';


const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do users install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should users use your project?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'ISC', 'None'],
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ];

    inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = `
        # ${answers.projectTitle}
  
        ## Description
        ${answers.description}
  
        ## Installation
        ${answers.installation}
  
        ## Usage
        ${answers.usage}
  
        ## Contributing
        ${answers.contributing}
  
        ## License
        This project is licensed under the ${answers.license} license.
        `;
        
      fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
          console.error('Error writing README file:', err);
        } else {
          console.log('README.md file generated successfully!');
        }
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });