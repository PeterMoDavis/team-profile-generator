const Intern = require("../lib/intern");

const { describe, it, expect } = require("@jest/globals");
const { exp } = require("prelude-ls");
const Engineer = require("../lib/engineer");

describe("Intern", () => {
  describe("Initialization", () => {
    it("When instantiated it creates an object", () => {
      const obj = new Intern();

      expect(typeof obj).toBe("object");
    });
    it("Should set 'name', 'id', 'email', and school' username when created", () => {
      const name = "Billy";
      const id = 34;
      const email = "billy@gmail.com";
      const school = "Temple U";

      const obj = new Intern(name, id, email, school);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.school).toEqual(school);
    });
    describe("getSchool", () => {
      it("Should get the name of the school", () => {
        const name = "Billy";
        const id = 34;
        const email = "billy@gmail.com";
        const school = "Temple U";
        const obj = new Intern(name, id, email, school);

        expect(obj.getSchool()).toEqual(school);
      });
    });
    describe("getRole", () => {
      it("Should get 'Intern'", () => {
        const role = "Intern";
        obj = new Intern();

        expect(obj.getRole()).toEqual(role);
      });
    });
  });
});
