import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Book, Droplets, MapPin, Coins, Moon, Users } from 'lucide-react'
import { fiqhCategories, fiqhTopics } from '../data/fiqhData'

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>()
  
  const category = fiqhCategories.find(cat => cat.id === categoryId)
  const categoryTopics = fiqhTopics.filter(topic => topic.category === categoryId)

  if (!category) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Kategori tidak ditemukan</h1>
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
    return <IconComponent className="w-12 h-12 text-qawli-green-600" />
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-qawli-green-600">Beranda</Link>
        <span>/</span>
        <span className="text-gray-900">{category.title}</span>
      </div>

      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center text-qawli-green-600 hover:text-qawli-green-700 font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Beranda
      </Link>

      {/* Category Header */}
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-qawli-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          {getIconComponent(category.icon)}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {category.description}
        </p>
      </div>

      {/* Topics Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Topik Pembahasan</h2>
        
        {categoryTopics.length > 0 ? (
          <div className="grid gap-6">
            {categoryTopics.map((topic) => (
              <Link
                key={topic.id}
                to={`/topic/${topic.id}`}
                className="card group hover:border-qawli-green-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-qawli-green-700">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {topic.summary}
                    </p>
                    
                    {/* Madzhab badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.opinions.map((opinion) => (
                        <span
                          key={opinion.madzhab}
                          className={`madzhab-badge ${
                            opinion.madzhab === 'Hanafi' ? 'madzhab-hanafi' :
                            opinion.madzhab === 'Maliki' ? 'madzhab-maliki' :
                            opinion.madzhab === 'Syafi\'i' ? 'madzhab-syafii' :
                            'madzhab-hanbali'
                          }`}
                        >
                          {opinion.madzhab}
                        </span>
                      ))}
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2">
                      {topic.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="ml-6 flex-shrink-0">
                    <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center group-hover:bg-qawli-green-200 transition-colors">
                      <Book className="w-6 h-6 text-qawli-green-600" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Book className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum Ada Topik</h3>
            <p className="text-gray-600">
              Topik untuk kategori ini sedang dalam pengembangan
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage