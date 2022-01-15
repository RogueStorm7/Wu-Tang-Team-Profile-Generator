const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("constructor", () => {
    it("creates a Manager object", () => {
      const manager = new Manager(
        "Storm",
        2200,
        "xmen@company.org",
        999
      );

      expect(manager.getName()).toBe("Storm");
      expect(manager.getId()).toBe(2200);
      expect(manager.getEmail()).toBe("xmen@company.org");
      expect(manager.getOfficeNumber()).toBe(999);
      expect(manager.getRole()).toBe("Manager");
    });
  });

  describe("getOfficeNumber", () => {
      it("should return 111", () => {
        const manager = new Manager(
            "Storm",
            2200,
            "xmen@company.org",
            999
          );

        expect(manager.getOfficeNumber()).toBe(999)
      })
  })

  describe("getRole", () => {
      it("should return \"Manager\"", () => {
        const manager = new Manager(
            "Magik",
            2200,
            "xmen@company.org",
            999
          );

        expect(manager.getRole()).toBe("Manager")
      })
  })
});