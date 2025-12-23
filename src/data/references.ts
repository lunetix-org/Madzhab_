export interface QuranReference {
  surah: string
  ayah: number
  arabic: string
  translation: string
  context: string
}

export interface HadithReference {
  narrator: string
  source: string
  number: string
  arabic: string
  translation: string
  grade: 'Sahih' | 'Hasan' | 'Daif'
}

export interface BookReference {
  title: string
  author: string
  madzhab: 'Hanafi' | 'Maliki' | 'Syafi\'i' | 'Hanbali' | 'Umum'
  volume?: string
  page?: string
  description: string
}

export interface TopicReference {
  topicId: string
  quranRefs: QuranReference[]
  hadithRefs: HadithReference[]
  bookRefs: BookReference[]
}

export const quranReferences: QuranReference[] = [
  {
    surah: 'Al-Maidah',
    ayah: 6,
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ',
    translation: 'Hai orang-orang yang beriman, apabila kamu hendak mengerjakan shalat, maka basuhlah mukamu dan tanganmu sampai dengan siku...',
    context: 'Ayat tentang tata cara wudhu dan tayammum'
  },
  {
    surah: 'Al-Baqarah',
    ayah: 144,
    arabic: 'قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا',
    translation: 'Sungguh Kami (sering) melihat mukamu menengadah ke langit, maka sungguh Kami akan memalingkan kamu ke kiblat yang kamu sukai...',
    context: 'Ayat tentang penetapan qiblat ke arah Ka\'bah'
  },
  {
    surah: 'At-Taubah',
    ayah: 60,
    arabic: 'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا',
    translation: 'Sesungguhnya zakat-zakat itu, hanyalah untuk orang-orang fakir, orang-orang miskin, pengurus-pengurus zakat...',
    context: 'Ayat tentang delapan golongan penerima zakat'
  },
  {
    surah: 'Al-Baqarah',
    ayah: 275,
    arabic: 'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',
    translation: 'Padahal Allah telah menghalalkan jual beli dan mengharamkan riba',
    context: 'Ayat tentang halalnya jual beli dan haramnya riba'
  }
]

export const hadithReferences: HadithReference[] = [
  {
    narrator: 'Abu Hurairah',
    source: 'Sahih Bukhari',
    number: '135',
    arabic: 'إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ أَوِ الْمُؤْمِنُ فَغَسَلَ وَجْهَهُ خَرَجَ مِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ نَظَرَ إِلَيْهَا بِعَيْنَيْهِ مَعَ الْمَاءِ',
    translation: 'Apabila seorang hamba muslim atau mukmin berwudhu lalu membasuh mukanya, maka keluarlah dari mukanya setiap dosa yang dilihat oleh kedua matanya bersama air...',
    grade: 'Sahih'
  },
  {
    narrator: 'Abdullah bin Umar',
    source: 'Sahih Bukhari',
    number: '1909',
    arabic: 'فَرَضَ رَسُولُ اللَّهِ صلى الله عليه وسلم زَكَاةَ الْفِطْرِ صَاعًا مِنْ تَمْرٍ أَوْ صَاعًا مِنْ شَعِيرٍ',
    translation: 'Rasulullah SAW mewajibkan zakat fitrah satu sha\' kurma atau satu sha\' gandum...',
    grade: 'Sahih'
  },
  {
    narrator: 'Aisyah',
    source: 'Sahih Muslim',
    number: '1151',
    arabic: 'مَنْ أَكَلَ نَاسِيًا وَهُوَ صَائِمٌ فَلْيُتِمَّ صَوْمَهُ فَإِنَّمَا أَطْعَمَهُ اللَّهُ وَسَقَاهُ',
    translation: 'Barangsiapa makan karena lupa sedang dia berpuasa, maka hendaklah dia menyempurnakan puasanya, karena sesungguhnya Allah yang memberinya makan dan minum',
    grade: 'Sahih'
  }
]

export const bookReferences: BookReference[] = [
  // Kitab Hanafi
  {
    title: 'Al-Hidayah',
    author: 'Al-Marghinani',
    madzhab: 'Hanafi',
    description: 'Kitab fiqih Hanafi yang sangat terkenal dan banyak dijadikan rujukan'
  },
  {
    title: 'Badai\' as-Sanai\'',
    author: 'Al-Kasani',
    madzhab: 'Hanafi',
    description: 'Kitab fiqih Hanafi yang sangat detail dan komprehensif'
  },
  {
    title: 'Radd al-Muhtar',
    author: 'Ibn Abidin',
    madzhab: 'Hanafi',
    description: 'Hasyiyah terkenal atas kitab Ad-Durr al-Mukhtar'
  },
  
  // Kitab Maliki
  {
    title: 'Al-Muwatta\'',
    author: 'Imam Malik',
    madzhab: 'Maliki',
    description: 'Kitab hadits dan fiqih karya pendiri madzhab Maliki'
  },
  {
    title: 'Ar-Risalah',
    author: 'Ibn Abi Zayd al-Qayrawani',
    madzhab: 'Maliki',
    description: 'Matan fiqih Maliki yang sangat populer'
  },
  {
    title: 'Minhaj at-Talibin',
    author: 'An-Nawawi',
    madzhab: 'Maliki',
    description: 'Kitab fiqih yang banyak dijadikan rujukan'
  },
  
  // Kitab Syafi'i
  {
    title: 'Al-Umm',
    author: 'Imam Syafi\'i',
    madzhab: 'Syafi\'i',
    description: 'Kitab fiqih karya langsung pendiri madzhab Syafi\'i'
  },
  {
    title: 'Al-Majmu\' Syarh al-Muhadzdzab',
    author: 'An-Nawawi',
    madzhab: 'Syafi\'i',
    description: 'Syarah lengkap atas kitab Al-Muhadzdzab'
  },
  {
    title: 'Minhaj at-Talibin',
    author: 'An-Nawawi',
    madzhab: 'Syafi\'i',
    description: 'Matan fiqih Syafi\'i yang sangat terkenal'
  },
  
  // Kitab Hanbali
  {
    title: 'Al-Mughni',
    author: 'Ibn Qudamah',
    madzhab: 'Hanbali',
    description: 'Kitab fiqih Hanbali yang paling komprehensif'
  },
  {
    title: 'Zad al-Mustaqni\'',
    author: 'Al-Hajjawi',
    madzhab: 'Hanbali',
    description: 'Matan fiqih Hanbali yang banyak dipelajari'
  },
  {
    title: 'Kasyf al-Qina\'',
    author: 'Al-Buhuti',
    madzhab: 'Hanbali',
    description: 'Syarah atas Zad al-Mustaqni\''
  },
  
  // Kitab Umum
  {
    title: 'Bidayah al-Mujtahid',
    author: 'Ibn Rusyd',
    madzhab: 'Umum',
    description: 'Kitab perbandingan madzhab yang sangat terkenal'
  },
  {
    title: 'Al-Fiqh \'ala Madhahib al-Arba\'ah',
    author: 'Abdul Rahman al-Jaziri',
    madzhab: 'Umum',
    description: 'Kitab perbandingan fiqih empat madzhab'
  }
]

export const topicReferences: TopicReference[] = [
  {
    topicId: 'wudhu-requirements',
    quranRefs: [
      {
        surah: 'Al-Maidah',
        ayah: 6,
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ',
        translation: 'Hai orang-orang yang beriman, apabila kamu hendak mengerjakan shalat, maka basuhlah mukamu dan tanganmu sampai dengan siku...',
        context: 'Ayat pokok tentang tata cara wudhu'
      }
    ],
    hadithRefs: [
      {
        narrator: 'Abu Hurairah',
        source: 'Sahih Bukhari',
        number: '135',
        arabic: 'إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ أَوِ الْمُؤْمِنُ فَغَسَلَ وَجْهَهُ خَرَجَ مِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ',
        translation: 'Apabila seorang hamba muslim berwudhu lalu membasuh mukanya, maka keluarlah dari mukanya setiap dosa...',
        grade: 'Sahih'
      }
    ],
    bookRefs: [
      {
        title: 'Al-Hidayah',
        author: 'Al-Marghinani',
        madzhab: 'Hanafi',
        volume: '1',
        page: '25',
        description: 'Pembahasan detail tentang syarat-syarat wudhu'
      },
      {
        title: 'Al-Majmu\' Syarh al-Muhadzdzab',
        author: 'An-Nawawi',
        madzhab: 'Syafi\'i',
        volume: '1',
        page: '400',
        description: 'Syarah lengkap tentang wudhu dan syarat-syaratnya'
      }
    ]
  },
  {
    topicId: 'zakat-fitrah',
    quranRefs: [
      {
        surah: 'At-Taubah',
        ayah: 60,
        arabic: 'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا',
        translation: 'Sesungguhnya zakat-zakat itu, hanyalah untuk orang-orang fakir, orang-orang miskin, pengurus-pengurus zakat...',
        context: 'Ayat tentang penerima zakat termasuk zakat fitrah'
      }
    ],
    hadithRefs: [
      {
        narrator: 'Abdullah bin Umar',
        source: 'Sahih Bukhari',
        number: '1909',
        arabic: 'فَرَضَ رَسُولُ اللَّهِ صلى الله عليه وسلم زَكَاةَ الْفِطْرِ صَاعًا مِنْ تَمْرٍ أَوْ صَاعًا مِنْ شَعِيرٍ',
        translation: 'Rasulullah SAW mewajibkan zakat fitrah satu sha\' kurma atau satu sha\' gandum...',
        grade: 'Sahih'
      }
    ],
    bookRefs: [
      {
        title: 'Al-Mughni',
        author: 'Ibn Qudamah',
        madzhab: 'Hanbali',
        volume: '4',
        page: '290',
        description: 'Pembahasan komprehensif tentang zakat fitrah'
      }
    ]
  },
  {
    topicId: 'shalat-times',
    quranRefs: [
      {
        surah: 'An-Nisa',
        ayah: 103,
        arabic: 'إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا',
        translation: 'Sesungguhnya shalat itu adalah fardhu yang ditentukan waktunya atas orang-orang yang beriman',
        context: 'Ayat tentang kewajiban shalat pada waktu yang telah ditentukan'
      }
    ],
    hadithRefs: [
      {
        narrator: 'Abdullah bin Amr',
        source: 'Sahih Muslim',
        number: '612',
        arabic: 'وَقْتُ الظُّهْرِ إِذَا زَالَتِ الشَّمْسُ وَكَانَ ظِلُّ الرَّجُلِ كَطُولِهِ',
        translation: 'Waktu Zhuhur adalah ketika matahari tergelincir dan bayangan seseorang sama dengan tingginya...',
        grade: 'Sahih'
      }
    ],
    bookRefs: [
      {
        title: 'Al-Majmu\' Syarh al-Muhadzdzab',
        author: 'An-Nawawi',
        madzhab: 'Syafi\'i',
        volume: '3',
        page: '25',
        description: 'Pembahasan detail tentang waktu-waktu shalat'
      }
    ]
  },
  {
    topicId: 'buying-selling',
    quranRefs: [
      {
        surah: 'Al-Baqarah',
        ayah: 275,
        arabic: 'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',
        translation: 'Padahal Allah telah menghalalkan jual beli dan mengharamkan riba',
        context: 'Ayat pokok tentang halalnya jual beli'
      }
    ],
    hadithRefs: [
      {
        narrator: 'Rifaah bin Rafi',
        source: 'Sahih Bukhari',
        number: '2072',
        arabic: 'أَيُّ الْكَسْبِ أَطْيَبُ قَالَ عَمَلُ الرَّجُلِ بِيَدِهِ وَكُلُّ بَيْعٍ مَبْرُورٍ',
        translation: 'Pekerjaan apa yang paling baik? Beliau menjawab: Pekerjaan seseorang dengan tangannya dan setiap jual beli yang mabrur',
        grade: 'Sahih'
      }
    ],
    bookRefs: [
      {
        title: 'Bidayah al-Mujtahid',
        author: 'Ibn Rusyd',
        madzhab: 'Umum',
        volume: '2',
        page: '144',
        description: 'Perbandingan pendapat madzhab tentang jual beli'
      }
    ]
  },
  {
    topicId: 'ramadan-fasting',
    quranRefs: [
      {
        surah: 'Al-Baqarah',
        ayah: 185,
        arabic: 'فَمَن شَهِدَ مِنكُمُ الشَّهْرَ فَلْيَصُمْهُ',
        translation: 'Barangsiapa di antara kamu hadir (di negeri tempat tinggalnya) di bulan itu, maka hendaklah ia berpuasa pada bulan itu',
        context: 'Ayat tentang kewajiban puasa Ramadan'
      }
    ],
    hadithRefs: [
      {
        narrator: 'Abu Hurairah',
        source: 'Sahih Bukhari',
        number: '1909',
        arabic: 'صُومُوا لِرُؤْيَتِهِ وَأَفْطِرُوا لِرُؤْيَتِهِ',
        translation: 'Berpuasalah kalian karena melihat hilal dan berbukalah karena melihatnya',
        grade: 'Sahih'
      }
    ],
    bookRefs: [
      {
        title: 'Al-Mughni',
        author: 'Ibn Qudamah',
        madzhab: 'Hanbali',
        volume: '4',
        page: '321',
        description: 'Pembahasan lengkap tentang puasa Ramadan'
      }
    ]
  }
]