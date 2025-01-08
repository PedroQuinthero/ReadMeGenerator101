// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Provide a brief but detailed description of your project:",
    "What are the installation instructions?",
    "How is the project used?",
    "What are the contribution guidelines?",
    "What are the test instructions?",
    "Choose a license for your project (MIT, GPL, Apache):"
];

// TODO: Create a function to write README file
//error function below
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data,(err) => {
        if(err) {
            console.error("Error Writing file:", err);
            } else {
                console.log(`Successfully wrote ${fileName}`);
            }
    });
}

//Function to write README file if successful below


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt([
      { type: "input", name: "title", message: questions[0] },
      { type: "input", name: "description", message: questions[1] },
      { type: "input", name: "installation", message: questions[2] },
      { type: "input", name: "usage", message: questions[3] },
      { type: "input", name: "contributing", message: questions[4] },
      { type: "input", name: "tests", message: questions[5] },
      { type: "list", name: "license", message: questions[6], choices: ["MIT", "GPL", "Apache"] },
      { type: "input", name: "github", message: questions[7] },
      { type: "input", name: "email", message: questions[8] }
    ]).then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile("README.md", readmeContent);
    });
}

// Function call to initialize app
init();
