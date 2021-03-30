const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let teamArr = [];

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the team manager's first name.",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter your employee ID.",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter your email address.",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter your office number.",
        name: "office",
      },
    ])
    .then((response) => {
      console.log(response.name);
      console.log(response.id);
      console.log(response.email);
      console.log(response.office);
      addTeamMember();
    });
}
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Finish building team"],
        name: "options",
      },
    ])
    .then((response) => {
      console.log("options");
      if (response.options === "Add Engineer") {
        return addEngineer();
      } else if (response.options === "Add Intern") {
        return addIntern();
      } else if (response.options === "Finish building team") {
        return endProgram();
      }
    });
}
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the engineers name.",
        name: "engName",
      },
      {
        type: "input",
        message: "Please enter the engineer's ID.",
        name: "engID",
      },
      {
        type: "input",
        message: "Please inter the engineer's email.",
        name: "engEmail",
      },
      {
        type: "input",
        message: "Please enter the engineer's GitHub username.",
        name: "engGitHub",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Finish building team"],
        name: "options",
      },
    ])
    .then((response) => {
      return addTeamMember();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please inter the intern's name.",
        name: "intName",
      },
      {
        type: "input",
        message: "Please enter the intern's ID.",
        name: "intID",
      },
      {
        type: "input",
        message: "Please inter the intern's email.",
        name: "intEmail",
      },
      {
        type: "input",
        message: "Please enter the intern's school.",
        name: "intSchool",
      },
    ])
    .then((response) => {
      return addTeamMember();
    });
}
function endProgram() {
  fs.appendFile(
    "./dist/team.html",
    JSON.parse(JSON.stringify(`hello`)),
    (err) => {
      err ? console.log(err) : console.log("success!");
    }
  );
}

addManager();
