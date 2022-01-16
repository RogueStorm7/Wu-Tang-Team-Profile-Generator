const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("constructor", () => {
    it("should create an Engineer object", () => {
      const engineer = new Engineer(
        "Rza",
        3636,
        "rza@company.org.org",
        "WuTangForever"
      );

      expect(engineer.getName()).toBe("Rza");
      expect(engineer.getId()).toBe(3636);
      expect(engineer.getEmail()).toBe("rza@company.org");
    });
  });

  describe("getGitHub", () => {
    it('should return "Wu-Tang Forver"', () => {
      const engineer = new Engineer(
        "Rza",
        3636,
        "rza@company.org",
        "WuTangForever"
      );

      expect(engineer.getGitHub()).toBe("WakandaForever");
    });
  });

  describe("getRole", () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer(
        "Rza",
        3636,
        "rza@company.org",
        "WuTangForever"
      );

      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});