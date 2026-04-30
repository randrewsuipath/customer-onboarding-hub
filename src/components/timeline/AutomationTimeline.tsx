import { useState } from 'react';
import { CheckCircle, FileText, Database, Users, Cog, Building2, ArrowRight } from 'lucide-react';
interface ProcessNode {
  id: string;
  label: string;
  actor: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}
const processNodes: ProcessNode[] = [
  {
    id: 'node-1',
    label: 'Customer Submits',
    actor: 'Customer',
    description: 'Customer submits onboarding package with profile, documents, and compliance information',
    icon: <Users className="w-5 h-5" />,
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
  {
    id: 'node-2',
    label: 'Portal Creates Case',
    actor: 'Web Portal',
    description: 'Portal creates onboarding business entity and initiates workflow',
    icon: <FileText className="w-5 h-5" />,
    color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  },
  {
    id: 'node-3',
    label: 'Document Extraction',
    actor: 'Document Understanding',
    description: 'AI classifies and extracts data from uploaded documents with confidence scores',
    icon: <Database className="w-5 h-5" />,
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },
  {
    id: 'node-4',
    label: 'System Validations',
    actor: 'Integration Service',
    description: 'Parallel validations run across CRM, ERP, KYC, tax, and banking systems',
    icon: <Cog className="w-5 h-5" />,
    color: 'bg-green-100 text-green-700 border-green-300',
  },
  {
    id: 'node-5',
    label: 'Exception Routing',
    actor: 'UiPath Orchestrator',
    description: 'Exception detected and routed to Action Center for human review',
    icon: <Cog className="w-5 h-5" />,
    color: 'bg-amber-100 text-amber-700 border-amber-300',
  },
  {
    id: 'node-6',
    label: 'Human Review',
    actor: 'Human Reviewer',
    description: 'Reviewer approves exception with contextual data and recommendation',
    icon: <Users className="w-5 h-5" />,
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
  {
    id: 'node-7',
    label: 'ERP Record Creation',
    actor: 'Robot/API',
    description: 'Robot or API creates supplier/customer record in enterprise system',
    icon: <Building2 className="w-5 h-5" />,
    color: 'bg-green-100 text-green-700 border-green-300',
  },
  {
    id: 'node-8',
    label: 'Customer Confirmation',
    actor: 'Customer',
    description: 'Customer receives confirmation and welcome package',
    icon: <CheckCircle className="w-5 h-5" />,
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
];
const actors = [
  { name: 'Customer', color: 'bg-blue-50 border-blue-200' },
  { name: 'Web Portal', color: 'bg-indigo-50 border-indigo-200' },
  { name: 'Document Understanding', color: 'bg-purple-50 border-purple-200' },
  { name: 'Integration Service', color: 'bg-green-50 border-green-200' },
  { name: 'UiPath Orchestrator', color: 'bg-amber-50 border-amber-200' },
  { name: 'Human Reviewer', color: 'bg-blue-50 border-blue-200' },
  { name: 'Robot/API', color: 'bg-green-50 border-green-200' },
];
export function AutomationTimeline() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              End-to-End Automation Timeline
            </h1>
            <p className="text-gray-600">
              Visual representation of the complete onboarding orchestration flow across systems, people, and robots
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Actors</h2>
            <div className="flex flex-wrap gap-2">
              {actors.map((actor) => (
                <div
                  key={actor.name}
                  className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${actor.color}`}
                >
                  {actor.name}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="space-y-4">
              {processNodes.map((node, index) => (
                <div key={node.id} className="relative">
                  <div
                    className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedNode === node.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 flex items-center justify-center ${node.color}`}>
                      {node.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-gray-900">{node.label}</h3>
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium">
                          {node.actor}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{node.description}</p>
                    </div>
                  </div>
                  {index < processNodes.length - 1 && (
                    <div className="flex justify-center my-2">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">Key Orchestration Points</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Document Understanding extracts data with 92% average confidence</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Integration Service runs parallel validations across 5+ systems</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Action Center routes exceptions to human reviewers with context</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Robots/APIs create records in ERP after approval</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}