// Simulated image processing function
export const processImage = (imageUrl: string): Promise<{
  processedImageUrl: string;
  metrics: {
    processingTime: number;
    hazeDensity: number;
    enhancement: number;
  };
}> => {
  return new Promise((resolve) => {
    // Simulate processing delay
    setTimeout(() => {
      // For demo purposes, we're using a mock processed image
      const processedImageUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
      
      resolve({
        processedImageUrl,
        metrics: {
          processingTime: 2.4,
          hazeDensity: 75,
          enhancement: 85
        }
      });
    }, 2000);
  });
};