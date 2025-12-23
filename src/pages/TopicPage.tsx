import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Book, Quote, Droplets, MapPin, Coins, Moon, Users, BookOpen } from 'lucide-react'
import { fiqhTopics, fiqhCategories } from '../data/fiqhData'
import { topicReferences } from '../data/references'
import ReferenceSection from '../components/ReferenceSection'
import GlossaryModal from '../components/GlossaryModal'

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>()
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false)
  
  const topic = fiqhTopics.find(t => t.id === topicId)
  const category = topic ? fiqhCategories.find(cat => cat.id === topic.category) : null
  const references = topicReferences.find(ref => ref.topicId === topicId)

  if (!topic || !category) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Topik tidak ditemukan</h1>
        <Link to="/" className="text-qawli-green-600 hover:text-qawli-green-700">
          Kembali ke beranda
        </Link>
      </div>
    )
  }

  const getIconComponent = (iconName: string) => {
    const icons = {
      'Droplets': Droplets,
      'MapPin': MapPin,
      'Coins': Coins,
      'Moon': Moon,
      'Handshake': Users
    }
    const IconComponent = icons[iconName as keyof typeof icons] || Book
    return <IconComponent className="w-8 h-8 text-qawli-green-600" />
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-qawli-green-600">Beranda</Link>
        <span>/</span>
        <Link to={`/category/${category.id}`} className="hover:text-qawli-green-600">
          {category.title}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{topic.title}</span>
      </div>

      {/* Back Button */}
      <Link 
        to={`/category/${category.id}`}
        className="inline-flex items-center text-qawli-green-600 hover:text-qawli-green-700 font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke {category.title}
      </Link>

      {/* Topic Header */}
      <div className="card">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            {getIconComponent(category.icon)}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{topic.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{topic.summary}</p>
            
            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {topic.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-qawli-green-100 text-qawli-green-800"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-amber-600 text-sm font-bold">!</span>
          </div>
          <div>
            <h3 className="font-medium text-amber-800 mb-1">Catatan Penting</h3>
            <p className="text-amber-700 text-sm">
              Perbedaan pendapat antar madzhab adalah bagian dari kekayaan keilmuan Islam. 
              Setiap pendapat memiliki dalil dan argumentasi yang kuat. Pilihlah yang sesuai 
              dengan kondisi dan pemahaman Anda, atau konsultasikan dengan ulama terpercaya.
            </p>
          </div>
        </div>
      </div>

      {/* Madzhab Opinions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Pendapat Para Madzhab</h2>
        
        <div className="grid gap-6">
          {topic.opinions.map((opinion) => (
            <div key={opinion.madzhab} className="card">
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`madzhab-badge text-lg ${
                    opinion.madzhab === 'Hanafi' ? 'madzhab-hanafi' :
                    opinion.madzhab === 'Maliki' ? 'madzhab-maliki' :
                    opinion.madzhab === 'Syafi\'i' ? 'madzhab-syafii' :
                    'madzhab-hanbali'
                  }`}
                >
                  Madzhab {opinion.madzhab}
                </span>
              </div>

              <div className="space-y-4">
                {/* Opinion */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pendapat:</h4>
                  <p className="text-gray-700 leading-relaxed">{opinion.opinion}</p>
                </div>

                {/* Dalil */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dalil:</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 italic leading-relaxed">{opinion.dalil}</p>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Penjelasan:</h4>
                  <p className="text-gray-700 leading-relaxed">{opinion.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Topics */}
      <div className="bg-qawli-green-50 rounded-lg p-6">
        <h3 className="font-semibold text-qawli-green-900 mb-4">Topik Terkait</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {fiqhTopics
            .filter(t => t.category === topic.category && t.id !== topic.id)
            .slice(0, 4)
            .map((relatedTopic) => (
              <Link
                key={relatedTopic.id}
                to={`/topic/${relatedTopic.id}`}
                className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Book className="w-5 h-5 text-qawli-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">{relatedTopic.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-1">{relatedTopic.summary}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* References Section */}
      {references && (
        <ReferenceSection
          quranRefs={references.quranRefs}
          hadithRefs={references.hadithRefs}
          bookRefs={references.bookRefs}
        />
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setIsGlossaryOpen(true)}
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-qawli-green-100 text-qawli-green-700 rounded-lg hover:bg-qawli-green-200 transition-colors"
        >
          <BookOpen className="w-5 h-5" />
          <span>Buka Glossary</span>
        </button>
        
        <Link
          to={`/category/${category.id}`}
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali ke {category.title}</span>
        </Link>
      </div>

      {/* Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />
    </div>
  )
}

export default TopicPage