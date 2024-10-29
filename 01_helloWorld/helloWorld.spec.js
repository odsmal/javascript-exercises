const helloWorld = require("./helloWorld").default;

describe("Hello World", function () {
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual("Hello, World!");
  });
});
