const assert = require("assert");
const { add, substract, devide, multiply,validateNumbers } = require("./operations");

it(" 1 + 3 must return 4", () => {
  assert.equal(add(1, 3), 4);
});

it("-1 + -3 must return -4", () => {
  assert.equal(add(-1, -3), -4);
});

it("33 - 3 must return 30", () => {
  assert.equal(substract(33, 3), 30);
});

it("-12 - 3 must return -15", () => {
  assert.equal(substract(-12, 3), -15);
});

it("2 * 2 must return 4", () => {
  assert.equal(multiply(2, 2), 4);
});

it("-2 * -2 must return 4", () => {
  assert.equal(multiply(-2, -2), 4);
});

it("-2 * -2 must return 8", () => {
  assert.equal(devide(24, 3), 8);
});

it("-2 * -2 must return 5", () => {
  assert.equal(devide(-25, -5), 5);
});

it("indicates false if one of the arguments is a string",()=>{
assert.equal(validateNumbers('sammy',5),false)
})

it("indicates false if strings are used instead of numbers",()=>{
assert.equal(validateNumbers('sammy','sammy'),false)
})

it("indicates true if both arguments are numbers",()=>{
assert.equal(validateNumbers(5,5),true)
})

