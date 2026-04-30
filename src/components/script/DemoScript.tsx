import { Users, MessageSquare, CheckSquare, Lightbulb, HelpCircle } from 'lucide-react';
export function DemoScript() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Demo Script</h1>
            <p className="text-gray-600">
              Presenter guidance for delivering an effective customer onboarding orchestration demo
            </p>
          </div>
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Persona Setup</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Customer User</p>
                  <p className="text-sm text-gray-600">
                    <strong>Maya Chen</strong>, Operations Director at <strong>Apex Industrial Services</strong>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    A B2B supplier going through onboarding with Northstar Energy
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Internal Reviewer</p>
                  <p className="text-sm text-gray-600">
                    <strong>Jordan Lee</strong>, Supplier Operations Manager at <strong>Northstar Energy</strong>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Reviews exceptions and approves onboarding cases
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Talk Track</h2>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  "Most onboarding processes fail because the customer sees a black box while internal teams jump
                  between email, documents, ERP, CRM, and compliance tools. This demo shows how a customer-facing
                  experience can be layered on top of existing automations to give customers transparency while
                  allowing internal teams to orchestrate work across people, systems, AI, and robots."
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  "Watch how Maya from Apex Industrial Services sees real-time progress, while Jordan from Northstar
                  Energy manages exceptions with full context. The magic happens behind the scenes—Document
                  Understanding extracts data, Integration Service validates across systems, and Action Center routes
                  exceptions only when needed."
                </p>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Demo Steps</h2>
              </div>
              <div className="space-y-3">
                {[
                  {
                    step: 1,
                    title: 'Show Customer View',
                    description:
                      'Start in Customer View. Point out the progress tracker, uploaded documents with AI extraction confidence, and the bank account mismatch requiring attention.',
                  },
                  {
                    step: 2,
                    title: 'Switch to Operations View',
                    description:
                      'Switch to Operations View. Highlight the queue metrics, automation activity feed showing UiPath events, and the human review task card.',
                  },
                  {
                    step: 3,
                    title: 'Approve the Exception',
                    description:
                      'Click the Approve button in the human review task. Watch the automation activity feed update with ERP creation events.',
                  },
                  {
                    step: 4,
                    title: 'Return to Customer View',
                    description:
                      'Switch back to Customer View. Show the updated status (Approved, 100% progress) and the completion notifications.',
                  },
                  {
                    step: 5,
                    title: 'Show Automation Timeline',
                    description:
                      'Navigate to Automation Timeline. Walk through the end-to-end orchestration flow, explaining each actor and integration point.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-semibold text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Key Value Messages</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Reduce onboarding cycle time from weeks to hours',
                  'Improve customer experience with transparency',
                  'Decrease manual document review by 80%',
                  'Increase compliance and auditability',
                  'Reuse existing internal automations',
                  'Add human review only where needed',
                  'Modernize without replacing core systems',
                  'Scale onboarding capacity without headcount',
                ].map((message, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <CheckSquare className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{message}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Discovery Questions</h2>
              </div>
              <div className="space-y-2">
                {[
                  'How many suppliers/customers do you onboard per month?',
                  'What is your current average onboarding cycle time?',
                  'How many people are involved in the onboarding process?',
                  'What systems do you need to validate against (CRM, ERP, KYC, etc.)?',
                  'How do you currently handle exceptions or missing information?',
                  'What percentage of onboarding cases require human review?',
                  'Do customers have visibility into their onboarding status today?',
                  'What are your biggest pain points in the current process?',
                ].map((question, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="text-sm font-semibold text-amber-600 flex-shrink-0">Q{index + 1}:</span>
                    <p className="text-sm text-gray-700">{question}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}