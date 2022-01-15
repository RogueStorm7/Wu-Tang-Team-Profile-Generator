// //creating engineer sublass by extending employee class 
// //import Employee class
// //use super fucnton to call parent constructor i.e "Employee"
// //require name, id , email, role, github username

const Employee = require("./Employee");

class Engineer extends Employee {
 // //require method getname(), getID(), getRole(), getGit(); 
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
   
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;