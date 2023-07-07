fetch('https://www.boredapi.com/api/activity/', {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => {
        console.log(response.ok); //always code this
        console.log(response.status); //always code this
        return response.json(); // (returns promise) will try to parse the result as json and return a promise that you can .then for results
    })
    .then(data => {
        // here is where your code should start after the fetch finishes
        console.log(data); // this will print on the console the exact object received from the server
    })
    .catch(error => {
        // error handling
        console.log(error);
    });
