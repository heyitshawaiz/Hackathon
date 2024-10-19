// Function to validate input data
function validateInput(value) {
    if (isNaN(value) || value < 0) {
        alert("Please enter a valid positive number.");
        return false;
    }
    return true;
}

// Function to calculate energy optimization suggestions
function calculateSuggestions(batteryHealth, energyConsumption, distance) {
    let suggestions = [];
    
    // Example suggestions based on inputs
    if (batteryHealth < 70) {
        suggestions.push("Consider charging your battery soon.");
    }
    if (energyConsumption > 15) {
        suggestions.push("Try to drive at a consistent speed to improve efficiency.");
    }
    if (distance > 100) {
        suggestions.push("Plan charging stops along your route.");
    }
    
    return suggestions;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Get input values
    const batteryHealth = document.getElementById("batteryHealth").value;
    const energyConsumption = document.getElementById("energyConsumption").value;
    const distance = document.getElementById("distance").value;

    // Validate inputs
    if (!validateInput(batteryHealth) || !validateInput(energyConsumption) || !validateInput(distance)) {
        return; // Stop if validation fails
    }

    // Calculate suggestions
    const suggestions = calculateSuggestions(parseInt(batteryHealth), parseFloat(energyConsumption), parseInt(distance));
    
    // Display results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<h3>Optimization Suggestions:</h3><ul>`;
    
    if (suggestions.length === 0) {
        resultsDiv.innerHTML += `<li>No suggestions available. Your values are good!</li>`;
    } else {
        suggestions.forEach(suggestion => {
            resultsDiv.innerHTML += `<li>${suggestion}</li>`;
        });
    }
    
    resultsDiv.innerHTML += `</ul>`;
}

// Attach event listener to form
document.getElementById("energyForm").addEventListener("submit", handleFormSubmit);




