class MathService {
  getResult(operation, num1, num2) {
    let result;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    return result;
  }

  calculateMany(data) {
    const results = [];
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const newObj = {
        ...obj,
        result: this.getResult(obj.op, obj.num1, obj.num2),
      };
      results.push(newObj);
    }
    return results;
  }
}

module.exports = MathService;
