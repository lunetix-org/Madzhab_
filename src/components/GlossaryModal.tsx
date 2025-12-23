import React, { useState, useMemo } from 'react'
import { X, Search, Book, Tag } from 'lucide-react'
import { glossaryTerms, GlossaryTerm } from '../data/glossary'

interface GlossaryModalProps {
  isOpen: boolean
  onClose: () => void
}

const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua')

  const categories = ['Semua', 'Ibadah', 'Muamalah', 'Jinayah', 'Ahwal Syakhsiyyah', 'Umum']

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (term.arabic && term.arabic.includes(searchTerm))
      
      const matchesCategory = selectedCategory === 'Semua' || term.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Ibadah': return 'bg-green-100 text-green-800'
      case 'Muamalah': return 'bg-blue-100 text-blue-800'
      case 'Jinayah': return 'bg-red-100 text-red-800'
      case 'Ahwal Syakhsiyyah': return 'bg-purple-100 text-purple-800'
      case 'Umum': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-qawli-green-100 rounded-lg flex items-center justify-center">
              <Book className="w-6 h-6 text-qawli-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Glossary Fiqih</h2>
              <p className="text-sm text-gray-600">Kamus istilah-istilah dalam fiqih Islam</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search and Filter */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari istilah fiqih..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-qawli-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-qawli-green-100 text-qawli-green-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {filteredTerms.length > 0 ? (
            <div className="grid gap-4">
              {filteredTerms.map((term, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-qawli-green-200 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{term.term}</h3>
                        {term.arabic && (
                          <span className="text-arabic text-lg text-qawli-green-600 font-medium">
                            {term.arabic}
                          </span>
                        )}
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(term.category)}`}>
                        <Tag className="w-3 h-3 mr-1" />
                        {term.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-3">
                    {term.definition}
                  </p>

                  {term.relatedTerms && term.relatedTerms.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">Istilah Terkait:</p>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((relatedTerm, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                          >
                            {relatedTerm}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada hasil</h3>
              <p className="text-gray-600">
                Coba ubah kata kunci pencarian atau pilih kategori yang berbeda
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Total: {filteredTerms.length} istilah</span>
            <span>Glossary Fiqih - Madzhab App</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlossaryModal