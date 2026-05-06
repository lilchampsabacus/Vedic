// Function to toggle the syllabus details on the curriculum cards
function toggleDetails(levelId) {
    const detailsDiv = document.getElementById(levelId + '-details');
    const allDetails = document.querySelectorAll('.details');
    
    // Check if the clicked one is already open
    const isOpen = detailsDiv.classList.contains('open');

    // Close all other details first (accordion style)
    allDetails.forEach(div => {
        div.classList.remove('open');
    });

    // If it wasn't open, open it. If it was open, it stays closed (toggled off).
    if (!isOpen) {
        detailsDiv.classList.add('open');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
