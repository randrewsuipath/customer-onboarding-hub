import { FileText, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { Document, DocumentStatus, ValidationStatus } from '../../types/onboarding';
import { formatTimestamp, formatConfidence, getConfidenceColor } from '../../utils/formatters';
interface DocumentCardsProps {
  documents: Document[];
}
export function DocumentCards({ documents }: DocumentCardsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Documents</h2>
      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={`border rounded-lg p-4 ${
              doc.validationStatus === ValidationStatus.Warning || doc.validationStatus === ValidationStatus.Failed
                ? 'border-amber-200 bg-amber-50'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{doc.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Uploaded {formatTimestamp(doc.uploadedAt)}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {doc.status === DocumentStatus.Validated && doc.validationStatus === ValidationStatus.Passed && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium border border-green-200">
                        <CheckCircle className="w-3 h-3" />
                        Validated
                      </span>
                    )}
                    {(doc.status === DocumentStatus.ValidationFailed ||
                      doc.validationStatus === ValidationStatus.Warning) && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium border border-amber-200">
                        <AlertTriangle className="w-3 h-3" />
                        Needs Review
                      </span>
                    )}
                    {doc.status === DocumentStatus.Extracting && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium border border-blue-200">
                        <Clock className="w-3 h-3" />
                        Extracting
                      </span>
                    )}
                  </div>
                </div>
                {doc.extractionConfidence !== undefined && (
                  <div className="mb-2">
                    <p className="text-xs text-gray-500 mb-1">AI Extraction Confidence</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            doc.extractionConfidence >= 95
                              ? 'bg-green-500'
                              : doc.extractionConfidence >= 85
                              ? 'bg-blue-500'
                              : doc.extractionConfidence >= 75
                              ? 'bg-amber-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${doc.extractionConfidence}%` }}
                        />
                      </div>
                      <span className={`text-xs font-medium ${getConfidenceColor(doc.extractionConfidence)}`}>
                        {formatConfidence(doc.extractionConfidence)}
                      </span>
                    </div>
                  </div>
                )}
                {doc.extractedFields && doc.extractedFields.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs font-medium text-gray-700 mb-2">Extracted Information</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {doc.extractedFields.map((field, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="text-gray-500">{field.name}:</span>{' '}
                          <span className="text-gray-900 font-medium">{field.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {doc.validationMessage && (
                  <div
                    className={`mt-3 p-2 rounded-lg text-xs ${
                      doc.validationStatus === ValidationStatus.Warning
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{doc.validationMessage}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}