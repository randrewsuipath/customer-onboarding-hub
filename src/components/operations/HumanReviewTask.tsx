import { CheckCircle, MessageSquare, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HumanTask } from '../../types/onboarding';
import { formatTimestamp } from '../../utils/formatters';
interface HumanReviewTaskProps {
  task: HumanTask;
  onApprove: () => void;
  onRequestClarification: () => void;
  onReject: () => void;
}
function getRiskColor(risk: 'low' | 'medium' | 'high'): string {
  switch (risk) {
    case 'low':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'medium':
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'high':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
}
export function HumanReviewTask({ task, onApprove, onRequestClarification, onReject }: HumanReviewTaskProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-amber-600" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">{task.title}</h2>
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Case ID</span>
          <span className="text-sm font-medium text-gray-900">{task.caseId}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Assigned To</span>
          <span className="text-sm font-medium text-gray-900">{task.assignedTo}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Risk Level</span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getRiskColor(task.risk)}`}>
            {task.risk.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Created</span>
          <span className="text-sm text-gray-600">{formatTimestamp(task.createdAt)}</span>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
        <p className="text-xs text-blue-600 font-medium mb-1">Recommended Action</p>
        <p className="text-sm text-blue-900">{task.recommendation}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          onClick={onApprove}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Approve
        </Button>
        <Button
          onClick={onRequestClarification}
          variant="outline"
          className="flex-1 border-gray-300 hover:bg-gray-50"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Request Clarification
        </Button>
        <Button
          onClick={onReject}
          variant="outline"
          className="border-red-300 text-red-600 hover:bg-red-50"
        >
          <XCircle className="w-4 h-4 mr-2" />
          Reject
        </Button>
      </div>
    </div>
  );
}