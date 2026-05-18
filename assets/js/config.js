/*
  CONFIG WEB ROMANTIS
  Foto dan video dari folder web.zip kamu sudah dimasukkan dan dioptimasi.
  Ubah bagian ini saja kalau mau ganti PIN, nomor WA, teks, caption, foto, dan musik.
*/
window.APP_CONFIG = {

  pin: "141105",
  whatsappNumber: "6282325031301", // ganti ke nomor WA kamu. contoh: 62812xxxx

  messages: {
    introTitle: "Udaa yaa, sama sama turunin ego yaaa sayanggg 🥺💗",
    introText: "Ayo selesaiin masalah ini baik-baik. Aku masih pengen kita ngobrol pelan-pelan, bukan saling ninggalin.",
    yesText: "Iya, kita selesaiin baik-baik 💚",
    noText: "Tidak dulu 😔",
    thanksTitle: "Yeyyyy maacihhh sayangggg 💗🥰🥰🥰🥰",
    thanksText: "Aku tau kamu pasti masih mau berjuang demi hubungan kita. Sekarang ayo kita ngobrol baik-baik yaa.",
    homeTitle: "Untuk kamu, orang yang aku sayangggg🥰🥰🥰🥰",
    homeText: "Sayanggg🥰🥰🥰🥰, aku bikin ini bukan buat menang sendiri. Aku cuma pengen kita berhenti saling keras, lalu bareng buat nyari jalan tengah. Aku minta maaf kalau ada sikapku yang bikin kamu capek. Aku masih mau belajar, masih mau dengerin kamu, dan masih mau pertahanin kita.",
    contactText: "Maaciii sayanggg udah dibikinin web nyaa 💗 Aku mau kita selesaiin masalah ini baik-baik yaa, ayo ngobrol pelan-pelan sayanggg 🥺, akuu jugaaa kangenn kamuuu sayangg🥺, tapi akuuu cuma sedii ajaa🥺, sekarang ayooo kita selesaiin masalah kita yaa, kita cari solusi agar sama sama enakk yaa sayangggg🥰🥰🥰🥰"
  },

  gifs: {
    intro: "assets/gif/download (1).gif",
    hug: "assets/gif/download.gif"
  },


  heroImage: "assets/img/user/hero-main.jpg",

  // Data Home + detail foto. img = thumbnail aman agar wajah tidak gampang kepotong, fullImg = foto full untuk halaman detail.
  memories: [
  {
    "id": "gallery-1",
    "title": "Kita Berdua",
    "date": "Kenangan 1",
    "img": "assets/img/user/gallery-1-thumb.jpg",
    "fullImg": "assets/img/user/gallery-1-full.jpg",
    "desc": "Hehe ini pertama kali kita foto deket gini yaaa sayangggg🥰🥰🥰🥰."
  },
  {
    "id": "gallery-2",
    "title": "Foto Favorit",
    "date": "Kenangan 2",
    "img": "assets/img/user/gallery-2-thumb.jpg",
    "fullImg": "assets/img/user/gallery-2-full.jpg",
    "desc": "ini jugaa abis maam bakso hehe, tapi kek kaku T_T, tapi dak papa dehh🥰🥰🥰🥰."
  },
  {
    "id": "gallery-3",
    "title": "Momen Manis",
    "date": "Kenangan 3",
    "img": "assets/img/user/gallery-3-thumb.jpg",
    "fullImg": "assets/img/user/gallery-3-full.jpg",
    "desc": "Ini momen pas kita fotbar pas bukber hehe, lucuuu 🥰🥰🥰🥰."
  },
  {
    "id": "gallery-4",
    "title": "Masih Tentang Kita",
    "date": "Kenangan 4",
    "img": "assets/img/user/gallery-4-thumb.jpg",
    "fullImg": "assets/img/user/gallery-4-full.jpg",
    "desc": "Nahh ini yang aku bilang duluu, aku lupa gaya ini pas kita fotbar di kondangan mah, tapi kesampaian jugaa🥰🥰🥰🥰."
  },
  {
    "id": "gallery-5",
    "title": "Senyum Kecil",
    "date": "Kenangan 5",
    "img": "assets/img/user/gallery-5-thumb.jpg",
    "fullImg": "assets/img/user/gallery-5-full.jpg",
    "desc": "ihhh ini kek kucai akuu wehhh... ahahahaa🥰🥰🥰🥰."
  },
  {
    "id": "gallery-6",
    "title": "Jangan Jauh-Jauh",
    "date": "Kenangan 6",
    "img": "assets/img/user/gallery-6-thumb.jpg",
    "fullImg": "assets/img/user/gallery-6-full.jpg",
    "desc": "Ini emang kamu tuh kayak bidadari lohh🥰🥰🥰🥰, lebiii malahann🥰🥰🥰🥰."
  },
  {
    "id": "gallery-7",
    "title": "Kenangan Cantik",
    "date": "Kenangan 7",
    "img": "assets/img/user/gallery-7-thumb.jpg",
    "fullImg": "assets/img/user/gallery-7-full.jpg",
    "desc": "Pengen gini lagii walaupun ngobrol dikit doang mah, cuma iso fotoin diam diam ama natap doang, tapi tetap pengen🥰🥰🥰🥰, tahun depan pake mobil insyaallah🥰🥰🥰🥰."
  },
  {
    "id": "gallery-8",
    "title": "Tetap Kamu",
    "date": "Kenangan 8",
    "img": "assets/img/user/gallery-8-thumb.jpg",
    "fullImg": "assets/img/user/gallery-8-full.jpg",
    "desc": "Pada Akhirnya...kamulah pemenang dihatiku yang dak akan bisa terganti🥰🥰🥰🥰."
  }
],

  // Data khusus menu Memory/buku album. Dipisah dari Home agar album buku pakai foto yang sudah kamu namain "Album buku".
  bookMemories: [
  {
    "id": "album-1",
    "title": "Halaman Manis",
    "date": "Album buku 1",
    "img": "assets/img/user/album-1.jpg",
    "desc": "Hehe ini foto pas kamu dapet Dimsum mentai nyaa, yaa walaupun ada kendala dikit, tapi untung deh aman dan kamu seneng🥰🥰🥰🥰."
  },
  {
    "id": "album-2",
    "title": "Senyum Kamu",
    "date": "Album buku 2",
    "img": "assets/img/user/album-2.jpg",
    "desc": "Senyuman kamu tuh kek pelet tau dakk??setiap kamu senyum, auto kepelet hatiku🥰🥰🥰🥰."
  },
  {
    "id": "album-3",
    "title": "Momen yang Diingat",
    "date": "Album buku 3",
    "img": "assets/img/user/album-3.jpg",
    "desc": "Ini bunga dari kamuu hehe🥰🥰🥰🥰, cuantiksss buangetsss🥰🥰🥰🥰, ayangku yang bikin🥰🥰🥰🥰."
  },
  {
    "id": "album-4",
    "title": "Cerita Kita",
    "date": "Album buku 4",
    "img": "assets/img/user/album-4.jpg",
    "desc": "Hehe, ini pertamakali kamu kerumah, dan di restuin bangett🥰🥰🥰🥰, masa iyaa mau akhiri hubungan cihh🤧🤧, padahal mak dah bilang kalo kamu kerumah, dak duduk di lantai lagi tapi di kursi🤧🤧."
  },
  {
    "id": "album-5",
    "title": "Cantiknya kamu",
    "date": "Album buku 5",
    "img": "assets/img/user/album-5.jpg",
    "desc": "Ini kamu cantikkk bangettt🥰🥰🥰🥰, tapi semuanya sihhh cantikk🥰🥰🥰🥰."
  },
  {
    "id": "album-6",
    "title": "Lucunyaa Kamu",
    "date": "Album buku 6",
    "img": "assets/img/user/album-6.jpg",
    "desc": "Lucu bangettt sayangggggg🥰🥰🥰🥰."
  },
  {
    "id": "album-7",
    "title": "Tetap Jadi Kamu",
    "date": "Album buku 7",
    "img": "assets/img/user/album-7.jpg",
    "desc": "Tetep jadi indahul jannah yang aku kenal yaaa sayangggg🥰🥰🥰🥰, yang aku suka yaa🥰🥰🥰🥰, jadilah dirimu sendiri, jangan ikutin orang lain🥰🥰🥰🥰."
  },
  {
    "id": "album-8",
    "title": "Peluk Dari Jauh",
    "date": "Album buku 8",
    "img": "assets/img/user/album-8.jpg",
    "desc": "Tpeyukkk jauuu sayanggggg🥰🥰🥰🥰, aku tau kamu gimana kalo ego, emang kalo saat kamu ego tuh, hal yang dak di inginkan bisa terjadi, dan harus dengan sabarr🥰🥰🥰🥰."
  }
],

  // Pengaturan menu Love:
  // particleCount makin besar = partikel makin banyak, tapi lebih berat.
  // orbitSpeed makin kecil = muter makin pelan.
  loveSettings: {
    particleCount: 820,
    orbitSpeed: 0.00055
  },

  // Jumlah data di sini = jumlah planet/foto yang muncul di menu Love.
  lovePlanets: [
  {
    "title": "Foto 1",
    "caption": "Peluk jauh",
    "img": "assets/img/user/planet-1.jpg",
    "fullImg": "assets/img/user/planet-1.jpg",
    "desc": "Walau jauh, aku tetap pengen kita saling nenangin."
  },
  {
    "title": "Foto 2",
    "caption": "Turunin ego",
    "img": "assets/img/user/planet-2.jpg",
    "fullImg": "assets/img/user/planet-2.jpg",
    "desc": "Bukan siapa yang menang, tapi gimana kita bisa tetap saling ngerti."
  },
  {
    "title": "Foto 3",
    "caption": "Maaf ya sayang",
    "img": "assets/img/user/planet-3.jpg",
    "fullImg": "assets/img/user/planet-3.jpg",
    "desc": "Maaf kalau sikapku pernah bikin kamu sedih atau capek."
  },
  {
    "title": "Foto 4",
    "caption": "Aku sayang kamu",
    "img": "assets/img/user/planet-4.jpg",
    "fullImg": "assets/img/user/planet-4.jpg",
    "desc": "Aku masih sayang kamu, bahkan saat keadaan lagi ndaa gampang."
  },
  {
    "title": "Foto 5",
    "caption": "Tetap pilih kamu",
    "img": "assets/img/user/planet-5.jpg",
    "fullImg": "assets/img/user/planet-5.jpg",
    "desc": "Aku masih pilih kamu dan masih mau belajar buat kita."
  },
  {
    "title": "Foto 6",
    "caption": "Jangan pergi dulu",
    "img": "assets/img/user/planet-6.jpg",
    "fullImg": "assets/img/user/planet-6.jpg",
    "desc": "Kalau capek, kita istirahat sebentar. Tapi jangan saling pergi."
  },
  {
    "title": "Foto 7",
    "caption": "Ayo ngobrol",
    "img": "assets/img/user/planet-7.jpg",
    "fullImg": "assets/img/user/planet-7.jpg",
    "desc": "Ayo ngobrol pelan-pelan, bukan saling keras kepala."
  },
  {
    "title": "Foto 8",
    "caption": "Kita baikan ya",
    "img": "assets/img/user/planet-8.jpg",
    "fullImg": "assets/img/user/planet-8.jpg",
    "desc": "Kita coba baik-baik lagi ya, dari hati yang lebih tenang."
  }
],

  loveWords: [
    "MAAF YA SAYANG",
    "KITA BAIK-BAIK YA",
    "AKU MASIH PILIH KAMU",
    "JANGAN PERGI DULU",
    "PELUK JAUH",
    "TURUNIN EGO YAA",
    "AKU SAYANG KAMU",
    "AYO NGOBROL",
    "KITA BISA",
    "FOREVER US"
  ],

  // Data menu Video.
  videos: [
  {
    "title": "Video 1",
    "date": "Video Editanmu",
    "video": "assets/video/video-jj-1.mp4",
    "poster": "assets/img/user/video-1-poster.jpg",
    "desc": "Rill kan yaa sayanggg🥰🥰🥰🥰."
  },
  {
    "title": "Video 2",
    "date": "Video Transisi",
    "video": "assets/video/video-jj-2.mp4",
    "poster": "assets/img/user/video-2-poster.jpg",
    "desc": "hehe ini video transisi kitaa sayangggg🥰🥰🥰🥰, bagusss bangettt🥰🥰🥰🥰."
  },
  {
    "title": "Video 3",
    "date": "Video Fotbar lebaran",
    "video": "assets/video/video-jj-3.mp4",
    "poster": "assets/img/user/video-3-poster.jpg",
    "desc": "Huhehehe, ini video aku ngedit fotbar lebaran kitaa🥰🥰🥰🥰"
  },
  {
    "title": "Video 4",
    "date": "Video bukber",
    "video": "assets/video/video-jj-4.mp4",
    "poster": "assets/img/user/video-4-poster.jpg",
    "desc": "Ini tuh foto live yang di edit jadi video 🥰🥰🥰🥰"
  },
  {
    "title": "Video 5",
    "date": "Video estetik",
    "video": "assets/video/video-jj-5.mp4",
    "poster": "assets/img/user/video-5-poster.jpg",
    "desc": "kamu tau? video ini sukaaa bangett akuu🥰🥰🥰🥰, soalnya look nya tuh kek afhakdfhaf🥰🥰🥰🥰, bagusss🥰🥰🥰🥰."
  }
],

  spotifyEmbeds: [
    {
      title: "Melukis Senja",
      artist: "Budi Doremi",
      url: "https://open.spotify.com/track/0q0VDM3nkcNm73HTaeiClV?si=MyHyvTirQxOTCJLYyJeQng"
    },
    {
      title: "Kisah Sempurna",
      artist: "Mahalini",
      url: "https://open.spotify.com/track/6qolkjGnFjsui0h0bosp9p?si=iJMcos50Tc2QbPSTJ4wmpQ"
    },
    {
      title: "Penjaga Hati",
      artist: "Nadhif Basalamah",
      url: "https://open.spotify.com/track/7F4tV8SiUy6itZTdAzdafO?si=NCJuvpqdRdSzG1DzhdDRQA"
    },
    {
      title: "Sempurna",
      artist: "Andra & The Backbone",
      url: "https://open.spotify.com/track/2UgCs0i0rNHUH2jKE5NZHE?si=JBtaNwtPQV-hZCW3vbAHIA"
    },
    {
      title: "A Thousand Years",
      artist: "Christina Perri",
      url: "https://open.spotify.com/embed/track/6lanRgr6wXibZr8KgzXxBl"
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=3eMsvzGYSQiiu5kvpCjVpA"
    }
  ]
};
