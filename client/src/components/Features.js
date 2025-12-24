export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized models deliver predictions in milliseconds'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Enterprise-grade security for your sensitive data'
    },
    {
      icon: '📈',
      title: 'Scalable',
      description: 'Handle millions of requests without breaking a sweat'
    },
    {
      icon: '🎯',
      title: 'High Accuracy',
      description: 'State-of-the-art models with proven performance'
    },
    {
      icon: '🔄',
      title: 'Easy Integration',
      description: 'RESTful APIs that work with any tech stack'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Monitor performance and gain insights in real-time'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose ModelForge?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for developers, designed for scale, optimized for performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}