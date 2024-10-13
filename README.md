# Malaria Detection using DAS medhub

This project focuses on detecting malaria from blood smear images using a deep learning model. The model is trained on a dataset of blood smear images to classify whether the sample is infected with malaria or uninfected. The goal is to provide a simple and efficient web-based tool that can help in the early detection of malaria, which is crucial for timely treatment.

## Table of Contents
- [Project Overview](#project-overview)
- [Model Description](#model-description)
- [Web Application](#web-application)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Project Overview

Malaria is a life-threatening disease caused by parasites transmitted to humans through the bites of infected mosquitoes. Early detection is key to effective treatment. This project aims to provide a user-friendly interface for detecting malaria using blood smear images. The model is trained to differentiate between infected and uninfected blood samples.

## Model Description

The deep learning model used in this project is based on a convolutional neural network (CNN) architecture. The model has been trained on a dataset of blood smear images, with labels indicating whether each image is infected or uninfected.

- **Input:** Blood smear image
- **Output:** Probability score indicating whether the image is infected with malaria or not

The model is implemented in TensorFlow and converted to TensorFlow.js to be deployed on the web.

## Web Application

The web application is a simple interface that allows users to upload a blood smear image and receive a prediction on whether the image is infected with malaria. The app is built using HTML, CSS, and JavaScript, with TensorFlow.js handling the model inference.

### Features:
- **Upload Image:** Users can upload an image of a blood smear.
- **Real-Time Prediction:** The application processes the image and provides a prediction.
- **User-Friendly Interface:** The app is designed to be easy to use, even for non-technical users.

## Technologies Used

- **TensorFlow:** For building and training the deep learning model.
- **TensorFlow.js:** For deploying the model on the web.
- **HTML/CSS/JavaScript:** For building the web application interface.
- **Python:** For model development and preprocessing.

  
1. **Run the web application:**
   Open `index.html` in your web browser to launch the application.

## Usage

1. **Upload Image:** Click on the upload button to select a blood smear image from your computer.
2. **Predict:** Click on the "Predict" button to analyze the image and receive a prediction.
3. **Result:** The result will indicate whether the sample is likely to be infected or uninfected.

## Project Structure

```
malaria-detection/
├── model/
│   ├── model.json
│   └── weights.bin
├── index.html
├── script.js
├── style.css
└── README.md
```

- `model/`: Directory containing the TensorFlow.js model files.
- `index.html`: Main HTML file for the web interface.
- `script.js`: JavaScript file handling model loading and inference.
- `style.css`: CSS file for styling the web interface.
- `README.md`: This README file.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact Information

For any inquiries, please contact:

- **Name:** Divine Sebukpor
- **Email:** dasmedhub@gmail.com

