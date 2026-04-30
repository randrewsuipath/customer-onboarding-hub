import { OnboardingCase } from '../../types/onboarding';
import { getOnboardingStatusColor, getOnboardingStatusLabel } from '../../utils/formatters';
interface HeroPanelProps {
  onboardingCase: OnboardingCase;
}
export function HeroPanel({ onboardingCase }: HeroPanelProps) {
  const { customer, company, id, status, progress } = onboardingCase;
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg shadow-md p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <p className="text-blue-100 text-sm mb-1">Welcome back,</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{customer.name}</h1>
          <p className="text-blue-100 text-lg mb-1">{company.name}</p>
          <p className="text-blue-200 text-sm">Onboarding ID: {id}</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3">
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border ${getOnboardingStatusColor(
              status
            )}`}
          >
            {getOnboardingStatusLabel(status)}
          </span>
          <div className="text-right">
            <p className="text-sm text-blue-100 mb-1">Overall Progress</p>
            <p className="text-2xl font-bold">{progress}%</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full bg-blue-800 bg-opacity-50 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}