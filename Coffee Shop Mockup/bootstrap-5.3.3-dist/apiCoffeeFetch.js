fetch('http://localhost:8081/api/coffee')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Get the coffee list container from the HTML
        const coffeeListDiv = document.getElementById('coffee-list');
        
        // Clear any previous content in the coffee list container
        coffeeListDiv.innerHTML = '';

        // Check if we received any data
        if (data.length > 0) {
            // Loop through each coffee object in the data array
            data.forEach(coffee => {
                // Create a new Bootstrap card element for each coffee
                const coffeeCard = document.createElement('div');
                coffeeCard.classList.add('col-md-4', 'mb-4'); // Use col-md-4 for 3 cards per row, mb-4 for margin-bottom

                // Add content to the new card, using template literals for easier formatting
                coffeeCard.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${coffee.name}</h5>
                            <p class="card-text"><strong>Quantity:</strong> ${coffee.quantity}</p>
                            <p class="card-text"><strong>Description:</strong> ${coffee.description}</p>
                        </div>
                    </div>
                `;

                // Append the new card div to the coffee list container
                coffeeListDiv.appendChild(coffeeCard);
            });
        } else {
            // If no coffee data is available, show a message
            coffeeListDiv.innerHTML = '<p>No coffee available</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching coffee data:', error);
        document.getElementById('coffee-list').innerHTML = '<p>Failed to load coffee data.</p>';
    });