// Get references to input fields and output
const costPerLiterInput = document.getElementById("costPerLiter");
const litersInput = document.getElementById("liters");
const totalCostOutput = document.getElementById("totalCost");
const calculateBtn = document.getElementById("calculateBtn");

// When button is clicked, calculate total
calculateBtn.addEventListener("click", () => {
  // Get values as floats
  const costPerLiter = parseFloat(costPerLiterInput.value);
  const liters = parseFloat(litersInput.value);

  // Calculate total cost
  const total = costPerLiter * liters;

  // Display result with 2 decimal places
  totalCostOutput.textContent = `Total: AED ${total.toFixed(2)}`;
});
