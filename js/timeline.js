// Get all timeline links
const timelineLinks = document.querySelectorAll('.timeline a');

// Add click event listeners to each timeline link
timelineLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

// Function to scroll to the corresponding section
function scrollToSection(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Remove 'active' class from all links
    timelineLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    event.currentTarget.classList.add('active');
}
