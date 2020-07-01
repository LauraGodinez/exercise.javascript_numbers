function compute(expression) {
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
        parseFloat(charactersToProcess[firstOperandIndex]) *
        parseFloat(charactersToProcess[secondOperandIndex]);

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
        parseFloat(charactersToProcess[firstOperandIndex]) /
        parseFloat(charactersToProcess[secondOperandIndex]);

      charactersToProcess.splice(firstOperandIndex, 3, result);
      //   debugger;
      //   console.log(result);
    }
  }

  while (
    charactersToProcess.indexOf("+") !== -1 ||
    charactersToProcess.indexOf("-") !== -1
  ) {
    addOpearandIndex = charactersToProcess.indexOf("+");
    subOpearandIndex = charactersToProcess.indexOf("-");

    if (
      addOpearandIndex != -1 &&
      subOpearandIndex != -1 &&
      addOpearandIndex < subOpearandIndex
    ) {
      if (charactersToProcess[addOpearandIndex] == "+") {
        firstOperandIndex = addOpearandIndex - 1;
        secondOperandIndex = addOpearandIndex + 1;
        result =
          parseFloat(charactersToProcess[firstOperandIndex]) +
          parseFloat(charactersToProcess[secondOperandIndex]);

        charactersToProcess.splice(firstOperandIndex, 3, result);
      }
    } else if (
      addOpearandIndex != -1 &&
      subOpearandIndex != -1 &&
      subOpearandIndex < addOpearandIndex
    ) {
      if (charactersToProcess[subOpearandIndex] == "-") {
        firstOperandIndex = subOpearandIndex - 1;
        secondOperandIndex = subOpearandIndex + 1;
        result =
          parseFloat(charactersToProcess[firstOperandIndex]) -
          parseFloat(charactersToProcess[secondOperandIndex]);

        charactersToProcess.splice(firstOperandIndex, 3, result);
      }
    } else {
      if (addOpearandIndex !== -1) {
        firstOperandIndex = addOpearandIndex - 1;
        secondOperandIndex = addOpearandIndex + 1;
        result =
          parseFloat(charactersToProcess[firstOperandIndex]) +
          parseFloat(charactersToProcess[secondOperandIndex]);

        charactersToProcess.splice(firstOperandIndex, 3, result);
      } else if (subOpearandIndex !== -1) {
        firstOperandIndex = subOpearandIndex - 1;
        secondOperandIndex = subOpearandIndex + 1;
        result =
          parseFloat(charactersToProcess[firstOperandIndex]) -
          parseFloat(charactersToProcess[secondOperandIndex]);

        charactersToProcess.splice(firstOperandIndex, 3, result);
      }
    }
  }
  return charactersToProcess[0];
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
}
