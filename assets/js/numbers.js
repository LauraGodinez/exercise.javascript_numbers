function compute(expression) {
  var total = 0;

  //1. Split each char into an array
  // Input "3-2-3*10/2+10"
  //   var charactersToProcess = [
  //     "3",
  //     "-",
  //     "2",
  //     "-",
  //     "3",
  //     "*",
  //     "10",
  //     "/",
  //     "2",
  //     "+",
  //     "10"
  //   ];

  var charactersToProcess = expression
    // RegEx helper
    .replace(/\'/g, "")
    .split(/(\d+)/)
    .filter(Boolean);

  //2. Process Multiplication and Division Operations remove them from remaining chars and aggregate total
  while (
    charactersToProcess.indexOf("*") !== -1 ||
    charactersToProcess.indexOf("/") !== -1
  ) {
    var opearandIndex = charactersToProcess.indexOf("*");
    if (charactersToProcess[opearandIndex] == "*") {
      var firstOperandIndex = opearandIndex - 1;
      var secondOperandIndex = opearandIndex + 1;
      var result =
        parseInt(charactersToProcess[firstOperandIndex]) *
        parseInt(charactersToProcess[secondOperandIndex]);

      charactersToProcess.splice(firstOperandIndex, 3, result);
      //   debugger;
      // console.log(result);
    }
    opearandIndex = "";
    opearandIndex = charactersToProcess.indexOf("/");
    if (charactersToProcess[opearandIndex] == "/") {
      firstOperandIndex = opearandIndex - 1;
      secondOperandIndex = opearandIndex + 1;
      result =
        parseInt(charactersToProcess[firstOperandIndex]) /
        parseInt(charactersToProcess[secondOperandIndex]);

      charactersToProcess.splice(firstOperandIndex, 3, result);
      //   debugger;
      //   console.log(result);
    }
  }

  while (
    charactersToProcess.indexOf("+") !== -1 ||
    charactersToProcess.indexOf("-") !== -1
  ) {
    opearandIndex = charactersToProcess.indexOf("+");
    if (charactersToProcess[opearandIndex] == "+") {
      firstOperandIndex = opearandIndex - 1;
      secondOperandIndex = opearandIndex + 1;
      result =
        parseInt(charactersToProcess[firstOperandIndex]) +
        parseInt(charactersToProcess[secondOperandIndex]);

      charactersToProcess.splice(firstOperandIndex, 3, result);
      //   debugger;
      //   console.log(result);
    }
    opearandIndex = charactersToProcess.indexOf("-");
    if (charactersToProcess[opearandIndex] == "-") {
      firstOperandIndex = opearandIndex - 1;
      secondOperandIndex = opearandIndex + 1;
      result =
        parseInt(charactersToProcess[firstOperandIndex]) -
        parseInt(charactersToProcess[secondOperandIndex]);

      charactersToProcess.splice(firstOperandIndex, 3, result);
      // debugger;
      // console.log(result);
    }
    total = charactersToProcess[0];
    return total;
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
}
