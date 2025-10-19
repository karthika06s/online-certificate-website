// Function to handle the Continue button click
function continueToConfirm() {
    // Get input values from form fields
    var name = document.getElementById('name').value;
    var details = document.getElementById('event-details').value;
    var organizer = document.getElementById('organizer-name').value;
    var date = document.getElementById('event-date').value;
    var dean = document.getElementById('dean-name').value;
    var hod = document.getElementById('hod-name').value;

    // Validate if all required fields are filled
    if (!name || !details || !organizer || !date || !dean || !hod) {
        alert("Please fill all fields.");
        return;
    }

    // Store form data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('details', details);
    localStorage.setItem('organizer', organizer);
    localStorage.setItem('date', date);
    localStorage.setItem('dean', dean);
    localStorage.setItem('hod', hod);

    // Redirect to the edit page
    window.location.href = 'edit.html';
}

// Function to retrieve stored data and display it in the confirmation page
function displayConfirmationData() {
    document.getElementById('confirm-name').textContent = localStorage.getItem('name');
    document.getElementById('confirm-details').textContent = localStorage.getItem('details');
    document.getElementById('confirm-organizer').textContent = localStorage.getItem('organizer');
    document.getElementById('confirm-date').textContent = localStorage.getItem('date');
    document.getElementById('confirm-dean').textContent = localStorage.getItem('dean');
    document.getElementById('confirm-border').textContent = localStorage.getItem('border') || '';
}

// Modal open and close functions
function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Function to store the selected border style in localStorage
function selectBorder(border) {
    localStorage.setItem('pngBorder', border);
    closeModal();
    alert("Border " + border + " selected!");
}

// Function to navigate back to the form page for editing
function goBack() {
    window.location.href = 'ht.html'; // Update this with your form page name if different
}

// Function to proceed to the certificate generation page
function goToCertificate() {
    window.location.href = 'certificate.html';
}

// Function to display data on the certificate page
function displayCertificateData() {
    document.getElementById('certificate-name').textContent = localStorage.getItem('name');
    document.getElementById('certificate-details').textContent = localStorage.getItem('details');
    document.getElementById('certificate-organizer').textContent = "Organized by: " + localStorage.getItem('organizer');
    document.getElementById('certificate-date').textContent = localStorage.getItem('date');
    document.getElementById('certificate-dean').textContent = localStorage.getItem('dean');
    document.getElementById('certificate-hod').textContent = localStorage.getItem('hod');

    var selectedBorder = localStorage.getItem('pngBorder');

    if (selectedBorder === 'gold-border.png') {
        document.getElementById('certificate').style.backgroundImage = "url('C:/Users/DELL/Downloads/—Pngtree—luxury corner golden rectangle certificate_15211980.png')";
    } else if (selectedBorder === 'brown-border.png') {
        document.getElementById('certificate').style.backgroundImage = "url('C:/Users/DELL/Downloads/pngegg (1).png')";
    }
}

// Event listeners to load data on specific pages
window.onload = function () {
    if (document.getElementById('confirm-name')) {
        displayConfirmationData();
    }
    if (document.getElementById('certificate-name')) {
        displayCertificateData();
    }
};