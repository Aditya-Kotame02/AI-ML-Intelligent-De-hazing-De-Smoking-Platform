import { Link } from 'react-router-dom';
import { ArrowRight, CloudOff, Image as ImageIcon, Zap } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          AI-Powered De-Smoking & De-Hazing
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Transform hazy and smoke-affected images into crystal clear visuals using our advanced AI algorithm.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link
            to="/upload"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
          <div className="flex-shrink-0">
            <ImageIcon className="h-10 w-10 text-indigo-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-gray-900">Upload Images</h3>
            <p className="text-sm text-gray-500">Support for multiple image formats including JPG and PNG.</p>
          </div>
        </div>

        <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
          <div className="flex-shrink-0">
            <CloudOff className="h-10 w-10 text-indigo-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-gray-900">Advanced Processing</h3>
            <p className="text-sm text-gray-500">State-of-the-art U-Net and transformer-based processing.</p>
          </div>
        </div>

        <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
          <div className="flex-shrink-0">
            <Zap className="h-10 w-10 text-indigo-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-gray-900">Instant Results</h3>
            <p className="text-sm text-gray-500">Get processed images with detailed quality metrics.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-medium text-gray-900">1. Image Upload</h3>
              <p className="mt-2 text-gray-500">Upload your hazy or smoke-affected images through our intuitive interface.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">2. AI Processing</h3>
              <p className="mt-2 text-gray-500">Our AI model analyzes and processes your image using advanced algorithms.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">3. Results</h3>
              <p className="mt-2 text-gray-500">Download your enhanced image with improved visibility and clarity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}