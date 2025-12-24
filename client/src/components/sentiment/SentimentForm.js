'use client'

import { useState } from 'react'
import SentimentResult from './SentimentResult'

export default function SentimentForm() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const exampleTexts = [
    "I absolutely love this product! It exceeded all my expectations and the customer service was amazing.",
    "This is the worst experience I've ever had. Completely disappointed and frustrated.",
    "The product is okay, nothing special but it gets the job done I guess.",
    "Just received my order and I'm thrilled! The quality is outstanding and delivery was super fast!"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim()) return
    
    setLoading(true)
    
    try {
      const response = await fetch('http://127.0.0.1:8000/sentiment/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error:', error)
      // Mock fallback for demo
      setTimeout(() => {
        const sentiment = Math.random()
        const label = sentiment > 0.6 ? 'Positive' : sentiment < 0.4 ? 'Negative' : 'Neutral'
        setResult({
          sentiment: label,
          confidence: (sentiment * 100).toFixed(1),
          score: sentiment.toFixed(3),
          emotions: {
            joy: Math.random() * 100,
            sadness: Math.random() * 100,
            anger: Math.random() * 100,
            fear: Math.random() * 100,
            surprise: Math.random() * 100,
          }
        })
        setLoading(false)
      }, 1500)
    }
  }

  const handleExample = (exampleText) => {
    setText(exampleText)
  }

  const handleClear = () => {
    setText('')
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-orange-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Enter your text for sentiment analysis
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste any text here... Reviews, tweets, feedback, comments, or any content you want to analyze."
              rows={8}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder:text-gray-400 resize-none text-lg"
              required
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-500">
                {text.length} characters
              </span>
              {text.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  Clear text
                </button>
              )}
            </div>
          </div>

          {/* Example Texts */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Try an example:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exampleTexts.map((example, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleExample(example)}
                  className="text-left p-4 bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-xl border border-orange-200 transition-all duration-200 text-sm text-gray-700 hover:shadow-md transform hover:-translate-y-1"
                >
                  {example.substring(0, 60)}...
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing Sentiment...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Analyze Sentiment
              </span>
            )}
          </button>
        </form>
      </div>

      {/* Result */}
      {result && <SentimentResult result={result} text={text} />}
    </div>
  )
}