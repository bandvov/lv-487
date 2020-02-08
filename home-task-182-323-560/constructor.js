export default class Task {
  constructor(description, func) {
    this.description = description;
    this.func = func;
  }

  run() {
    let input = prompt(this.description);
    let params = input.split(",");

    let intParams = params.map(value => +value);
    intParams.filter(value => isNaN(value)).forEach(value => {
      throw new Error("Invalid Parameters !");
    });
console.log(this.func);

    this.func(intParams);
  }
}

export const tasks = new Map();
