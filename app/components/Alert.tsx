'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, title, message, onClose }) => {
  const colorClasses = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    error: 'bg-red-50 border-red-200 text-red-900',
  };

  const iconClasses = {
    info: 'text-blue-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
  };

  return (
    <div className={`border-2 rounded-lg p-4 flex items-start gap-3 ${colorClasses[type]}`}>
      <Info className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconClasses[type]}`} />
      <div className="flex-1">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-xl leading-none opacity-70 hover:opacity-100">
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
