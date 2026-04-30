import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from '@/components/ui/sonner';
import { AppLayout } from '@/components/layout/AppLayout';
import { CustomerPortal } from '@/components/customer/CustomerPortal';
import { OperationsConsole } from '@/components/operations/OperationsConsole';
import { AutomationTimeline } from '@/components/timeline/AutomationTimeline';
import { DemoScript } from '@/components/script/DemoScript';
import { mockOnboardingCase, mockNotifications } from '@/data/mockData';
import { mockAutomationEvents } from '@/data/mockOperationsData';
import { OnboardingCase, Notification, OnboardingStage, OnboardingStatus, AutomationEvent, AutomationEventType } from '@/types/onboarding';
type View = 'customer' | 'operations' | 'timeline' | 'script';
export function HomePage() {
  const [currentView, setCurrentView] = useState<View>('customer');
  const [onboardingCase, setOnboardingCase] = useState<OnboardingCase>(mockOnboardingCase);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [automationEvents, setAutomationEvents] = useState<AutomationEvent[]>(mockAutomationEvents);
  const handleConfirmBankAccount = () => {
    toast.success('Bank account confirmed', {
      description: 'Your confirmation has been submitted for review.',
    });
    const newNotification: Notification = {
      id: `notif-${Date.now()}`,
      message: 'You confirmed the bank account belongs to Apex Industrial Services',
      timestamp: new Date().toISOString(),
      type: 'success',
    };
    setNotifications([...notifications, newNotification]);
  };

  const handleUploadDocument = () => {
    toast.info('Document upload', {
      description: 'Upload dialog would open here to select supporting documents.',
    });
  };

  const handleSendMessage = () => {
    toast.info('Send message', {
      description: 'Message dialog would open here to contact the operations team.',
    });
  };
  const handleApprove = () => {
    toast.success('Onboarding approved!', {
      description: 'Supplier record is being created in ERP.',
    });
    setOnboardingCase({
      ...onboardingCase,
      stage: OnboardingStage.Complete,
      status: OnboardingStatus.Complete,
      progress: 100,
    });
    const newEvents: AutomationEvent[] = [
      {
        id: `evt-${Date.now()}-1`,
        type: AutomationEventType.ReviewApproved,
        message: 'Human review approved by Jordan Lee',
        timestamp: new Date().toISOString(),
        metadata: { reviewer: 'Jordan Lee' },
      },
      {
        id: `evt-${Date.now()}-2`,
        type: AutomationEventType.ERPCreationStarted,
        message: 'ERP supplier record creation started',
        timestamp: new Date(Date.now() + 1000).toISOString(),
        metadata: { system: 'ERP' },
      },
      {
        id: `evt-${Date.now()}-3`,
        type: AutomationEventType.ERPCreationCompleted,
        message: 'Supplier record created in Northstar Energy ERP',
        timestamp: new Date(Date.now() + 2000).toISOString(),
        metadata: { recordId: 'SUP-2026-1047' },
      },
      {
        id: `evt-${Date.now()}-4`,
        type: AutomationEventType.WelcomeEmailSent,
        message: 'Welcome package sent to maya.chen@apexindustrial.com',
        timestamp: new Date(Date.now() + 3000).toISOString(),
        metadata: { recipient: 'maya.chen@apexindustrial.com' },
      },
    ];
    setAutomationEvents([...automationEvents, ...newEvents]);
    const completionNotifications: Notification[] = [
      {
        id: `notif-${Date.now()}-1`,
        message: 'Your onboarding has been approved by Jordan Lee',
        timestamp: new Date().toISOString(),
        type: 'success',
      },
      {
        id: `notif-${Date.now()}-2`,
        message: 'Supplier record created in Northstar Energy ERP',
        timestamp: new Date(Date.now() + 2000).toISOString(),
        type: 'success',
      },
      {
        id: `notif-${Date.now()}-3`,
        message: 'Welcome package sent to maya.chen@apexindustrial.com',
        timestamp: new Date(Date.now() + 3000).toISOString(),
        type: 'info',
      },
    ];
    setTimeout(() => {
      setNotifications([...notifications, ...completionNotifications]);
    }, 500);
  };
  const handleRequestClarification = () => {
    toast.info('Clarification requested', {
      description: 'Customer will be notified to provide additional information.',
    });
  };
  const handleReject = () => {
    toast.error('Onboarding rejected', {
      description: 'Customer will be notified of the rejection.',
    });
  };
  const handleRetryValidation = () => {
    toast.info('Validation retry initiated', {
      description: 'Re-running validation checks...',
    });
  };
  const handleRerunExtraction = () => {
    toast.info('Extraction re-run initiated', {
      description: 'Document Understanding extraction restarted...',
    });
  };
  const handleOpenOrchestrator = () => {
    toast.info('Opening Orchestrator', {
      description: 'Redirecting to UiPath Orchestrator job details...',
    });
  };
  const handleViewAuditTrail = () => {
    toast.info('Audit trail', {
      description: 'Displaying complete audit trail for this case...',
    });
  };
  const handleSendNotification = () => {
    toast.success('Notification sent', {
      description: 'Customer has been notified.',
    });
  };
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Customer Onboarding Hub</h1>
                  <p className="text-xs text-gray-500">Northstar Energy</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={currentView === 'customer' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentView('customer')}
                  className={currentView === 'customer' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  Customer View
                </Button>
                <Button
                  variant={currentView === 'operations' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentView('operations')}
                  className={currentView === 'operations' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  Operations View
                </Button>
                <Button
                  variant={currentView === 'timeline' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentView('timeline')}
                  className={currentView === 'timeline' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  Automation Timeline
                </Button>
                <Button
                  variant={currentView === 'script' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentView('script')}
                  className={currentView === 'script' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  Demo Script
                </Button>
              </div>
            </div>
          </div>
        </nav>
        <main className={currentView === 'timeline' || currentView === 'script' ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}>
          {currentView === 'customer' && (
            <CustomerPortal
              onboardingCase={onboardingCase}
              notifications={notifications}
              onConfirmBankAccount={handleConfirmBankAccount}
              onUploadDocument={handleUploadDocument}
              onSendMessage={handleSendMessage}
            />
          )}
          {currentView === 'operations' && (
            <OperationsConsole
              events={automationEvents}
              onApprove={handleApprove}
              onRequestClarification={handleRequestClarification}
              onReject={handleReject}
              onRetryValidation={handleRetryValidation}
              onRerunExtraction={handleRerunExtraction}
              onOpenOrchestrator={handleOpenOrchestrator}
              onViewAuditTrail={handleViewAuditTrail}
              onSendNotification={handleSendNotification}
            />
          )}
          {currentView === 'timeline' && <AutomationTimeline />}
          {currentView === 'script' && <DemoScript />}
        </main>
        {onboardingCase.status === OnboardingStatus.HumanReviewRequired && currentView === 'operations' && (
          <div className="fixed bottom-6 right-6 z-20">
            <Button
              onClick={handleApprove}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Quick Approve (Demo)
            </Button>
          </div>
        )}
        {onboardingCase.status === OnboardingStatus.Complete && (
          <div className="fixed bottom-6 right-6 z-20">
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="font-semibold">✓ Onboarding Complete</p>
              <p className="text-sm text-green-100">Supplier record created</p>
            </div>
          </div>
        )}
        <Toaster richColors closeButton position="top-right" />
      </div>
    </AppLayout>
  );
}