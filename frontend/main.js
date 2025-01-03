// Ensure the counter logic only runs once
if (!window.counterInitialized) {
    window.counterInitialized = true; // Prevent duplication

    document.addEventListener('DOMContentLoaded', () => {
        const apiUrl = "http://localhost:7071/api/GetResumeCounter";

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Website called function API.");
                const count = data.count;
                document.getElementById("Counter").innerText = count; // Ensure the ID matches the HTML
            })
            .catch(error => {
                console.error("Error fetching visitor count:", error);
            });
    });
}
