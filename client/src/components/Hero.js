export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '700ms'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
              🚀 AI-Powered Machine Learning Platform
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              ModelForge
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Forge your future with cutting-edge machine learning models. 
            From customer predictions to image recognition, we provide 
            production-ready AI solutions for your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#models" className="btn-primary text-lg">
              Explore Models
            </a>
            <button className="btn-secondary text-lg bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              View Documentation
            </button>
          </div>

          <div className="pt-12 flex justify-center gap-12 text-white/80">
            <div>
              <div className="text-4xl font-bold">6+</div>
              <div className="text-sm">ML Models</div>
            </div>
            <div>
              <div className="text-4xl font-bold">99%</div>
              <div className="text-sm">Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}