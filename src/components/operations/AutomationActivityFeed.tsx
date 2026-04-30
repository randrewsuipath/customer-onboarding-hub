import { CheckCircle, AlertTriangle, Clock, FileText, Database, Bell } from 'lucide-react';
import { AutomationEvent, AutomationEventType } from '../../types/onboarding';
import { formatTimestamp } from '../../utils/formatters';
interface AutomationActivityFeedProps {
  events: AutomationEvent[];
}
function getEventIcon(type: AutomationEventType) {
  switch (type) {
    case AutomationEventType.DocumentUploaded:
      return <FileText className="w-4 h-4 text-blue-600" />;
    case AutomationEventType.ExtractionStarted:
    case AutomationEventType.ExtractionCompleted:
      return <Database className="w-4 h-4 text-indigo-600" />;
    case AutomationEventType.ValidationQueued:
    case AutomationEventType.ValidationCompleted:
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case AutomationEventType.ExceptionDetected:
      return <AlertTriangle className="w-4 h-4 text-amber-600" />;
    case AutomationEventType.TaskCreated:
      return <Clock className="w-4 h-4 text-purple-600" />;
    case AutomationEventType.NotificationSent:
      return <Bell className="w-4 h-4 text-gray-600" />;
    case AutomationEventType.ReviewApproved:
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case AutomationEventType.ERPCreationStarted:
    case AutomationEventType.ERPCreationCompleted:
      return <Database className="w-4 h-4 text-blue-600" />;
    case AutomationEventType.WelcomeEmailSent:
      return <Bell className="w-4 h-4 text-green-600" />;
    default:
      return <Clock className="w-4 h-4 text-gray-600" />;
  }
}
export function AutomationActivityFeed({ events }: AutomationActivityFeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Automation Activity</h2>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {events.map((event, index) => (
          <div key={event.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center border-2 border-gray-200">
                {getEventIcon(event.type)}
              </div>
              {index < events.length - 1 && (
                <div className="w-0.5 flex-1 bg-gray-200 my-1" style={{ minHeight: '16px' }} />
              )}
            </div>
            <div className="flex-1 pb-3">
              <p className="text-sm text-gray-900 font-medium">{event.message}</p>
              <p className="text-xs text-gray-500 mt-0.5">{formatTimestamp(event.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}