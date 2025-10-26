/**
 * Loads a specific image gallery and initializes SimpleLightbox.
 * @param {string} key - The specific gallery key (e.g., 'AdmiralsCup2025').
 * @param {string} title - The title for the content page.
 */
function showGallery(key, title) {
    const mainBox = document.getElementById('main-landing-box');
    const highlightsSection = document.getElementById('highlights-section');
    const courseContainer = document.getElementById('course-details-container'); 
    
    const courseTitle = document.getElementById('course-title');
    const courseContent = document.getElementById('course-content');

    // 1. Fade out main content
    mainBox.style.opacity = '0';
    highlightsSection.style.opacity = '0'; 

    // 2. Set new gallery content
    courseTitle.textContent = title;
    courseContent.innerHTML = getGalleryContent(key); // Fetch the images HTML

    // 3. Wait for fade-out, then display gallery container
    setTimeout(() => {
        mainBox.style.display = 'none';
        highlightsSection.style.display = 'none'; 

        courseContainer.style.opacity = '0';
        courseContainer.style.display = 'block';

        // 4. Fade in
        setTimeout(() => {
            courseContainer.style.opacity = '1';
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // 5. *** INITIALIZE SIMPLELIGHTBOX ***
            const gallerySelector = '.gallery-grid-final a'; 
            
            // Check if SimpleLightbox is available before initializing
            if (typeof SimpleLightbox !== 'undefined') {
                new SimpleLightbox(gallerySelector, {
                    // Optional: customize lightbox options here
                    captionsData: 'title', // Use the 'title' attribute for captions
                    navText: ['<', '>'], // Custom navigation arrows
                    closeText: 'X',
                    showCounter: true
                }); 
            } else {
                console.error("SimpleLightbox library is not loaded. Cannot initialize gallery.");
            }
            
        }, 50);

    }, 500);
}