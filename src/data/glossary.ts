export interface GlossaryTerm {
  term: string
  arabic?: string
  definition: string
  category: 'Ibadah' | 'Muamalah' | 'Jinayah' | 'Ahwal Syakhsiyyah' | 'Umum'
  relatedTerms?: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  // Istilah Thaharah
  {
    term: 'Wudhu',
    arabic: 'وضوء',
    definition: 'Bersuci dengan membasuh anggota tubuh tertentu dengan air suci untuk menghilangkan hadats kecil',
    category: 'Ibadah',
    relatedTerms: ['Tayammum', 'Ghusl', 'Hadats']
  },
  {
    term: 'Tayammum',
    arabic: 'تيمم',
    definition: 'Bersuci dengan debu/tanah suci sebagai pengganti wudhu atau mandi ketika tidak ada air atau tidak bisa menggunakan air',
    category: 'Ibadah',
    relatedTerms: ['Wudhu', 'Ghusl']
  },
  {
    term: 'Ghusl',
    arabic: 'غسل',
    definition: 'Mandi besar untuk menghilangkan hadats besar dengan cara membasuh seluruh tubuh dengan air suci',
    category: 'Ibadah',
    relatedTerms: ['Janabah', 'Hadats', 'Wudhu']
  },
  {
    term: 'Najis',
    arabic: 'نجس',
    definition: 'Kotoran yang menurut syariat Islam harus dihindari dan dibersihkan karena dapat membatalkan shalat',
    category: 'Ibadah',
    relatedTerms: ['Suci', 'Thaharah']
  },
  {
    term: 'Hadats',
    arabic: 'حدث',
    definition: 'Keadaan tidak suci yang menghalangi seseorang untuk melakukan ibadah tertentu seperti shalat',
    category: 'Ibadah',
    relatedTerms: ['Wudhu', 'Ghusl', 'Janabah']
  },

  // Istilah Shalat
  {
    term: 'Qiblat',
    arabic: 'قبلة',
    definition: 'Arah yang harus dihadapi ketika melaksanakan shalat, yaitu ke arah Ka\'bah di Makkah',
    category: 'Ibadah',
    relatedTerms: ['Ka\'bah', 'Shalat']
  },
  {
    term: 'Qashar',
    arabic: 'قصر',
    definition: 'Memendekkan shalat empat rakaat menjadi dua rakaat ketika dalam perjalanan',
    category: 'Ibadah',
    relatedTerms: ['Jamak', 'Safar', 'Shalat']
  },
  {
    term: 'Jamak',
    arabic: 'جمع',
    definition: 'Menggabungkan dua waktu shalat dalam satu waktu karena uzur tertentu',
    category: 'Ibadah',
    relatedTerms: ['Qashar', 'Safar']
  },
  {
    term: 'Imam',
    arabic: 'إمام',
    definition: 'Orang yang memimpin shalat berjamaah dan diikuti oleh makmum',
    category: 'Ibadah',
    relatedTerms: ['Makmum', 'Jamaah']
  },
  {
    term: 'Makmum',
    arabic: 'مأموم',
    definition: 'Orang yang mengikuti imam dalam shalat berjamaah',
    category: 'Ibadah',
    relatedTerms: ['Imam', 'Jamaah']
  },

  // Istilah Zakat
  {
    term: 'Nisab',
    arabic: 'نصاب',
    definition: 'Batas minimal harta yang wajib dikeluarkan zakatnya',
    category: 'Ibadah',
    relatedTerms: ['Zakat', 'Haul']
  },
  {
    term: 'Haul',
    arabic: 'حول',
    definition: 'Masa satu tahun penuh kepemilikan harta yang mencapai nisab',
    category: 'Ibadah',
    relatedTerms: ['Nisab', 'Zakat']
  },
  {
    term: 'Mustahiq',
    arabic: 'مستحق',
    definition: 'Orang yang berhak menerima zakat, terdiri dari delapan golongan',
    category: 'Ibadah',
    relatedTerms: ['Zakat', 'Fakir', 'Miskin']
  },
  {
    term: 'Usyur',
    arabic: 'عشر',
    definition: 'Zakat pertanian sebesar 10% untuk tanaman yang diairi hujan atau 5% untuk yang diairi dengan usaha',
    category: 'Ibadah',
    relatedTerms: ['Zakat', 'Pertanian']
  },

  // Istilah Puasa
  {
    term: 'Ru\'yah',
    arabic: 'رؤية',
    definition: 'Melihat hilal (bulan sabit) untuk menentukan awal bulan Hijriah',
    category: 'Ibadah',
    relatedTerms: ['Hilal', 'Ramadan']
  },
  {
    term: 'Hilal',
    arabic: 'هلال',
    definition: 'Bulan sabit yang tampak pada awal bulan Hijriah',
    category: 'Ibadah',
    relatedTerms: ['Ru\'yah', 'Ramadan']
  },
  {
    term: 'Iftar',
    arabic: 'إفطار',
    definition: 'Berbuka puasa atau membatalkan puasa',
    category: 'Ibadah',
    relatedTerms: ['Puasa', 'Sahur']
  },
  {
    term: 'Sahur',
    arabic: 'سحور',
    definition: 'Makan dan minum sebelum fajar untuk mempersiapkan puasa',
    category: 'Ibadah',
    relatedTerms: ['Puasa', 'Iftar']
  },
  {
    term: 'Kaffarah',
    arabic: 'كفارة',
    definition: 'Denda atau tebusan yang harus dibayar karena melanggar atau membatalkan ibadah tertentu',
    category: 'Ibadah',
    relatedTerms: ['Fidyah', 'Puasa']
  },
  {
    term: 'Fidyah',
    arabic: 'فدية',
    definition: 'Tebusan berupa makanan atau uang untuk orang yang tidak mampu berpuasa karena uzur',
    category: 'Ibadah',
    relatedTerms: ['Kaffarah', 'Puasa']
  },

  // Istilah Muamalah
  {
    term: 'Riba',
    arabic: 'ربا',
    definition: 'Tambahan yang diambil dalam transaksi jual beli atau hutang piutang yang dilarang dalam Islam',
    category: 'Muamalah',
    relatedTerms: ['Jual Beli', 'Hutang']
  },
  {
    term: 'Gharar',
    arabic: 'غرر',
    definition: 'Ketidakpastian atau spekulasi yang berlebihan dalam transaksi yang dapat merugikan salah satu pihak',
    category: 'Muamalah',
    relatedTerms: ['Jual Beli', 'Akad']
  },
  {
    term: 'Akad',
    arabic: 'عقد',
    definition: 'Perjanjian atau kontrak antara dua pihak atau lebih dalam transaksi',
    category: 'Muamalah',
    relatedTerms: ['Ijab', 'Qabul']
  },
  {
    term: 'Ijab',
    arabic: 'إيجاب',
    definition: 'Penawaran atau pernyataan kehendak dari pihak pertama dalam akad',
    category: 'Muamalah',
    relatedTerms: ['Qabul', 'Akad']
  },
  {
    term: 'Qabul',
    arabic: 'قبول',
    definition: 'Penerimaan atau persetujuan dari pihak kedua terhadap ijab dalam akad',
    category: 'Muamalah',
    relatedTerms: ['Ijab', 'Akad']
  },
  {
    term: 'Syirkah',
    arabic: 'شركة',
    definition: 'Kemitraan atau kerjasama dalam bisnis antara dua pihak atau lebih',
    category: 'Muamalah',
    relatedTerms: ['Mudharabah', 'Musyarakah']
  },
  {
    term: 'Mudharabah',
    arabic: 'مضاربة',
    definition: 'Kerjasama bisnis antara pemilik modal (rabbul mal) dengan pengelola (mudharib)',
    category: 'Muamalah',
    relatedTerms: ['Syirkah', 'Modal']
  },

  // Istilah Umum
  {
    term: 'Fiqih',
    arabic: 'فقه',
    definition: 'Ilmu yang membahas hukum-hukum syariat Islam yang bersifat praktis berdasarkan dalil-dalil yang terperinci',
    category: 'Umum',
    relatedTerms: ['Syariat', 'Hukum']
  },
  {
    term: 'Madzhab',
    arabic: 'مذهب',
    definition: 'Aliran atau metode dalam memahami dan menafsirkan hukum Islam',
    category: 'Umum',
    relatedTerms: ['Fiqih', 'Ijtihad']
  },
  {
    term: 'Ijtihad',
    arabic: 'اجتهاد',
    definition: 'Usaha sungguh-sungguh para ulama untuk mengeluarkan hukum syariat dari dalil-dalilnya',
    category: 'Umum',
    relatedTerms: ['Madzhab', 'Qiyas']
  },
  {
    term: 'Qiyas',
    arabic: 'قياس',
    definition: 'Menyamakan hukum suatu masalah dengan masalah lain karena ada kesamaan illat (sebab hukum)',
    category: 'Umum',
    relatedTerms: ['Ijtihad', 'Illat']
  },
  {
    term: 'Ijma\'',
    arabic: 'إجماع',
    definition: 'Kesepakatan para ulama mujtahid dalam satu masa tentang suatu hukum syariat',
    category: 'Umum',
    relatedTerms: ['Ijtihad', 'Ulama']
  },
  {
    term: 'Sunnah',
    arabic: 'سنة',
    definition: 'Perkataan, perbuatan, atau ketetapan Nabi Muhammad SAW yang menjadi sumber hukum Islam',
    category: 'Umum',
    relatedTerms: ['Hadits', 'Nabi']
  }
]