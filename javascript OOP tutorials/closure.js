function outerFunction(outerVariable) {
    // This inner function is a closure as it "closes over" the outerVariable
    function innerFunction(innerVariable) {
      console.log(`Outer variable: ${outerVariable}`);
      console.log(`Inner variable: ${innerVariable}`);
    }
  
    // Returning the inner function
    return innerFunction;
  }
  
  // Creating closures by calling outerFunction
  const closure1 = outerFunction('OuterValue1');
  const closure2 = outerFunction('OuterValue2');
  
  // Invoking the closures with inner variables
  closure1('InnerValue1');
  closure2('InnerValue2');
  