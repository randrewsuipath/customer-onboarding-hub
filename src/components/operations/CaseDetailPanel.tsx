import { User, Building2, AlertCircle, Clock, UserCheck, Activity } from 'lucide-react';
import { CaseDetail } from '../../data/mockOperationsData';
interface CaseDetailPanelProps {
  caseDetail: CaseDetail;
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
export function CaseDetailPanel({ caseDetail }: CaseDetailPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Case Details</h2>
        <span className="text-sm font-medium text-gray-600">{caseDetail.id}</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">Customer</p>
            <p className="text-sm font-medium text-gray-900">{caseDetail.customerName}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">Company</p>
            <p className="text-sm font-medium text-gray-900">{caseDetail.companyName}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">Risk Score</p>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getRiskColor(
                caseDetail.riskScore
              )}`}
            >
              {caseDetail.riskScore.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">SLA Deadline</p>
            <p className="text-sm font-medium text-gray-900">{caseDetail.slaDeadline}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <UserCheck className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">Assigned Reviewer</p>
            <p className="text-sm font-medium text-gray-900">{caseDetail.assignedReviewer}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Activity className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">Current Stage</p>
            <p className="text-sm font-medium text-gray-900">{caseDetail.currentStage}</p>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-1">Recommended Action</p>
          <p className="text-sm font-medium text-blue-600">{caseDetail.recommendedAction}</p>
        </div>
      </div>
    </div>
  );
}