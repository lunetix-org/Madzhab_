import React from 'react'
import { Link } from 'react-router-dom'
import { Book, Users, Heart, Search, Droplets, MapPin, Coins, Moon } from 'lucide-react'
import { fiqhCategories } from '../data/fiqhData'

const HomePage: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    const icons = {
      'Droplets': Droplets,
      'MapPin': MapPin,
      'Coins': Coins,
      'Moon': Moon,
      'Handshake': Users
    }
    const IconComponent = icons[iconName as keyof typeof icons] || Book
    return <IconComponent className="w-6 h-6 text-qawli-green-600" />
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Memahami Fiqih dengan
            <span className="text-qawli-green-600"> Bijak & Tenang</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Pelajari hukum Islam dari empat madzhab utama dengan pendekatan ilmiah, 
            netral, dan dewasa. Ruang belajar yang tenang, bukan tempat perdebatan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/category/thaharah" className="btn-primary">
              <Book className="w-5 h-5 mr-2" />
              Mulai Belajar
            </Link>
            <Link to="/about" className="btn-secondary">
              Tentang Madzhab
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card text-center">
          <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-qawli-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Empat Madzhab</h3>
          <p className="text-gray-600">
            Hanafi, Maliki, Syafi'i, dan Hanbali disajikan secara berimbang tanpa memihak
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-qawli-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pendekatan Dewasa</h3>
          <p className="text-gray-600">
            Menghargai perbedaan pendapat sebagai kekayaan keilmuan Islam
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6 text-qawli-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Mudah Dipahami</h3>
          <p className="text-gray-600">
            Bahasa sederhana tanpa menghilangkan kedalaman makna dan dalil
          </p>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Fiqih</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pelajari berbagai aspek fiqih Islam mulai dari ibadah sehari-hari hingga muamalah
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fiqhCategories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="card group hover:border-qawli-green-200"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-qawli-green-200 transition-colors">
                  {getIconComponent(category.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-qawli-green-700">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                  <div className="mt-3 text-sm text-qawli-green-600 font-medium">
                    {category.topics.length} topik →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-qawli-green-500 to-qawli-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Bergabunglah dalam Pembelajaran yang Tenang
        </h2>
        <p className="text-qawli-green-100 mb-6 max-w-2xl mx-auto">
          Madzhab hadir sebagai ruang belajar yang khusyuk, membantu Anda memahami 
          Islam dengan bijak tanpa perdebatan yang memecah belah.
        </p>
        <Link to="/category/thaharah" className="inline-flex items-center bg-white text-qawli-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          <Book className="w-5 h-5 mr-2" />
          Mulai Belajar Sekarang
        </Link>
      </section>
    </div>
  )
}

export default HomePage