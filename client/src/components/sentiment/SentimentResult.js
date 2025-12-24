export default function SentimentResult({ result, text }) {
  const getSentimentColor = (sentiment) => {
    switch (sentiment?.toLowerCase()) {
      case 'positive':
        return {
          gradient: 'from-green-500 to-emerald-500',
          bg: 'bg-green-50',
          text: 'text-green-700',
          border: 'border-green-200',
          icon: '😊',
        }
      case 'negative':
        return {
          gradient: 'from-red-500 to-rose-500',
          bg: 'bg-red-50',
          text: 'text-red-700',
          border: 'border-red-200',
          icon: '😞',
        }
      case 'neutral':
        return {
          gradient: 'from-gray-500 to-slate-500',
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          border: 'border-gray-200',
          icon: '😐',
        }
      default:
        return {
          gradient: 'from-blue-500 to-cyan-500',
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          border: 'border-blue-200',
          icon: '🤔',
        }
    }
  }

  const colors = getSentimentColor(result.sentiment)

  const emotions = result.emotions || {}
  const emotionList = [
    { name: 'Joy', value: emotions.joy || 0, icon: '😄', color: 'bg-yellow-400' },
    { name: 'Sadness', value: emotions.sadness || 0, icon: '😢', color: 'bg-blue-400' },
    { name: 'Anger', value: emotions.anger || 0, icon: '😠', color: 'bg-red-400' },
    { name: 'Fear', value: emotions.fear || 0, icon: '😨', color: 'bg-purple-400' },
    { name: 'Surprise', value: emotions.surprise || 0, icon: '😲', color: 'bg-pink-400' },
  ].sort((a, b) => b.value - a.value)

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Main Result Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-orange-100">
        {/* Header with Gradient */}
        <div className={`bg-gradient-to-r ${colors.gradient} p-8 text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm font-semibold mb-2">Overall Sentiment</p>
              <h2 className="text-5xl font-bold flex items-center">
                <span className="text-6xl mr-4">{colors.icon}</span>
                {result.sentiment}
              </h2>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm font-semibold mb-2">Confidence</p>
              <div className="text-5xl font-bold">{result.confidence}%</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Analyzed Text */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Analyzed Text
            </h3>
            <div className={`p-6 rounded-xl ${colors.bg} border-2 ${colors.border}`}>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </div>
          </div>

          {/* Sentiment Score Bar */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Sentiment Score
              </h3>
              <span className="text-sm font-semibold text-gray-600">Score: {result.confidence}</span>
            </div>
            <div className="relative">
              <div className="w-full h-8 bg-gradient-to-r from-red-200 via-gray-200 to-green-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                  style={{ width: `${result.confidence}%` }}
                >
                  <span className="text-white font-bold text-sm">{result.confidence}%</span>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-semibold text-gray-500">
                <span>Negative</span>
                {/* <span>Neutral</span> */}
                <span>Positive</span>
              </div>
            </div>
          </div>

          {/* Emotion Breakdown */}
          {/* {emotions && Object.keys(emotions).length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Emotion Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {emotionList.map((emotion) => (
                  <div key={emotion.name} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{emotion.icon}</span>
                      <span className="text-2xl font-bold text-gray-900">{emotion.value.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div 
                        className={`h-full ${emotion.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${emotion.value}%` }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">{emotion.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {/* Insights */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Insights
            </h3>
            <ul className="space-y-2">
              {result.sentiment === 'Positive' && (
                <>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>The text expresses strong positive emotions and satisfaction</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>High confidence indicates clear positive sentiment markers</span>
                  </li>
                </>
              )}
              {result.sentiment === 'Negative' && (
                <>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>The text contains negative emotions and dissatisfaction</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Consider addressing the concerns expressed in this feedback</span>
                  </li>
                </>
              )}
              {result.sentiment === 'Neutral' && (
                <>
                  <li className="flex items-start text-gray-700">
                    <span className="text-gray-500 mr-2">–</span>
                    <span>The text maintains a balanced or factual tone</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-gray-500 mr-2">–</span>
                    <span>No strong emotional indicators detected</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}