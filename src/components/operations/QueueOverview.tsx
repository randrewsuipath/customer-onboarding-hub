import { TrendingUp, CheckCircle, AlertTriangle, Clock, Target } from 'lucide-react';
import { QueueMetrics } from '../../data/mockOperationsData';
interface QueueOverviewProps {
  metrics: QueueMetrics;
}
export function QueueOverview({ metrics }: QueueOverviewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">Cases Today</p>
          <TrendingUp className="w-4 h-4 text-blue-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">{metrics.casesToday}</p>
        <p className="text-xs text-gray-500 mt-1">Active onboarding cases</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">Automations Completed</p>
          <CheckCircle className="w-4 h-4 text-green-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">{metrics.automationsCompleted}</p>
        <p className="text-xs text-gray-500 mt-1">Successful executions</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">Exceptions</p>
          <AlertTriangle className="w-4 h-4 text-amber-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">{metrics.exceptionsRequiringReview}</p>
        <p className="text-xs text-gray-500 mt-1">Requiring review</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">Avg Cycle Time</p>
          <Clock className="w-4 h-4 text-indigo-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">{metrics.averageCycleTime}h</p>
        <p className="text-xs text-gray-500 mt-1">End-to-end processing</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">SLA at Risk</p>
          <Target className="w-4 h-4 text-red-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">{metrics.slaAtRisk}</p>
        <p className="text-xs text-gray-500 mt-1">Cases approaching deadline</p>
      </div>
    </div>
  );
}