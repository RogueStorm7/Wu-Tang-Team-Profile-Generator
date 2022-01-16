const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("constructor", () => {
    it("creates a Manager object", () => {
      const manager = new Manager(
        "Inspectah Deck",
        2200,
        "inspectah@company.org",
        999
      );

      expect(manager.getName()).toBe("Inspectah Deck");
      expect(manager.getId()).toBe(2200);
      expect(manager.getEmail()).toBe("inspectah@company.org");
      expect(manager.getOfficeNumber()).toBe(999);
      expect(manager.getRole()).toBe("Manager");
    });
  });

  describe("getOfficeNumber", () => {
      it("should return 111", () => {
        const manager = new Manager(
            "GhostFace Killah",
            2200,
            "ghostfacekillah@company.org",
            999
          );

        expect(manager.getOfficeNumber()).toBe(999)
      })
  })

  describe("getRole", () => {
      it("should return \"Manager\"", () => {
        const manager = new Manager(
            "U-God",
            2200,
            "u-god@company.org",
            999
          );

        expect(manager.getRole()).toBe("Manager")
      })
  })
});