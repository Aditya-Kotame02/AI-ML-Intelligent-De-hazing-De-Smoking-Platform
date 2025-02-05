import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: "What image formats are supported?",
    answer: "Our platform currently supports JPEG (.jpg, .jpeg) and PNG (.png) image formats. We recommend using high-quality images for the best results."
  },
  {
    question: "How does the algorithm work?",
    answer: "Our algorithm uses a combination of U-Net architecture and transformer-based processing with attention mechanisms. It first analyzes the image to identify areas affected by smoke or haze, then applies targeted processing to enhance visibility while preserving image details."
  },
  {
    question: "What are the size limits for uploaded images?",
    answer: "The maximum file size for uploaded images is 10MB. Images larger than this will need to be compressed before uploading."
  },
  {
    question: "How long does processing take?",
    answer: "Processing time varies depending on image size and complexity, but typically takes between 10-30 seconds. Larger images or those with heavy smoke/haze may take longer."
  },
  {
    question: "Can I process multiple images at once?",
    answer: "Currently, we support processing one image at a time to ensure optimal results. Batch processing features are planned for future updates."
  },
  {
    question: "What metrics are used to measure improvement?",
    answer: "We use industry-standard metrics including PSNR (Peak Signal-to-Noise Ratio) and SSIM (Structural Similarity Index) to measure image quality improvement."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="mt-2 text-gray-600">Find answers to common questions about our platform.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <div
              className={clsx(
                "px-6 transition-all duration-200 ease-in-out",
                openIndex === index ? "py-4" : "h-0 overflow-hidden"
              )}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mt-8">
        <h2 className="text-lg font-medium text-gray-900">Still have questions?</h2>
        <p className="mt-2 text-gray-600">
          If you cannot find the answer to your question, please feel free to contact our support team.
        </p>
        <a
          href="/about#contact"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}