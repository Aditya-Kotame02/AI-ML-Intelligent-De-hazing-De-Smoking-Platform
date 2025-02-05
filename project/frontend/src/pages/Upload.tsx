import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload as UploadIcon, Image as ImageIcon, Brain, Layers, Zap } from 'lucide-react';
import { ProcessingSteps } from '../components/ProcessingSteps';
import clsx from 'clsx';

type ProcessingStep = {
  title: string;
  description: string;
  icon: typeof Brain;
  status: 'waiting' | 'processing' | 'completed';
};

const initialSteps: ProcessingStep[] = [
  {
    title: 'Feature Extraction',
    description: 'Analyzing image features using U-Net architecture',
    icon: Brain,
    status: 'waiting',
  },
  {
    title: 'Attention Mechanism',
    description: 'Applying FFA-Net attention to focus on affected areas',
    icon: Layers,
    status: 'waiting',
  },
  {
    title: 'Global Context Processing',
    description: 'Processing with transformer-based Dehamer',
    icon: Zap,
    status: 'waiting',
  },
];

export function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [transmissionMap, setTransmissionMap] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [steps, setSteps] = useState<ProcessingStep[]>(initialSteps);
  const [metrics, setMetrics] = useState<{
    psnr: number;
    ssim: number;
    processingTime: number;
  } | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
    setTransmissionMap(null);
    setProcessedImage(null);
    setMetrics(null);
    setSteps(initialSteps);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxFiles: 1
  });

  const simulateProcessing = async () => {
    if (!file || !preview) return;
    
    setProcessing(true);
    
    // Simulate feature extraction
    setSteps(prev => prev.map((step, i) => 
      i === 0 ? { ...step, status: 'processing' } : step
    ));
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Simulate transmission map generation
    setTransmissionMap(preview); // In real app, this would be the actual transmission map
    setSteps(prev => prev.map((step, i) => 
      i === 0 ? { ...step, status: 'completed' } : 
      i === 1 ? { ...step, status: 'processing' } : step
    ));
    
    // Simulate attention mechanism
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSteps(prev => prev.map((step, i) => 
      i === 1 ? { ...step, status: 'completed' } : 
      i === 2 ? { ...step, status: 'processing' } : step
    ));
    
    // Simulate transformer processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProcessedImage(preview); // In real app, this would be the processed image
    setSteps(prev => prev.map(step => ({ ...step, status: 'completed' })));
    
    // Set random metrics
    setMetrics({
      psnr: 28 + Math.random() * 4,
      ssim: 0.85 + Math.random() * 0.1,
      processingTime: 5 + Math.random() * 2,
    });
    
    setProcessing(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Upload Image</h1>
        <p className="mt-2 text-gray-600">Upload your image for de-smoking and de-hazing processing.</p>
      </div>

      <div 
        {...getRootProps()} 
        className={clsx(
          "border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors",
          isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400"
        )}
      >
        <input {...getInputProps()} />
        <div className="space-y-4">
          <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div>
            <p className="text-lg font-medium text-gray-900">
              {isDragActive ? "Drop the image here" : "Drag & drop your image here"}
            </p>
            <p className="text-sm text-gray-500">or click to select a file</p>
          </div>
          <p className="text-xs text-gray-400">Supports JPG and PNG files</p>
        </div>
      </div>

      {preview && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Processing Stages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Input Image */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">Input Image</h3>
                <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src={preview} 
                    alt="Input" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500">Original hazy image</p>
              </div>

              {/* Transmission Map */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">Transmission Map</h3>
                <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  {transmissionMap ? (
                    <img 
                      src={transmissionMap} 
                      alt="Transmission Map" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <Layers className="h-8 w-8" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500">Estimated transmission map</p>
              </div>

              {/* Dehazed Image */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">Dehazed Image</h3>
                <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  {processedImage ? (
                    <img 
                      src={processedImage} 
                      alt="Dehazed" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <ImageIcon className="h-8 w-8" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500">Final dehazed result</p>
              </div>
            </div>

            {metrics && (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">PSNR</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">
                    {metrics.psnr.toFixed(2)} dB
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">SSIM</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">
                    {metrics.ssim.toFixed(3)}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">Processing Time</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">
                    {metrics.processingTime.toFixed(2)}s
                  </p>
                </div>
              </div>
            )}
          </div>

          {!processedImage && !processing && (
            <button
              onClick={simulateProcessing}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <ImageIcon className="-ml-1 mr-3 h-5 w-5" />
              Process Image
            </button>
          )}

          {processing && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Processing Status</h2>
              <ProcessingSteps steps={steps} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}