import { QueueOverview } from './QueueOverview';
import { CaseDetailPanel } from './CaseDetailPanel';
import { AutomationActivityFeed } from './AutomationActivityFeed';
import { HumanReviewTask } from './HumanReviewTask';
import { AutomationControlPanel } from './AutomationControlPanel';
import { QueueMetrics, CaseDetail, mockQueueMetrics, mockCaseDetail, mockAutomationEvents, mockHumanTask } from '../../data/mockOperationsData';
import { AutomationEvent, HumanTask } from '../../types/onboarding';
interface OperationsConsoleProps {
  metrics?: QueueMetrics;
  caseDetail?: CaseDetail;
  events?: AutomationEvent[];
  task?: HumanTask;
  onApprove: () => void;
  onRequestClarification: () => void;
  onReject: () => void;
  onRetryValidation: () => void;
  onRerunExtraction: () => void;
  onOpenOrchestrator: () => void;
  onViewAuditTrail: () => void;
  onSendNotification: () => void;
}
export function OperationsConsole({
  metrics = mockQueueMetrics,
  caseDetail = mockCaseDetail,
  events = mockAutomationEvents,
  task = mockHumanTask,
  onApprove,
  onRequestClarification,
  onReject,
  onRetryValidation,
  onRerunExtraction,
  onOpenOrchestrator,
  onViewAuditTrail,
  onSendNotification,
}: OperationsConsoleProps) {
  return (
    <div className="space-y-6">
      <QueueOverview metrics={metrics} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <CaseDetailPanel caseDetail={caseDetail} />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <HumanReviewTask
            task={task}
            onApprove={onApprove}
            onRequestClarification={onRequestClarification}
            onReject={onReject}
          />
          <AutomationActivityFeed events={events} />
        </div>
      </div>
      <AutomationControlPanel
        onRetryValidation={onRetryValidation}
        onRerunExtraction={onRerunExtraction}
        onOpenOrchestrator={onOpenOrchestrator}
        onViewAuditTrail={onViewAuditTrail}
        onSendNotification={onSendNotification}
      />
    </div>
  );
}