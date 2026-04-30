import {
  OnboardingCase,
  OnboardingStage,
  OnboardingStatus,
  StageStatus,
  Document,
  DocumentStatus,
  ValidationStatus,
  ChecklistItem,
  ValidationCheck,
  Notification,
} from '../types/onboarding';
export const mockOnboardingCase: OnboardingCase = {
  id: 'ONB-2026-1047',
  customer: {
    name: 'Maya Chen',
    title: 'Operations Director',
    email: 'maya.chen@apexindustrial.com',
    phone: '+61 2 9876 5432',
  },
  company: {
    name: 'Apex Industrial Services',
    legalName: 'Apex Industrial Services Pty Ltd',
    abn: '51 123 456 789',
    address: '45 Manufacturing Drive, Sydney NSW 2000, Australia',
    industry: 'Industrial Equipment & Services',
  },
  stage: OnboardingStage.HumanReview,
  status: OnboardingStatus.HumanReviewRequired,
  progress: 68,
  documents: [
    {
      id: 'doc-1',
      name: 'W-9 Tax Form.pdf',
      uploadedAt: '2026-01-15T09:23:00Z',
      status: DocumentStatus.Validated,
      extractionConfidence: 96,
      extractedFields: [
        { name: 'Tax ID', value: '51-123-456-789', confidence: 98 },
        { name: 'Legal Name', value: 'Apex Industrial Services Pty Ltd', confidence: 97 },
        { name: 'Business Type', value: 'Corporation', confidence: 95 },
      ],
      validationStatus: ValidationStatus.Passed,
    },
    {
      id: 'doc-2',
      name: 'Certificate of Incorporation.pdf',
      uploadedAt: '2026-01-15T09:24:00Z',
      status: DocumentStatus.Validated,
      extractionConfidence: 94,
      extractedFields: [
        { name: 'Company Name', value: 'Apex Industrial Services Pty Ltd', confidence: 96 },
        { name: 'Registration Number', value: 'ACN 123 456 789', confidence: 93 },
        { name: 'Incorporation Date', value: '2018-03-15', confidence: 92 },
      ],
      validationStatus: ValidationStatus.Passed,
    },
    {
      id: 'doc-3',
      name: 'Bank Verification Letter.pdf',
      uploadedAt: '2026-01-15T09:25:00Z',
      status: DocumentStatus.ValidationFailed,
      extractionConfidence: 92,
      extractedFields: [
        { name: 'Account Name', value: 'Apex Industrial Services', confidence: 90 },
        { name: 'Bank Name', value: 'Commonwealth Bank of Australia', confidence: 95 },
        { name: 'Account Number', value: '****4821', confidence: 94 },
        { name: 'BSB', value: '062-001', confidence: 96 },
      ],
      validationStatus: ValidationStatus.Warning,
      validationMessage: 'Account name does not exactly match legal entity name',
    },
    {
      id: 'doc-4',
      name: 'Insurance Certificate.pdf',
      uploadedAt: '2026-01-15T09:26:00Z',
      status: DocumentStatus.Validated,
      extractionConfidence: 89,
      extractedFields: [
        { name: 'Policy Number', value: 'INS-9876543', confidence: 92 },
        { name: 'Coverage Amount', value: 'AUD $10,000,000', confidence: 88 },
        { name: 'Expiry Date', value: '2027-03-31', confidence: 87 },
      ],
      validationStatus: ValidationStatus.Passed,
    },
  ],
  checklist: [
    { id: 'check-1', label: 'Company profile submitted', completed: true },
    { id: 'check-2', label: 'Tax information submitted', completed: true },
    { id: 'check-3', label: 'Bank details submitted', completed: true, needsAttention: true },
    { id: 'check-4', label: 'Certificate of incorporation uploaded', completed: true },
    { id: 'check-5', label: 'Insurance certificate uploaded', completed: true },
    { id: 'check-6', label: 'Compliance questionnaire completed', completed: true },
    { id: 'check-7', label: 'Terms accepted', completed: true },
  ],
  validations: [
    {
      id: 'val-1',
      name: 'Tax ID Format Validation',
      status: ValidationStatus.Passed,
      message: 'Tax ID format is valid',
      timestamp: '2026-01-15T09:30:00Z',
    },
    {
      id: 'val-2',
      name: 'Company Registration Check',
      status: ValidationStatus.Passed,
      message: 'Company registration is active',
      timestamp: '2026-01-15T09:31:00Z',
    },
    {
      id: 'val-3',
      name: 'Sanctions Screening',
      status: ValidationStatus.Passed,
      message: 'No sanctions matches found',
      timestamp: '2026-01-15T09:32:00Z',
    },
    {
      id: 'val-4',
      name: 'CRM Duplicate Check',
      status: ValidationStatus.Passed,
      message: 'No duplicate accounts found',
      timestamp: '2026-01-15T09:33:00Z',
    },
    {
      id: 'val-5',
      name: 'Bank Account Verification',
      status: ValidationStatus.Warning,
      message: 'Account name mismatch: extracted "Apex Industrial Services" vs legal entity "Apex Industrial Services Pty Ltd"',
      timestamp: '2026-01-15T09:34:00Z',
    },
    {
      id: 'val-6',
      name: 'Insurance Certificate Expiry',
      status: ValidationStatus.Passed,
      message: 'Insurance certificate is valid until 2027-03-31',
      timestamp: '2026-01-15T09:35:00Z',
    },
  ],
  createdAt: '2026-01-15T09:20:00Z',
  updatedAt: '2026-01-15T09:35:00Z',
};
export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    message: 'Your onboarding application has been created',
    timestamp: '2026-01-15T09:20:00Z',
    type: 'success',
  },
  {
    id: 'notif-2',
    message: 'Company profile and tax information received',
    timestamp: '2026-01-15T09:23:00Z',
    type: 'info',
  },
  {
    id: 'notif-3',
    message: 'All required documents uploaded successfully',
    timestamp: '2026-01-15T09:26:00Z',
    type: 'success',
  },
  {
    id: 'notif-4',
    message: 'AI document extraction completed with 92% average confidence',
    timestamp: '2026-01-15T09:29:00Z',
    type: 'info',
  },
  {
    id: 'notif-5',
    message: 'Internal validations are running across multiple systems',
    timestamp: '2026-01-15T09:30:00Z',
    type: 'info',
  },
  {
    id: 'notif-6',
    message: 'One item needs your review: bank account name verification',
    timestamp: '2026-01-15T09:35:00Z',
    type: 'warning',
  },
  {
    id: 'notif-7',
    message: 'Jordan Lee from Northstar Energy is reviewing your submission',
    timestamp: '2026-01-15T09:36:00Z',
    type: 'info',
  },
];
export const stageLabels: Record<OnboardingStage, string> = {
  [OnboardingStage.AccountCreated]: 'Account',
  [OnboardingStage.ProfileSubmitted]: 'Profile',
  [OnboardingStage.DocumentsUploaded]: 'Documents',
  [OnboardingStage.AIExtraction]: 'AI Extraction',
  [OnboardingStage.ValidationRunning]: 'Validation',
  [OnboardingStage.ExceptionFound]: 'Review',
  [OnboardingStage.HumanReview]: 'Review',
  [OnboardingStage.Approved]: 'ERP Setup',
  [OnboardingStage.ERPSetup]: 'ERP Setup',
  [OnboardingStage.Complete]: 'Complete',
};
export function getStageStatus(stage: OnboardingStage, currentStage: OnboardingStage): StageStatus {
  const stages = Object.values(OnboardingStage);
  const stageIndex = stages.indexOf(stage);
  const currentIndex = stages.indexOf(currentStage);
  if (stageIndex < currentIndex) {
    return StageStatus.Completed;
  } else if (stageIndex === currentIndex) {
    if (currentStage === OnboardingStage.HumanReview || currentStage === OnboardingStage.ExceptionFound) {
      return StageStatus.NeedsAttention;
    }
    return StageStatus.InProgress;
  } else {
    return StageStatus.Pending;
  }
}