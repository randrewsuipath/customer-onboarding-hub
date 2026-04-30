import { OnboardingCase, Notification } from '../../types/onboarding';
import { HeroPanel } from './HeroPanel';
import { ProgressTracker } from './ProgressTracker';
import { ChecklistCards } from './ChecklistCards';
import { DocumentCards } from './DocumentCards';
import { CustomerActionPanel } from './CustomerActionPanel';
import { NotificationTimeline } from './NotificationTimeline';
interface CustomerPortalProps {
  onboardingCase: OnboardingCase;
  notifications: Notification[];
  onConfirmBankAccount: () => void;
  onUploadDocument?: () => void;
  onSendMessage?: () => void;
}
export function CustomerPortal({ onboardingCase, notifications, onConfirmBankAccount, onUploadDocument, onSendMessage }: CustomerPortalProps) {
  return (
    <div className="space-y-6">
      <HeroPanel onboardingCase={onboardingCase} />
      <ProgressTracker currentStage={onboardingCase.stage} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CustomerActionPanel onConfirm={onConfirmBankAccount} onUploadDocument={onUploadDocument} onSendMessage={onSendMessage} />
          <DocumentCards documents={onboardingCase.documents} />
        </div>
        <div className="space-y-6">
          <ChecklistCards checklist={onboardingCase.checklist} />
          <NotificationTimeline notifications={notifications} />
        </div>
      </div>
    </div>
  );
}