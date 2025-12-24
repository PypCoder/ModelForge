import Hero from '../components/Hero'
import ModelCard from '../components/ModelCard'
import Features from '../components/Features'

const models = [
  {
    id: 'churn',
    title: 'Churn Predictor',
    description: 'Predict customer churn with high accuracy using advanced machine learning algorithms. Identify at-risk customers before they leave.',
    icon: '📊',
    color: 'from-blue-500 to-cyan-500',
    features: ['Real-time predictions', 'Customer segmentation', 'Retention insights']
  },
  {
    id: 'house-price',
    title: 'House Price Predictor',
    description: 'Get accurate real estate valuations powered by comprehensive market data and predictive modeling techniques.',
    icon: '🏠',
    color: 'from-purple-500 to-pink-500',
    features: ['Market analysis', 'Price forecasting', 'Location insights']
  },
  {
    id: 'spam',
    title: 'Spam Detector',
    description: 'Intelligent email classification system that filters spam with precision using natural language processing.',
    icon: '🛡️',
    color: 'from-green-500 to-emerald-500',
    features: ['NLP-powered', '99% accuracy', 'Real-time filtering']
  },
  {
    id: 'sentiment',
    title: 'Sentiment Analyzer',
    description: 'Analyze text sentiment and emotional tone across reviews, social media, and customer feedback with AI.',
    icon: '💭',
    color: 'from-orange-500 to-red-500',
    features: ['Multi-language support', 'Emotion detection', 'Trend analysis']
  },
  {
    id: 'image',
    title: 'Image Classifier',
    description: 'State-of-the-art computer vision model for accurate image recognition and classification tasks.',
    icon: '🖼️',
    color: 'from-indigo-500 to-blue-500',
    features: ['Deep learning', 'Multi-class detection', 'High precision']
  },
  {
    id: 'recommendation',
    title: 'Recommendation Engine',
    description: 'Personalized recommendation system that learns user preferences to suggest relevant products and content.',
    icon: '🎯',
    color: 'from-pink-500 to-rose-500',
    features: ['Collaborative filtering', 'Content-based', 'Hybrid approach']
  }
]

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Models Section */}
      <section id="models" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our ML Models
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our suite of pre-trained machine learning models, ready to integrate into your applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>
      
      <Features />
    </>
  )
}


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         Next
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.js file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
