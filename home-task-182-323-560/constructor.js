export default class Task {
  constructor(description, func) {
    this.description = description;
    this.func = func;
  }

  run() {

    let params = [];

    if (this.func.length) {
      let input = prompt(this.description);
      if (input === null) return;
      params = this.checkInput(input);
    } else {
      alert(this.description)
    }

    this.func(...params);

  }

  checkInput(input) {
    if (input !== '') {
      const userInput = input.split(",")
      const intParams = userInput.map(value => +value);
      this.checkValue(intParams)
      return intParams
    } else {
      alert('Input is empty');
      this.run()
    }
  }

  checkValue(value) {
    if (this.func.length !== value.length || value.some(el => isNaN(el))) {
      throw new Error("Invalid Parameters !");
    }
  }
}

export const tasks = new Map();
