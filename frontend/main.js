// Ensure the counter logic only runs once
if (!window.counterInitialized) {
    window.counterInitialized = true; // Prevent duplication

    document.addEventListener('DOMContentLoaded', () => {
        const apiUrl = "https://getresumecounter17.azurewebsites.net/api/GetResumeCounter?code=-7yqiVU2EbkDHmfOYw_JqtlUxcYTIwq3AkuW7tLDyGf9AzFu7Xgmug%3D%3D";
        const Localapi = "http://localhost:7071/api/GetResumeCounter"; //this is for local testing

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
