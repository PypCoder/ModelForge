import SentimentForm from '../../components/sentiment/SentimentForm'

export const metadata = {
  title: 'Sentiment Analyzer - ModelForge',
  description: 'Analyze text sentiment with advanced AI',
}

export default function SentimentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 shadow-lg animate-pulse">
            <span className="text-4xl">💭</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Sentiment Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the emotional tone of any text with our advanced AI-powered sentiment analysis. 
            Perfect for reviews, feedback, social media, and more.
          </p>
        </div>

        {/* Main Form */}
        <SentimentForm />

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-orange-100">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Analysis</h3>
            <p className="text-gray-600 text-sm">Get real-time sentiment scores and emotional insights</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-orange-100">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Language</h3>
            <p className="text-gray-600 text-sm">Analyze sentiment across multiple languages</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-orange-100">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">High Accuracy</h3>
            <p className="text-gray-600 text-sm">Powered by state-of-the-art NLP models</p>
          </div>
        </div>
      </div>
    </div>
  )
}
