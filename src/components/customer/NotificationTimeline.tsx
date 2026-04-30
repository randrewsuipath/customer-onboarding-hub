import { CheckCircle, Info, AlertTriangle, Clock } from 'lucide-react';
import { Notification } from '../../types/onboarding';
import { formatTimestamp } from '../../utils/formatters';
interface NotificationTimelineProps {
  notifications: Notification[];
}
function getNotificationIcon(type: Notification['type']) {
  switch (type) {
    case 'success':
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    case 'info':
      return <Info className="w-5 h-5 text-blue-600" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-amber-600" />;
    case 'error':
      return <AlertTriangle className="w-5 h-5 text-red-600" />;
    default:
      return <Clock className="w-5 h-5 text-gray-600" />;
  }
}
export function NotificationTimeline({ notifications }: NotificationTimelineProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Timeline</h2>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div key={notification.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border-2 border-gray-200">
                {getNotificationIcon(notification.type)}
              </div>
              {index < notifications.length - 1 && (
                <div className="w-0.5 flex-1 bg-gray-200 my-1" style={{ minHeight: '20px' }} />
              )}
            </div>
            <div className="flex-1 pb-4">
              <p className="text-sm text-gray-900 mb-1">{notification.message}</p>
              <p className="text-xs text-gray-500">{formatTimestamp(notification.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}