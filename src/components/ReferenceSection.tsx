import React, { useState } from 'react'
import { Book, BookOpen, Quote, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { QuranReference, HadithReference, BookReference } from '../data/references'

interface ReferenceSectionProps {
  quranRefs: QuranReference[]
  hadithRefs: HadithReference[]
  bookRefs: BookReference[]
}

const ReferenceSection: React.FC<ReferenceSectionProps> = ({ quranRefs, hadithRefs, bookRefs }) => {
  const [activeTab, setActiveTab] = useState<'quran' | 'hadith' | 'books'>('quran')
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'Sahih': return 'bg-green-100 text-green-800'
      case 'Hasan': return 'bg-blue-100 text-blue-800'
      case 'Daif': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getMadzhabColor = (madzhab: string) => {
    switch (madzhab) {
      case 'Hanafi': return 'bg-blue-100 text-blue-800'
      case 'Maliki': return 'bg-purple-100 text-purple-800'
      case 'Syafi\'i': return 'bg-green-100 text-green-800'
      case 'Hanbali': return 'bg-orange-100 text-orange-800'
      case 'Umum': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-qawli-green-100 rounded-lg flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-qawli-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Referensi & Dalil</h3>
          <p className="text-sm text-gray-600">Sumber-sumber rujukan untuk topik ini</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('quran')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'quran'
              ? 'bg-white text-qawli-green-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Book className="w-4 h-4" />
          <span>Al-Qur'an ({quranRefs.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('hadith')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'hadith'
              ? 'bg-white text-qawli-green-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Quote className="w-4 h-4" />
          <span>Hadits ({hadithRefs.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('books')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'books'
              ? 'bg-white text-qawli-green-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Kitab ({bookRefs.length})</span>
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Al-Qur'an References */}
        {activeTab === 'quran' && (
          <div className="space-y-4">
            {quranRefs.length > 0 ? (
              quranRefs.map((ref, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        QS. {ref.surah}: {ref.ayah}
                      </h4>
                      <p className="text-sm text-gray-600">{ref.context}</p>
                    </div>
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="text-qawli-green-600 hover:text-qawli-green-700"
                    >
                      {expandedItems.has(index) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  {expandedItems.has(index) && (
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-arabic text-lg leading-relaxed mb-3 text-right">
                          {ref.arabic}
                        </p>
                        <p className="text-gray-700 italic">"{ref.translation}"</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Book className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>Belum ada referensi Al-Qur'an untuk topik ini</p>
              </div>
            )}
          </div>
        )}

        {/* Hadith References */}
        {activeTab === 'hadith' && (
          <div className="space-y-4">
            {hadithRefs.length > 0 ? (
              hadithRefs.map((ref, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{ref.source}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(ref.grade)}`}>
                          {ref.grade}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Perawi: {ref.narrator} • No. {ref.number}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleExpanded(index + 1000)}
                      className="text-qawli-green-600 hover:text-qawli-green-700"
                    >
                      {expandedItems.has(index + 1000) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  {expandedItems.has(index + 1000) && (
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-arabic text-lg leading-relaxed mb-3 text-right">
                          {ref.arabic}
                        </p>
                        <p className="text-gray-700 italic">"{ref.translation}"</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Quote className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>Belum ada referensi Hadits untuk topik ini</p>
              </div>
            )}
          </div>
        )}

        {/* Book References */}
        {activeTab === 'books' && (
          <div className="space-y-4">
            {bookRefs.length > 0 ? (
              bookRefs.map((ref, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{ref.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMadzhabColor(ref.madzhab)}`}>
                          {ref.madzhab}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Karya: {ref.author}
                        {ref.volume && ref.page && (
                          <span> • Jilid {ref.volume}, hal. {ref.page}</span>
                        )}
                      </p>
                      <p className="text-sm text-gray-700">{ref.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <BookOpen className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>Belum ada referensi kitab untuk topik ini</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ReferenceSection