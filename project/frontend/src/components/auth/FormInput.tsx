import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function FormInput({ label, error, className, ...props }: FormInputProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          {...props}
          className={clsx(
            "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            error ? "border-red-300" : "border-gray-300",
            className
          )}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}