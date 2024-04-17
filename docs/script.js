// JavaScript function to load content from separate HTML files
function loadContent(sectionId, filePath) {
    // Fetch the HTML file using the provided file path
    fetch(filePath)
        .then(response => response.text()) // Convert the response to text
        .then(html => {
            // Insert the fetched HTML content into the specified section
            document.getElementById(sectionId).innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Call the loadContent function to load initial content
document.addEventListener('DOMContentLoaded', function() {
    // Load content for the main section (e.g., bio)
    loadContent('content', 'bio.html');
});

// Event listeners for navigation links
document.addEventListener('click', function(event) {
    // Check if the clicked element is a navigation link
    if (event.target.matches('nav a')) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Get the href attribute of the clicked link
        const href = event.target.getAttribute('href');
        
        // Get the ID of the section to load content into
        const sectionId = 'content';
        
        // Load content for the clicked section
        loadContent(sectionId, href);
    }
});
