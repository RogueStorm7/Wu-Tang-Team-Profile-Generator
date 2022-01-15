const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("should create an Employee object", () => {
      let employee = new Employee("Rza", 0036, "rza@company.org");

      expect(employee.name).toBe("Rza");
      expect(employee.id).toBe(0036);
      expect(employee.email).toBe("rza@company.org");
    });
  });

  describe("getName", () => {
    it('should return "Rza"', () => {
      const employee = new Employee("Rza", 0036, "rza@company.org");

      expect(employee.getName()).toBe("Rza");
    });
  });

  describe("getId", () => {
    it('should return "0036"', () => {
      const employee = new Employee("Rza", 0036, "rza@company.org");

      expect(employee.getId()).toBe(0036);
    });
  });

  describe("getEmail", () => {
    it('should return "uma@company.org"', () => {
      const employee = new Employee("Rza", 0036, "rza@company.org");

      expect(employee.getEmail()).toBe ("rza@company.org");
    });
  });
});