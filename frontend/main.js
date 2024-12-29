//All notes are for line of code abotve the notes. IE: line 15 is the notes for line 14

window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
    //This basically states that when the window(content) is loaded, run this event, which is the getVisitCount function
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    // Call the function API and get the visit count
    fetch(functionApi)
        .then(response => {
            return response.json()
        })
        // use the count value
        .then(response => {
            console.log("Website called function API.");
            count = response.count;
            // Update the count based off of the json response
            document.getElementById("counter").innerText = count;
            // go into document and find element with id counter and set the inner text to count
        }).catch(function (error) {
            console.log(error);
            // if there is an error, log the error
        })
    return count;
}