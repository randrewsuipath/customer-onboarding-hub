import { CheckCircle, Clock, AlertCircle, Circle } from 'lucide-react';
import { OnboardingStage, StageStatus } from '../../types/onboarding';
import { stageLabels, getStageStatus } from '../../data/mockData';
import { getStageStatusColor } from '../../utils/formatters';
interface ProgressTrackerProps {
  currentStage: OnboardingStage;
}
const displayStages: OnboardingStage[] = [
  OnboardingStage.ProfileSubmitted,
  OnboardingStage.DocumentsUploaded,
  OnboardingStage.AIExtraction,
  OnboardingStage.ValidationRunning,
  OnboardingStage.HumanReview,
  OnboardingStage.ERPSetup,
  OnboardingStage.Complete,
];
function getStageIcon(status: StageStatus) {
  switch (status) {
    case StageStatus.Completed:
      return <CheckCircle className="w-5 h-5" />;
    case StageStatus.InProgress:
      return <Clock className="w-5 h-5" />;
    case StageStatus.NeedsAttention:
      return <AlertCircle className="w-5 h-5" />;
    case StageStatus.Pending:
      return <Circle className="w-5 h-5" />;
    default:
      return <Circle className="w-5 h-5" />;
  }
}
export function ProgressTracker({ currentStage }: ProgressTrackerProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Onboarding Progress</h2>
      <div className="relative">
        <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-gray-200" />
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-2 relative">
          {displayStages.map((stage, index) => {
            const status = getStageStatus(stage, currentStage);
            const isLast = index === displayStages.length - 1;
            return (
              <div key={stage} className="flex md:flex-col items-center md:items-center gap-3 md:gap-2 flex-1">
                <div className="flex items-center gap-3 md:flex-col md:gap-2 md:items-center">
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      status === StageStatus.Completed
                        ? 'bg-green-100 border-green-500 text-green-700'
                        : status === StageStatus.InProgress
                        ? 'bg-blue-100 border-blue-500 text-blue-700'
                        : status === StageStatus.NeedsAttention
                        ? 'bg-amber-100 border-amber-500 text-amber-700'
                        : 'bg-gray-100 border-gray-300 text-gray-500'
                    }`}
                  >
                    {getStageIcon(status)}
                  </span>
                  <div className="md:text-center">
                    <p className="text-sm font-medium text-gray-900">{stageLabels[stage]}</p>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium border ${getStageStatusColor(
                        status
                      )}`}
                    >
                      {status === StageStatus.Completed
                        ? 'Complete'
                        : status === StageStatus.InProgress
                        ? 'In Progress'
                        : status === StageStatus.NeedsAttention
                        ? 'Needs Attention'
                        : 'Pending'}
                    </span>
                  </div>
                </div>
                {!isLast && (
                  <div className="hidden md:block flex-1 h-0.5 bg-gray-200 mx-2 relative -top-5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}