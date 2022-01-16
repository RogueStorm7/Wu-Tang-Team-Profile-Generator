const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("constructor", () => {
    it("should create an Intern object", () => {
      const intern = new Intern(
        "Method Man",
        2022,
        "spiderman@spiderverse.edu",
        "SpiderVerse University"
      );

      expect(intern.getName()).toBe("Miles Morales");
      expect(intern.getId()).toBe(9001);
      expect(intern.getEmail()).toBe("spiderman@spiderverse.edu");
    });
  });

  describe("getSchool", () => {
    it('should return "School of Hard Knocks Shaolin University"', () => {
      const intern = new Intern(
        "GZA",
        2022,
        "gza@wutang.edu",
        "School of Hard Knocks Shaolin University"
      );

      expect(intern.getSchool()).toBe("School of Hard Knocks Shaolin University");
    });
  });

  describe("getRole", () => {
    it('should return "Intern"', () => {
      const intern = new Intern(
        "ODB",
        2022,
        "odb@wutang.edu", 
        "School of Hard Knocks Shaolin University"
      );

      expect(intern.getRole()).toBe("Intern");
    });
  });
});