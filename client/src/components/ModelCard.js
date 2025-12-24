export default function ModelCard({ model }) {
  return (
    <div className="card p-8 group">
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {model.icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {model.title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {model.description}
      </p>

      <div className="space-y-2 mb-6">
        {model.features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-700">
            <svg
              className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </div>
        ))}
      </div>

      <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-md hover:shadow-lg">
        Try Now →
      </button>
    </div>
  )
}