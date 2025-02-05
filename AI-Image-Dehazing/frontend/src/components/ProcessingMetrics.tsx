import React from 'react';
import { Timer, Droplets, Zap } from 'lucide-react';

interface ProcessingMetricsProps {
  processingTime: number;
  hazeDensity: number;
  enhancement: number;
}

export function ProcessingMetrics({ processingTime, hazeDensity, enhancement }: ProcessingMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow flex items-center">
        <Timer className="h-8 w-8 text-blue-500 mr-3" />
        <div>
          <p className="text-sm text-gray-600">Processing Time</p>
          <p className="text-lg font-semibold">{processingTime.toFixed(2)}s</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex items-center">
        <Droplets className="h-8 w-8 text-blue-500 mr-3" />
        <div>
          <p className="text-sm text-gray-600">Haze Density Reduction</p>
          <p className="text-lg font-semibold">{hazeDensity}%</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex items-center">
        <Zap className="h-8 w-8 text-blue-500 mr-3" />
        <div>
          <p className="text-sm text-gray-600">Enhancement Level</p>
          <p className="text-lg font-semibold">{enhancement}%</p>
        </div>
      </div>
    </div>
  );
}