from flask import Flask, request, jsonify, send_file, send_from_directory
import cv2
import numpy as np
import os
from werkzeug.utils import secure_filename

app = Flask(__name__, static_folder="../frontend/public")
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['PROCESSED_FOLDER'] = 'processed/'

# Ensure the upload and processed directories exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs(app.config['PROCESSED_FOLDER'], exist_ok=True)

# Include the dehazing functions here (calculate_dark_channel, estimate_atmospheric_light, etc.)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Process the image
        hazy_image = cv2.imread(filepath)
        hazy_image = hazy_image.astype(np.float32) / 255.0
        dehazed_image, transmission_map = remove_haze(hazy_image)
        
        # Save processed images
        dehazed_filename = f"dehazed_{filename}"
        transmission_filename = f"transmission_{filename}"
        dehazed_path = os.path.join(app.config['PROCESSED_FOLDER'], dehazed_filename)
        transmission_path = os.path.join(app.config['PROCESSED_FOLDER'], transmission_filename)
        
        cv2.imwrite(dehazed_path, (dehazed_image * 255).astype(np.uint8))
        cv2.imwrite(transmission_path, (transmission_map * 255).astype(np.uint8))
        
        return jsonify({
            'dehazed_image': dehazed_filename,
            'transmission_map': transmission_filename
        })

@app.route('/processed/<filename>', methods=['GET'])
def get_processed_image(filename):
    return send_from_directory(app.config['PROCESSED_FOLDER'], filename)

if __name__ == '__main__':
    app.run(debug=True)