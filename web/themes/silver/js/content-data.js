/**
 * Provides the HTML structure for a specific year's gallery.
 * @param {string} key - The unique gallery key (e.g., 'AdmiralsCup2025').
 */
function getGalleryContent(key) {
    const galleryMap = {
        'AdmiralsCup2025': `
            <div class="gallery-grid-final">
                <a href="images/admirals-cup/2025/Picture-1.jpg" title="Sailing Practice Day 1" class="gallery-link">
                    <img src="images/admirals-cup/2025/Picture-1.jpg" alt="Sailing Image 1" />
                </a>
                <a href="images/admirals-cup/2025/Picture-2.jpg" title="Award Ceremony Highlights" class="gallery-link">
                    <img src="images/admirals-cup/2025/Picture-2.jpg" alt="Ceremony Image 2" />
                </a>
                <a href="images/admirals-cup/2025/Picture-3.jpg" title="The Winning Team" class="gallery-link">
                    <img src="images/admirals-cup/2025/Picture-3.jpg" alt="Team Photo 3" />
                </a>
                </div>
        `,
        'AdmiralsCup2024': `
            <div class="gallery-grid-final">
                <p>Content for Admiral's Cup 2024 is available soon.</p>
            </div>
        `,
        // Add content for other years/keys (e.g., 'BakhshiCup2024') here
    };

    return galleryMap[key] || `<p>Gallery content for ${key} is currently unavailable.</p>`;
}