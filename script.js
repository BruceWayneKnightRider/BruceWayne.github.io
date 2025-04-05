// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Event listeners to handle service details toggle
    const serviceButtons = document.querySelectorAll('.service-button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', toggleServiceDetails);
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// Function to toggle service details
function toggleServiceDetails(event) {
    const serviceId = event.target.dataset.serviceId;
    const serviceDetails = document.getElementById(serviceId);
    if (serviceDetails) {
        serviceDetails.classList.toggle('active');
    }
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Here you could send data to a server
    console.log("Form Data Submitted: ", data);

    // Show a success message
    alert('Thank you for contacting S&M Tech! We will get back to you soon.');

    // Clear the form
    contactForm.reset();
}
