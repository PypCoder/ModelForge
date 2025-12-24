'use client'

import { useState } from 'react'
import ChurnResult from './ChurnResult'

export default function ChurnForm() {
  const [formData, setFormData] = useState({
    gender: "Male",
    Partner: "No",
    PaperlessBilling: "Yes",
    TotalCharges: 555,
    InternetService: "Yes",
    OnlineSecurity: "No",
    Contract: "Month-to-month",
    PaymentMethod: "Bank transfer (automatic)"
  })

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('http://127.0.0.1:8000/churn/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error:', error)
      // You can add error handling UI here
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      gender: "Male",
      Partner: "No",
      PaperlessBilling: "Yes",
      TotalCharges: 555,
      InternetService: "Yes",
      OnlineSecurity: "No",
      Contract: "Month-to-month",
      PaymentMethod: "Bank transfer (automatic)"
    })
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Information</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Partner */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Has Partner
              </label>
              <select
                name="Partner"
                value={formData.Partner}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {/* Paperless Billing */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Paperless Billing
              </label>
              <select
                name="PaperlessBilling"
                value={formData.PaperlessBilling}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {/* Total Charges */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Charges ($)
              </label>
              <input
                type="number"
                name="TotalCharges"
                value={formData.TotalCharges}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                placeholder="e.g., 555"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Internet Service */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Internet Service
              </label>
              <select
                name="InternetService"
                value={formData.InternetService}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Online Security */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Online Security
              </label>
              <select
                name="OnlineSecurity"
                value={formData.OnlineSecurity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {/* Contract Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contract Type
              </label>
              <select
                name="Contract"
                value={formData.Contract}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
              >
                <option value="Month-to-month">Month-to-month</option>
                <option value="One year">One year</option>
                <option value="Two year">Two year</option>
              </select>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                name="PaymentMethod"
                value={formData.PaymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
              >
                <option value="Electronic check">Electronic check</option>
                <option value="Mailed check">Mailed check</option>
                <option value="Bank transfer (automatic)">Bank transfer (automatic)</option>
                <option value="Credit card (automatic)">Credit card (automatic)</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                'Predict Churn'
              )}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Result */}
      {result && <ChurnResult result={result} />}
    </div>
  )
}