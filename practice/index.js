async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          id: 1,
          title: "some randon book",
          body: "this is just quick test to see if this works",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else if (response) {
      console.log("success: ", response.ok); //always code this
      console.log("status code:", response.status); // always code this
    }

    const data = await response.json(); //the data sent back and forth will always be text in htttp protocol hence the .json()
    return data;
  } catch (error) {
    console.log(error);
    // Handle the error gracefully or throw it to be caught elsewhere
    throw error;
  }
}

// usage. call the fetch function
fetchData()
  // handle the data
  .then((data) => {
    console.log(data);
    // Continue with your code logic here
  })
  .catch((error) => {
    // Handle the error here if needed
  });
