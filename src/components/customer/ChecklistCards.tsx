import { CheckCircle, AlertCircle, Circle } from 'lucide-react';
import { ChecklistItem } from '../../types/onboarding';
interface ChecklistCardsProps {
  checklist: ChecklistItem[];
}
export function ChecklistCards({ checklist }: ChecklistCardsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Onboarding Checklist</h2>
      <div className="space-y-3">
        {checklist.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 p-3 rounded-lg border ${
              item.needsAttention
                ? 'bg-amber-50 border-amber-200'
                : item.completed
                ? 'bg-gray-50 border-gray-200'
                : 'bg-white border-gray-200'
            }`}
          >
            <span
              className={`flex-shrink-0 ${
                item.needsAttention
                  ? 'text-amber-600'
                  : item.completed
                  ? 'text-green-600'
                  : 'text-gray-400'
              }`}
            >
              {item.needsAttention ? (
                <AlertCircle className="w-5 h-5" />
              ) : item.completed ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </span>
            <span
              className={`flex-1 text-sm ${
                item.completed && !item.needsAttention ? 'text-gray-600' : 'text-gray-900 font-medium'
              }`}
            >
              {item.label}
            </span>
            {item.needsAttention && (
              <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium border border-amber-200">
                Review Required
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}