export interface MadzhabOpinion {
  madzhab: 'Hanafi' | 'Maliki' | 'Syafi\'i' | 'Hanbali'
  opinion: string
  dalil: string
  explanation: string
}

export interface FiqhTopic {
  id: string
  title: string
  summary: string
  category: string
  opinions: MadzhabOpinion[]
  keywords: string[]
}

export interface FiqhCategory {
  id: string
  title: string
  description: string
  icon: string
  topics: string[]
}

export const fiqhCategories: FiqhCategory[] = [
  {
    id: 'thaharah',
    title: 'Thaharah (Bersuci)',
    description: 'Hukum-hukum bersuci, wudhu, tayammum, dan mandi',
    icon: 'Droplets',
    topics: ['wudhu-requirements', 'tayammum-conditions', 'ghusl-obligations', 'najis-types', 'water-purification', 'menstruation-rules']
  },
  {
    id: 'shalat',
    title: 'Shalat',
    description: 'Hukum-hukum shalat, waktu, dan tata caranya',
    icon: 'MapPin',
    topics: ['shalat-times', 'qiblat-direction', 'shalat-travel', 'shalat-jamaah', 'shalat-jumat', 'shalat-eid', 'shalat-janazah']
  },
  {
    id: 'zakat',
    title: 'Zakat',
    description: 'Hukum-hukum zakat, nisab, dan distribusinya',
    icon: 'Coins',
    topics: ['zakat-mal', 'zakat-fitrah', 'zakat-distribution', 'zakat-agriculture', 'zakat-livestock', 'zakat-trade']
  },
  {
    id: 'puasa',
    title: 'Puasa',
    description: 'Hukum-hukum puasa Ramadan dan puasa sunnah',
    icon: 'Moon',
    topics: ['ramadan-fasting', 'fasting-invalidators', 'makeup-fasting', 'sunnah-fasting', 'fidyah-kaffarah', 'itikaf-rules']
  },
  {
    id: 'muamalah',
    title: 'Muamalah',
    description: 'Hukum-hukum jual beli, hutang piutang, dan transaksi',
    icon: 'Handshake',
    topics: ['buying-selling', 'riba-interest', 'business-partnership', 'debt-rules', 'inheritance-law', 'marriage-contract']
  }
]

export const fiqhTopics: FiqhTopic[] = [
  {
    id: 'wudhu-requirements',
    title: 'Syarat-Syarat Wudhu',
    summary: 'Perbedaan pendapat ulama mengenai syarat-syarat sahnya wudhu',
    category: 'thaharah',
    keywords: ['wudhu', 'syarat', 'bersuci', 'air'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Air yang digunakan harus suci dan menyucikan, tidak harus mengalir',
        dalil: 'QS. Al-Maidah: 6 dan hadits tentang air yang suci',
        explanation: 'Madzhab Hanafi menekankan pada kesucian air tanpa mensyaratkan air harus mengalir'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Air harus suci, menyucikan, dan tidak berubah sifatnya',
        dalil: 'Hadits: "Air itu suci dan tidak ada yang menajiskannya"',
        explanation: 'Madzhab Maliki lebih detail dalam menjelaskan sifat-sifat air yang boleh digunakan'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Air harus mutlak (tidak bercampur) dan suci',
        dalil: 'QS. Al-Furqan: 48 dan hadits tentang air hujan',
        explanation: 'Madzhab Syafi\'i mensyaratkan air harus dalam keadaan asli tanpa campuran'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Air harus suci dan tidak berubah karena najis',
        dalil: 'Hadits tentang sumur Budha\'ah dan air yang banyak',
        explanation: 'Madzhab Hanbali fokus pada kemurnian air dari najis'
      }
    ]
  },
  {
    id: 'shalat-times',
    title: 'Waktu-Waktu Shalat',
    summary: 'Perbedaan pendapat mengenai awal dan akhir waktu shalat',
    category: 'shalat',
    keywords: ['waktu shalat', 'awal waktu', 'akhir waktu'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Waktu Ashar dimulai ketika bayangan sama dengan panjang benda ditambah bayangan saat zawal',
        dalil: 'Hadits Jibril tentang waktu shalat',
        explanation: 'Madzhab Hanafi memiliki perhitungan khusus untuk waktu Ashar'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Waktu Ashar dimulai ketika bayangan sama dengan panjang benda',
        dalil: 'Hadits tentang bayangan dan waktu shalat',
        explanation: 'Madzhab Maliki menggunakan perhitungan bayangan yang lebih sederhana'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Waktu Ashar dimulai ketika bayangan sama dengan panjang benda',
        dalil: 'Hadits Jibril dan hadits tentang bayangan',
        explanation: 'Madzhab Syafi\'i sejalan dengan Maliki dalam perhitungan waktu Ashar'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Waktu Ashar dimulai ketika bayangan sama dengan panjang benda',
        dalil: 'Hadits sahih tentang waktu shalat',
        explanation: 'Madzhab Hanbali mengikuti mayoritas ulama dalam perhitungan waktu'
      }
    ]
  },
  {
    id: 'zakat-mal',
    title: 'Zakat Harta (Mal)',
    summary: 'Ketentuan nisab, haul, dan kadar zakat harta',
    category: 'zakat',
    keywords: ['zakat', 'nisab', 'haul', 'harta'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Zakat emas 20 dinar, perak 200 dirham, kadar 2.5%',
        dalil: 'Hadits tentang nisab emas dan perak',
        explanation: 'Madzhab Hanafi menggunakan standar klasik untuk nisab'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Nisab emas 20 mitsqal, perak 200 dirham, wajib setelah satu tahun',
        dalil: 'Hadits Nabi tentang zakat dan praktek sahabat',
        explanation: 'Madzhab Maliki menekankan pada kelengkapan haul (satu tahun)'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Nisab emas 20 dinar, perak 200 dirham, dihitung per tahun hijriah',
        dalil: 'Hadits sahih tentang zakat dan ijma ulama',
        explanation: 'Madzhab Syafi\'i detail dalam perhitungan waktu dan kadar'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Mengikuti nisab yang ditetapkan Nabi dengan perhitungan yang ketat',
        dalil: 'Hadits mutawatir tentang zakat',
        explanation: 'Madzhab Hanbali sangat berpegang pada nash yang jelas'
      }
    ]
  },
  // THAHARAH - Topik Tambahan
  {
    id: 'tayammum-conditions',
    title: 'Syarat dan Rukun Tayammum',
    summary: 'Ketentuan tayammum sebagai pengganti wudhu dalam kondisi tertentu',
    category: 'thaharah',
    keywords: ['tayammum', 'debu', 'tidak ada air', 'sakit'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Tayammum boleh dengan debu bersih, tanah, atau batu yang mengandung debu',
        dalil: 'QS. An-Nisa: 43 dan hadits tentang tayammum',
        explanation: 'Madzhab Hanafi memperluas media tayammum selama mengandung unsur tanah'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Tayammum harus dengan tanah murni yang bersih dan suci',
        dalil: 'Hadits: "Tanah itu suci dan alat bersuci bagi umat Islam"',
        explanation: 'Madzhab Maliki lebih ketat dalam menentukan media tayammum'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Tayammum dengan tanah bersih, boleh juga dengan batu dan pasir',
        dalil: 'QS. Al-Maidah: 6 dan hadits tentang tayammum di perjalanan',
        explanation: 'Madzhab Syafi\'i memberikan fleksibilitas dalam media tayammum'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Tayammum dengan segala yang berasal dari bumi yang suci',
        dalil: 'Hadits sahih tentang tayammum dan praktek sahabat',
        explanation: 'Madzhab Hanbali paling fleksibel dalam menentukan media tayammum'
      }
    ]
  },
  {
    id: 'ghusl-obligations',
    title: 'Kewajiban Mandi Janabah',
    summary: 'Hal-hal yang mewajibkan mandi besar dan tata caranya',
    category: 'thaharah',
    keywords: ['mandi janabah', 'junub', 'haid', 'nifas'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Mandi wajib karena jimak, keluarnya mani, haid, dan nifas',
        dalil: 'QS. Al-Maidah: 6 dan hadits tentang mandi janabah',
        explanation: 'Madzhab Hanafi menekankan pada keluarnya mani sebagai penyebab janabah'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Mandi wajib karena bersetubuh meski tidak keluar mani, haid, nifas',
        dalil: 'Hadits: "Apabila duduk di antara empat cabang lalu menyentuhnya"',
        explanation: 'Madzhab Maliki mewajibkan mandi hanya karena penetrasi'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Mandi wajib karena keluarnya mani dengan syahwat atau bersetubuh',
        dalil: 'Hadits tentang mandi janabah dan praktek Nabi SAW',
        explanation: 'Madzhab Syafi\'i menggabungkan kedua pendapat dengan syarat syahwat'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Mandi wajib karena keluarnya mani, bersetubuh, haid, nifas, dan masuk Islam',
        dalil: 'Hadits mutawatir tentang sebab-sebab mandi',
        explanation: 'Madzhab Hanbali menambahkan masuk Islam sebagai sebab mandi'
      }
    ]
  },
  {
    id: 'najis-types',
    title: 'Jenis-Jenis Najis dan Cara Mensucikannya',
    summary: 'Klasifikasi najis dan metode pembersihannya menurut para ulama',
    category: 'thaharah',
    keywords: ['najis', 'kotoran', 'darah', 'air kencing'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Najis dibagi menjadi najis ringan, sedang, dan berat dengan cara pembersihan berbeda',
        dalil: 'Hadits tentang najis dan cara membersihkannya',
        explanation: 'Madzhab Hanafi mengklasifikasi najis berdasarkan tingkat kekotorannya'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Najis harus dibersihkan hingga hilang warna, bau, dan rasanya',
        dalil: 'Hadits tentang membersihkan najis di masjid',
        explanation: 'Madzhab Maliki fokus pada hilangnya sifat-sifat najis'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Najis dibersihkan dengan air hingga hilang atau dengan cara khusus untuk najis tertentu',
        dalil: 'Hadits tentang berbagai cara membersihkan najis',
        explanation: 'Madzhab Syafi\'i memberikan metode khusus untuk jenis najis tertentu'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Najis dibersihkan dengan air atau cara lain yang menghilangkan sifat najis',
        dalil: 'Hadits sahih tentang pembersihan najis',
        explanation: 'Madzhab Hanbali fleksibel dalam metode pembersihan najis'
      }
    ]
  },
  // SHALAT - Topik Tambahan
  {
    id: 'qiblat-direction',
    title: 'Penentuan Arah Qiblat',
    summary: 'Cara menentukan arah qiblat dan hukum salah arah dalam shalat',
    category: 'shalat',
    keywords: ['qiblat', 'kiblat', 'arah', 'Ka\'bah'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Wajib menghadap Ka\'bah bagi yang melihatnya, arah qiblat bagi yang jauh',
        dalil: 'QS. Al-Baqarah: 144 dan hadits tentang qiblat',
        explanation: 'Madzhab Hanafi membedakan antara yang dekat dan jauh dari Ka\'bah'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Menghadap arah qiblat sudah cukup, tidak harus tepat ke Ka\'bah',
        dalil: 'QS. Al-Baqarah: 115 tentang arah manapun ada wajah Allah',
        explanation: 'Madzhab Maliki memberikan kelonggaran dalam penentuan arah'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Wajib ijtihad menentukan qiblat dengan cara yang tersedia',
        dalil: 'Hadits tentang shalat di atas kendaraan dan penentuan qiblat',
        explanation: 'Madzhab Syafi\'i menekankan pada usaha maksimal menentukan arah'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Menghadap qiblat dengan keyakinan terkuat berdasarkan dalil yang ada',
        dalil: 'Hadits sahih tentang qiblat dan praktek sahabat',
        explanation: 'Madzhab Hanbali mengutamakan keyakinan dalam penentuan qiblat'
      }
    ]
  },
  {
    id: 'shalat-travel',
    title: 'Shalat dalam Perjalanan (Qashar)',
    summary: 'Hukum memendekkan dan menjamak shalat saat bepergian',
    category: 'shalat',
    keywords: ['qashar', 'jamak', 'safar', 'perjalanan'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Qashar wajib dalam perjalanan minimal 3 hari (sekitar 77 km) dengan niat safar',
        dalil: 'Hadits tentang qashar dan praktek Nabi dalam perjalanan',
        explanation: 'Madzhab Hanafi mewajibkan qashar dengan syarat jarak dan waktu tertentu'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Qashar boleh dalam perjalanan 4 burud (sekitar 80 km) selama 4 hari',
        dalil: 'Hadits tentang perjalanan Nabi dan praktek sahabat',
        explanation: 'Madzhab Maliki memberikan pilihan antara qashar atau shalat penuh'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Qashar sunnah dalam perjalanan 2 marhalah (sekitar 80 km)',
        dalil: 'Hadits sahih tentang qashar dan jamak dalam perjalanan',
        explanation: 'Madzhab Syafi\'i menganggap qashar sebagai sunnah, bukan wajib'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Qashar boleh dalam perjalanan sejauh 80 km dengan niat safar',
        dalil: 'Hadits mutawatir tentang qashar dalam perjalanan',
        explanation: 'Madzhab Hanbali fleksibel dalam penerapan qashar'
      }
    ]
  },
  {
    id: 'shalat-jamaah',
    title: 'Shalat Berjamaah dan Imamah',
    summary: 'Hukum shalat berjamaah, syarat imam, dan tata tertib dalam jamaah',
    category: 'shalat',
    keywords: ['jamaah', 'imam', 'makmum', 'berjamaah'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Shalat jamaah sunnah muakkad, imam harus laki-laki untuk jamaah campuran',
        dalil: 'Hadits tentang keutamaan shalat jamaah 27 derajat',
        explanation: 'Madzhab Hanafi menekankan pada syarat imam dan keutamaan jamaah'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Shalat jamaah wajib kifayah, perempuan boleh jadi imam untuk sesama perempuan',
        dalil: 'Hadits tentang kewajiban shalat jamaah dan praktek sahabiyah',
        explanation: 'Madzhab Maliki memberikan ruang bagi perempuan dalam imamah terbatas'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Shalat jamaah sunnah muakkad dengan syarat-syarat imam yang ketat',
        dalil: 'Hadits tentang syarat imam dan adab dalam jamaah',
        explanation: 'Madzhab Syafi\'i detail dalam mengatur syarat dan adab jamaah'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Shalat jamaah wajib bagi laki-laki yang mampu tanpa uzur syar\'i',
        dalil: 'Hadits sahih tentang kewajiban menghadiri jamaah',
        explanation: 'Madzhab Hanbali paling tegas dalam mewajibkan shalat jamaah'
      }
    ]
  },
  // ZAKAT - Topik Tambahan
  {
    id: 'zakat-fitrah',
    title: 'Zakat Fitrah (Zakat Fithri)',
    summary: 'Kewajiban zakat fitrah, kadar, waktu, dan cara pembayarannya',
    category: 'zakat',
    keywords: ['zakat fitrah', 'fitri', 'ramadan', 'beras'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Zakat fitrah 1 sha\' (3,5 kg) makanan pokok atau nilai uangnya',
        dalil: 'Hadits tentang zakat fitrah dan praktek sahabat',
        explanation: 'Madzhab Hanafi membolehkan pembayaran dengan uang senilai makanan'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Zakat fitrah harus berupa makanan pokok daerah setempat',
        dalil: 'Hadits Ibn Umar tentang zakat fitrah dengan kurma dan gandum',
        explanation: 'Madzhab Maliki menekankan pembayaran dengan makanan, bukan uang'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Zakat fitrah 1 sha\' beras atau makanan pokok, tidak boleh dengan uang',
        dalil: 'Hadits sahih tentang zakat fitrah dengan makanan',
        explanation: 'Madzhab Syafi\'i melarang pembayaran zakat fitrah dengan uang'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Zakat fitrah dengan makanan pokok, boleh uang jika lebih maslahat',
        dalil: 'Hadits mutawatir tentang zakat fitrah',
        explanation: 'Madzhab Hanbali fleksibel berdasarkan kemaslahatan'
      }
    ]
  },
  {
    id: 'zakat-distribution',
    title: 'Distribusi dan Penerima Zakat',
    summary: 'Delapan golongan penerima zakat dan cara pendistribusiannya',
    category: 'zakat',
    keywords: ['mustahiq', 'fakir', 'miskin', 'amil'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Zakat dibagi ke 8 asnaf, boleh diberikan ke satu asnaf saja jika perlu',
        dalil: 'QS. At-Taubah: 60 tentang penerima zakat',
        explanation: 'Madzhab Hanafi fleksibel dalam distribusi berdasarkan kebutuhan'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Zakat harus didistribusikan sesuai kebutuhan masing-masing asnaf',
        dalil: 'Ayat zakat dan praktek Khalifah Umar',
        explanation: 'Madzhab Maliki menekankan pada keadilan distribusi'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Zakat harus dibagi ke semua asnaf yang ada di daerah tersebut',
        dalil: 'QS. At-Taubah: 60 dan hadits tentang distribusi zakat',
        explanation: 'Madzhab Syafi\'i mengharuskan pembagian merata jika memungkinkan'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Zakat dibagi berdasarkan prioritas dan kebutuhan mendesak',
        dalil: 'Hadits sahih tentang zakat dan praktek sahabat',
        explanation: 'Madzhab Hanbali mengutamakan skala prioritas dalam distribusi'
      }
    ]
  },
  // PUASA - Topik Tambahan
  {
    id: 'ramadan-fasting',
    title: 'Puasa Ramadan dan Ru\'yah Hilal',
    summary: 'Penentuan awal Ramadan, syarat puasa, dan hal-hal yang membatalkan',
    category: 'puasa',
    keywords: ['ramadan', 'hilal', 'ru\'yah', 'syawal'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Ru\'yah hilal cukup satu orang adil, boleh dengan hisab jika mendung',
        dalil: 'Hadits tentang ru\'yah hilal dan praktek sahabat',
        explanation: 'Madzhab Hanafi memberikan kelonggaran dalam penentuan hilal'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Ru\'yah hilal harus dengan saksi yang dapat dipercaya',
        dalil: 'Hadits tentang kesaksian ru\'yah dan kehati-hatian',
        explanation: 'Madzhab Maliki menekankan pada kredibilitas saksi'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Ru\'yah hilal dengan saksi adil, jika tidak terlihat digenapkan 30 hari',
        dalil: 'Hadits sahih tentang ru\'yah dan istikmal',
        explanation: 'Madzhab Syafi\'i mengutamakan ru\'yah langsung dengan backup istikmal'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Ru\'yah hilal dengan saksi terpercaya, boleh hisab sebagai pendukung',
        dalil: 'Hadits mutawatir tentang ru\'yah hilal',
        explanation: 'Madzhab Hanbali terbuka pada bantuan hisab astronomi'
      }
    ]
  },
  {
    id: 'fasting-invalidators',
    title: 'Pembatal Puasa dan Hal yang Dibolehkan',
    summary: 'Hal-hal yang membatalkan puasa dan yang tidak membatalkan puasa',
    category: 'puasa',
    keywords: ['batal puasa', 'makan', 'minum', 'jimak'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Puasa batal dengan makan, minum, jimak dengan sengaja. Lupa tidak membatalkan',
        dalil: 'Hadits tentang yang lupa makan saat puasa',
        explanation: 'Madzhab Hanafi memberikan keringanan bagi yang lupa'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Puasa batal dengan makan, minum, jimak, muntah sengaja, dan haid',
        dalil: 'Hadits tentang pembatal puasa dan praktek sahabat',
        explanation: 'Madzhab Maliki menambahkan muntah sengaja sebagai pembatal'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Puasa batal dengan masuknya sesuatu ke rongga badan dengan sengaja',
        dalil: 'Hadits sahih tentang pembatal puasa',
        explanation: 'Madzhab Syafi\'i detail dalam menentukan apa yang masuk ke badan'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Puasa batal dengan makan, minum, jimak, dan keluarnya darah haid/nifas',
        dalil: 'Hadits mutawatir tentang pembatal puasa',
        explanation: 'Madzhab Hanbali mengikuti dalil-dalil yang jelas'
      }
    ]
  },
  // MUAMALAH - Topik Tambahan
  {
    id: 'buying-selling',
    title: 'Jual Beli dan Syarat Sahnya',
    summary: 'Rukun, syarat, dan jenis-jenis akad jual beli dalam Islam',
    category: 'muamalah',
    keywords: ['jual beli', 'akad', 'ijab qabul', 'barang'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Jual beli sah dengan ijab qabul, barang jelas, dan harga yang disepakati',
        dalil: 'QS. Al-Baqarah: 275 dan hadits tentang jual beli',
        explanation: 'Madzhab Hanafi menekankan pada kejelasan akad dan objek'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Jual beli sah dengan akad yang jelas, barang halal, dan tidak ada gharar',
        dalil: 'Hadits tentang larangan gharar dalam jual beli',
        explanation: 'Madzhab Maliki sangat menghindari unsur ketidakpastian'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Jual beli harus memenuhi rukun dan syarat yang lengkap',
        dalil: 'Hadits sahih tentang syarat-syarat jual beli',
        explanation: 'Madzhab Syafi\'i detail dalam mengatur rukun dan syarat'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Jual beli sah dengan akad yang tidak bertentangan dengan syariat',
        dalil: 'Hadits mutawatir tentang jual beli dan muamalah',
        explanation: 'Madzhab Hanbali fleksibel selama tidak melanggar syariat'
      }
    ]
  },
  {
    id: 'riba-interest',
    title: 'Riba dan Transaksi yang Dilarang',
    summary: 'Jenis-jenis riba, hukumnya, dan alternatif transaksi yang halal',
    category: 'muamalah',
    keywords: ['riba', 'bunga', 'fadhl', 'nasiah'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Riba terbagi menjadi riba fadhl dan nasiah, keduanya haram',
        dalil: 'QS. Al-Baqarah: 275-279 dan hadits tentang riba',
        explanation: 'Madzhab Hanafi mengklasifikasi riba berdasarkan jenisnya'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Riba dalam 6 jenis barang ribawi dan segala yang serupa dengannya',
        dalil: 'Hadits tentang 6 jenis barang ribawi',
        explanation: 'Madzhab Maliki memperluas larangan pada barang sejenis'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Riba haram dalam pertukaran barang sejenis dan berbeda jenis ribawi',
        dalil: 'Hadits sahih tentang riba dan qiyas pada barang ribawi',
        explanation: 'Madzhab Syafi\'i menggunakan qiyas untuk barang ribawi'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Riba haram dalam segala bentuk tambahan tanpa imbalan yang setara',
        dalil: 'Hadits mutawatir tentang larangan riba',
        explanation: 'Madzhab Hanbali komprehensif dalam melarang riba'
      }
    ]
  }
  ,
  // THAHARAH - Topik Lanjutan
  {
    id: 'water-purification',
    title: 'Jenis-Jenis Air dan Kemurniannya',
    summary: 'Klasifikasi air menurut syariat dan penggunaannya untuk bersuci',
    category: 'thaharah',
    keywords: ['air', 'suci', 'menyucikan', 'mutlak'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Air terbagi menjadi suci menyucikan, suci tidak menyucikan, dan najis',
        dalil: 'Hadits tentang air dan klasifikasinya',
        explanation: 'Madzhab Hanafi membagi air berdasarkan fungsi penyuciannya'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Air suci selama tidak berubah karena najis, boleh digunakan untuk bersuci',
        dalil: 'Hadits: "Air itu suci dan tidak ada yang menajiskannya"',
        explanation: 'Madzhab Maliki lebih sederhana dalam klasifikasi air'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Air mutlak saja yang boleh untuk bersuci, air musyammas makruh',
        dalil: 'Hadits tentang air mutlak dan air yang dipanaskan matahari',
        explanation: 'Madzhab Syafi\'i ketat dalam syarat air untuk bersuci'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Air suci dan menyucikan selama tidak berubah karena najis',
        dalil: 'Hadits sahih tentang air dan kemurniannya',
        explanation: 'Madzhab Hanbali praktis dalam menentukan kemurnian air'
      }
    ]
  },
  {
    id: 'menstruation-rules',
    title: 'Hukum Haid dan Nifas',
    summary: 'Ketentuan haid, nifas, istihadhah dan hukum-hukum yang berkaitan',
    category: 'thaharah',
    keywords: ['haid', 'nifas', 'istihadhah', 'perempuan'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Haid minimal 3 hari maksimal 10 hari, nifas maksimal 40 hari',
        dalil: 'Hadits tentang masa haid dan nifas',
        explanation: 'Madzhab Hanafi memberikan batasan waktu yang jelas'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Haid biasanya 6-7 hari, nifas biasanya 60 hari dengan variasi individual',
        dalil: 'Hadits dan praktek perempuan pada masa Nabi',
        explanation: 'Madzhab Maliki mempertimbangkan kebiasaan individual'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Haid minimal 1 hari maksimal 15 hari, nifas maksimal 60 hari',
        dalil: 'Hadits sahih tentang haid dan pengalaman sahabiyah',
        explanation: 'Madzhab Syafi\'i memberikan rentang waktu yang lebih luas'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Haid dan nifas sesuai kebiasaan masing-masing perempuan',
        dalil: 'Hadits tentang kembali pada kebiasaan',
        explanation: 'Madzhab Hanbali paling fleksibel mengikuti kebiasaan alami'
      }
    ]
  },
  // SHALAT - Topik Lanjutan
  {
    id: 'shalat-jumat',
    title: 'Shalat Jumat dan Syarat-Syaratnya',
    summary: 'Kewajiban shalat Jumat, syarat sah, dan khutbah Jumat',
    category: 'shalat',
    keywords: ['jumat', 'khutbah', 'jamaah', 'wajib'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Jumat wajib bagi laki-laki mukallaf dengan syarat mukim dan tidak ada uzur',
        dalil: 'QS. Al-Jumu\'ah: 9 dan hadits tentang kewajiban Jumat',
        explanation: 'Madzhab Hanafi menekankan syarat mukim untuk wajib Jumat'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Jumat wajib bagi laki-laki baligh dengan jamaah minimal 12 orang',
        dalil: 'Hadits tentang jamaah Jumat dan praktek di Madinah',
        explanation: 'Madzhab Maliki menentukan jumlah minimal jamaah'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Jumat wajib dengan syarat 40 orang laki-laki mukallaf mukim',
        dalil: 'Hadits tentang syarat jamaah Jumat',
        explanation: 'Madzhab Syafi\'i paling ketat dalam syarat jumlah jamaah'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Jumat wajib bagi yang mampu dengan jamaah yang mencukupi',
        dalil: 'Hadits sahih tentang kewajiban Jumat',
        explanation: 'Madzhab Hanbali fleksibel dalam menentukan syarat jamaah'
      }
    ]
  },
  {
    id: 'shalat-eid',
    title: 'Shalat Hari Raya (Eid)',
    summary: 'Hukum shalat Idul Fitri dan Idul Adha serta tata caranya',
    category: 'shalat',
    keywords: ['eid', 'idul fitri', 'idul adha', 'takbir'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Shalat Eid wajib dengan khutbah setelah shalat, takbir 3 dan 3',
        dalil: 'Hadits tentang shalat Eid dan praktek Nabi',
        explanation: 'Madzhab Hanafi mewajibkan shalat Eid dengan tata cara khusus'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Shalat Eid sunnah muakkad dengan takbir 6 dan 5',
        dalil: 'Hadits tentang shalat Eid dan variasi takbir',
        explanation: 'Madzhab Maliki menganggap shalat Eid sebagai sunnah muakkad'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Shalat Eid sunnah kifayah dengan takbir 7 dan 5',
        dalil: 'Hadits sahih tentang shalat Eid dan jumlah takbir',
        explanation: 'Madzhab Syafi\'i detail dalam mengatur jumlah takbir'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Shalat Eid fardhu kifayah dengan takbir sesuai kemampuan',
        dalil: 'Hadits mutawatir tentang shalat Eid',
        explanation: 'Madzhab Hanbali fleksibel dalam jumlah takbir'
      }
    ]
  },
  // ZAKAT - Topik Lanjutan
  {
    id: 'zakat-agriculture',
    title: 'Zakat Pertanian dan Hasil Bumi',
    summary: 'Zakat tanaman, buah-buahan, dan hasil pertanian lainnya',
    category: 'zakat',
    keywords: ['pertanian', 'tanaman', 'buah', 'usyur'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Zakat pertanian 10% jika diairi hujan, 5% jika diairi dengan usaha',
        dalil: 'Hadits tentang zakat pertanian dan usyur',
        explanation: 'Madzhab Hanafi membedakan berdasarkan cara pengairan'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Zakat wajib pada semua hasil bumi yang bisa disimpan dan menjadi makanan pokok',
        dalil: 'Hadits tentang zakat hasil bumi dan praktek sahabat',
        explanation: 'Madzhab Maliki memperluas objek zakat pertanian'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Zakat wajib pada 4 jenis: gandum, kurma, anggur kering, dan padi',
        dalil: 'Hadits sahih tentang jenis tanaman yang wajib dizakati',
        explanation: 'Madzhab Syafi\'i membatasi pada jenis tertentu saja'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Zakat wajib pada semua yang ditanam manusia untuk dimakan dan disimpan',
        dalil: 'Hadits tentang zakat pertanian dan qiyas',
        explanation: 'Madzhab Hanbali paling luas dalam objek zakat pertanian'
      }
    ]
  },
  // PUASA - Topik Lanjutan
  {
    id: 'sunnah-fasting',
    title: 'Puasa-Puasa Sunnah',
    summary: 'Jenis-jenis puasa sunnah dan keutamaannya dalam Islam',
    category: 'puasa',
    keywords: ['puasa sunnah', 'senin kamis', 'arafah', 'asyura'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Puasa sunnah dianjurkan seperti Senin-Kamis, Arafah, dan Asyura',
        dalil: 'Hadits tentang keutamaan puasa sunnah',
        explanation: 'Madzhab Hanafi menganjurkan berbagai puasa sunnah'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Puasa sunnah baik dilakukan dengan tidak berlebihan',
        dalil: 'Hadits tentang puasa sunnah dan larangan berlebihan',
        explanation: 'Madzhab Maliki menekankan keseimbangan dalam puasa sunnah'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Puasa sunnah sangat dianjurkan dengan berbagai jenis dan waktu',
        dalil: 'Hadits sahih tentang macam-macam puasa sunnah',
        explanation: 'Madzhab Syafi\'i sangat menganjurkan puasa sunnah'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Puasa sunnah mustahab dengan memperhatikan kemampuan',
        dalil: 'Hadits tentang puasa sunnah dan kemampuan',
        explanation: 'Madzhab Hanbali mempertimbangkan kemampuan individual'
      }
    ]
  },
  // MUAMALAH - Topik Lanjutan
  {
    id: 'business-partnership',
    title: 'Syirkah dan Kemitraan Bisnis',
    summary: 'Jenis-jenis syirkah, syarat, dan pembagian keuntungan dalam Islam',
    category: 'muamalah',
    keywords: ['syirkah', 'partnership', 'mudharabah', 'musyarakah'],
    opinions: [
      {
        madzhab: 'Hanafi',
        opinion: 'Syirkah sah dengan akad yang jelas dan pembagian yang adil',
        dalil: 'Hadits tentang syirkah dan praktek sahabat',
        explanation: 'Madzhab Hanafi menekankan kejelasan akad dalam syirkah'
      },
      {
        madzhab: 'Maliki',
        opinion: 'Syirkah boleh dalam berbagai bentuk dengan syarat tidak ada gharar',
        dalil: 'Hadits tentang kemitraan dan larangan gharar',
        explanation: 'Madzhab Maliki fleksibel dalam bentuk syirkah'
      },
      {
        madzhab: 'Syafi\'i',
        opinion: 'Syirkah harus memenuhi rukun dan syarat yang lengkap',
        dalil: 'Hadits sahih tentang syarat-syarat syirkah',
        explanation: 'Madzhab Syafi\'i detail dalam mengatur syirkah'
      },
      {
        madzhab: 'Hanbali',
        opinion: 'Syirkah sah selama tidak bertentangan dengan prinsip syariat',
        dalil: 'Hadits tentang syirkah dan muamalah',
        explanation: 'Madzhab Hanbali terbuka pada inovasi syirkah yang syar\'i'
      }
    ]
  }
]