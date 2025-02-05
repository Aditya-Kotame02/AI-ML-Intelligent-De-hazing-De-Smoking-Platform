import React from 'react';

interface ImageComparisonProps {
  original: string;
  processed: string;
}

export function ImageComparison({ original, processed }: ImageComparisonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Original Image</h3>
        <div className="aspect-video relative">
          <img
            src={original}
            alt="Original"
            className="w-full h-full object-contain rounded"
          />
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Processed Image</h3>
        <div className="aspect-video relative">
          <img
            src={processed}
            alt="Processed"
            className="w-full h-full object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
}