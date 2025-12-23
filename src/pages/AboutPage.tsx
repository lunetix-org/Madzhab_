import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Heart, Users, Book, Star } from 'lucide-react'

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center text-qawli-green-600 hover:text-qawli-green-700 font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Beranda
      </Link>

      {/* Header */}
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gradient-to-br from-qawli-green-400 to-qawli-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Star className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang Madzhab</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Aplikasi fiqih digital yang dirancang untuk membantu umat Islam memahami 
          hukum Islam secara ilmiah, netral, dan dewasa
        </p>
      </div>

      {/* Mission */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Madzhab hadir sebagai ruang belajar yang tenang, bukan tempat perdebatan. 
          Kami bertujuan menumbuhkan pemahaman serta adab dalam menyikapi perbedaan 
          pendapat ulama dengan menampilkan berbagai pendekatan fiqih dari empat 
          madzhab utama: Hanafi, Maliki, Syafi'i, dan Hanbali.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Kami tidak memosisikan satu pendapat sebagai yang paling benar atau paling salah. 
          Sebaliknya, aplikasi ini menjelaskan bahwa perbedaan fiqih adalah bagian dari 
          kekayaan keilmuan Islam.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-qawli-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Pendekatan Berimbang</h3>
          <p className="text-gray-700">
            Setiap hukum disajikan dengan struktur yang jelas, mulai dari ringkasan 
            permasalahan, penjelasan pendapat masing-masing madzhab, hingga dalil 
            yang digunakan.
          </p>
        </div>

        <div className="card">
          <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center mb-4">
            <Book className="w-6 h-6 text-qawli-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Mudah Dipahami</h3>
          <p className="text-gray-700">
            Menyediakan pendekatan yang praktis namun tetap berlandaskan ilmu dengan 
            bahasa yang sederhana, tanpa menghilangkan kedalaman makna.
          </p>
        </div>

        <div className="card">
          <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-qawli-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Desain Menenangkan</h3>
          <p className="text-gray-700">
            Mengusung desain minimalis dan menenangkan dengan fokus utama pada 
            kenyamanan membaca, visual bersih, warna lembut, dan navigasi sederhana.
          </p>
        </div>

        <div className="card">
          <div className="w-12 h-12 bg-qawli-green-100 rounded-lg flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-qawli-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Ruang Belajar Khusyuk</h3>
          <p className="text-gray-700">
            Bukan aplikasi sosial, tidak menyediakan kolom debat atau komentar bebas, 
            sehingga pengguna dapat belajar dengan fokus dan khusyuk.
          </p>
        </div>
      </div>

      {/* Target Users */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Untuk Siapa Madzhab?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Muslim Awam</h4>
            <p className="text-gray-700 text-sm">
              Yang ingin memahami fiqih ibadah sehari-hari dengan mudah dan praktis
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Pelajar & Mahasiswa</h4>
            <p className="text-gray-700 text-sm">
              Yang sedang mempelajari ilmu fiqih secara akademis
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Penuntut Ilmu</h4>
            <p className="text-gray-700 text-sm">
              Yang ingin belajar fiqih secara tertib dan tidak membingungkan
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Pencari Ketenangan</h4>
            <p className="text-gray-700 text-sm">
              Yang menginginkan pembelajaran Islam yang damai dan tidak memecah belah
            </p>
          </div>
        </div>
      </div>

      {/* Lunetix Ecosystem */}
      <div className="bg-gradient-to-r from-qawli-green-500 to-qawli-green-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Bagian dari Ekosistem Lunetix</h2>
        <p className="text-qawli-green-100 mb-6">
          Sebagai bagian dari Department of Islamic Knowledge Lunetix, Madzhab melengkapi 
          Al-Qur'an Digital, Tafsir Timeline, dan Qawli (Hadits) dalam satu alur keilmuan 
          yang utuh: dari wahyu, penjelasan, hingga praktik hukum.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Al-Qur'an Digital</h4>
            <p className="text-qawli-green-100">Wahyu Allah sebagai sumber utama</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Tafsir Timeline</h4>
            <p className="text-qawli-green-100">Penjelasan dan konteks ayat</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Qawli (Hadits)</h4>
            <p className="text-qawli-green-100">Sunnah Rasulullah SAW</p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="card text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dengan Madzhab, fiqih tidak lagi terasa rumit atau memecah belah, 
          tetapi menjadi sarana memahami Islam dengan bijak, tenang, dan penuh adab.
        </p>
      </div>
    </div>
  )
}

export default AboutPage