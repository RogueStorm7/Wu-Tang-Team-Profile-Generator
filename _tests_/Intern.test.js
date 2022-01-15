const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("constructor", () => {
    it("should create an Intern object", () => {
      const intern = new Intern(
        "Miles Morales",
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
    it('should return "SpiderVerse University"', () => {
      const intern = new Intern(
        "Skippy",
        2022,
        "spiderman@spiderverse.edu",
        "SpiderVerse University"
      );

      expect(intern.getSchool()).toBe("SpiderVerse University");
    });
  });

  describe("getRole", () => {
    it('should return "Intern"', () => {
      const intern = new Intern(
        "Miles Morales",
        2022,
        "spiderman@spiderverse.edu", 
        "SpiderVerse University"
      );

      expect(intern.getRole()).toBe("Intern");
    });
  });
});