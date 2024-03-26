document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('smoothie-form');
    const outputDiv = document.getElementById('smoothie-output');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(form);

        // Extract selected options
        const size = formData.get('size');
        const base = formData.get('base');
        const ingredients = formData.getAll('ingredients');
        const boosters = formData.getAll('booster');
        const orderName = formData.get('name');

        // Calculate total cost
        let totalCost = calculateTotalCost(size, base, ingredients, boosters);

        // Prepare and display order summary
        const orderSummary = generateOrderSummary(orderName, size, base, ingredients, boosters, totalCost);
        outputDiv.innerHTML = orderSummary;
    });
});

function calculateTotalCost(size, base, ingredients, boosters) {
    let totalCost = 0;

    // Add size cost
    if (size === 'Small') totalCost += 4;
    else if (size === 'Medium') totalCost += 6;
    else if (size === 'Large') totalCost += 8;

    // Add base extra cost
    if (['Chocolate Milk', 'Almond Milk'].includes(base)) totalCost += 1;
    
    // Add ingredient cost
    totalCost += ingredients.length * 0.5;

    // Add booster cost
    totalCost += boosters.length * 1.5;

    return totalCost;
}

function generateOrderSummary(name, size, base, ingredients, boosters, totalCost) {
    const sizeString = `Size: ${size}`;
    const baseString = `Base: ${base}`;
    const ingredientsString = `Ingredients: ${ingredients.join(', ')}`;
    const boostersString = `Boosters: ${boosters.join(', ')}`;
    const totalCostString = `Total Cost: $${totalCost.toFixed(2)}`;

    const orderSummary = `
        <h2>Smoothie Order Summary for ${name}</h2>
        <p>${sizeString}</p>
        <p>${baseString}</p>
        <p>${ingredientsString}</p>
        <p>${boostersString}</p>
        <p>${totalCostString}</p>
    `;

    return orderSummary;
}
