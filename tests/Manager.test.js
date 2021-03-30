const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("When instantiated it creates an object", () => {
      const obj = new Manager();

      expect(typeof obj).toBe("object");
    });
    it("Should set 'name', 'id', 'email', and 'office number' username when created", () => {
      const name = "Billy";
      const id = 34;
      const email = "billy@gmail.com";
      const officeNumber = "Temple U";

      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.officeNumber).toEqual(officeNumber);
    });
    describe("getRole", () => {
      it("Should get 'Manager'", () => {
        const role = "Manager";
        obj = new Manager();

        expect(obj.getRole()).toEqual(role);
      });
    });
  });
});
