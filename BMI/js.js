// Event listener for button click
document.getElementById("calculateBtn").addEventListener("click", BMI);
document.getElementById("clearBtn").addEventListener("click", clear);

// Using Enter key event
document.getElementById("height").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("weight").focus(); // Move focus to Weight input
  }
});

document.getElementById("weight").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    BMI(); // Call BMI calculation function
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && document.activeElement.id === "clearBtn") {
    clear(); // Call clear function
  }
});

// Function BMI (Calculate BMI)
function BMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  // Check height and weight are valid numbers
  if (height > 0 && weight > 0) {
    let index = (weight / (height / 100) ** 2).toFixed(2);

    const output = document.getElementById("output");
    output.innerHTML = "Your BMI is " + index;

    const state = document.getElementById("state");

    // Checking BMI category
    if (index < 18.5) {
      state.innerHTML = "Category: Underweight";
    } else if (index >= 18.5 && index < 24.9) {
      state.innerHTML = "Category: Normal weight";
    } else if (index >= 25 && index < 29.9) {
      state.innerHTML = "Category: Overweight";
    } else {
      state.innerHTML = "Category: Obese";
    }
  } else {
    alert("Error..! Please enter a valid height and weight greater than zero.");
  }
}

// Function to clear inputs and outputs
function clear() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("state").innerHTML = "";
}
