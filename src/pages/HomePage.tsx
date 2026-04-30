import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from '@/components/ui/sonner';
import { AppLayout } from '@/components/layout/AppLayout';
import { CustomerPortal } from '@/components/customer/CustomerPortal';
import { mockOnboardingCase, mockNotifications } from '@/data/mockData';
import { OnboardingCase, Notification, OnboardingStage, OnboardingStatus } from '@/types/onboarding';
type View = 'customer' | 'operations' | 'timeline' | 'script';
export function HomePage() {
  const [currentView, setCurrentView] = useState<View>('customer');
  const [onboardingCase, setOnboardingCase] = useState<OnboardingCase>(mockOnboardingCase);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
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
        timestamp: new Date(Date.now() + 1000).toISOString(),
        type: 'success',
      },
      {
        id: `notif-${Date.now()}-3`,
        message: 'Welcome package sent to maya.chen@apexindustrial.com',
        timestamp: new Date(Date.now() + 2000).toISOString(),
        type: 'info',
      },
    ];
    setTimeout(() => {
      setNotifications([...notifications, ...completionNotifications]);
    }, 500);
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
                  disabled
                >
                  Operations View
                </Button>
                <Button
                  variant={currentView === 'timeline' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentView('timeline')}
                  className={currentView === 'timeline' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                  disabled
                >
                  Automation Timeline
                </Button>
                <Button
                  variant={currentView === 'script' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentView('script')}
                  className={currentView === 'script' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                  disabled
                >
                  Demo Script
                </Button>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {currentView === 'customer' && (
            <CustomerPortal
              onboardingCase={onboardingCase}
              notifications={notifications}
              onConfirmBankAccount={handleConfirmBankAccount}
            />
          )}
          {currentView === 'operations' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Operations Console</h2>
              <p className="text-gray-600">Coming in Phase 2</p>
            </div>
          )}
          {currentView === 'timeline' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Automation Timeline</h2>
              <p className="text-gray-600">Coming in Phase 3</p>
            </div>
          )}
          {currentView === 'script' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Demo Script</h2>
              <p className="text-gray-600">Coming in Phase 3</p>
            </div>
          )}
        </main>
        {onboardingCase.status === OnboardingStatus.HumanReviewRequired && (
          <div className="fixed bottom-6 right-6 z-20">
            <Button
              onClick={handleApprove}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Approve Onboarding (Demo)
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