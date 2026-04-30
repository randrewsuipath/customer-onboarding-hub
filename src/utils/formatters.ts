import { StageStatus, ValidationStatus, OnboardingStatus } from '../types/onboarding';
export function formatTimestamp(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  });
}
export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
export function formatDateTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
export function getStageStatusColor(status: StageStatus): string {
  switch (status) {
    case StageStatus.Completed:
      return 'bg-green-100 text-green-700 border-green-200';
    case StageStatus.InProgress:
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case StageStatus.NeedsAttention:
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case StageStatus.Pending:
      return 'bg-gray-100 text-gray-600 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
}
export function getValidationStatusColor(status: ValidationStatus): string {
  switch (status) {
    case ValidationStatus.Passed:
      return 'bg-green-100 text-green-700 border-green-200';
    case ValidationStatus.Warning:
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case ValidationStatus.Failed:
      return 'bg-red-100 text-red-700 border-red-200';
    case ValidationStatus.Pending:
      return 'bg-gray-100 text-gray-600 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
}
export function getOnboardingStatusColor(status: OnboardingStatus): string {
  switch (status) {
    case OnboardingStatus.InProgress:
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case OnboardingStatus.NeedsAttention:
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case OnboardingStatus.HumanReviewRequired:
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case OnboardingStatus.Approved:
      return 'bg-green-100 text-green-700 border-green-200';
    case OnboardingStatus.Complete:
      return 'bg-green-100 text-green-700 border-green-200';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
}
export function getOnboardingStatusLabel(status: OnboardingStatus): string {
  switch (status) {
    case OnboardingStatus.InProgress:
      return 'In Progress';
    case OnboardingStatus.NeedsAttention:
      return 'Needs Attention';
    case OnboardingStatus.HumanReviewRequired:
      return 'Human Review Required';
    case OnboardingStatus.Approved:
      return 'Approved';
    case OnboardingStatus.Complete:
      return 'Complete';
    default:
      return 'Unknown';
  }
}
export function formatConfidence(confidence: number): string {
  return `${Math.round(confidence)}%`;
}
export function getConfidenceColor(confidence: number): string {
  if (confidence >= 95) return 'text-green-600';
  if (confidence >= 85) return 'text-blue-600';
  if (confidence >= 75) return 'text-amber-600';
  return 'text-red-600';
}