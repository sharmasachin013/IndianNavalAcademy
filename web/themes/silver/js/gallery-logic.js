document.addEventListener('DOMContentLoaded', function() {
    
    // Select all the gallery links in the dropdown
    const galleryLinks = document.querySelectorAll('.vmenu-dropdown a.gallery-link');
    const galleryContainer = document.getElementById('gallery-container');

    // **IMPORTANT:** Global variable to hold the SimpleLightbox instance.
    let lightboxInstance = null;

    // Attach a click listener to each gallery link
    galleryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the link from doing its default action
            
            const galleryName = this.getAttribute('data-gallery-name');
            
            // Call the function to load the gallery content
            loadAndInitGallery(galleryName);
        });
    });

    // Main function to load content and initialize the lightbox
    function loadAndInitGallery(name) {
        
        // --- 1. Load/Insert New HTML Content ---
        
        // **This is where you replace the current content.**
        // For a real static site, you might read from a local file 
        // or just have all gallery HTML hidden in the page.
        
        // TEMPORARY MOCK-UP: Replace this section with your actual dynamic content insertion logic.
        // The HTML you insert MUST use the class "gallery" on the container.
        let newContent = `
            <h2>${name} Gallery</h2>
            <div class="gallery">
                <a href="images/${name}_1_big.jpg" title="${name} Photo 1">
                    <img src="images/${name}_1_thumb.jpg" alt="Photo 1">
                </a>
                <a href="images/${name}_2_big.jpg" title="${name} Photo 2">
                    <img src="images/${name}_2_thumb.jpg" alt="Photo 2">
                </a>
                </div>
        `;
        
        // Insert the new HTML into the container
        galleryContainer.innerHTML = newContent;

        // --- 2. Re-initialize SimpleLightbox ---
        
        // If an old lightbox instance exists, destroy it to clean up memory/events
        if (lightboxInstance) {
            lightboxInstance.destroy();
        }

        // Initialize SimpleLightbox on the newly loaded images.
        // Selector: Finds all <a> tags inside the container with class '.gallery'
        lightboxInstance = new SimpleLightbox('#gallery-container .gallery a');
        
        console.log(`SimpleLightbox initialized for: ${name}`);
    }
    
    // OPTIONAL: Load the first gallery automatically when the page loads
    // loadAndInitGallery("Admiral's Cup"); 
});