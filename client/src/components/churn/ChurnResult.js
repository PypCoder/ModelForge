export default function ChurnResult({ result }) {

  const getRiskLevel = (prob) => {
    return prob > 0.7 ? 'High' : prob > 0.4 ? 'Medium' : 'Low';
  }

  const getRiskColor = (level) => {
    switch (level) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High':
        return 'text-red-600'
      case 'Medium':
        return 'text-yellow-600'
      case 'Low':
        return 'text-green-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Prediction Results</h2>

      {/* Main Result */}
      {result.error ? (
        <div className="text-red-600 font-bold mb-4">Error: {result.error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
            <div className="text-sm font-semibold text-gray-600 mb-2">Churn Probability</div>
            <div className="text-5xl font-bold text-blue-600 mb-2">{result.churn_probability}%</div>
            <div className="text-sm text-gray-600">
            {result.prediction ? 'Customer likely to churn' : 'Customer likely to stay'}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
          <div className="text-sm font-semibold text-gray-600 mb-2">Risk Level</div>
          <div className={`inline-block px-4 py-2 rounded-lg font-bold text-2xl border-2 ${getRiskColor(getRiskLevel(result.probability))}`}>
            {getRiskLevel(result.probability)}
          </div>
          <div className="text-sm text-gray-600 mt-2">
            Based on customer profile analysis
          </div>
        </div>
      </div>
      )}
      {/* Recommendations */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Recommended Actions
        </h3>
        <ul className="space-y-2">
          {result.prediction ? (
            <>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Contact customer within 48 hours with retention offer</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Consider upgrading to longer contract term with discount</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Offer premium support services or loyalty rewards</span>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Customer shows strong retention signals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Consider upselling additional services</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-gray-700">Maintain current service quality and engagement</span>
              </li>
            </>
          )}
        </ul>
      </div>
      
      {/* Key Factors */}
      {/* <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Key Contributing Factors</h3>
        <div className="space-y-3">
          {result.factors.map((factor, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{factor.name}</div>
                <div className="text-sm text-gray-600">{factor.value}</div>
              </div>
              <div className={`font-bold ${getImpactColor(getRiskLevel(factor.impact))}`}>
                {(getRiskLevel(factor.impact))} Impact
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
    
  )
}