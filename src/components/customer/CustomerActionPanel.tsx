import { AlertCircle, CheckCircle, Upload, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface CustomerActionPanelProps {
  onConfirm: () => void;
  onUploadDocument?: () => void;
  onSendMessage?: () => void;
}
export function CustomerActionPanel({ onConfirm, onUploadDocument, onSendMessage }: CustomerActionPanelProps) {
  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-amber-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Action Required: Bank Account Verification</h3>
          <p className="text-sm text-gray-700">
            Our system detected a slight difference between your legal entity name and the name on your bank verification
            letter. Please confirm this bank account belongs to your company.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 mb-4 border border-amber-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Legal Entity Name</p>
            <p className="text-sm font-medium text-gray-900">Apex Industrial Services Pty Ltd</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Bank Account Name</p>
            <p className="text-sm font-medium text-gray-900">Apex Industrial Services</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Bank</p>
            <p className="text-sm font-medium text-gray-900">Commonwealth Bank of Australia</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Account Number</p>
            <p className="text-sm font-medium text-gray-900">****4821</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={onConfirm}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Confirm This Account
        </Button>
        <Button
          onClick={onUploadDocument}
          variant="outline"
          className="flex-1 border-gray-300 hover:bg-gray-50"
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload Supporting Document
        </Button>
        <Button
          onClick={onSendMessage}
          variant="outline"
          className="border-gray-300 hover:bg-gray-50"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </div>
    </div>
  );
}