const inquirer = require("inquirer");

const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "tell me who you are?",
      name: "name",
    },
  ])
  .then((response) => {
    fs.appendFile();
  });
