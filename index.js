const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let teamArr = [];
let id = 0;

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
      const manObject = new Manager(
        response.name,
        response.id,
        response.email,
        response.office
      );
      teamArr.push(manObject);
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
    ])
    .then((response) => {
      const engObject = new Engineer(
        response.engName,
        response.engID,
        response.engEmail,
        response.engGitHub
      );
      teamArr.push(engObject);
      return addTeamMember();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the intern's name.",
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
      const intObj = new Intern(
        response.intName,
        response.intID,
        response.intEmail,
        response.intSchool
      );
      teamArr.push(intObj);
      return addTeamMember();
    });
}
function endProgram() {
  console.log(teamArr);
  fs.writeFile(
    "./dist/team.html",
    JSON.parse(JSON.stringify(buildTeam())),
    (err) => {
      err ? console.log(err) : console.log("success!");
    }
  );
}

addManager();

function getIcon(employee) {
  let mug = `<i class="mr-1 fas fa-lg fa-mug-hot"></i>`;
  let glasses = `<i class="mr-1 fas fa-lg fa-glasses"></i>`;
  let gradHat = `<i class="mr-1 fas fa-lg fa-user-graduate"></i>`;
  if (employee.getRole() === "Manager") {
    return mug;
  } else if (employee.getRole() === "Engineer") {
    return glasses;
  } else {
    return gradHat;
  }
}

function individualAttr(employee) {
  if (employee.getRole() === "Manager") {
    return employee.officeNumber;
  } else if (employee.getRole() === "Intern") {
    return employee.school;
  } else {
    return employee.github;
  }
}

function buildTeam() {
  const htmlArray = [];
  const header = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" />
</head>
<body>
    <header>
        <div id="header-container" class="bg-danger pt-5 pb-5 text-center">
            <span class="h4 text-white">My Team</span>
        </div>
                <body>
            <div class="row d-flex justify-content-center flex-wrap">
                <div class="container row card-container mt-5">
`;
  htmlArray.push(header);

  for (let each of teamArr) {
    const topBody = `
                    <div class="card p-0 col-12 col-lg-4 shadow style=" width: 18rem;">
                        <div class="card-header bg-primary text-white">
                            <div class="h5">
                                ${each.name}
                            </div>
                            <div class="h6">
                                ${getIcon(each)}${each.getRole()}
                            </div>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group border rounded list-group-flush">
                                <li class="list-group-item">${each.id}</li>
                                <li class="list-group-item">${each.email}</li>
                                <li class="list-group-item">${individualAttr(
                                  each
                                )}</li>
                            </ul>
                        </div>
                    </div>
                    
`;
    htmlArray.push(topBody);
  }

  const bottom = `
                        </div>
            </div>

        </body>
    </header>

    <script src="../index.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
</body>

</html>

`;
  htmlArray.push(bottom);

  return htmlArray.join("");
}
