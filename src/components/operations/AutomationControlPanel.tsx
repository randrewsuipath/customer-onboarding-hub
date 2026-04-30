import { RefreshCw, Play, ExternalLink, FileText, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface AutomationControlPanelProps {
  onRetryValidation: () => void;
  onRerunExtraction: () => void;
  onOpenOrchestrator: () => void;
  onViewAuditTrail: () => void;
  onSendNotification: () => void;
}
export function AutomationControlPanel({
  onRetryValidation,
  onRerunExtraction,
  onOpenOrchestrator,
  onViewAuditTrail,
  onSendNotification,
}: AutomationControlPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Automation Controls</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Button
          onClick={onRetryValidation}
          variant="outline"
          className="w-full justify-start border-gray-300 hover:bg-gray-50"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retry Failed Validation
        </Button>
        <Button
          onClick={onRerunExtraction}
          variant="outline"
          className="w-full justify-start border-gray-300 hover:bg-gray-50"
        >
          <Play className="w-4 h-4 mr-2" />
          Re-run Extraction
        </Button>
        <Button
          onClick={onOpenOrchestrator}
          variant="outline"
          className="w-full justify-start border-gray-300 hover:bg-gray-50"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Open Orchestrator Job
        </Button>
        <Button
          onClick={onViewAuditTrail}
          variant="outline"
          className="w-full justify-start border-gray-300 hover:bg-gray-50"
        >
          <FileText className="w-4 h-4 mr-2" />
          View Audit Trail
        </Button>
        <Button
          onClick={onSendNotification}
          variant="outline"
          className="w-full justify-start border-gray-300 hover:bg-gray-50"
        >
          <Bell className="w-4 h-4 mr-2" />
          Send Customer Notification
        </Button>
      </div>
    </div>
  );
}