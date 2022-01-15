// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Returns the Employee object's name
    getName(name) {
        return this.name;
    }
    // Returns the Employee object's ID
    getId() {
        return this.id;
    }
    // Returns the Employee object's email
    getEmail() {
        return this.email;
    }
    // Returns the Employee object's role
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;