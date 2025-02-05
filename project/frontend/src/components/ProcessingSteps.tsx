import { Brain, Layers, Zap } from 'lucide-react';
import clsx from 'clsx';

type Step = {
  title: string;
  description: string;
  icon: typeof Brain;
  status: 'waiting' | 'processing' | 'completed';
};

type ProcessingStepsProps = {
  steps: Step[];
};

export function ProcessingSteps({ steps }: ProcessingStepsProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={clsx(
            "flex items-start space-x-4 p-4 rounded-lg",
            step.status === 'completed' && "bg-green-50",
            step.status === 'processing' && "bg-blue-50",
            step.status === 'waiting' && "bg-gray-50"
          )}
        >
          <div className="flex-shrink-0">
            <step.icon
              className={clsx(
                "h-6 w-6",
                step.status === 'completed' && "text-green-600",
                step.status === 'processing' && "text-blue-600",
                step.status === 'waiting' && "text-gray-400"
              )}
            />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
            <p className="mt-1 text-sm text-gray-500">{step.description}</p>
          </div>
          <div className="flex-shrink-0">
            {step.status === 'processing' && (
              <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}