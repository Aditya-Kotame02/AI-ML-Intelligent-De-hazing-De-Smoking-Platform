import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { ImageComparison } from './components/ImageComparison';
import { ProcessingMetrics } from './components/ProcessingMetrics';
import { processImage } from './utils/imageProcessing';
import { Cloud } from 'lucide-react';

function App() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<{
    processingTime: number;
    hazeDensity: number;
    enhancement: number;
  } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setOriginalImage(imageUrl);
    setIsProcessing(true);

    try {
      const result = await processImage(imageUrl);
      setProcessedImage(result.processedImageUrl);
      setMetrics(result.metrics);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Cloud className="h-8 w-8 text-blue-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">AI De-hazing Application</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
          <FileUpload onFileSelect={handleFileSelect} />
        </div>

        {isProcessing && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Processing your image...</p>
          </div>
        )}

        {metrics && (
          <ProcessingMetrics
            processingTime={metrics.processingTime}
            hazeDensity={metrics.hazeDensity}
            enhancement={metrics.enhancement}
          />
        )}

        {originalImage && processedImage && (
          <ImageComparison
            original={originalImage}
            processed={processedImage}
          />
        )}
      </div>
    </div>
  );
}

export default App;