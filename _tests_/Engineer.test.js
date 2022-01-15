const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("constructor", () => {
    it("should create an Engineer object", () => {
      const engineer = new Engineer(
        "Chadwick",
        5555,
        "chadwick@company.org",
        "WakandaForever"
      );

      expect(engineer.getName()).toBe("Chadwick");
      expect(engineer.getId()).toBe(5555);
      expect(engineer.getEmail()).toBe("chadwick@company.org");
    });
  });

  describe("getGitHub", () => {
    it('should return "WakandaForever"', () => {
      const engineer = new Engineer(
        "Chadwick",
        5555,
        "chadwick@company.org",
        "WakandaForever"
      );

      expect(engineer.getGitHub()).toBe("WakandaForever");
    });
  });

  describe("getRole", () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer(
        "Chadwick",
        5555,
        "chadwick@company.org",
        "WakandaForever"
      );

      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});