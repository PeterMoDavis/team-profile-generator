class Employee {
  constructor(name, id, email) {
    name = this.name;
    id = this.id;
    email = this.email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
