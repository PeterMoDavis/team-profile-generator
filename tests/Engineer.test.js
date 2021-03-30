const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("When instantiated it creates an object", () => {
      const obj = new Engineer();

      expect(typeof obj).toBe("object");
    });
    it("Should set 'name', 'id', 'email', and gitHub' username when created", () => {
      const name = "Billy";
      const id = 34;
      const email = "billy@gmail.com";
      const username = "billy";

      const obj = new Engineer(name, id, email, username);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.github).toEqual(username);
    });
    describe("getGithub", () => {
      it("Should get the GitHub username", () => {
        const name = "Billy";
        const id = 34;
        const email = "billy@gmail.com";
        const username = "billy";
        const obj = new Engineer(name, id, email, username);

        expect(obj.getGithub()).toEqual(username);
      });
    });
    describe("getRole", () => {
      it("Should get 'Engineer'", () => {
        const role = "Engineer";
        obj = new Engineer();

        expect(obj.getRole()).toEqual(role);
      });
    });
  });
});
