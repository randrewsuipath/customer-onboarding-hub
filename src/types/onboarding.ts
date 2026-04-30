// Core domain types for customer onboarding demo
export enum OnboardingStage {
  AccountCreated = 'account_created',
  ProfileSubmitted = 'profile_submitted',
  DocumentsUploaded = 'documents_uploaded',
  AIExtraction = 'ai_extraction',
  ValidationRunning = 'validation_running',
  ExceptionFound = 'exception_found',
  HumanReview = 'human_review',
  Approved = 'approved',
  ERPSetup = 'erp_setup',
  Complete = 'complete',
}
export enum OnboardingStatus {
  InProgress = 'in_progress',
  NeedsAttention = 'needs_attention',
  HumanReviewRequired = 'human_review_required',
  Approved = 'approved',
  Complete = 'complete',
}
export enum StageStatus {
  Completed = 'completed',
  InProgress = 'in_progress',
  NeedsAttention = 'needs_attention',
  Pending = 'pending',
}
export enum DocumentStatus {
  Uploaded = 'uploaded',
  Extracting = 'extracting',
  Extracted = 'extracted',
  Validated = 'validated',
  ValidationFailed = 'validation_failed',
}
export enum ValidationStatus {
  Passed = 'passed',
  Failed = 'failed',
  Warning = 'warning',
  Pending = 'pending',
}
export interface ExtractedField {
  name: string;
  value: string;
  confidence: number;
}
export interface Document {
  id: string;
  name: string;
  uploadedAt: string;
  status: DocumentStatus;
  extractionConfidence?: number;
  extractedFields?: ExtractedField[];
  validationStatus?: ValidationStatus;
  validationMessage?: string;
}
export interface ValidationCheck {
  id: string;
  name: string;
  status: ValidationStatus;
  message: string;
  timestamp: string;
}
export interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
  needsAttention?: boolean;
}
export interface CustomerProfile {
  name: string;
  title: string;
  email: string;
  phone: string;
}
export interface CompanyProfile {
  name: string;
  legalName: string;
  abn: string;
  address: string;
  industry: string;
}
export interface OnboardingCase {
  id: string;
  customer: CustomerProfile;
  company: CompanyProfile;
  stage: OnboardingStage;
  status: OnboardingStatus;
  progress: number;
  documents: Document[];
  checklist: ChecklistItem[];
  validations: ValidationCheck[];
  createdAt: string;
  updatedAt: string;
}
export interface Notification {
  id: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
}
export enum AutomationEventType {
  DocumentUploaded = 'document_uploaded',
  ExtractionStarted = 'extraction_started',
  ExtractionCompleted = 'extraction_completed',
  ValidationQueued = 'validation_queued',
  ValidationCompleted = 'validation_completed',
  ExceptionDetected = 'exception_detected',
  TaskCreated = 'task_created',
  NotificationSent = 'notification_sent',
  ReviewApproved = 'review_approved',
  ERPCreationStarted = 'erp_creation_started',
  ERPCreationCompleted = 'erp_creation_completed',
  WelcomeEmailSent = 'welcome_email_sent',
}
export interface AutomationEvent {
  id: string;
  type: AutomationEventType;
  message: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}
export interface HumanTask {
  id: string;
  title: string;
  description: string;
  caseId: string;
  assignedTo: string;
  risk: 'low' | 'medium' | 'high';
  recommendation: string;
  createdAt: string;
}