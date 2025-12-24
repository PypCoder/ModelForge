export default function ChurnInfo() {
  return (
    <div className="space-y-6">
      {/* How it Works */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          How It Works
        </h3>
        <ol className="space-y-3 text-sm text-gray-600">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3 text-xs">1</span>
            <span>Enter customer details including tenure, charges, and service information</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3 text-xs">2</span>
            <span>Our ML model analyzes patterns from millions of customer records</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3 text-xs">3</span>
            <span>Receive churn probability and risk assessment in real-time</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3 text-xs">4</span>
            <span>Get actionable recommendations to prevent customer loss</span>
          </li>
        </ol>
      </div>

      {/* Model Info */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Model Performance</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-blue-100">Accuracy</span>
            <span className="text-2xl font-bold">95.3%</span>
          </div>
          <div className="w-full bg-blue-400 rounded-full h-2">
            <div className="bg-white rounded-full h-2" style={{width: '95.3%'}}></div>
          </div>
          
          <div className="flex justify-between items-center pt-2">
            <span className="text-blue-100">Precision</span>
            <span className="text-2xl font-bold">92.8%</span>
          </div>
          <div className="w-full bg-blue-400 rounded-full h-2">
            <div className="bg-white rounded-full h-2" style={{width: '92.8%'}}></div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-blue-100">Recall</span>
            <span className="text-2xl font-bold">89.5%</span>
          </div>
          <div className="w-full bg-blue-400 rounded-full h-2">
            <div className="bg-white rounded-full h-2" style={{width: '89.5%'}}></div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Pro Tip
        </h3>
        <p className="text-sm text-gray-700">
          For best results, ensure all customer data is up-to-date. Historical patterns and recent behavior changes significantly impact prediction accuracy.
        </p>
      </div>
    </div>
  )
}