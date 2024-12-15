//Create Coffee
fetch('/api/coffee', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Mokka',  
        quantity: 10,
        description: 'Something something something coffee'
    }),
})
    .then(response => response.json())
    .then(data => console.log('Coffee created:', data))
    .catch(error => console.error('Error:', error));


    // Getting the Coffee
    let coffeeData = [];  

fetch('/api/coffee')
    .then(response => response.json())
    .then(data => {
        coffeeData = data; 
        console.log('Fetched coffee data:', coffeeData);
    })
    .catch(error => console.error('Error fetching coffee data:', error));


    // Delete the Coffee
    const Id = 1;  // Here the admin will pick a id to delete, this one is just a placeholder.
fetch(`/api/coffee/${Id}`, {
    method: 'DELETE',
})
    .then(response => {
        if (response.ok) {
            console.log('Coffee deleted successfully');
        } else {
            console.log('Not found');
        }
    })
    .catch(error => console.error('Error:', error));
