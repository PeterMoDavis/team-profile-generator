const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("When instantiated it creates an object", () => {
      const obj = new Employee();

      expect(typeof obj).toBe("object");
    });

    it("Should set 'name', 'id' and 'email' when created", () => {
      const name = "Billy";
      const id = 34;
      const email = "billy@gmail.com";

      const obj = new Employee(name, id, email);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });
  describe("getName", () => {
    it("Should get the name of the obj", () => {
      const obj = new Employee("Billy", 34, "billy@gmail.com");

      expect(obj.getName()).toEqual(obj.name);
    });
  });

  describe("getEmail", () => {
    it("Should get the email of the obj", () => {
      const obj = new Employee("Billy", 34, "billy@gmail.com");

      expect(obj.getEmail()).toEqual(obj.email);
    });
  });
  describe("getRole", () => {
    it("Should get the role of the obj", () => {
      const obj = new Employee("Billy", 34, "billy@gmail.com");

      expect(obj.getRole()).toEqual("Employee");
    });
  });
});
