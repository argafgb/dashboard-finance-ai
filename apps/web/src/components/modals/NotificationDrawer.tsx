import React from 'react';
import { useFinance } from '../../context/FinanceContext';

export const NotificationDrawer: React.FC = () => {
  const { isNotificationOpen, setIsNotificationOpen, notifications, markNotificationsAsRead } = useFinance();

  if (!isNotificationOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsNotificationOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-sm bg-[#12121a] border-l border-[#2a2a3e] h-full shadow-2xl z-10 flex flex-col animate-slide-down">
        {/* Header */}
        <div className="p-md border-b border-[#2a2a3e] flex items-center justify-between bg-[#0e0e13]/80">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary-container">notifications</span>
            <h3 className="font-headline-md text-headline-md text-on-surface text-base">Pemberitahuan</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={markNotificationsAsRead}
              className="text-[11px] font-label-md text-primary hover:underline cursor-pointer"
            >
              Tandai Dibaca
            </button>
            <button
              onClick={() => setIsNotificationOpen(false)}
              className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container-high"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#2a2a3e]/40 p-xs">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-sm rounded-lg transition-colors ${
                notif.isRead ? 'opacity-70 hover:opacity-100 hover:bg-[#1b1b20]' : 'bg-primary/5 hover:bg-primary/10 border-l-2 border-primary-container'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-label-md text-xs font-semibold text-on-surface">{notif.title}</span>
                <span className="text-[10px] text-on-surface-variant">{notif.timestamp}</span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{notif.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
