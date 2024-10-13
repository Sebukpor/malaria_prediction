let model;
let predictionResult;
let confidenceScore;

async function loadModel() {
    model = await tf.loadGraphModel('model/model.json');
    console.log('Model loaded');
}

loadModel();

const imageUpload = document.getElementById('image-upload');
const uploadedImage = document.getElementById('uploaded-image');
const predictButton = document.getElementById('predict-button');
const resultDiv = document.getElementById('result');
const patientInfoDiv = document.getElementById('patient-info');
const exportButton = document.getElementById('export-button');

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Clear previous results when a new image is uploaded
    resultDiv.innerText = '';
    predictButton.disabled = true; // Disable the button until the image is loaded
    exportButton.style.display = 'none'; // Hide export button initially
    patientInfoDiv.style.display = 'none'; // Hide the patient info form

    reader.onload = function(e) {
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = 'block';
        predictButton.style.display = 'inline-block'; // Show the predict button
        predictButton.disabled = false; // Enable the button after the image is displayed
    };

    reader.readAsDataURL(file);
});

async function predict() {
    predictButton.disabled = true; // Disable the button during prediction
    resultDiv.innerText = 'Predicting...';

    // Preprocess the image
    const tensorImg = tf.browser.fromPixels(uploadedImage)
        .resizeNearestNeighbor([128, 128]) // Resize to 128x128 (or your model's input size)
        .toFloat()
        .expandDims(0)
        .div(tf.scalar(255));

    // Make the prediction
    const predictions = await model.predict(tensorImg).data();
    confidenceScore = predictions[0]; // Confidence score (0 to 1)
    predictionResult = confidenceScore > 0.5 ? 'Uninfected' : 'Infected';

    // Display the result with confidence score
    resultDiv.innerText = `Prediction: ${predictionResult} (Confidence: ${(confidenceScore * 100).toFixed(2)}%)`;
    exportButton.style.display = 'block'; // Show export button after prediction
}

function showForm() {
    // Show the patient info form when the export button is clicked
    patientInfoDiv.style.display = 'block';
}

function exportAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the patient information
    const patientID = document.getElementById('patient-id').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Add the information to the PDF
    doc.text(20, 20, `Patient ID: ${patientID}`);
    doc.text(20, 30, `Name: ${name}`);
    doc.text(20, 40, `Age: ${age}`);
    doc.text(20, 50, `Gender: ${gender}`);
    doc.text(20, 60, `Prediction: ${predictionResult}`);
    doc.text(20, 70, `Confidence Score: ${(confidenceScore * 100).toFixed(2)}%`);

    // Add the uploaded image to the PDF
    const imgData = uploadedImage.src;
    doc.addImage(imgData, 'JPEG', 20, 80, 150, 100);

    // Save the PDF
    doc.save(`${patientID}_malaria_detection_result.pdf`);

    // Clear the form after exporting
    patientInfoDiv.style.display = 'none';
}
