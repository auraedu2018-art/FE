
import React, { useEffect } from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`fixed top-5 right-5 z-[200] transition-all duration-300 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
      <div className="bg-white rounded-lg shadow-lg p-4 flex items-center border-l-4 border-green-500">
        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
        <p className="text-slate-700 font-semibold">{message}</p>
      </div>
    </div>
  );
};
export default Toast;
