// JavaScript source code
class Pizza {
    constructor(size, crust, sauce, cheeses, toppings, notes) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheeses = cheeses;
        this.toppings = toppings;
        this.notes = notes;
    }

    calculateTotalCost() {
        // Price constants for different pizza components
        const sizePrice = {
            small: 7.99,
            medium: 9.99,
            large: 12.99
        };

        const crustPrice = {
            thin: 0,
            thick: 1.99,
            stuffed: 2.99
        };

        const saucePrice = {
            tomato: 0,
            bbq: 1.49,
            garlic: 1.49,
            alfredo: 1.99,
            pesto: 1.99
        };

        const cheesePrice = 0.5;
        const toppingsPrice = 0.75;

        // Calculate total cost based on the selected options
        let totalCost = sizePrice[this.size] + crustPrice[this.crust] + saucePrice[this.sauce];
        totalCost += this.cheeses.length * cheesePrice;
        totalCost += this.toppings.length * toppingsPrice;

        return totalCost.toFixed(2); // Return the total cost rounded to 2 decimal places
    }
}

// Dynamically add student ID and name to the page
document.addEventListener("DOMContentLoaded", function () {
    const studentID = "12345";
    const studentName = "John Doe";
    const studentInfoElement = document.getElementById("studentInfo");
    studentInfoElement.innerHTML = `Student ID: ${studentID}<br>Name: ${studentName}`;
});

// Validate the pizza order form
document.getElementById("orderButton").addEventListener("click", function () {
    // Get form values and perform form validation as needed
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const sauce = document.getElementById("sauce").value;
    const cheeses = getSelectedValues("cheese");
    const toppings = getSelectedValues("toppings");
    const notes = document.getElementById("notes").value;

    // Perform form validation
    if (size === "") {
        alert("Please select a pizza size.");
        return;
    }

    // If all form inputs are valid, proceed to create the pizza object and display the order summary
    const pizza = new Pizza(size, crust, sauce, cheeses, toppings, notes);

    // Display order summary including total cost
    const pizzaDescription = document.getElementById("pizzaDescription");
    pizzaDescription.innerHTML = `
    <h2>Your Pizza Description</h2>
    <span>Thanks for your order. Have a Nice Day!!</span>
    <p><strong>Size:</strong> ${pizza.size}</p>
    <p><strong>Crust:</strong> ${pizza.crust}</p>
    <p><strong>Sauce:</strong> ${pizza.sauce}</p>
    <p><strong>Cheeses:</strong> ${pizza.cheeses.join(", ")}</p>
    <p><strong>Toppings:</strong> ${pizza.toppings.join(", ")}</p>
    <p><strong>Notes:</strong> ${pizza.notes}</p>
    <p><strong>Total Cost:</strong> $${pizza.calculateTotalCost()}</p>
    
  `;

    pizzaDescription.style.display = "block";
});

function getSelectedValues(name) {
    const checkboxes = document.getElementsByName(name);
    const selectedValues = [];
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    }
    return selectedValues;
    };



