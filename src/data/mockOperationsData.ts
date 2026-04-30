import { AutomationEvent, AutomationEventType, HumanTask } from '../types/onboarding';
export interface QueueMetrics {
  casesToday: number;
  automationsCompleted: number;
  exceptionsRequiringReview: number;
  averageCycleTime: number;
  slaAtRisk: number;
}
export interface CaseDetail {
  id: string;
  customerName: string;
  companyName: string;
  riskScore: 'low' | 'medium' | 'high';
  slaDeadline: string;
  assignedReviewer: string;
  currentStage: string;
  recommendedAction: string;
}
export const mockQueueMetrics: QueueMetrics = {
  casesToday: 12,
  automationsCompleted: 8,
  exceptionsRequiringReview: 1,
  averageCycleTime: 4.2,
  slaAtRisk: 0,
};
export const mockCaseDetail: CaseDetail = {
  id: 'ONB-2026-1047',
  customerName: 'Maya Chen',
  companyName: 'Apex Industrial Services',
  riskScore: 'low',
  slaDeadline: '6 hours remaining',
  assignedReviewer: 'Jordan Lee',
  currentStage: 'Human Review',
  recommendedAction: 'Approve with note',
};
export const mockAutomationEvents: AutomationEvent[] = [
  {
    id: 'evt-1',
    type: AutomationEventType.DocumentUploaded,
    message: 'Documents uploaded by customer',
    timestamp: '2026-01-15T09:26:00Z',
    metadata: { documentCount: 4 },
  },
  {
    id: 'evt-2',
    type: AutomationEventType.ExtractionStarted,
    message: 'Document Understanding extraction started',
    timestamp: '2026-01-15T09:27:00Z',
    metadata: { service: 'Document Understanding' },
  },
  {
    id: 'evt-3',
    type: AutomationEventType.ExtractionCompleted,
    message: 'AI extraction completed with 92% average confidence',
    timestamp: '2026-01-15T09:29:00Z',
    metadata: { confidence: 92 },
  },
  {
    id: 'evt-4',
    type: AutomationEventType.ValidationQueued,
    message: 'Tax ID validation job queued',
    timestamp: '2026-01-15T09:30:00Z',
    metadata: { validationType: 'Tax ID' },
  },
  {
    id: 'evt-5',
    type: AutomationEventType.ValidationCompleted,
    message: 'Tax ID validation completed - PASSED',
    timestamp: '2026-01-15T09:30:30Z',
    metadata: { status: 'passed' },
  },
  {
    id: 'evt-6',
    type: AutomationEventType.ValidationQueued,
    message: 'Bank verification API called',
    timestamp: '2026-01-15T09:31:00Z',
    metadata: { validationType: 'Bank Account' },
  },
  {
    id: 'evt-7',
    type: AutomationEventType.ValidationCompleted,
    message: 'Bank verification completed - WARNING',
    timestamp: '2026-01-15T09:31:30Z',
    metadata: { status: 'warning' },
  },
  {
    id: 'evt-8',
    type: AutomationEventType.ValidationCompleted,
    message: 'CRM duplicate check completed - PASSED',
    timestamp: '2026-01-15T09:32:00Z',
    metadata: { status: 'passed' },
  },
  {
    id: 'evt-9',
    type: AutomationEventType.ValidationCompleted,
    message: 'Sanctions screening completed - PASSED',
    timestamp: '2026-01-15T09:33:00Z',
    metadata: { status: 'passed' },
  },
  {
    id: 'evt-10',
    type: AutomationEventType.ExceptionDetected,
    message: 'Exception detected: Bank account name mismatch',
    timestamp: '2026-01-15T09:34:00Z',
    metadata: { severity: 'low' },
  },
  {
    id: 'evt-11',
    type: AutomationEventType.TaskCreated,
    message: 'Action Center task created for human review',
    timestamp: '2026-01-15T09:35:00Z',
    metadata: { taskId: 'task-1047' },
  },
  {
    id: 'evt-12',
    type: AutomationEventType.NotificationSent,
    message: 'Customer notification sent',
    timestamp: '2026-01-15T09:36:00Z',
    metadata: { recipient: 'maya.chen@apexindustrial.com' },
  },
];
export const mockHumanTask: HumanTask = {
  id: 'task-1047',
  title: 'Review bank account name mismatch',
  description: 'Bank account name extracted from verification letter does not exactly match legal entity name. Low risk discrepancy requiring approval.',
  caseId: 'ONB-2026-1047',
  assignedTo: 'Jordan Lee',
  risk: 'low',
  recommendation: 'Approve with note',
  createdAt: '2026-01-15T09:35:00Z',
};