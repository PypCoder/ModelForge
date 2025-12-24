'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const models = [
    { 
      href: '/churn', 
      label: 'Churn Predictor', 
      icon: '📊',
      description: 'Predict customer churn',
      color: 'text-blue-600'
    },
    { 
      href: '/house-price', 
      label: 'House Price Predictor', 
      icon: '🏠',
      description: 'Real estate valuations',
      color: 'text-purple-600'
    },
    { 
      href: '/spam', 
      label: 'Spam Detector', 
      icon: '🛡️',
      description: 'Email classification',
      color: 'text-green-600'
    },
    { 
      href: '/sentiment', 
      label: 'Sentiment Analyzer', 
      icon: '💭',
      description: 'Text sentiment analysis',
      color: 'text-orange-600'
    },
    { 
      href: '/image', 
      label: 'Image Classifier', 
      icon: '🖼️',
      description: 'Computer vision',
      color: 'text-indigo-600'
    },
    { 
      href: '/recommendation', 
      label: 'Recommendation Engine', 
      icon: '🎯',
      description: 'Personalized suggestions',
      color: 'text-pink-600'
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsModelsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-3xl transform group-hover:scale-110 transition-transform duration-200">
              🔥
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              ModelForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-200 hover:scale-105 relative group ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Models Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsModelsDropdownOpen(!isModelsDropdownOpen)}
                className={`font-medium transition-all duration-200 flex items-center space-x-1 relative group ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                <span>Models</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isModelsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              {isModelsDropdownOpen && (
                <div className="absolute top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 animate-fadeIn">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Choose a Model
                    </p>
                  </div>
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {models.map((model) => (
                      <Link
                        key={model.href}
                        href={model.href}
                        onClick={() => setIsModelsDropdownOpen(false)}
                        className="flex items-start px-4 py-3 hover:bg-gradient-to-r hover:from-primary-50 hover:to-cyan-50 transition-all duration-200 group"
                      >
                        <div className={`text-3xl mr-3 transform group-hover:scale-110 transition-transform duration-200`}>
                          {model.icon}
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold ${model.color} group-hover:text-primary-700 transition-colors`}>
                            {model.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {model.description}
                          </div>
                        </div>
                        <svg 
                          className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <Link 
                      href="/#models"
                      onClick={() => setIsModelsDropdownOpen(false)}
                      className="text-xs text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                    >
                      View All Models
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <button className="btn-primary transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-white rounded-xl shadow-xl p-4 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-cyan-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Models Section */}
            <div className="pt-2">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Models
              </div>
              {models.map((model) => (
                <Link
                  key={model.href}
                  href={model.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-cyan-50 rounded-lg transition-all duration-200"
                >
                  <span className="text-2xl mr-3">{model.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{model.label}</div>
                    <div className="text-xs text-gray-500">{model.description}</div>
                  </div>
                </Link>
              ))}
            </div>

            <button className="btn-primary w-full mt-4">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}