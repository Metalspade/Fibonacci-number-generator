  // function to generate Fibonacci
  function generateFibonacci() {
    const numInput = document.getElementById("numInput");
    const n = parseInt(numInput.value);
  // Pop up for error
    if (isNaN(n) || n < 1) {
      alert("Please enter a positive integer.");
      return;
    }
  
    const fibonacci = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
  // Output for Fibonacci generator
    const fibonacciOutput = document.getElementById("fibonacciOutput");
    fibonacciOutput.innerHTML = fibonacci.join(", ");
  }