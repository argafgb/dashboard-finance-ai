import React from 'react';
import { useFinance } from '../../context/FinanceContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useFinance();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => {
        let borderClass = 'border-primary-container text-primary';
        let icon = 'info';

        if (toast.type === 'success') {
          borderClass = 'border-secondary/40 text-secondary shadow-[0_0_15px_rgba(68,243,169,0.2)]';
          icon = 'check_circle';
        } else if (toast.type === 'error') {
          borderClass = 'border-tertiary/40 text-tertiary shadow-[0_0_15px_rgba(255,179,176,0.2)]';
          icon = 'error';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 bg-[#12121a] border rounded-lg shadow-xl text-sm animate-fade-in ${borderClass}`}
          >
            <span className="material-symbols-outlined text-lg shrink-0">{icon}</span>
            <span className="text-on-surface font-medium text-xs md:text-sm">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 text-on-surface-variant hover:text-on-surface cursor-pointer p-0.5"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
