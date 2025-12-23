import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Star, Book, Info, Home, BookOpen } from 'lucide-react'
import GlossaryModal from './GlossaryModal'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false)

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-qawli-green-400 to-qawli-green-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Madzhab</h1>
                <p className="text-xs text-gray-500">Fiqih Digital</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-qawli-green-50 text-qawli-green-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Beranda</span>
              </Link>
              <button
                onClick={() => setIsGlossaryOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <BookOpen className="w-4 h-4" />
                <span>Glossary</span>
              </button>
              <Link
                to="/about"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/about') 
                    ? 'bg-qawli-green-50 text-qawli-green-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Info className="w-4 h-4" />
                <span>Tentang</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-qawli-green-400 to-qawli-green-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Madzhab</span>
            </div>
            <p className="text-gray-600 mb-2">
              Memahami fiqih Islam dengan bijak, tenang, dan penuh adab
            </p>
            <p className="text-sm text-gray-500">
              Bagian dari Department of Islamic Knowledge Lunetix
            </p>
          </div>
        </div>
      </footer>

      {/* Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />
    </div>
  )
}

export default Layout