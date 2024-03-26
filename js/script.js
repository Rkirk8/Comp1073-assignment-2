document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('smoothie-form');
    const output = document.getElementById('smoothie-output');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(form);

        // Process form data
        const size = formData.get('size');
        const base = formData.get('base');
        const ingredients = formData.getAll('ingredients');
        const booster = formData.getAll('booster');
        const name = formData.get('name');

        // Calculate total cost
        let totalCost = 0;
        if (size === 'small') {
            totalCost += 4;
        } else if (size === 'medium') {
            totalCost += 6;
        } else if (size === 'large') {
            totalCost += 8;
        }

        if (base === 'chocolate' || base === 'almond') {
            totalCost += 1;
        }

        totalCost += ingredients.length * 0.5;
        totalCost += booster.length * 1.5;

        // Display order details
        const orderDetails = `
            <h2>Order Summary for ${name}</h2>
            <p>Size: ${size}</p>
            <p>Base: ${base}</p>
            <p>Ingredients: ${ingredients.join(', ')}</p>
            <p>Booster: ${booster.join(', ')}</p>
            <p>Total Cost: $${totalCost.toFixed(2)}</p>
            <p>Your order will be ready for pickup in 30 minutes.<br>Thank you for choosing Rielly's Smoothie House.
        `;

        output.innerHTML = orderDetails;
    });
});
