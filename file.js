<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation</title>
    <style>
        body {
            font-family: 'Cinzel', serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        .confirm-container {
            width: 70%;
            margin: 50px auto;
            padding: 40px;
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        p {
            font-size: 18px;
        }
        .buttons {
            text-align: center;
            margin-top: 30px;
        }
        .buttons button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            background-color: #d4af37;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .buttons button:hover {
            background-color: #c68f03;
        }
        .designed-border-btn {
            background-color: #6f42c1;
        }
        .designed-border-btn:hover {
            background-color: #563d7c;
        }
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 60px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.4);
        }
        .modal-content {
            background-color: #fefefe;
            margin: 5% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 60%;
            border-radius: 15px;
        }
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover, .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        .border-options {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        .border-option {
            width: 100px;
            height: 100px;
            cursor: pointer;
            margin: 10px;
            border: 2px solid transparent;
            border-radius: 10px;
        }
        .border-option:hover {
            border: 2px solid #d4af37;
        }
        .border-option img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
</head>
<body>
    <div class="confirm-container">
        <h1>Confirm Your Details</h1>
        <p><strong>Recipient Name:</strong> <span id="confirm-name"></span></p>
        <p><strong>Certificate Details:</strong> <span id="confirm-details"></span></p>
        <p><strong>Organizer:</strong> <span id="confirm-organizer"></span></p>
        <p><strong>Date:</strong> <span id="confirm-date"></span></p>
        <p><strong>Dean:</strong> <span id="confirm-dean"></span></p>
        <p><strong>Border Style:</strong> <span id="confirm-border"></span></p>

        <div class="buttons">
            <button onclick="goBack()">Edit Form</button>
            <button onclick="goToCertificate()">Generate Certificate</button>
            <button class="designed-border-btn" onclick="openModal()">Designed Border</button>
            <button onclick="downloadCertificate()">Download Certificate</button> <!-- New Download Button -->
        </div>
    </div>

    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>Select a Border Design</h2>
            <div class="border-options">
                <div class="border-option" onclick="selectBorder('gold-border.png')">
                    <img src="C:/Users/DELL/Downloads/—Pngtree—luxury corner golden rectangle certificate_15211980.png" alt="Gold Border">
                </div>
                <div class="border-option" onclick="selectBorder('brown-border.png')">
                    <img src="C:/Users/DELL/Downloads/pngegg (1).png" alt="Brown Border">
                </div>
            </div>
        </div>
    </div>

    <script>
        // Retrieve stored values from localStorage and display them
        document.getElementById('confirm-name').textContent = localStorage.getItem('name');
        document.getElementById('confirm-details').textContent = localStorage.getItem('details');
        document.getElementById('confirm-organizer').textContent = localStorage.getItem('organizer');
        document.getElementById('confirm-date').textContent = localStorage.getItem('date');
        document.getElementById('confirm-dean').textContent = localStorage.getItem('dean');
        document.getElementById('confirm-border').textContent = localStorage.getItem('border') || '';

        // Modal functionality
        function openModal() {
            document.getElementById('myModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }

        // Store selected PNG border in localStorage
        function selectBorder(border) {
            localStorage.setItem('pngBorder', border);
            closeModal();
            alert("Border " + border + " selected!");
        }

        // Go back to the form page to edit details
        function goBack() {
            window.location.href = 'ht.html'; // Make sure this matches your form page name
        }

        // Proceed to the certificate page
        function goToCertificate() {
            window.location.href = 'certificate.html';
        }

        // Function to download the certificate
        function downloadCertificate() {
            // Get the certificate element
            var certificate = document.getElementById('certificate');
            
            // Use html2canvas to take a screenshot of the certificate
            html2canvas(certificate).then(function(canvas) {
                // Create an anchor element to trigger the download
                var link = document.createElement('a');
                link.href = canvas.toDataURL('image/png'); // Convert canvas to image
                link.download = 'certificate.png'; // Specify the filename
                link.click(); // Trigger the download
            });
        }
    </script>
</body>
</html>