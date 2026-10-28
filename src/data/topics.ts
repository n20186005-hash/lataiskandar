import type { Locale } from '../i18n';

export type TopicCategory =
  | 'transport'
  | 'food'
  | 'itinerary'
  | 'attraction'
  | 'stay'
  | 'safety';

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFact {
  label: string;
  value: string;
}

export interface TopicContent {
  category: TopicCategory;
  meta: { title: string; description: string };
  kicker: string;
  h1: string;
  lead: string;
  facts: TopicFact[];
  blocks: TopicBlock[];
  faqs: TopicFaq[];
  related: TopicId[];
}

export type TopicId =
  // Transport decisions (6)
  | 'parking-lata-iskandar'
  | 'how-to-get-to-lata-iskandar-from-kl'
  | 'how-to-get-to-lata-iskandar-from-ipoh'
  | 'bus-to-lata-iskandar'
  | 'tapah-to-lata-iskandar'
  | 'lata-iskandar-gps-coordinate'
  // Food & drink (5)
  | 'gerai-lata-iskandar'
  | 'tapah-food'
  | 'cafes-tapah'
  | 'picnic-supplies-lata-iskandar'
  | 'restaurants-near-cameron-exit'
  // Itineraries (5)
  | 'half-day-itinerary-lata-iskandar'
  | 'one-day-itinerary-tapah'
  | 'cameron-highlands-day-trip'
  | 'lata-iskandar-and-lata-kinjang'
  | 'family-itinerary-lata-iskandar'
  // Attraction depth (8)
  | 'about-lata-iskandar'
  | 'lata-iskandar-vs-lata-kinjang'
  | 'best-time-to-visit-lata-iskandar'
  | 'can-you-swim-lata-iskandar'
  | 'lata-iskandar-entrance-fee'
  | 'lata-iskandar-opening-hours'
  | 'things-to-do-lata-iskandar'
  | 'photography-spots-lata-iskandar'
  // Stay & facilities (5)
  | 'facilities-lata-iskandar'
  | 'accommodation-near-lata-iskandar'
  | 'homestay-tapah'
  | 'camping-near-lata-iskandar'
  | 'toilet-surau-lata-iskandar'
  // Safety & practical (4)
  | 'safety-tips-lata-iskandar'
  | 'rainy-day-alternatives'
  | 'weather-lata-iskandar'
  | 'lata-iskandar-with-kids';

export const topicSlugs: TopicId[] = [
  'parking-lata-iskandar',
  'how-to-get-to-lata-iskandar-from-kl',
  'how-to-get-to-lata-iskandar-from-ipoh',
  'bus-to-lata-iskandar',
  'tapah-to-lata-iskandar',
  'lata-iskandar-gps-coordinate',
  'gerai-lata-iskandar',
  'tapah-food',
  'cafes-tapah',
  'picnic-supplies-lata-iskandar',
  'restaurants-near-cameron-exit',
  'half-day-itinerary-lata-iskandar',
  'one-day-itinerary-tapah',
  'cameron-highlands-day-trip',
  'lata-iskandar-and-lata-kinjang',
  'family-itinerary-lata-iskandar',
  'about-lata-iskandar',
  'lata-iskandar-vs-lata-kinjang',
  'best-time-to-visit-lata-iskandar',
  'can-you-swim-lata-iskandar',
  'lata-iskandar-entrance-fee',
  'lata-iskandar-opening-hours',
  'things-to-do-lata-iskandar',
  'photography-spots-lata-iskandar',
  'facilities-lata-iskandar',
  'accommodation-near-lata-iskandar',
  'homestay-tapah',
  'camping-near-lata-iskandar',
  'toilet-surau-lata-iskandar',
  'safety-tips-lata-iskandar',
  'rainy-day-alternatives',
  'weather-lata-iskandar',
  'lata-iskandar-with-kids',
];

export const topicCategoryLabels: Record<TopicCategory, Record<Locale, string>> = {
  transport: { ms: 'Pengangkutan', en: 'Transport', zh: '交通' },
  food: { ms: 'Makan & Minum', en: 'Food & Drink', zh: '餐飲' },
  itinerary: { ms: 'Itinerari', en: 'Itineraries', zh: '行程' },
  attraction: { ms: 'Tentang Tarikan', en: 'The Waterfall', zh: '景點' },
  stay: { ms: 'Penginapan & Kemudahan', en: 'Stay & Facilities', zh: '住宿與設施' },
  safety: { ms: 'Keselamatan & Amalan', en: 'Safety & Practical', zh: '安全與實用' },
};

// Filled in batches. Currently: the 6 "transport" pages (highest conversion intent).
export const topics: Partial<Record<TopicId, Record<Locale, TopicContent>>> = {
  'parking-lata-iskandar': {
    ms: {
      category: 'transport',
      meta: {
        title: 'Parkir Lata Iskandar Tapah: Bahu Jalan & Tips',
        description:
          'Tiada tempat letak kereta berbumbung di Lata Iskandar. Pelawat meletak kereta di bahu Laluan 59 berhampiran gerai. Ketahui cara parkir tanpa menyekat jalan & waktu terbaik.',
      },
      kicker: 'Parkir',
      h1: 'Parkir di Lata Iskandar: Apa yang Perlu Dijangka di Laluan 59',
      lead: 'Tiada tempat letak kereta berbumbung di Lata Iskandar. Kenderaan menggunakan bahu jalan berhampiran gerai di Laluan Persekutuan 59. Berikut cara meletak kereta tanpa menyekat jalan — dan apa perlu buat pada hujung minggu sibuk.',
      facts: [
        { label: 'Jenis parkir', value: 'Bahu jalan berhampiran gerai' },
        { label: 'Lokasi', value: 'Exit 59, Laluan 59, Tapah' },
        { label: 'Fi', value: 'Tidak disahkan — semak di lokasi' },
        { label: 'Waktu terbaik', value: 'Pagi hari bekerja' },
      ],
      blocks: [
        {
          heading: 'Di mana kenderaan sebenarnya diletak',
          paragraphs: [
            'Lata Iskandar terletak betul-betul di tepi jalan lama Tapah–Cameron Highlands, jadi tiada tempat letak kereta bertar atau berpagar.',
            'Kebanyakan pelawat mencerlung ke bahu Laluan Persekutuan 59 berhampiran gerai makanan dan meja kraftangan.',
            'Ruang adalah terhad dan dikongsi dengan lalu lintas, jadi cara anda meletak kereta lebih penting daripada mencari "lot".',
          ],
        },
        {
          heading: 'Hujung minggu dan cuti sekolah',
          paragraphs: [
            'Sabtu, Ahad dan cuti sekolah adalah yang paling sibuk. Bahu jalan penuh awal dan kereta berbaris di kedua-dua belah, mengecilkan laluan yang sedia sempit.',
            'Jika boleh, tiba sebelum tengah hari atau pilih hari bekerja. Hujan petang juga mengurangkan orang ramai.',
          ],
          bullets: [
            'Tiba sebelum ~11:00 pada hujung minggu',
            'Elak menyekat lorong lalu',
            'Pastikan pintu masuk gerai tidak terhalang',
          ],
        },
        {
          heading: 'Tips meletak kereta dengan sopan',
          bullets: [
            'Letak sepenuhnya di luar turapan, roda di atas bahu jalan',
            'Gunakan brek tangan di cerun',
            'Jangan tinggalkan barang berharga kelihatan',
            'Masuk ke belakang jika perlu keluar pantas',
          ],
          callout:
            'Jangan meletak kereta di tempat yang menyekat jalan utama atau ruang pusing bas — trafik di Laluan 59 termasuk kenderaan berat yang mendaki ke Cameron Highlands.',
        },
      ],
      faqs: [
        {
          q: 'Adakah terdapat tempat letak kereta khas di Lata Iskandar?',
          a: 'Tidak ada tempat letak kereta bertar. Parkir di bahu jalan berhampiran gerai; ruang terhad dan siapa dahulu sampai.',
        },
        {
          q: 'Berapa kos parkir?',
          a: 'Sebarang bayaran tidak disahkan. Semak papan tanda dan aturan di lokasi, dan bawa wang kecil sekiranya ada caj.',
        },
        {
          q: 'Bolehkah bas atau kenderaan besar berhenti?',
          a: 'Bas persiaran dan van sukar — bahu jalan sempit dan jalan berliku. Ramai pemandu pelancong menurunkan penumpang dan meletak lebih ke bawah. Atur dengan pemandu anda.',
        },
        {
          q: 'Bila paling senang dapat tempat?',
          a: 'Pagi hari bekerja paling tenang. Pada hujung minggu, sebelum tengah hari adalah peluang terbaik.',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
        'lata-iskandar-gps-coordinate',
      ],
    },
    en: {
      category: 'transport',
      meta: {
        title: 'Lata Iskandar Parking, Tapah: Roadside & Tips',
        description:
          'No sealed car park at Lata Iskandar — vehicles use the Route 59 shoulder near the stalls. How to park without blocking the road, and the best time to find a spot.',
      },
      kicker: 'Parking',
      h1: 'Parking at Lata Iskandar: What to Expect on Route 59',
      lead: 'There is no formal car park at Lata Iskandar. Vehicles use the road shoulder near the stall area on Federal Route 59. Here is how to park without causing a jam — and what to do on busy weekends.',
      facts: [
        { label: 'Parking type', value: 'Road shoulder near stalls' },
        { label: 'Location', value: 'Exit 59, Route 59, Tapah' },
        { label: 'Fee', value: 'Not confirmed — check on site' },
        { label: 'Best time', value: 'Weekday mornings' },
      ],
      blocks: [
        {
          heading: 'Where vehicles actually park',
          paragraphs: [
            'Lata Iskandar sits right beside the old Tapah–Cameron Highlands road, so there is no sealed, gated car park.',
            'Most visitors pull over onto the shoulder of Federal Route 59 close to the food stalls and handicraft tables.',
            'Space is limited and it is shared with passing traffic, so how you position the car matters more than finding a "lot".',
          ],
        },
        {
          heading: 'Weekends and public holidays',
          paragraphs: [
            'Saturday, Sunday and school holidays are the busiest. The shoulder fills early and cars end up lining both sides of the road, narrowing the already tight carriageway.',
            'If you can, arrive before late morning or aim for a weekday. Afternoon showers also thin the crowd.',
          ],
          bullets: [
            'Arrive before ~11:00 on weekends',
            'Avoid blocking the through-lane',
            'Keep the stall entrance clear',
          ],
        },
        {
          heading: 'Tips to park considerately',
          bullets: [
            'Park fully off the tarmac, wheels on the shoulder',
            'Engage handbrake on the slope',
            'Do not leave valuables in sight',
            'Reverse in if you will need a quick exit',
          ],
          callout:
            'Do not park where you block the main road or a bus turn-out — traffic on Route 59 includes heavy vehicles climbing to Cameron Highlands.',
        },
      ],
      faqs: [
        {
          q: 'Is there a dedicated car park at Lata Iskandar?',
          a: 'No sealed car park. Parking is on the road shoulder near the stalls; space is limited and first-come.',
        },
        {
          q: 'How much does parking cost?',
          a: 'Any fee has not been confirmed. Check the signs and arrangement on site, and bring small change in case a charge applies.',
        },
        {
          q: 'Can buses or large vehicles stop?',
          a: 'Coaches and vans can struggle — the shoulder is narrow and the road is winding. Many tour vehicles drop passengers and park further down. Arrange with your driver.',
        },
        {
          q: 'When is it easiest to find a spot?',
          a: 'Weekday mornings are calmest. On weekends, before late morning is your best window.',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
        'lata-iskandar-gps-coordinate',
      ],
    },
    zh: {
      category: 'transport',
      meta: {
        title: 'Lata Iskandar 停車（打巴）：路肩與提醒',
        description:
          'Lata Iskandar 沒有正規停車場，車輛停在 Route 59 路肩的攤販區。如何停車才不塞路，以及最容易找到車位的時段。',
      },
      kicker: '停車',
      h1: 'Lata Iskandar 停車：Route 59 路肩停車實況',
      lead: 'Lata Iskandar 沒有正規停車場，車輛停在聯邦 59 號公路（Route 59）瀑布旁攤販區的路肩。以下說明如何停車才不會塞住山路——以及週末人潮時該怎麼辦。',
      facts: [
        { label: '停車類型', value: '攤販區附近路肩' },
        { label: '位置', value: 'Exit 59, Route 59, 打巴' },
        { label: '費用', value: '尚未確認——以現場為準' },
        { label: '最佳時段', value: '平日早上' },
      ],
      blocks: [
        {
          heading: '車輛實際停在哪裡',
          paragraphs: [
            'Lata Iskandar 就貼著打巴—金馬侖高原舊公路，所以沒有鋪面、有柵欄的停車場。',
            '多數遊客把車靠到聯邦 59 號公路靠近小吃攤與手工藝攤的路肩。',
            '空間有限且與往來車流共用，因此怎麼停比「找到車位」更重要。',
          ],
        },
        {
          heading: '週末與學校假期',
          paragraphs: [
            '週六、週日與學校假期最擁擠。路肩很早就被停滿，車子沿兩側排開，讓本就狹窄的路面更窄。',
            '可以的話在上午前抵達，或選平日。午後陣雨也會讓人潮變少。',
          ],
          bullets: ['週末在約 11:00 前抵達', '避免擋住直行車道', '保持攤位入口暢通'],
        },
        {
          heading: '禮貌停車小提醒',
          bullets: ['整車停在柏油路面外、車輪壓在路肩', '斜坡拉手煞車', '別把貴重物品留在明處', '若要快速離開就倒車入位'],
          callout: '不要把車停在擋住主幹道或公車迴轉處的位置——Route 59 上有爬坡的重型車輛。',
        },
      ],
      faqs: [
        {
          q: 'Lata Iskandar 有專用停車場嗎？',
          a: '沒有鋪面停車場。停車在攤販附近的路肩；空間有限，先到先停。',
        },
        {
          q: '停車要多少錢？',
          a: '任何收費都尚未確認。請看現場告示與安排，並準備零錢以備收費。',
        },
        {
          q: '遊覽車或大型車能停嗎？',
          a: '遊覽車與廂型車很吃力——路肩窄、山路彎。許多遊覽車讓乘客下車後停到更下方。請與司機安排。',
        },
        {
          q: '什麼時候最容易找到車位？',
          a: '平日早上最從容。週末則以上午前為最佳時機。',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
        'lata-iskandar-gps-coordinate',
      ],
    },
  },

  'how-to-get-to-lata-iskandar-from-kl': {
    ms: {
      category: 'transport',
      meta: {
        title: 'Dari KL ke Lata Iskandar: Pandu, Jarak & Laluan',
        description:
          'Lata Iskandar kira-kira 2 jam dari Kuala Lumpur, selalu dihentikan dalam perjalanan ke Cameron Highlands. Laluan, jarak dan tempat mengisi minyak.',
      },
      kicker: 'Dari Kuala Lumpur',
      h1: 'Lata Iskandar dari Kuala Lumpur: Pandu, Jarak & Laluan',
      lead: 'Lata Iskandar kira-kira dua jam pemanduan ke utara dari Kuala Lumpur, dan hampir sentiasa dihentikan sebagai rehat dalam perjalanan ke Cameron Highlands. Berikut laluan, jarak dan tempat mengisi minyak.',
      facts: [
        { label: 'Jarak dari KL', value: '~150 km' },
        { label: 'Masa pandu', value: '~2 jam' },
        { label: 'Laluan', value: 'PLUS → Tapah → Laluan 59' },
        { label: 'Kegunaan terbaik', value: 'Hentian ke Cameron Highlands' },
      ],
      blocks: [
        {
          heading: 'Langkah demi langkah dari Kuala Lumpur',
          paragraphs: [
            'Ambil Lebuhraya Utara–Selatan (PLUS/E2) menghala utara dari Kuala Lumpur.',
            'Keluar di persimpangan Tapah (Exit 119) dan ikut tanda ke Cameron Highlands ke Laluan Persekutuan 59.',
            'Lata Iskandar muncul di kanan anda selepas pendakian berliku singkat — kira-kira 20–30 minit selepas bandar Tapah.',
          ],
        },
        {
          heading: 'Mengisi minyak, makan dan rehat',
          paragraphs: [
            'Tapah ada stesen minyak, bank dan gerai makan sebelum pendakian bermula.',
            'Isi tangki di Tapah: pilihan menjadi jarang dan lebih mahal sebaik anda di Laluan 59.',
          ],
          bullets: ['Isi minyak di Tapah', 'Gunakan tandas sebelum mendaki', 'Beli air untuk perjalanan'],
        },
        {
          heading: 'Gabung dengan Cameron Highlands',
          paragraphs: [
            'Kebanyakan pelawat KL menjadikan Lata Iskandar hentian alam pertama ke Cameron Highlands.',
            'Rancang 30–60 minit di sini, kemudian terus ke Ringlet dan ladang teh di atas.',
          ],
          callout: 'Laluan 59 sempit dan berliku dengan kenderaan berat. Pandu berhati-hati, terutama hujan.',
        },
      ],
      faqs: [
        {
          q: 'Berapa jauh Lata Iskandar dari Kuala Lumpur?',
          a: 'Kira-kira 150 km, lebih kurang 2 jam dengan kereta dalam trafik baik.',
        },
        {
          q: 'Susur lebuhraya mana saya ambil?',
          a: 'Persimpangan Tapah (Exit 119) dari Lebuhraya Utara–Selatan, kemudian ikut Laluan 59 ke Cameron Highlands.',
        },
        {
          q: 'Bolehkah saya tempah Grab/teksi dari KL?',
          a: 'Kereta sendiri atau sewa jauh lebih praktikal untuk hentian air terjun. E-hailing dari KL ke air terjun tepi jalan tidak konsisten dan mahal — atur perjalanan pergi-balik jika guna pemandu.',
        },
        {
          q: 'Berbaloi berhenti dalam perjalanan ke Cameron Highlands?',
          a: 'Ya — ia hentian pertama paling biasa, beberapa minit dari jalan mendaki, dengan gerai dan pemandangan air terjun pantas.',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'cameron-highlands-day-trip',
        'lata-iskandar-gps-coordinate',
      ],
    },
    en: {
      category: 'transport',
      meta: {
        title: 'Lata Iskandar from Kuala Lumpur: Drive & Route',
        description:
          'Lata Iskandar is about a 2-hour drive north of Kuala Lumpur, usually a rest stop on the way to Cameron Highlands. The route, distance and where to fuel up.',
      },
      kicker: 'From Kuala Lumpur',
      h1: 'Lata Iskandar from Kuala Lumpur: Drive, Distance & Route',
      lead: 'Lata Iskandar is about a two-hour drive north of Kuala Lumpur, almost always visited as a rest stop on the way up to Cameron Highlands. Here is the route, the distance and where to fuel up.',
      facts: [
        { label: 'Distance from KL', value: '~150 km' },
        { label: 'Drive time', value: '~2 hours' },
        { label: 'Route', value: 'PLUS → Tapah exit → Route 59' },
        { label: 'Best use', value: 'Stop en route to Cameron Highlands' },
      ],
      blocks: [
        {
          heading: 'Step-by-step from Kuala Lumpur',
          paragraphs: [
            'Take the North–South Expressway (PLUS/E2) northbound from Kuala Lumpur.',
            'Leave at the Tapah interchange (Exit 119) and follow signs for Cameron Highlands onto Federal Route 59.',
            'Lata Iskandar appears on your right a short, winding climb up the hill — about 20–30 minutes after Tapah town.',
          ],
        },
        {
          heading: 'Fuel, food and rest stops',
          paragraphs: [
            'Tapah has fuel stations, banks and eateries before the climb begins.',
            'Fill the tank in Tapah: options thin out and get more expensive once you are on Route 59.',
          ],
          bullets: ['Top up fuel in Tapah', 'Use the toilet before the climb', 'Buy water for the drive'],
        },
        {
          heading: 'Combine with Cameron Highlands',
          paragraphs: [
            'Most KL travellers treat Lata Iskandar as the first natural break on the Cameron Highlands run.',
            'Plan 30–60 minutes here, then continue to Ringlet and the tea country above.',
          ],
          callout: 'Route 59 is narrow and winding with heavy vehicles. Drive carefully, especially in rain.',
        },
      ],
      faqs: [
        {
          q: 'How far is Lata Iskandar from Kuala Lumpur?',
          a: 'About 150 km, around 2 hours by car in clear traffic.',
        },
        {
          q: 'Which highway exit do I take?',
          a: 'The Tapah interchange (Exit 119) off the North–South Expressway, then follow Route 59 toward Cameron Highlands.',
        },
        {
          q: 'Can I book a Grab / taxi from KL?',
          a: 'A private car or rental is far more practical for a waterfall stop. E-hailing from KL to a roadside fall is unreliable and costly — arrange a return trip if you use a driver.',
        },
        {
          q: 'Is it worth stopping on the way to Cameron Highlands?',
          a: 'Yes — it is the most common first stop, just minutes off the climbing road, with stalls and a quick view of the falls.',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'cameron-highlands-day-trip',
        'lata-iskandar-gps-coordinate',
      ],
    },
    zh: {
      category: 'transport',
      meta: {
        title: '從吉隆坡到 Lata Iskandar：自駕、距離與路線',
        description:
          'Lata Iskandar 距吉隆坡約兩小時車程，幾乎都是前往金馬侖高原途中的休息站。路線、距離與加油點。',
      },
      kicker: '從吉隆坡出發',
      h1: '從吉隆坡到 Lata Iskandar：自駕、距離與路線',
      lead: 'Lata Iskandar 距吉隆坡約兩小時車程，往北走，幾乎都是作為前往金馬侖高原途中的休息站。以下為路線、距離與加油點。',
      facts: [
        { label: '距離', value: '約 150 公里' },
        { label: '車程', value: '約 2 小時' },
        { label: '路線', value: '南北大道 → 打巴交流道 → Route 59' },
        { label: '最佳用法', value: '前往金馬侖途中順停' },
      ],
      blocks: [
        {
          heading: '從吉隆坡步步來',
          paragraphs: [
            '從吉隆坡走南北大道（PLUS/E2）往北。',
            '在打巴交流道（Exit 119）下交流道，沿往金馬侖高原的指示上聯邦 59 號公路。',
            'Lata Iskandar 在短暫蜿蜒爬坡後出現在右側——約在打巴鎮後 20–30 分鐘。',
          ],
        },
        {
          heading: '加油、用餐與休息',
          paragraphs: [
            '打巴在爬坡前有加油站、銀行與小吃。',
            '在打巴把油加滿：一上 Route 59，選擇變少也變貴。',
          ],
          bullets: ['在打巴加滿油', '爬坡前先上廁所', '買好路上要喝的水'],
        },
        {
          heading: '串聯金馬侖高原',
          paragraphs: [
            '多數吉隆坡遊客把 Lata Iskandar 當成金馬侖高原行程的第一個自然停靠點。',
            '在此安排 30–60 分鐘，再續往 Ringlet 與上方的茶園。',
          ],
          callout: 'Route 59 狹窄多彎且有重型車，請小心駕駛，尤其雨天。',
        },
      ],
      faqs: [
        {
          q: 'Lata Iskandar 離吉隆坡多遠？',
          a: '約 150 公里，路況順暢時約 2 小時車程。',
        },
        {
          q: '該下哪個交流道？',
          a: '南北大道的打巴交流道（Exit 119），再沿 Route 59 往金馬侖高原。',
        },
        {
          q: '可以從吉隆坡叫 Grab／計程車嗎？',
          a: '自駕或租車對瀑布順停實用得多。從吉隆坡叫車到路邊瀑布既不穩定又昂貴——若用司機請先約好往返。',
        },
        {
          q: '順路去金馬侖值得停嗎？',
          a: '值得——這是最常見的第一站，離爬坡路僅幾分鐘，有攤位也能快速看瀑布。',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'cameron-highlands-day-trip',
        'lata-iskandar-gps-coordinate',
      ],
    },
  },

  'how-to-get-to-lata-iskandar-from-ipoh': {
    ms: {
      category: 'transport',
      meta: {
        title: 'Dari Ipoh ke Lata Iskandar: Jarak, Pandu & Pilihan',
        description:
          'Dari Ipoh kira-kira sejam ke Tapah, kemudian pendakian singkat di Laluan 59. Pilihan dari lapangan terbang, bandar atau tren.',
      },
      kicker: 'Dari Ipoh',
      h1: 'Lata Iskandar dari Ipoh: Jarak, Pandu & Pilihan',
      lead: 'Dari Ipoh kira-kira sejam ke selatan ke Tapah, kemudian pendakian singkat di Laluan 59 ke air terjun. Berikut pilihan anda sama ada mendarat di lapangan terbang, bandar, atau dengan tren.',
      facts: [
        { label: 'Jarak dari Ipoh', value: '~60 km' },
        { label: 'Masa pandu', value: '~1 jam' },
        { label: 'Melalui', value: 'Tapah → Laluan 59' },
        { label: 'Lapangan terbang', value: 'Sultan Azlan Shah (IPH)' },
      ],
      blocks: [
        {
          heading: 'Dari Lapangan Terbang Sultan Azlan Shah (IPH)',
          paragraphs: [
            'Lapangan terbang ini di barat daya Ipoh. Pilihan paling fleksibel ialah sewa kereta atau teksi/pemandu persendirian ke Tapah dan Laluan 59.',
            'Jika mahu bas, pergi dulu ke terminal bas Ipoh, kemudian sambung ke Tapah/Cameron Highlands ikut perkhidmatan semasa.',
          ],
        },
        {
          heading: 'Dari bandar Ipoh',
          paragraphs: [
            'Turun ke selatan di Lebuhraya Utara–Selatan ke persimpangan Tapah, kemudian naik Laluan 59.',
            'Tanpa kereta, gabung KTM ETS ke Tapah Road dengan teksi atau pemandu pra-tempah untuk perjalanan akhir.',
          ],
        },
        {
          heading: 'Keadaan jalan',
          paragraphs: [
            'Laluan 59 berturap tetapi sempit dan berliku. Beri masa tambahan hujan, bila pendakian lebih perlahan dan kabus mengurangkan penglihatan.',
          ],
          callout: 'Kereta biasa pun memadai; anda tidak perlu 4WD untuk laluan Tapah–Lata Iskandar.',
        },
      ],
      faqs: [
        {
          q: 'Berapa jauh Lata Iskandar dari Ipoh?',
          a: 'Kira-kira 60 km, lebih kurang 1 jam dengan kereta.',
        },
        {
          q: 'Bolehkah saya ke sana dengan pengangkutan awam dari Ipoh?',
          a: 'Tidak terus ke air terjun. Ambil ETS ke Tapah Road, kemudian teksi/e-hailing atau pemandu persendirian untuk stretch akhir.',
        },
        {
          q: 'Adakah jalan sesuai untuk kereta biasa?',
          a: 'Ya — bahagian Tapah ke Lata Iskandar berturap dan boleh dilalui mana-mana kereta; pandu perlahan di selekoh.',
        },
        {
          q: 'Patutkah gabung dengan Cameron Highlands?',
          a: 'Sememangnya — Lata Iskandar di jalan mendaki, jadi sesuai sebagai hentian sebelum tanah tinggi.',
        },
      ],
      related: [
        'bus-to-lata-iskandar',
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'cameron-highlands-day-trip',
        'parking-lata-iskandar',
      ],
    },
    en: {
      category: 'transport',
      meta: {
        title: 'Lata Iskandar from Ipoh: Distance & Options',
        description:
          'About an hour south of Ipoh to Tapah, then a short climb on Route 59 to the falls. Options from the airport, city or by train.',
      },
      kicker: 'From Ipoh',
      h1: 'Lata Iskandar from Ipoh: Distance, Drive & Options',
      lead: 'From Ipoh it is roughly an hour south to Tapah, then a short climb on Route 59 to the falls. Here are your options whether you land at the airport, the city, or by train.',
      facts: [
        { label: 'Distance from Ipoh', value: '~60 km' },
        { label: 'Drive time', value: '~1 hour' },
        { label: 'Via', value: 'Tapah → Route 59' },
        { label: 'Airport', value: 'Sultan Azlan Shah (IPH)' },
      ],
      blocks: [
        {
          heading: 'From Sultan Azlan Shah Airport (IPH)',
          paragraphs: [
            'The airport is southwest of Ipoh. The most flexible option is a rental car or taxi/private driver toward Tapah and Route 59.',
            'If you prefer buses, first reach the Ipoh bus terminal, then connect toward Tapah/Cameron Highlands per current services.',
          ],
        },
        {
          heading: 'From Ipoh city',
          paragraphs: [
            'Head south on the North–South Expressway to the Tapah interchange, then up Route 59.',
            'Without a car, combine the KTM ETS to Tapah Road with a taxi or pre-booked driver for the final leg.',
          ],
        },
        {
          heading: 'Road condition',
          paragraphs: [
            'Route 59 is sealed but narrow and curvy. Allow extra time in rain, when the climb is slower and mist can reduce visibility.',
          ],
          callout: 'A regular saloon car is fine; you do not need 4WD for the Tapah–Lata Iskandar stretch.',
        },
      ],
      faqs: [
        {
          q: 'How far is Lata Iskandar from Ipoh?',
          a: 'About 60 km, about 1 hour by car.',
        },
        {
          q: 'Can I get there by public transport from Ipoh?',
          a: 'Not directly to the fall. Take the ETS to Tapah Road, then a taxi/e-hailing or private driver for the last stretch.',
        },
        {
          q: 'Is the road suitable for a normal car?',
          a: 'Yes — the Tapah to Lata Iskandar section is paved and manageable in any car; just drive slowly on the bends.',
        },
        {
          q: 'Should I combine it with Cameron Highlands?',
          a: 'Naturally — Lata Iskandar is on the climbing road, so it fits as a stop before the highlands.',
        },
      ],
      related: [
        'bus-to-lata-iskandar',
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'cameron-highlands-day-trip',
        'parking-lata-iskandar',
      ],
    },
    zh: {
      category: 'transport',
      meta: {
        title: '從怡保到 Lata Iskandar：距離、車程與方式',
        description:
          '從怡保往南到打巴約一小時，再沿 Route 59 短爬坡即到瀑布。不論從機場、市區或火車抵達都有對應方式。',
      },
      kicker: '從怡保出發',
      h1: '從怡保到 Lata Iskandar：距離、車程與方式',
      lead: '從怡保往南到打巴約一小時，再沿 Route 59 短爬坡即到瀑布。不論你從機場、市區或火車抵達，以下都有對應方式。',
      facts: [
        { label: '距離', value: '約 60 公里' },
        { label: '車程', value: '約 1 小時' },
        { label: '途經', value: '打巴 → Route 59' },
        { label: '機場', value: '蘇丹阿茲蘭沙機場（IPH）' },
      ],
      blocks: [
        {
          heading: '從蘇丹阿茲蘭沙機場（IPH）',
          paragraphs: [
            '機場在怡保西南。最靈活的是租車或計程車／私人司機前往打巴與 Route 59。',
            '若想搭巴士，先到怡保巴士總站，再依現有班次轉往打巴／金馬侖高原。',
          ],
        },
        {
          heading: '從怡保市區',
          paragraphs: [
            '走南北大道往南到打巴交流道，再上 Route 59。',
            '沒車的話，可把 KTM ETS 搭到 Tapah Road，再以計程車或預約司機接最後一段。',
          ],
        },
        {
          heading: '路況',
          paragraphs: [
            'Route 59 有鋪面但窄且彎。雨天請留更多時間，爬坡較慢、霧氣也可能降低能見度。',
          ],
          callout: '一般轎車就足夠；打巴到 Lata Iskandar 這段不需要四輪傳動。',
        },
      ],
      faqs: [
        {
          q: 'Lata Iskandar 離怡保多遠？',
          a: '約 60 公里，車程約 1 小時。',
        },
        {
          q: '從怡保能搭大眾運輸到嗎？',
          a: '無法直達瀑布。先搭 ETS 到 Tapah Road，再叫計程車／網約車或私人司機走最後一段。',
        },
        {
          q: '一般車能走這條路嗎？',
          a: '可以——打巴到 Lata Iskandar 這段有鋪面、任何車都可行；過彎放慢即可。',
        },
        {
          q: '要順便串金馬侖嗎？',
          a: '自然要——Lata Iskandar 就在爬坡路上，適合作為高原前的中途站。',
        },
      ],
      related: [
        'bus-to-lata-iskandar',
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'cameron-highlands-day-trip',
        'parking-lata-iskandar',
      ],
    },
  },

  'bus-to-lata-iskandar': {
    ms: {
      category: 'transport',
      meta: {
        title: 'Ke Lata Iskandar dengan Bas, ETS & Teksi',
        description:
          'Tiada bas terus ke air terjun. Sampai ke Tapah atau Tapah Road dulu, kemudian teksi, e-hailing atau pemandu untuk stretch akhir.',
      },
      kicker: 'Bas & Tren',
      h1: 'Ke Lata Iskandar dengan Bas, ETS & Teksi',
      lead: 'Tiada bas yang berhenti di air terjun itu sendiri. Cara praktikal ialah sampai ke Tapah atau Tapah Road dulu, kemudian lalui beberapa kilometer terakhir dengan teksi, e-hailing jika ada, atau pemandu pra-tempah.',
      facts: [
        { label: 'Bas terus ke air terjun', value: 'Tiada' },
        { label: 'Rel terdekat', value: 'Tapah Road (KTM ETS)' },
        { label: 'Stretch akhir', value: 'Teksi / e-hailing / pemandu' },
        { label: 'Titik pertukaran', value: 'Terminal Bas Tapah' },
      ],
      blocks: [
        {
          heading: 'Tren: KTM ETS ke Tapah Road',
          paragraphs: [
            'Sambungan rel terdekat ialah stesen Tapah Road di landasan ETS.',
            'Dari situ, atur transfer jalan — teksi atau pemandu persendirian — ke bandar Tapah kemudian naik Laluan 59. Semak waktu tren semasa sebelum berlepas.',
          ],
        },
        {
          heading: 'Bas ke Tapah',
          paragraphs: [
            'Terminal Bas Tapah adalah titik pertukaran realistik untuk bas ekspres dari Ipoh, Kuala Lumpur dan koridor utara–selatan.',
            'Jangan anggap bas ekspres akan berhenti di air terjun — tidak. Anda tukar ke teksi atau e-hailing di Tapah.',
          ],
        },
        {
          heading: 'Stretch akhir',
          paragraphs: [
            'Liputan e-hailing di jalan bukit tidak sentiasa konsisten.',
            'Beritahu pemandu anda mahu berhenti di Lata Iskandar dan setuju masa jemputan sebelum tiba, supaya tidak terkandas.',
          ],
          callout: 'Rancang perjalanan balik lebih awal — isyarat dan pemandu di Laluan 59 terhad, terutama luar waktu puncak.',
        },
      ],
      faqs: [
        {
          q: 'Adakah terdapat bas terus ke Lata Iskandar?',
          a: 'Tidak. Sampai ke Tapah atau Tapah Road dulu, kemudian naik teksi, e-hailing jika ada, atau pemandu persendirian.',
        },
        {
          q: 'Bolehkah saya naik ETS?',
          a: 'Ya ke Tapah Road, kemudian transfer jalan. Tiada stesen di air terjun.',
        },
        {
          q: 'Bagaimana saya balik?',
          a: 'Setuju jemputan balik dengan pemandu sebelum bermula; e-hailing tidak boleh dipercayai di jalan bukit.',
        },
        {
          q: 'Mengapa bas ekspres tidak berhenti?',
          a: 'Air terjun adalah hentian tepi jalan di lebuh raya berliku tanpa perhentian bas; bas ekspres terus ke Tapah atau Cameron Highlands.',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'how-to-get-to-lata-iskandar-from-kl',
        'lata-iskandar-gps-coordinate',
        'parking-lata-iskandar',
      ],
    },
    en: {
      category: 'transport',
      meta: {
        title: 'Lata Iskandar by Bus, ETS & Taxi',
        description:
          'No bus stops at the waterfall itself. Reach Tapah or Tapah Road first, then cover the last stretch by taxi, e-hailing or a pre-booked driver.',
      },
      kicker: 'By Bus & Train',
      h1: 'Getting to Lata Iskandar by Bus, ETS & Taxi',
      lead: 'There is no bus that stops at the waterfall itself. The practical path is to reach Tapah or Tapah Road first, then cover the last kilometres by taxi, e-hailing where available, or a pre-booked driver.',
      facts: [
        { label: 'Direct bus to fall', value: 'None' },
        { label: 'Nearest rail', value: 'Tapah Road (KTM ETS)' },
        { label: 'Last mile', value: 'Taxi / e-hailing / driver' },
        { label: 'Transfer point', value: 'Tapah Bus Terminal' },
      ],
      blocks: [
        {
          heading: 'Train: KTM ETS to Tapah Road',
          paragraphs: [
            'The closest rail link is Tapah Road station on the ETS line.',
            'From there, arrange a road transfer — taxi or private driver — to Tapah town and then up Route 59. Check current train times before you travel.',
          ],
        },
        {
          heading: 'Bus to Tapah',
          paragraphs: [
            'Tapah Bus Terminal is the realistic transfer point for coaches from Ipoh, Kuala Lumpur and the north–south corridor.',
            'Do not assume an express bus will stop at the waterfall — it will not. You change to a taxi or e-hailing at Tapah.',
          ],
        },
        {
          heading: 'The last mile',
          paragraphs: [
            'Coverage of e-hailing on the hill road is not always consistent.',
            'Tell your driver you want to stop at Lata Iskandar and agree a pickup time before you arrive, so you are not stranded.',
          ],
          callout: 'Plan the return trip in advance — signal and drivers on Route 59 are limited, especially off-peak.',
        },
      ],
      faqs: [
        {
          q: 'Is there a direct bus to Lata Iskandar?',
          a: 'No. Reach Tapah or Tapah Road first, then take a taxi, e-hailing where available, or a private driver.',
        },
        {
          q: 'Can I take the ETS?',
          a: 'Yes to Tapah Road, then a road transfer. There is no station at the fall.',
        },
        {
          q: 'How do I get back?',
          a: 'Agree a return pickup with your driver before you start; e-hailing is unreliable on the hill road.',
        },
        {
          q: 'Why don’t express buses stop there?',
          a: 'The fall is a roadside stop on a winding highway with no bus bay; coaches continue to Tapah or Cameron Highlands.',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'how-to-get-to-lata-iskandar-from-kl',
        'lata-iskandar-gps-coordinate',
        'parking-lata-iskandar',
      ],
    },
    zh: {
      category: 'transport',
      meta: {
        title: '搭巴士、ETS 與計程車到 Lata Iskandar',
        description:
          '沒有巴士會停在瀑布本身。先到打巴或 Tapah Road，再以計程車、網約車或預約司機走最後幾公里。',
      },
      kicker: '搭乘巴士與火車',
      h1: '搭巴士、ETS 與計程車到 Lata Iskandar',
      lead: '沒有巴士會停在瀑布本身。實務做法是先到打巴或 Tapah Road，再以計程車、有網約車時叫車，或預約司機走最後幾公里。',
      facts: [
        { label: '直達巴士', value: '無' },
        { label: '最近火車', value: 'Tapah Road（KTM ETS）' },
        { label: '最後一段', value: '計程車／網約車／司機' },
        { label: '轉乘點', value: '打巴巴士總站' },
      ],
      blocks: [
        {
          heading: '火車：KTM ETS 到 Tapah Road',
          paragraphs: [
            '最近的鐵路連結是 ETS 線上的 Tapah Road 站。',
            '從那裡安排公路接駁——計程車或私人司機——到打巴鎮再上 Route 59。出發前請查最新班車。',
          ],
        },
        {
          heading: '巴士到打巴',
          paragraphs: [
            '打巴巴士總站是來自怡保、吉隆坡與南北走廊長途巴士實際的轉乘點。',
            '別以為長途巴士會在瀑布前停——不會。你要在打巴轉計程車或網約車。',
          ],
        },
        {
          heading: '最後一段',
          paragraphs: [
            '山路上的網約車覆蓋不總是穩定。',
            '告訴司機你想在 Lata Iskandar 停留，並在抵達前約好回程時間，才不會被困。',
          ],
          callout: '提前規劃回程——Route 59 上的訊號與司機都有限，尤其離峰時段。',
        },
      ],
      faqs: [
        {
          q: '有直達 Lata Iskandar 的巴士嗎？',
          a: '沒有。先到打巴或 Tapah Road，再搭計程車、有網約車時叫車，或私人司機。',
        },
        {
          q: '能搭 ETS 嗎？',
          a: '能到 Tapah Road，再公路接駁。瀑布旁沒有車站。',
        },
        {
          q: '怎麼回去？',
          a: '開始前與司機約好回程接送；山路上的網約車不可靠。',
        },
        {
          q: '為什麼長途巴士不停？',
          a: '瀑布是彎曲公路邊的停靠點，沒有巴士停靠灣；長途巴士續往打巴或金馬侖。',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'how-to-get-to-lata-iskandar-from-kl',
        'lata-iskandar-gps-coordinate',
        'parking-lata-iskandar',
      ],
    },
  },

  'tapah-to-lata-iskandar': {
    ms: {
      category: 'transport',
      meta: {
        title: 'Tapah ke Lata Iskandar: Jarak, Masa & Arah',
        description:
          'Lata Iskandar pendakian singkat dari bandar Tapah, kira-kira 20–30 minit di Laluan 59. Jarak, pemanduan dan apa yang dilalui.',
      },
      kicker: 'Tapah ke Air Terjun',
      h1: 'Tapah ke Lata Iskandar: Jarak, Masa Pandu & Arah',
      lead: 'Lata Iskandar pendakian singkat dan indah dari bandar Tapah — kira-kira 20–30 minit sebaik anda di Laluan Persekutuan 59. Berikut jarak, pemanduan dan apa yang dilalui.',
      facts: [
        { label: 'Jarak', value: '~15–20 km' },
        { label: 'Masa pandu', value: '~20–30 min' },
        { label: 'Jalan', value: 'Laluan Persekutuan 59' },
        { label: 'Dari', value: 'Bandar Tapah' },
      ],
      blocks: [
        {
          heading: 'Arah dari bandar Tapah',
          paragraphs: [
            'Keluar Tapah di Laluan Persekutuan 59 yang ditanda ke Cameron Highlands.',
            'Jalan mendaki secara berterusan melalui kebun getah dan kelapa sawit kecil sebelum hutan menutup.',
            'Lata Iskandar di kanan, sejurus selepas jalan memasuki bukit — perhatikan kelompok gerai dan kereta parkir.',
          ],
        },
        {
          heading: 'Apa yang dilalui',
          paragraphs: [
            'Gerai buah tepi jalan kecil, beberapa rumah tamu dan titik pandang muncul bila anda naik.',
            'Udara sejuk dan kanopi tebal — tanda jelas anda meninggalkan bandar tanah rendah.',
          ],
          bullets: ['Gerai buah tepi jalan', 'Titik pandang bukit', 'Memasuki hutan simpan'],
        },
        {
          heading: 'Tips navigasi',
          paragraphs: [
            'Tetapkan destinasi sebelum keluar Tapah; isyarat mudah turun di bukit.',
            'Jika ragu, ikut papan tanda Cameron Highlands dan cari baris gerai di kanan.',
          ],
          callout: 'Isi minyak dan gunakan tandas di Tapah — perkhidmatan jarang di Laluan 59.',
        },
      ],
      faqs: [
        {
          q: 'Berapa jauh Lata Iskandar dari Tapah?',
          a: 'Kira-kira 15–20 km, lebih kurang 20–30 minit dengan kereta.',
        },
        {
          q: 'Berapa lama pemanduan?',
          a: '20–30 minit, lebih lama hujan atau trafik hujung minggu.',
        },
        {
          q: 'Bolehkah saya navigasi mudah?',
          a: 'Ya — ikut tanda Laluan 59 / Cameron Highlands; air terjun adalah hentian tepi jalan bertanda. Tetapkan GPS di Tapah di mana isyarat lebih kuat.',
        },
        {
          q: 'Ada minyak di jalan?',
          a: 'Tidak boleh harap. Isi di Tapah sebelum mendaki.',
        },
      ],
      related: [
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
        'lata-iskandar-gps-coordinate',
      ],
    },
    en: {
      category: 'transport',
      meta: {
        title: 'Tapah to Lata Iskandar: Distance & Directions',
        description:
          'A short, scenic climb from Tapah town — about 20–30 minutes on Federal Route 59. The distance, the drive and what you pass.',
      },
      kicker: 'Tapah to the Falls',
      h1: 'Tapah to Lata Iskandar: Distance, Drive Time & Directions',
      lead: 'Lata Iskandar is a short, scenic climb from Tapah town — roughly 20–30 minutes once you are on Federal Route 59. Here is the distance, the drive and what you pass on the way.',
      facts: [
        { label: 'Distance', value: '~15–20 km' },
        { label: 'Drive time', value: '~20–30 min' },
        { label: 'Road', value: 'Federal Route 59' },
        { label: 'From', value: 'Tapah town' },
      ],
      blocks: [
        {
          heading: 'Directions from Tapah town',
          paragraphs: [
            'Leave Tapah on Federal Route 59 signposted to Cameron Highlands.',
            'The road climbs steadily through rubber and oil-palm smallholdings before the forest closes in.',
            'Lata Iskandar is on the right, shortly after the road enters the hills — watch for stall clusters and parked cars.',
          ],
        },
        {
          heading: 'What you pass',
          paragraphs: [
            'Small roadside fruit stalls, a few guesthouses and viewpoints open up as you gain height.',
            'The air cools and the canopy thickens — a clear signal you are leaving the lowland town behind.',
          ],
          bullets: ['Roadside fruit stalls', 'Hill viewpoints', 'Entering the forest reserve'],
        },
        {
          heading: 'Navigation tip',
          paragraphs: [
            'Set the destination before you leave Tapah; mobile signal can dip in the hills.',
            'If in doubt, follow the Cameron Highlands signage and look for the stall row on the right.',
          ],
          callout: 'Fuel up and use the toilet in Tapah — services are sparse on Route 59.',
        },
      ],
      faqs: [
        {
          q: 'How far is Lata Iskandar from Tapah?',
          a: 'About 15–20 km, around 20–30 minutes by car.',
        },
        {
          q: 'How long does the drive take?',
          a: 'Allow 20–30 minutes, more in rain or weekend traffic.',
        },
        {
          q: 'Can I navigate easily?',
          a: 'Yes — follow Route 59 / Cameron Highlands signs; the fall is a marked roadside stop. Set GPS in Tapah where signal is stronger.',
        },
        {
          q: 'Is there fuel on the way?',
          a: 'Not reliably. Fill up in Tapah before the climb.',
        },
      ],
      related: [
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
        'lata-iskandar-gps-coordinate',
      ],
    },
    zh: {
      category: 'transport',
      meta: {
        title: '打巴到 Lata Iskandar：距離、車程與方向',
        description:
          '離打巴鎮是一段短而風景好的爬坡——一上聯邦 59 號公路約 20–30 分鐘。距離、車程與沿途所見。',
      },
      kicker: '打巴到瀑布',
      h1: '打巴到 Lata Iskandar：距離、車程與方向',
      lead: 'Lata Iskandar 離打巴鎮是一段短而風景好的爬坡——一上聯邦 59 號公路約 20–30 分鐘。以下為距離、車程與沿途所見。',
      facts: [
        { label: '距離', value: '約 15–20 公里' },
        { label: '車程', value: '約 20–30 分鐘' },
        { label: '道路', value: '聯邦 59 號公路' },
        { label: '起點', value: '打巴鎮' },
      ],
      blocks: [
        {
          heading: '從打巴鎮的方向',
          paragraphs: [
            '從打巴走聯邦 59 號公路，指標往金馬侖高原。',
            '道路持續爬升，經過橡膠與油棕小園，隨後森林合攏。',
            'Lata Iskandar 在右側，進山後不久——留意攤位群與停車。',
          ],
        },
        {
          heading: '沿途經過什麼',
          paragraphs: [
            '隨高度上升，出現路邊水果攤、幾間民宿與觀景點。',
            '空氣轉涼、林冠變密——清楚顯示你已離開低地城鎮。',
          ],
          bullets: ['路邊水果攤', '山間觀景點', '進入森林保留區'],
        },
        {
          heading: '導航小提醒',
          paragraphs: [
            '離開打巴前先設好目的地；上山後訊號可能變弱。',
            '拿不準就沿金馬侖高原路標，找右側的攤位排。',
          ],
          callout: '在打巴加滿油、上廁所——Route 59 上服務稀少。',
        },
      ],
      faqs: [
        {
          q: 'Lata Iskandar 離打巴多遠？',
          a: '約 15–20 公里，車程約 20–30 分鐘。',
        },
        {
          q: '車程多久？',
          a: '約 20–30 分鐘，雨天或週末車潮時更久。',
        },
        {
          q: '好導航嗎？',
          a: '好——沿 Route 59／金馬侖高原路標；瀑布是有標示的路邊停靠點。在訊號較強的打巴先設好 GPS。',
        },
        {
          q: '路上有加油嗎？',
          a: '別指望。爬坡前在打巴加滿。',
        },
      ],
      related: [
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
        'lata-iskandar-gps-coordinate',
      ],
    },
  },

  'lata-iskandar-gps-coordinate': {
    ms: {
      category: 'transport',
      meta: {
        title: 'Koordinat GPS Lata Iskandar, Plus Code & Waze',
        description:
          'Koordinat dan Plus Code untuk letak hentian tepi jalan ke Google Maps atau Waze — berguna bila papan tanda nipis dan isyarat turun di Laluan 59.',
      },
      kicker: 'GPS & Navigasi',
      h1: 'Koordinat GPS Lata Iskandar, Plus Code & Waze',
      lead: 'Guna koordinat dan Plus Code ini untuk letak hentian tepi jalan tepat ke Google Maps atau Waze — berguna bila papan tanda nipis dan isyarat turun di Laluan 59.',
      facts: [
        { label: 'Plus Code', value: '88FF+PX Tapah, Perak' },
        { label: 'Latitud', value: '4.3243714' },
        { label: 'Longitud', value: '101.3248752' },
        { label: 'Pautan peta', value: 'Google Maps' },
      ],
      blocks: [
        {
          heading: 'Koordinat',
          paragraphs: [
            'Latitud 4.3243714, longitud 101.3248752.',
            'Tampal ke Google Maps, Waze atau mana-mana app GPS untuk pakukan tempat tepi jalan di Laluan Persekutuan 59.',
          ],
        },
        {
          heading: 'Plus Code',
          paragraphs: [
            'Google Plus Code ialah 88FF+PX, Tapah, Perak.',
            'Plus Code berfungsi walaupun isyarat lemah selepas dimuat, dan mudah dikongsi melalui teks.',
          ],
        },
        {
          heading: 'Isyarat dan penggunaan luar talian',
          paragraphs: [
            'Liputan mudah alih di pendakian boleh hilang. Muat peta dan arah semasa isyarat masih ada di Tapah.',
            'Tangkap skrin laluan membantu jika app kehilangan rangkaian.',
          ],
          callout: 'Buka pautan Google Maps sebelum bermula: https://maps.app.goo.gl/91HzKTS7PoVpMsj99',
        },
      ],
      faqs: [
        {
          q: 'Apakah koordinat GPS?',
          a: '4.3243714, 101.3248752 — tempat tepi jalan di Laluan 59.',
        },
        {
          q: 'Apakah Plus Code?',
          a: '88FF+PX, Tapah, Perak.',
        },
        {
          q: 'Adakah Waze berfungsi?',
          a: 'Secara amnya ya, tetapi muat di Tapah di mana isyarat lebih kuat; liputan menipis di pendakian.',
        },
        {
          q: 'Ada pautan peta terus?',
          a: 'Ya — buka pautan Google Maps dalam fakta di atas sebelum berlepas.',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
      ],
    },
    en: {
      category: 'transport',
      meta: {
        title: 'Lata Iskandar GPS Coordinates, Plus Code & Waze',
        description:
          'Use these coordinates and Plus Code to drop the roadside stop into Google Maps or Waze — handy when signage is thin and signal dips on Route 59.',
      },
      kicker: 'GPS & Navigation',
      h1: 'Lata Iskandar GPS Coordinates, Plus Code & Waze',
      lead: 'Use these coordinates and the Plus Code to drop the exact roadside stop into Google Maps or Waze — handy when signage is thin and mobile signal dips on Route 59.',
      facts: [
        { label: 'Plus Code', value: '88FF+PX Tapah, Perak' },
        { label: 'Latitude', value: '4.3243714' },
        { label: 'Longitude', value: '101.3248752' },
        { label: 'Maps link', value: 'Google Maps' },
      ],
      blocks: [
        {
          heading: 'Coordinates',
          paragraphs: [
            'Latitude 4.3243714, longitude 101.3248752.',
            'Paste them into Google Maps, Waze or any GPS app to pin the waterfall pull-off on Federal Route 59.',
          ],
        },
        {
          heading: 'Plus Code',
          paragraphs: [
            'The Google Plus Code is 88FF+PX, Tapah, Perak.',
            'Plus Codes work even with weak signal once loaded, and are easy to share by text.',
          ],
        },
        {
          heading: 'Signal and offline use',
          paragraphs: [
            'Mobile coverage on the climb can drop. Load the map and directions while you still have signal in Tapah.',
            'A screenshot of the route helps if the app loses the network.',
          ],
          callout: 'Open the Google Maps link before you start: https://maps.app.goo.gl/91HzKTS7PoVpMsj99',
        },
      ],
      faqs: [
        {
          q: 'What are the GPS coordinates?',
          a: '4.3243714, 101.3248752 — the roadside pull-off on Route 59.',
        },
        {
          q: 'What is the Plus Code?',
          a: '88FF+PX, Tapah, Perak.',
        },
        {
          q: 'Does Waze work?',
          a: 'Generally yes, but load it in Tapah where signal is stronger; coverage thins on the climb.',
        },
        {
          q: 'Is there a direct map link?',
          a: 'Yes — open the Google Maps link in the facts above before you set off.',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
      ],
    },
    zh: {
      category: 'transport',
      meta: {
        title: 'Lata Iskandar GPS 座標、Plus Code 與 Waze',
        description:
          '用這些座標與 Plus Code 把確切的路邊停靠點放進 Google Maps 或 Waze——當路標稀疏、Route 59 上山訊號變弱時很實用。',
      },
      kicker: 'GPS 與導航',
      h1: 'Lata Iskandar GPS 座標、Plus Code 與 Waze',
      lead: '用這些座標與 Plus Code 把確切的路邊停靠點放進 Google Maps 或 Waze——當路標稀疏、Route 59 上山訊號變弱時很實用。',
      facts: [
        { label: 'Plus Code', value: '88FF+PX 打巴, 霹靂' },
        { label: '緯度', value: '4.3243714' },
        { label: '經度', value: '101.3248752' },
        { label: '地圖連結', value: 'Google Maps' },
      ],
      blocks: [
        {
          heading: '座標',
          paragraphs: [
            '緯度 4.3243714，經度 101.3248752。',
            '貼進 Google Maps、Waze 或任何 GPS App，就能在聯邦 59 號公路標定瀑布停靠點。',
          ],
        },
        {
          heading: 'Plus Code',
          paragraphs: [
            'Google Plus Code 為 88FF+PX，打巴，霹靂。',
            'Plus Code 在載入後即便訊號弱也能用，也方便用文字分享。',
          ],
        },
        {
          heading: '訊號與離線使用',
          paragraphs: [
            '爬坡時行動覆蓋可能中斷。還有訊號時（在打巴）先載入地圖與方向。',
            '把路線截圖，App 斷網時能派上用場。',
          ],
          callout: '出發前先開 Google Maps 連結：https://maps.app.goo.gl/91HzKTS7PoVpMsj99',
        },
      ],
      faqs: [
        {
          q: 'GPS 座標是什麼？',
          a: '4.3243714, 101.3248752——Route 59 上的路邊停靠點。',
        },
        {
          q: 'Plus Code 是什麼？',
          a: '88FF+PX，打巴，霹靂。',
        },
        {
          q: 'Waze 能用嗎？',
          a: '大致可以，但在訊號較強的打巴先載入；爬坡時覆蓋變弱。',
        },
        {
          q: '有直達地圖連結嗎？',
          a: '有——出發前開上方事實欄的 Google Maps 連結。',
        },
      ],
      related: [
        'tapah-to-lata-iskandar',
        'parking-lata-iskandar',
        'how-to-get-to-lata-iskandar-from-kl',
        'how-to-get-to-lata-iskandar-from-ipoh',
        'bus-to-lata-iskandar',
      ],
    },
  },
  'gerai-lata-iskandar': {
    ms: {
      category: 'food',
      meta: { title: 'Gerai Lata Iskandar: Minuman, Buah & Kraftangan', description: 'Barisan gerai tepi jalan di Lata Iskandar menjual minuman sejuk, buah tempatan dan kraftangan. Apa yang ada dan tips mudah.' },
      kicker: 'Gerai',
      h1: 'Gerai di Lata Iskandar: Minuman, Buah & Kraftangan',
      lead: 'Barisan gerai tepi jalan di Lata Iskandar menjual minuman sejuk, buah tempatan dan kraftangan kampung. Apa yang biasanya ada dan tips mudah.',
      facts: [
        { label: 'Jenis', value: 'Minuman, buah, kraftangan' },
        { label: 'Waktu', value: 'Tidak tetap — lebih ramai hujung minggu' },
        { label: 'Tunai', value: 'Bawa wang kecil' },
        { label: 'Lokasi', value: 'Tepi Route 59' },
      ],
      blocks: [
        { heading: 'Apa yang dijual', paragraphs: ['Gerai biasanya menjual air kelapa, minuman sejuk, buah tempatan seperti rambutan dan langsat, serta meja kraftangan kampung.', 'Pilihan berubah ikut musim dan hari.'] },
        { heading: 'Tips membeli', bullets: ['Bawa wang tunai kecil', 'Tanya harga dulu', 'Jaga sampah — tiada tong besar di tebing'], callout: 'Gerai dikendalikan penduduk tempatan; sokong mereka dan jangan tinggalkan sampah berhampiran air terjun.' },
      ],
      faqs: [
        { q: 'Ada gerai makan di Lata Iskandar?', a: 'Ya, barisan gerai tepi jalan menjual minuman, buah dan kraftangan.' },
        { q: 'Bolehkah saya beli makanan?', a: 'Ya, tetapi pilihan ringan — tiada restoran bertar. Bawa sendiri jika mahu hidangan penuh.' },
        { q: 'Terima kad?', a: 'Kebanyakannya tunai; bawa wang kecil.' },
        { q: 'Bila gerai paling banyak?', a: 'Hujung minggu dan cuti; hari biasa mungkin hanya beberapa gerai.' },
      ],
      related: ['tapah-food', 'cafes-tapah', 'picnic-supplies-lata-iskandar', 'lata-iskandar-with-kids', 'things-to-do-lata-iskandar'],
    },
    en: {
      category: 'food',
      meta: { title: 'Stalls at Lata Iskandar: Drinks, Fruit & Crafts', description: 'The roadside stall row at Lata Iskandar sells cold drinks, local fruit and village crafts. What is usually there and a few easy tips.' },
      kicker: 'Stalls',
      h1: 'Stalls at Lata Iskandar: Drinks, Fruit & Crafts',
      lead: 'The roadside stall row at Lata Iskandar sells cold drinks, local fruit and village handicrafts. What is usually there and a few easy tips.',
      facts: [
        { label: 'Type', value: 'Drinks, fruit, crafts' },
        { label: 'Hours', value: 'Irregular — more on weekends' },
        { label: 'Cash', value: 'Bring small change' },
        { label: 'Location', value: 'By Route 59' },
      ],
      blocks: [
        { heading: 'What is sold', paragraphs: ['Stalls usually sell coconut water, cold drinks, local fruit such as rambutan and langsat, and village handicraft tables.', 'Choice changes with season and day.'] },
        { heading: 'Buying tips', bullets: ['Bring small cash', 'Ask prices first', 'No big bins — take your rubbish'], callout: 'Stalls are run by local residents; support them and do not leave litter near the falls.' },
      ],
      faqs: [
        { q: 'Are there food stalls at Lata Iskandar?', a: 'Yes, a roadside row sells drinks, fruit and crafts.' },
        { q: 'Can I buy food?', a: 'Yes, but light options only — no proper restaurant. Bring your own if you want a full meal.' },
        { q: 'Do they take cards?', a: 'Mostly cash; bring small change.' },
        { q: 'When are stalls busiest?', a: 'Weekends and holidays; on weekdays only a few may open.' },
      ],
      related: ['tapah-food', 'cafes-tapah', 'picnic-supplies-lata-iskandar', 'lata-iskandar-with-kids', 'things-to-do-lata-iskandar'],
    },
    zh: {
      category: 'food',
      meta: { title: 'Lata Iskandar 攤販：飲料、水果與手工藝', description: 'Lata Iskandar 路邊的攤位販售涼飲、當地水果與村落手工藝。通常有哪些，以及一些小提醒。' },
      kicker: '攤販',
      h1: 'Lata Iskandar 攤販：飲料、水果與手工藝',
      lead: 'Lata Iskandar 路邊的攤位販售涼飲、當地水果與村落手工藝。通常有哪些，以及一些小提醒。',
      facts: [
        { label: '類型', value: '飲料、水果、手工藝' },
        { label: '時間', value: '不固定——週末較多' },
        { label: '現金', value: '準備零錢' },
        { label: '位置', value: 'Route 59 旁' },
      ],
      blocks: [
        { heading: '販售內容', paragraphs: ['攤位通常賣椰子水、涼飲、紅毛丹與蘆骨等當地水果，以及村落手工藝攤。', '品項隨季節與日子變動。'] },
        { heading: '購買小提醒', bullets: ['準備零錢', '先問價格', '無大型垃圾桶——垃圾帶走'], callout: '攤位由當地居民經營；支持他們，別在瀑布旁留下垃圾。' },
      ],
      faqs: [
        { q: 'Lata Iskandar 有小吃攤嗎？', a: '有，路邊一排販售飲料、水果與手工藝。' },
        { q: '能買到食物嗎？', a: '能，但只有輕食——沒有正規餐廳。想吃正餐請自備。' },
        { q: '收卡片嗎？', a: '多半收現金；請準備零錢。' },
        { q: '攤位什麼時候最多？', a: '週末與假日；平日可能只開幾攤。' },
      ],
      related: ['tapah-food', 'cafes-tapah', 'picnic-supplies-lata-iskandar', 'lata-iskandar-with-kids', 'things-to-do-lata-iskandar'],
    },
  },

  'tapah-food': {
    ms: {
      category: 'food',
      meta: { title: 'Makanan di Tapah: Laksa, Nasi Campur & Gerai', description: 'Tapah bandar terdekat dengan Lata Iskandar ada makanan tempatan simple sedap. Panduan cepat sebelum mendaki.' },
      kicker: 'Makan di Tapah',
      h1: 'Makanan di Tapah: Laksa, Nasi Campur & Gerai',
      lead: 'Tapah ialah bandar terdekat dengan Lata Iskandar dan mempunyai makanan tempatan yang simple namun sedap. Ini panduan cepat sebelum anda mendaki.',
      facts: [
        { label: 'Hidangan', value: 'Laksa Tapah, nasi campur' },
        { label: 'Waktu', value: 'Sarapan hingga malam' },
        { label: 'Harga', value: 'Berpatutan — semak di kedai' },
        { label: 'Lokasi', value: 'Bandar Tapah' },
      ],
      blocks: [
        { heading: 'Apa cuba', paragraphs: ['Laksa Tapah adalah hidangan tempatan yang sering disebut pelawat.', 'Nasi campur, gerai mamak dan kedai kopi biasa ada di sekitar pekan.'] },
        { heading: 'Tips', bullets: ['Makan sebelum mendaki Route 59', 'Tanya harga harian', 'Cuba buah tempatan musim'], callout: 'Isi perut di Tapah — pilihan makanan menjadi jarang sebaik anda masuk Route 59.' },
      ],
      faqs: [
        { q: 'Apa makanan wajib di Tapah?', a: 'Laksa Tapah dan nasi campur adalah pilihan tempatan biasa.' },
        { q: 'Bolehkah saya makan sebelum ke air terjun?', a: 'Ya, dan disarankan — Tapah ada lebih banyak pilihan berbanding tepi jalan atas.' },
        { q: 'Berapa harga?', a: 'Berpatutan; semak harga di kedai kerana ia berbeza.' },
        { q: 'Ada kopi?', a: 'Ya, kedai kopi dan gerai biasa ada di pekan Tapah.' },
      ],
      related: ['gerai-lata-iskandar', 'cafes-tapah', 'picnic-supplies-lata-iskandar', 'one-day-itinerary-tapah', 'tapah-to-lata-iskandar'],
    },
    en: {
      category: 'food',
      meta: { title: 'Food in Tapah: Laksa, Nasi Campur & Eateries', description: 'Tapah is the closest town to Lata Iskandar and has simple but tasty local food. A quick guide before you start the climb.' },
      kicker: 'Food in Tapah',
      h1: 'Food in Tapah: Laksa, Nasi Campur & Eateries',
      lead: 'Tapah is the closest town to Lata Iskandar and has simple but tasty local food. A quick guide before you start the climb.',
      facts: [
        { label: 'Dishes', value: 'Tapah laksa, nasi campur' },
        { label: 'Hours', value: 'Breakfast to evening' },
        { label: 'Price', value: 'Affordable — check in store' },
        { label: 'Location', value: 'Tapah town' },
      ],
      blocks: [
        { heading: 'What to try', paragraphs: ['Tapah laksa is a local dish visitors often mention.', 'Nasi campur, mamak stalls and coffee shops are around the town.'] },
        { heading: 'Tips', bullets: ['Eat before climbing Route 59', 'Ask daily prices', 'Try seasonal local fruit'], callout: 'Fill up in Tapah — food options thin out once you are on Route 59.' },
      ],
      faqs: [
        { q: 'What food is a must in Tapah?', a: 'Tapah laksa and nasi campur are common local choices.' },
        { q: 'Can I eat before the falls?', a: 'Yes, and it is recommended — Tapah has far more choice than the roadside up top.' },
        { q: 'How much does it cost?', a: 'Affordable; check prices in store as they vary.' },
        { q: 'Is there coffee?', a: 'Yes, coffee shops and stalls are in Tapah town.' },
      ],
      related: ['gerai-lata-iskandar', 'cafes-tapah', 'picnic-supplies-lata-iskandar', 'one-day-itinerary-tapah', 'tapah-to-lata-iskandar'],
    },
    zh: {
      category: 'food',
      meta: { title: '打巴美食：叻沙、經濟飯與小吃', description: '打巴是離 Lata Iskandar 最近的小鎮，有簡單卻好吃的在地食物。爬坡前的快速指南。' },
      kicker: '打巴美食',
      h1: '打巴美食：叻沙、經濟飯與小吃',
      lead: '打巴是離 Lata Iskandar 最近的小鎮，有簡單卻好吃的在地食物。爬坡前的快速指南。',
      facts: [
        { label: '料理', value: '打巴叻沙、經濟飯' },
        { label: '時間', value: '早午餐到傍晚' },
        { label: '價格', value: '平價——以店家為準' },
        { label: '位置', value: '打巴鎮' },
      ],
      blocks: [
        { heading: '試什麼', paragraphs: ['打巴叻沙是遊客常提到的在地料理。', '鎮上也有經濟飯、馬來攤與咖啡店。'] },
        { heading: '小提醒', bullets: ['爬 Route 59 前先吃', '問當日價格', '試當季水果'], callout: '在打巴吃飽——一上 Route 59 選擇就變少。' },
      ],
      faqs: [
        { q: '打巴必吃什麼？', a: '打巴叻沙與經濟飯是常見的在地選擇。' },
        { q: '能在去瀑布前吃嗎？', a: '能，也建議——打巴選擇遠多於山上路邊。' },
        { q: '多少錢？', a: '平價；價格以店家為準，會變動。' },
        { q: '有咖啡嗎？', a: '有，打巴鎮上有咖啡店與攤位。' },
      ],
      related: ['gerai-lata-iskandar', 'cafes-tapah', 'picnic-supplies-lata-iskandar', 'one-day-itinerary-tapah', 'tapah-to-lata-iskandar'],
    },
  },

  'cafes-tapah': {
    ms: {
      category: 'food',
      meta: { title: 'Kafe di Tapah: Rehat Sebelum Mendaki', description: 'Beberapa kafe dan kedai kopi di Tapah sesuai untuk sarapan atau bekal kopi sebelum ke Lata Iskandar.' },
      kicker: 'Kafe',
      h1: 'Kafe di Tapah: Tempat Rehat Sebelum Mendaki',
      lead: 'Beberapa kafe dan kedai kopi di Tapah sesuai untuk sarapan atau bekal kopi sebelum ke Lata Iskandar.',
      facts: [
        { label: 'Jenis', value: 'Kedai kopi, kafe kecil' },
        { label: 'Waktu', value: 'Pagi hingga petang' },
        { label: 'WiFi', value: 'Tidak konsisten' },
        { label: 'Lokasi', value: 'Sekitar Tapah' },
      ],
      blocks: [
        { heading: 'Bila singgah', paragraphs: ['Kafe berguna untuk sarapan awal atau kopi sebelum mendaki Route 59.', 'Sesetengah ada minuman bawa lalu untuk perjalanan.'] },
        { heading: 'Tips', bullets: ['Isi botol air', 'Ambil gambar ringkas', 'Tenang sebelum jalan berliku'], callout: 'Guna WiFi kafe untuk muat peta sebelum isyarat hilang di bukit.' },
      ],
      faqs: [
        { q: 'Ada kafe di Tapah?', a: 'Ya, kedai kopi dan kafe kecil ada di sekitar pekan.' },
        { q: 'Bolehkah saya bawa kopi ke air terjun?', a: 'Ya, minuman bawa lalu sesuai untuk perjalanan.' },
        { q: 'Ada WiFi?', a: 'Mungkin ada, tetapi jangan harap — muat peta di sini.' },
        { q: 'Bila paling senang?', a: 'Pagi, sebelum orang ramai dan sebelum mendaki.' },
      ],
      related: ['tapah-food', 'gerai-lata-iskandar', 'picnic-supplies-lata-iskandar', 'one-day-itinerary-tapah', 'how-to-get-to-lata-iskandar-from-kl'],
    },
    en: {
      category: 'food',
      meta: { title: 'Cafes in Tapah: Rest Before the Climb', description: 'A few cafes and coffee shops in Tapah suit a breakfast or a coffee to-go before heading to Lata Iskandar.' },
      kicker: 'Cafes',
      h1: 'Cafes in Tapah: Rest Before the Climb',
      lead: 'A few cafes and coffee shops in Tapah suit a breakfast or a coffee to-go before heading to Lata Iskandar.',
      facts: [
        { label: 'Type', value: 'Coffee shops, small cafes' },
        { label: 'Hours', value: 'Morning to afternoon' },
        { label: 'WiFi', value: 'Unreliable' },
        { label: 'Location', value: 'Around Tapah' },
      ],
      blocks: [
        { heading: 'When to stop', paragraphs: ['Cafes are handy for an early breakfast or coffee before climbing Route 59.', 'Some offer takeaway drinks for the drive.'] },
        { heading: 'Tips', bullets: ['Refill your water bottle', 'Take a quick photo', 'Relax before the winding road'], callout: 'Use the cafe WiFi to load your map before signal drops on the hill.' },
      ],
      faqs: [
        { q: 'Are there cafes in Tapah?', a: 'Yes, coffee shops and small cafes are around the town.' },
        { q: 'Can I take coffee to the falls?', a: 'Yes, takeaway drinks suit the trip.' },
        { q: 'Is there WiFi?', a: 'Maybe, but do not rely on it — load your map here.' },
        { q: 'When is easiest?', a: 'Morning, before crowds and before the climb.' },
      ],
      related: ['tapah-food', 'gerai-lata-iskandar', 'picnic-supplies-lata-iskandar', 'one-day-itinerary-tapah', 'how-to-get-to-lata-iskandar-from-kl'],
    },
    zh: {
      category: 'food',
      meta: { title: '打巴咖啡廳：爬坡前的休息站', description: '打巴幾間咖啡廳適合吃早餐或外帶咖啡，再前往 Lata Iskandar。' },
      kicker: '咖啡廳',
      h1: '打巴咖啡廳：爬坡前的休息站',
      lead: '打巴幾間咖啡廳適合吃早餐或外帶咖啡，再前往 Lata Iskandar。',
      facts: [
        { label: '類型', value: '咖啡店、小咖啡廳' },
        { label: '時間', value: '上午到下午' },
        { label: 'WiFi', value: '不穩定' },
        { label: '位置', value: '打巴周邊' },
      ],
      blocks: [
        { heading: '何時停留', paragraphs: ['咖啡廳適合爬 Route 59 前的早餐或咖啡。', '部分提供外帶飲料供車程使用。'] },
        { heading: '小提醒', bullets: ['補滿水壺', '簡單拍照', '蜿蜒山路前先放鬆'], callout: '利用咖啡廳 WiFi 在訊號消失前先載好地圖。' },
      ],
      faqs: [
        { q: '打巴有咖啡廳嗎？', a: '有，鎮上 around 有咖啡店與小咖啡廳。' },
        { q: '能帶咖啡去瀑布嗎？', a: '能，外帶飲料適合車程。' },
        { q: '有 WiFi 嗎？', a: '也許有，但別依賴——在此先載好地圖。' },
        { q: '什麼時候最順？', a: '上午，人潮與爬坡前。' },
      ],
      related: ['tapah-food', 'gerai-lata-iskandar', 'picnic-supplies-lata-iskandar', 'one-day-itinerary-tapah', 'how-to-get-to-lata-iskandar-from-kl'],
    },
  },

  'picnic-supplies-lata-iskandar': {
    ms: {
      category: 'food',
      meta: { title: 'Bekalan Picnic Lata Iskandar: Bawa Sendiri', description: 'Tiada restoran di air terjun, jadi rancang bekalan sendiri — air, snek dan sampah dibawa balik.' },
      kicker: 'Bekalan Picnic',
      h1: 'Bekalan Picnic ke Lata Iskandar: Bawa Sendiri',
      lead: 'Tiada restoran di air terjun, jadi rancang bekalan sendiri — air, snek dan sampah dibawa balik.',
      facts: [
        { label: 'Air', value: 'Bawa sendiri' },
        { label: 'Makanan', value: 'Snek ringan' },
        { label: 'Sampah', value: 'Bawa balik' },
        { label: 'Beli', value: 'Gerai tepi jalan sahaja' },
      ],
      blocks: [
        { heading: 'Apa bawa', paragraphs: ['Bawa air secukupnya — cuaca panas dan membasah boleh buat dahaga.', 'Snek ringan lebih baik daripada hidangan berat di tepi air terjun.'] },
        { heading: 'Jaga kebersihan', bullets: ['Bawa beg sampah', 'Jangan buang ke sungai', 'Sokong gerai tempatan jika mahu beli'], callout: 'Tiada tong sampah besar di tebing — apa dibawa masuk, bawa keluar.' },
      ],
      faqs: [
        { q: 'Bolehkah picnic di Lata Iskandar?', a: 'Ya, secara ringan — bawa makanan sendiri dan duduk di kawasan sesuai.' },
        { q: 'Di mana beli air?', a: 'Gerai tepi jalan ada; lebih baik bawa sendiri untuk pasti.' },
        { q: 'Ada tong sampah?', a: 'Tidak banyak — bawa sampah balik.' },
        { q: 'Bolehkah masak?', a: 'Tidak disarankan; tiada kemudahan dan jaga alam sekitar.' },
      ],
      related: ['gerai-lata-iskandar', 'tapah-food', 'cafes-tapah', 'safety-tips-lata-iskandar', 'lata-iskandar-with-kids'],
    },
    en: {
      category: 'food',
      meta: { title: 'Picnic Supplies for Lata Iskandar: Bring Your Own', description: 'No restaurant at the falls, so plan your own supplies — water, snacks and take your rubbish back.' },
      kicker: 'Picnic Supplies',
      h1: 'Picnic Supplies for Lata Iskandar: Bring Your Own',
      lead: 'No restaurant at the falls, so plan your own supplies — water, snacks and take your rubbish back.',
      facts: [
        { label: 'Water', value: 'Bring your own' },
        { label: 'Food', value: 'Light snacks' },
        { label: 'Rubbish', value: 'Take it back' },
        { label: 'Buy', value: 'Roadside stalls only' },
      ],
      blocks: [
        { heading: 'What to bring', paragraphs: ['Bring enough water — the hot, wet conditions can make you thirsty.', 'Light snacks beat a heavy meal by the falls.'] },
        { heading: 'Keep it clean', bullets: ['Bring a rubbish bag', 'Do not throw into the river', 'Support local stalls if you buy'], callout: 'No big bins by the bank — what you bring in, bring out.' },
      ],
      faqs: [
        { q: 'Can I picnic at Lata Iskandar?', a: 'Yes, lightly — bring your own food and sit in a suitable spot.' },
        { q: 'Where do I buy water?', a: 'Roadside stalls have some; better to bring your own to be sure.' },
        { q: 'Are there bins?', a: 'Not many — take your rubbish back.' },
        { q: 'Can I cook?', a: 'Not advised; no facilities and protect the environment.' },
      ],
      related: ['gerai-lata-iskandar', 'tapah-food', 'cafes-tapah', 'safety-tips-lata-iskandar', 'lata-iskandar-with-kids'],
    },
    zh: {
      category: 'food',
      meta: { title: 'Lata Iskandar 野餐補給：自備為主', description: '瀑布旁沒有餐廳，自己準備補給——水、零食，並把垃圾帶走。' },
      kicker: '野餐補給',
      h1: 'Lata Iskandar 野餐補給：自備為主',
      lead: '瀑布旁沒有餐廳，自己準備補給——水、零食，並把垃圾帶走。',
      facts: [
        { label: '水', value: '自備' },
        { label: '食物', value: '輕食' },
        { label: '垃圾', value: '帶走' },
        { label: '購買', value: '僅路邊攤' },
      ],
      blocks: [
        { heading: '帶什麼', paragraphs: ['帶足夠的水——濕熱會讓人口渴。', '輕食比在瀑布旁吃大餐合適。'] },
        { heading: '保持整潔', bullets: ['自備垃圾袋', '別丟進河裡', '要買就支持當地攤位'], callout: '岸邊沒有大型垃圾桶——帶進去的，帶出來。' },
      ],
      faqs: [
        { q: '能在 Lata Iskandar 野餐嗎？', a: '能，輕量即可——自備食物，坐在合適處。' },
        { q: '在哪買水？', a: '路邊攤有一些；自備更保險。' },
        { q: '有垃圾桶嗎？', a: '不多——垃圾帶走。' },
        { q: '能煮食嗎？', a: '不建議；無設施且請愛護環境。' },
      ],
      related: ['gerai-lata-iskandar', 'tapah-food', 'cafes-tapah', 'safety-tips-lata-iskandar', 'lata-iskandar-with-kids'],
    },
  },

  'restaurants-near-cameron-exit': {
    ms: {
      category: 'food',
      meta: { title: 'Restoran Berhampiran Susur Cameron Highlands', description: 'Sebelum masuk tanah tinggi, restoran dan medan selera di kaki Route 59 adalah pilihan terakhir sebelum harga naik.' },
      kicker: 'Restoran',
      h1: 'Restoran Berhampiran Susur Cameron Highlands',
      lead: 'Sebelum masuk tanah tinggi, terdapat restoran dan medan selera di kaki Route 59. Pilihan terakhir sebelum harga tanah tinggi naik.',
      facts: [
        { label: 'Jenis', value: 'Restoran tempatan' },
        { label: 'Waktu', value: 'Tengah hari' },
        { label: 'Harga', value: 'Sederhana' },
        { label: 'Lokasi', value: 'Kaki Route 59' },
      ],
      blocks: [
        { heading: 'Mengapa berhenti di sini', paragraphs: ['Restoran di kaki bukit sering lebih murah daripada di atas tanah tinggi.', 'Baik untuk hidangan penuh sebelum meneruskan pendakian.'] },
        { heading: 'Tips', bullets: ['Makan sebelum masuk Cameron', 'Tanya harga', 'Cuba masakan kampung'], callout: 'Harga makanan naik bila masuk Cameron Highlands — makan di kaki bukit lebih jimat.' },
      ],
      faqs: [
        { q: 'Ada restoran sebelum Cameron Highlands?', a: 'Ya, di kaki Route 59 sebelum pendakian curam.' },
        { q: 'Berbaloi berhenti?', a: 'Ya, hidangan penuh dengan harga lebih rendah berbanding atas tanah tinggi.' },
        { q: 'Bila buka?', a: 'Kebiasaannya tengah hari; semak di kedai.' },
        { q: 'Sesuai untuk keluarga?', a: 'Ya, restoran biasa ada meja besar.' },
      ],
      related: ['tapah-food', 'cafes-tapah', 'one-day-itinerary-tapah', 'cameron-highlands-day-trip', 'half-day-itinerary-lata-iskandar'],
    },
    en: {
      category: 'food',
      meta: { title: 'Restaurants Near the Cameron Highlands Turn-off', description: 'Before the highlands, restaurants and food courts at the foot of Route 59 are your last choice before prices rise.' },
      kicker: 'Restaurants',
      h1: 'Restaurants Near the Cameron Highlands Turn-off',
      lead: 'Before the highlands, restaurants and food courts at the foot of Route 59 are your last choice before prices rise.',
      facts: [
        { label: 'Type', value: 'Local restaurants' },
        { label: 'Hours', value: 'Midday' },
        { label: 'Price', value: 'Moderate' },
        { label: 'Location', value: 'Foot of Route 59' },
      ],
      blocks: [
        { heading: 'Why stop here', paragraphs: ['Foot-of-hill restaurants are often cheaper than up on the highlands.', 'Good for a full meal before continuing the climb.'] },
        { heading: 'Tips', bullets: ['Eat before entering Cameron', 'Ask prices', 'Try village cooking'], callout: 'Food prices rise once you enter Cameron Highlands — eating at the foot saves money.' },
      ],
      faqs: [
        { q: 'Are there restaurants before Cameron Highlands?', a: 'Yes, at the foot of Route 59 before the steep climb.' },
        { q: 'Worth stopping?', a: 'Yes, a full meal at lower prices than up on the highlands.' },
        { q: 'When open?', a: 'Usually midday; check at the shop.' },
        { q: 'Family-friendly?', a: 'Yes, restaurants usually have larger tables.' },
      ],
      related: ['tapah-food', 'cafes-tapah', 'one-day-itinerary-tapah', 'cameron-highlands-day-trip', 'half-day-itinerary-lata-iskandar'],
    },
    zh: {
      category: 'food',
      meta: { title: '金馬侖交流道附近的餐廳', description: '進高原前，Route 59 山腳的餐廳與美食中心是漲價前最後的選擇。' },
      kicker: '餐廳',
      h1: '金馬侖交流道附近的餐廳',
      lead: '進高原前，Route 59 山腳的餐廳與美食中心是漲價前最後的選擇。',
      facts: [
        { label: '類型', value: '在地餐廳' },
        { label: '時間', value: '中午' },
        { label: '價格', value: '中等' },
        { label: '位置', value: 'Route 59 山腳' },
      ],
      blocks: [
        { heading: '為什麼在此停', paragraphs: ['山腳餐廳通常比高原上便宜。', '適合續爬前吃頓正餐。'] },
        { heading: '小提醒', bullets: ['進金馬侖前先吃', '問價格', '試村落料理'], callout: '一進金馬侖高原物價就漲——在山腳吃較省。' },
      ],
      faqs: [
        { q: '金馬侖前有餐廳嗎？', a: '有，在 Route 59 陡峭爬坡前的山腳。' },
        { q: '值得停嗎？', a: '值得，正餐價格比高原上低。' },
        { q: '何時營業？', a: '通常中午；以店家為準。' },
        { q: '適合家庭嗎？', a: '適合，餐廳通常有較大的桌。' },
      ],
      related: ['tapah-food', 'cafes-tapah', 'one-day-itinerary-tapah', 'cameron-highlands-day-trip', 'half-day-itinerary-lata-iskandar'],
    },
  },

  'half-day-itinerary-lata-iskandar': {
    ms: {
      category: 'itinerary',
      meta: { title: 'Itinerari Separuh Hari Lata Iskandar', description: 'Tiada masa panjang? Lata Iskandar sesuai dihentikan 30–60 minit. Susunan masa yang padat untuk singgah jalan.' },
      kicker: 'Separuh Hari',
      h1: 'Itinerari Separuh Hari Lata Iskandar',
      lead: 'Tiada masa panjang? Lata Iskandar sesuai dihentikan 30–60 minit dalam perjalanan. Berikut susunan masa yang padat.',
      facts: [
        { label: 'Masa', value: '30–60 minit' },
        { label: 'Dari', value: 'Tapah' },
        { label: 'Sesuai', value: 'Singgah jalan' },
        { label: 'Tambah', value: 'Kuala Woh berdekatan' },
      ],
      blocks: [
        { heading: 'Susunan masa', paragraphs: ['Tiba dari Tapah (~20–30 min), parkir di bahu jalan, turun ke tebing untuk lihat air terjun.', 'Beli minuman di gerai, bergambar, kemudian teruskan perjalanan.'] },
        { heading: 'Tips', bullets: ['Datang pagi elak orang ramai', 'Bawa air sendiri', 'Gabung dengan Kuala Woh jika ada masa'], callout: 'Lata Iskandar bukan tarikan seharian — ia hentian sempurna sebelum Cameron Highlands.' },
      ],
      faqs: [
        { q: 'Berapa lama patut berhenti?', a: '30–60 minit sudah memadai untuk lihat air terjun dan bergambar.' },
        { q: 'Boleh campur tarikan lain?', a: 'Ya, Kuala Woh tidak jauh untuk separuh hari yang lebih penuh.' },
        { q: 'Bila waktu terbaik?', a: 'Pagi hari bekerja paling tenang.' },
        { q: 'Sesuai singgah dari KL?', a: 'Ya, sebagai hentian ke Cameron Highlands.' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'one-day-itinerary-tapah', 'cameron-highlands-day-trip', 'tapah-to-lata-iskandar', 'family-itinerary-lata-iskandar'],
    },
    en: {
      category: 'itinerary',
      meta: { title: 'Half-Day Itinerary at Lata Iskandar', description: 'Short on time? Lata Iskandar fits a 30–60 minute stop. A tight timeline for a roadside break.' },
      kicker: 'Half Day',
      h1: 'Half-Day Itinerary at Lata Iskandar',
      lead: 'Short on time? Lata Iskandar fits a 30–60 minute stop on the way. Here is a tight timeline.',
      facts: [
        { label: 'Time', value: '30–60 minutes' },
        { label: 'From', value: 'Tapah' },
        { label: 'Fits', value: 'Roadside stop' },
        { label: 'Add', value: 'Nearby Kuala Woh' },
      ],
      blocks: [
        { heading: 'Timeline', paragraphs: ['Arrive from Tapah (~20–30 min), park on the shoulder, step down to the bank for the falls.', 'Buy a drink at the stalls, take photos, then continue the drive.'] },
        { heading: 'Tips', bullets: ['Come in the morning to avoid crowds', 'Bring your own water', 'Add Kuala Woh if you have time'], callout: 'Lata Iskandar is not a full-day attraction — it is a perfect stop before Cameron Highlands.' },
      ],
      faqs: [
        { q: 'How long should I stop?', a: '30–60 minutes is enough to see the falls and take photos.' },
        { q: 'Can I combine with another sight?', a: 'Yes, Kuala Woh is close by for a fuller half day.' },
        { q: 'When is best?', a: 'Weekday mornings are calmest.' },
        { q: 'Good as a KL stop?', a: 'Yes, as a break on the way to Cameron Highlands.' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'one-day-itinerary-tapah', 'cameron-highlands-day-trip', 'tapah-to-lata-iskandar', 'family-itinerary-lata-iskandar'],
    },
    zh: {
      category: 'itinerary',
      meta: { title: 'Lata Iskandar 半日遊行程', description: '時間不多？Lata Iskandar 適合停 30–60 分鐘。路邊停靠的緊湊時程。' },
      kicker: '半日遊',
      h1: 'Lata Iskandar 半日遊行程',
      lead: '時間不多？Lata Iskandar 適合途中停 30–60 分鐘。以下是緊湊時程。',
      facts: [
        { label: '時間', value: '30–60 分鐘' },
        { label: '從', value: '打巴' },
        { label: '適合', value: '路邊停靠' },
        { label: '加碼', value: '鄰近 Kuala Woh' },
      ],
      blocks: [
        { heading: '時程', paragraphs: ['從打巴抵達（約 20–30 分），停路肩，下到岸邊看瀑布。', '在攤位買飲料、拍照，再續行。'] },
        { heading: '小提醒', bullets: ['上午來避開人潮', '自備水', '有時間可加 Kuala Woh'], callout: 'Lata Iskandar 不是全日景點——它是去金馬侖前完美的停靠點。' },
      ],
      faqs: [
        { q: '該停多久？', a: '30–60 分鐘看瀑布、拍照就夠。' },
        { q: '能串其他景點嗎？', a: '能，Kuala Woh 不遠，可讓半日更充實。' },
        { q: '什麼時候最好？', a: '平日早上最從容。' },
        { q: '適合從吉隆坡順停嗎？', a: '適合，作為去金馬侖的中途站。' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'one-day-itinerary-tapah', 'cameron-highlands-day-trip', 'tapah-to-lata-iskandar', 'family-itinerary-lata-iskandar'],
    },
  },

  'one-day-itinerary-tapah': {
    ms: {
      category: 'itinerary',
      meta: { title: 'Itinerari Satu Hari di Tapah: 3 Air Terjun', description: 'Tapah dan sekitarnya ada tiga tarikan air terjun. Susun satu hari penuh tanpa perlu ke tanah tinggi.' },
      kicker: 'Satu Hari',
      h1: 'Itinerari Satu Hari di Tapah: Lata Iskandar + Kuala Woh + Lata Kinjang',
      lead: 'Tapah dan sekitarnya ada tiga tarikan air terjun. Susun satu hari penuh tanpa perlu ke tanah tinggi.',
      facts: [
        { label: 'Tarikan', value: 'Lata Iskandar, Kuala Woh, Lata Kinjang' },
        { label: 'Masa', value: 'Satu hari' },
        { label: 'Bernada', value: 'Sederhana' },
        { label: 'Lokasi', value: 'Sekitar Tapah' },
      ],
      blocks: [
        { heading: 'Susunan', paragraphs: ['Mula di Lata Iskandar untuk pagi yang sejuk.', 'Terus ke Kuala Woh (taman rekreasi hutan) untuk mandi dan berehat.', 'Akhiri di Lata Kinjang jika jalan dibuka — air terjun jatuhan tinggi.'] },
        { heading: 'Tips', bullets: ['Isi minyak di Tapah', 'Makan tengah hari di Tapah', 'Semak Lata Kinjang dibuka'], callout: 'Lata Kinjang kadang ditutup kerana kerja jalan — semak sebelum pergi.' },
      ],
      faqs: [
        { q: 'Boleh lawat ketiga-tiga dalam sehari?', a: 'Ya, kesemuanya dalam jarak pemanduan singkat dari Tapah.' },
        { q: 'Perlu ke Cameron Highlands?', a: 'Tidak — ketiga-tiga cukup untuk satu hari penuh.' },
        { q: 'Mana makan?', a: 'Tapah ada pilihan sebelum dan selepas.' },
        { q: 'Bila terbaik?', a: 'Hari kering; elak hujan lebat yang naikkan air.' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'half-day-itinerary-lata-iskandar', 'cameron-highlands-day-trip', 'tapah-food', 'safety-tips-lata-iskandar'],
    },
    en: {
      category: 'itinerary',
      meta: { title: 'One-Day Tapah Itinerary: 3 Waterfalls', description: 'Around Tapah are three waterfall sights. Plan a full day without going to the highlands.' },
      kicker: 'One Day',
      h1: 'One-Day Tapah Itinerary: Lata Iskandar + Kuala Woh + Lata Kinjang',
      lead: 'Around Tapah are three waterfall sights. Plan a full day without going to the highlands.',
      facts: [
        { label: 'Sights', value: 'Lata Iskandar, Kuala Woh, Lata Kinjang' },
        { label: 'Time', value: 'One day' },
        { label: 'Pace', value: 'Moderate' },
        { label: 'Location', value: 'Around Tapah' },
      ],
      blocks: [
        { heading: 'Plan', paragraphs: ['Start at Lata Iskandar for a cool morning.', 'Continue to Kuala Woh (forest recreation park) to bathe and rest.', 'End at Lata Kinjang if the road is open — a tall plunge fall.'] },
        { heading: 'Tips', bullets: ['Fuel up in Tapah', 'Have lunch in Tapah', 'Check Lata Kinjang is open'], callout: 'Lata Kinjang is sometimes closed for road works — check before you go.' },
      ],
      faqs: [
        { q: 'Can I see all three in a day?', a: 'Yes, all are a short drive from Tapah.' },
        { q: 'Need to go to Cameron Highlands?', a: 'No — these three fill a full day.' },
        { q: 'Where to eat?', a: 'Tapah has options before and after.' },
        { q: 'When is best?', a: 'A dry day; avoid heavy rain that raises the water.' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'half-day-itinerary-lata-iskandar', 'cameron-highlands-day-trip', 'tapah-food', 'safety-tips-lata-iskandar'],
    },
    zh: {
      category: 'itinerary',
      meta: { title: '打巴一日遊：三座瀑布', description: '打巴周邊有三處瀑布景點。排一整天，不必上高原。' },
      kicker: '一日遊',
      h1: '打巴一日遊：Lata Iskandar + Kuala Woh + Lata Kinjang',
      lead: '打巴周邊有三處瀑布景點。排一整天，不必上高原。',
      facts: [
        { label: '景點', value: 'Lata Iskandar、Kuala Woh、Lata Kinjang' },
        { label: '時間', value: '一天' },
        { label: '步調', value: '中等' },
        { label: '位置', value: '打巴周邊' },
      ],
      blocks: [
        { heading: '安排', paragraphs: ['從 Lata Iskandar 開始，涼爽的早晨。', '續往 Kuala Woh（森林遊樂區）戲水休息。', '若道路開放，最後到 Lata Kinjang——高落差瀑布。'] },
        { heading: '小提醒', bullets: ['在打巴加滿油', '在打巴吃午餐', '先確認 Lata Kinjang 開放'], callout: 'Lata Kinjang 有時因道路工程封閉——出發前先查。' },
      ],
      faqs: [
        { q: '一天能看三座嗎？', a: '能，三座都離打巴不遠。' },
        { q: '需要去金馬侖嗎？', a: '不需要——這三座就夠充實一天。' },
        { q: '在哪吃？', a: '打巴前後都有選擇。' },
        { q: '什麼時候最好？', a: '晴天；避免大雨漲水。' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'half-day-itinerary-lata-iskandar', 'cameron-highlands-day-trip', 'tapah-food', 'safety-tips-lata-iskandar'],
    },
  },

  'cameron-highlands-day-trip': {
    ms: {
      category: 'itinerary',
      meta: { title: 'Percutian Sehari Cameron Highlands dari Lata Iskandar', description: 'Lata Iskandar ialah hentian sempurna sebelum Cameron Highlands. Susun hari dengan teh, sayur dan udara sejuk.' },
      kicker: 'Cameron Highlands',
      h1: 'Percutian Sehari Cameron Highlands dari Lata Iskandar',
      lead: 'Lata Iskandar ialah hentian sempurna sebelum memasuki Cameron Highlands. Susun hari dengan teh, sayur dan udara sejuk.',
      facts: [
        { label: 'Dari', value: 'Tapah → Route 59' },
        { label: 'Masa', value: 'Satu hari ke atas' },
        { label: 'Tarikan', value: 'Ladang teh, sayur' },
        { label: 'Cuaca', value: 'Lebih sejuk' },
      ],
      blocks: [
        { heading: 'Susunan', paragraphs: ['Berhenti di Lata Iskandar pagi untuk melegakan.', 'Terus ke Ringlet, Brincang dan Tanah Rata untuk ladang teh dan pasar sayur.', 'Balik sebelum malam kerana jalan berliku.'] },
        { heading: 'Tips', bullets: ['Bawa jaket nipis', 'Isi minyak di Tapah', 'Semak cuaca tanah tinggi'], callout: 'Jalan ke Cameron berliku dan berkabus — pandu perlahan, terutama pulang malam.' },
      ],
      faqs: [
        { q: 'Berbaloi singgah Lata Iskandar dulu?', a: 'Ya, ia hentian pertama paling biasa sebelum tanah tinggi.' },
        { q: 'Berapa lama ke Cameron?', a: 'Lebih sejam dari Lata Iskandar bergantung trafik.' },
        { q: 'Apa menarik di atas?', a: 'Ladang teh, strawberi, sayur dan rumah rehat.' },
        { q: 'Bila balik?', a: 'Sebelum gelap lebih selamat di jalan berliku.' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'one-day-itinerary-tapah', 'half-day-itinerary-lata-iskandar', 'tapah-to-lata-iskandar', 'weather-lata-iskandar'],
    },
    en: {
      category: 'itinerary',
      meta: { title: 'Cameron Highlands Day Trip from Lata Iskandar', description: 'Lata Iskandar is the perfect stop before Cameron Highlands. Plan a day of tea, vegetables and cool air.' },
      kicker: 'Cameron Highlands',
      h1: 'Cameron Highlands Day Trip from Lata Iskandar',
      lead: 'Lata Iskandar is the perfect stop before Cameron Highlands. Plan a day of tea, vegetables and cool air.',
      facts: [
        { label: 'From', value: 'Tapah → Route 59' },
        { label: 'Time', value: 'A day or more' },
        { label: 'Sights', value: 'Tea estates, veggies' },
        { label: 'Weather', value: 'Cooler' },
      ],
      blocks: [
        { heading: 'Plan', paragraphs: ['Stop at Lata Iskandar in the morning to refresh.', 'Continue to Ringlet, Brincang and Tanah Rata for tea estates and veg markets.', 'Return before dark — the road is winding.'] },
        { heading: 'Tips', bullets: ['Bring a light jacket', 'Fuel up in Tapah', 'Check highland weather'], callout: 'The road to Cameron is winding and misty — drive slowly, especially returning at night.' },
      ],
      faqs: [
        { q: 'Worth stopping at Lata Iskandar first?', a: 'Yes, it is the most common first stop before the highlands.' },
        { q: 'How long to Cameron?', a: 'Over an hour from Lata Iskandar depending on traffic.' },
        { q: 'What is up there?', a: 'Tea estates, strawberries, vegetables and guesthouses.' },
        { q: 'When to return?', a: 'Before dark is safer on the winding road.' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'one-day-itinerary-tapah', 'half-day-itinerary-lata-iskandar', 'tapah-to-lata-iskandar', 'weather-lata-iskandar'],
    },
    zh: {
      category: 'itinerary',
      meta: { title: '從 Lata Iskandar 出發的金馬侖一日遊', description: 'Lata Iskandar 是進金馬侖前完美的停靠。安排一天喝茶、看菜園與享受涼空氣。' },
      kicker: '金馬侖高原',
      h1: '從 Lata Iskandar 出發的金馬侖一日遊',
      lead: 'Lata Iskandar 是進金馬侖前完美的停靠。安排一天喝茶、看菜園與享受涼空氣。',
      facts: [
        { label: '從', value: '打巴 → Route 59' },
        { label: '時間', value: '一天以上' },
        { label: '景點', value: '茶園、蔬菜' },
        { label: '天氣', value: '較涼' },
      ],
      blocks: [
        { heading: '安排', paragraphs: ['上午在 Lata Iskandar 稍作舒緩。', '續往 Ringlet、Brincang 與 Tanah Rata 的茶園與菜市。', '天黑前回程——山路彎。'] },
        { heading: '小提醒', bullets: ['帶薄外套', '在打巴加滿油', '查高原天氣'], callout: '去金馬侖的路彎又多霧——慢行，尤其夜間回程。' },
      ],
      faqs: [
        { q: '先停 Lata Iskandar 值得嗎？', a: '值得，是進高原前最常見的第一站。' },
        { q: '到金馬侖要多久？', a: '從 Lata Iskandar 起約一小時以上，看車流。' },
        { q: '上面有什麼？', a: '茶園、草莓、蔬菜與民宿。' },
        { q: '何時回程？', a: '天黑前在彎路上較安全。' },
      ],
      related: ['lata-iskandar-and-lata-kinjang', 'one-day-itinerary-tapah', 'half-day-itinerary-lata-iskandar', 'tapah-to-lata-iskandar', 'weather-lata-iskandar'],
    },
  },

  'lata-iskandar-and-lata-kinjang': {
    ms: {
      category: 'itinerary',
      meta: { title: 'Lata Iskandar & Lata Kinjang: Banding & Gabung', description: 'Dua air terjun berdekatan dengan rupa sangat berbeza. Cara pilih atau gabungkan keduanya.' },
      kicker: 'Dua Air Terjun',
      h1: 'Lata Iskandar & Lata Kinjang: Banding & Gabung',
      lead: 'Dua air terjun berdekatan dengan rupa sangat berbeza. Ini cara pilih atau gabungkan keduanya.',
      facts: [
        { label: 'Lata Iskandar', value: 'Tepi jalan, mudah' },
        { label: 'Lata Kinjang', value: 'Jatuhan tinggi, jauh' },
        { label: 'Jarak', value: 'Berdekatan Tapah' },
        { label: 'Akses', value: 'Lata Kinjang kadang tutup' },
      ],
      blocks: [
        { heading: 'Beza utama', paragraphs: ['Lata Iskandar mudah dicapai dari kereta, sesuai singgah cepat.', 'Lata Kinjang lebih tinggi dan dramatik tetapi akses bergantung jalan buka.'] },
        { heading: 'Cara gabung', bullets: ['Mula di Lata Iskandar', 'Terus ke Lata Kinjang jika dibuka', 'Semak status jalan dulu'], callout: 'Jangan harap Lata Kinjang dibuka — kerja jalan sering tutup akses. Semak lebih awal.' },
      ],
      faqs: [
        { q: 'Air terjun mana lebih mudah?', a: 'Lata Iskandar — terus di tepi Route 59.' },
        { q: 'Boleh lawat kedua-dua?', a: 'Ya jika Lata Kinjang dibuka; jarak pemanduan singkat.' },
        { q: 'Lata Kinjang selalu dibuka?', a: 'Tidak — kerja jalan boleh tutup. Semak sebelum pergi.' },
        { q: 'Mana lebih sesuai keluarga?', a: 'Lata Iskandar untuk kanak-kanak; Lata Kinjang lebih lasak.' },
      ],
      related: ['one-day-itinerary-tapah', 'half-day-itinerary-lata-iskandar', 'cameron-highlands-day-trip', 'safety-tips-lata-iskandar', 'about-lata-iskandar'],
    },
    en: {
      category: 'itinerary',
      meta: { title: 'Lata Iskandar & Lata Kinjang: Compare & Combine', description: 'Two nearby waterfalls look very different. How to choose or combine them.' },
      kicker: 'Two Waterfalls',
      h1: 'Lata Iskandar & Lata Kinjang: Compare & Combine',
      lead: 'Two nearby waterfalls look very different. Here is how to choose or combine them.',
      facts: [
        { label: 'Lata Iskandar', value: 'Roadside, easy' },
        { label: 'Lata Kinjang', value: 'Tall plunge, farther' },
        { label: 'Distance', value: 'Near Tapah' },
        { label: 'Access', value: 'Lata Kinjang sometimes closed' },
      ],
      blocks: [
        { heading: 'Main difference', paragraphs: ['Lata Iskandar is reached straight from the car, ideal for a quick stop.', 'Lata Kinjang is taller and more dramatic but access depends on the road being open.'] },
        { heading: 'How to combine', bullets: ['Start at Lata Iskandar', 'Continue to Lata Kinjang if open', 'Check road status first'], callout: 'Do not assume Lata Kinjang is open — road works often close access. Check ahead.' },
      ],
      faqs: [
        { q: 'Which fall is easier?', a: 'Lata Iskandar — right by Route 59.' },
        { q: 'Can I visit both?', a: 'Yes if Lata Kinjang is open; a short drive apart.' },
        { q: 'Is Lata Kinjang always open?', a: 'No — road works can close it. Check before going.' },
        { q: 'Which suits families?', a: 'Lata Iskandar for children; Lata Kinjang is rougher.' },
      ],
      related: ['one-day-itinerary-tapah', 'half-day-itinerary-lata-iskandar', 'cameron-highlands-day-trip', 'safety-tips-lata-iskandar', 'about-lata-iskandar'],
    },
    zh: {
      category: 'itinerary',
      meta: { title: 'Lata Iskandar 與 Lata Kinjang：比較與串聯', description: '兩座鄰近瀑布樣貌迥異。如何選擇或串聯。' },
      kicker: '兩座瀑布',
      h1: 'Lata Iskandar 與 Lata Kinjang：比較與串聯',
      lead: '兩座鄰近瀑布樣貌迥異。以下是選擇或串聯的方式。',
      facts: [
        { label: 'Lata Iskandar', value: '路邊、易達' },
        { label: 'Lata Kinjang', value: '高落差、較遠' },
        { label: '距離', value: '近打巴' },
        { label: '通行', value: 'Lata Kinjang 偶爾封' },
      ],
      blocks: [
        { heading: '主要差異', paragraphs: ['Lata Iskandar 下車即達，適合快速停靠。', 'Lata Kinjang 更高更壯觀，但通行取決於道路是否開放。'] },
        { heading: '如何串聯', bullets: ['從 Lata Iskandar 開始', '若開放續往 Lata Kinjang', '先查道路狀態'], callout: '別假設 Lata Kinjang 開放——道路工程常封路。出發前先查。' },
      ],
      faqs: [
        { q: '哪座較好到？', a: 'Lata Iskandar——就在 Route 59 旁。' },
        { q: '兩座都能去嗎？', a: '若 Lata Kinjang 開放即可；車程很短。' },
        { q: 'Lata Kinjang 都開嗎？', a: '不——道路工程可能封閉。去前先查。' },
        { q: '哪座適合家庭？', a: 'Lata Iskandar 適合小孩；Lata Kinjang 較原始。' },
      ],
      related: ['one-day-itinerary-tapah', 'half-day-itinerary-lata-iskandar', 'cameron-highlands-day-trip', 'safety-tips-lata-iskandar', 'about-lata-iskandar'],
    },
  },

  'family-itinerary-lata-iskandar': {
    ms: {
      category: 'itinerary',
      meta: { title: 'Itinerari Mesra Keluarga di Lata Iskandar', description: 'Dengan kanak-kanak, Lata Iskandar sesuai singgah ringan. Tips kekal selamat dan seronok.' },
      kicker: 'Keluarga',
      h1: 'Itinerari Mesra Keluarga di Lata Iskandar',
      lead: 'Dengan kanak-kanak, Lata Iskandar sesuai singgah ringan. Tips kekal selamat dan seronok.',
      facts: [
        { label: 'Sesuai', value: 'Keluarga' },
        { label: 'Masa', value: '30–60 minit' },
        { label: 'Risiko', value: 'Air deras' },
        { label: 'Kemudahan', value: 'Gerai, tandas asas' },
      ],
      blocks: [
        { heading: 'Susunan mesra kanak', paragraphs: ['Parkir berhampiran gerai supaya dekat.', 'Biarkan kanak-kanak di kawasan cetek yang diawasi; jangan dekati air deras.', 'Gunakan gerai untuk rehat.'] },
        { heading: 'Tips keselamatan', bullets: ['Jaga anak setiap masa', 'Bawa tuala dan baju ganti', 'Elak batu licin'], callout: 'Air boleh naik cepat selepas hujan — jauhkan kanak-kanak dari tepi sungai deras.' },
      ],
      faqs: [
        { q: 'Selamat untuk kanak-kanak?', a: 'Ya dengan pengawasan; kekal di kawasan cetek.' },
        { q: 'Berapa lama cukup?', a: '30–60 minit sudah memadai untuk keluarga.' },
        { q: 'Ada tandas?', a: 'Kemudahan asas ada berhampiran gerai; bawa sendiri untuk selesa.' },
        { q: 'Bila paling senang?', a: 'Pagi hari bekerja.' },
      ],
      related: ['lata-iskandar-with-kids', 'safety-tips-lata-iskandar', 'half-day-itinerary-lata-iskandar', 'gerai-lata-iskandar', 'parking-lata-iskandar'],
    },
    en: {
      category: 'itinerary',
      meta: { title: 'Family-Friendly Itinerary at Lata Iskandar', description: 'With children, Lata Iskandar suits a light stop. Tips to stay safe and have fun.' },
      kicker: 'Family',
      h1: 'Family-Friendly Itinerary at Lata Iskandar',
      lead: 'With children, Lata Iskandar suits a light stop. Tips to stay safe and have fun.',
      facts: [
        { label: 'Suits', value: 'Families' },
        { label: 'Time', value: '30–60 minutes' },
        { label: 'Risk', value: 'Fast water' },
        { label: 'Facilities', value: 'Stalls, basic toilet' },
      ],
      blocks: [
        { heading: 'Kid-friendly plan', paragraphs: ['Park near the stalls so you are close.', 'Keep children in supervised shallow areas; avoid fast water.', 'Use the stalls for a rest.'] },
        { heading: 'Safety tips', bullets: ['Watch children at all times', 'Bring towels and a change', 'Avoid slippery rocks'], callout: 'Water can rise fast after rain — keep children away from the fast stream edge.' },
      ],
      faqs: [
        { q: 'Safe for children?', a: 'Yes with supervision; stay in shallow areas.' },
        { q: 'How long is enough?', a: '30–60 minutes is enough for a family.' },
        { q: 'Are there toilets?', a: 'Basic facilities are near the stalls; bring your own for comfort.' },
        { q: 'When is easiest?', a: 'Weekday mornings.' },
      ],
      related: ['lata-iskandar-with-kids', 'safety-tips-lata-iskandar', 'half-day-itinerary-lata-iskandar', 'gerai-lata-iskandar', 'parking-lata-iskandar'],
    },
    zh: {
      category: 'itinerary',
      meta: { title: 'Lata Iskandar 親子行程', description: '帶小孩，Lata Iskandar 適合輕量停靠。安全又盡興的小提醒。' },
      kicker: '親子',
      h1: 'Lata Iskandar 親子行程',
      lead: '帶小孩，Lata Iskandar 適合輕量停靠。安全又盡興的小提醒。',
      facts: [
        { label: '適合', value: '家庭' },
        { label: '時間', value: '30–60 分鐘' },
        { label: '風險', value: '湍急水流' },
        { label: '設施', value: '攤位、基本廁所' },
      ],
      blocks: [
        { heading: '親子安排', paragraphs: ['停在攤位附近，離車近。', '讓小孩待在有人看顧的淺處；別靠近急流。', '用攤位休息。'] },
        { heading: '安全小提醒', bullets: ['隨時看顧小孩', '帶毛巾與替換衣物', '避開濕滑岩石'], callout: '雨後水位漲得快——讓小孩遠離急流邊。' },
      ],
      faqs: [
        { q: '適合小孩嗎？', a: '有看顧就適合；留在淺處。' },
        { q: '多久夠？', a: '30–60 分鐘對家庭足夠。' },
        { q: '有廁所嗎？', a: '攤位附近有基本設施；自備更舒適。' },
        { q: '什麼時候最順？', a: '平日早上。' },
      ],
      related: ['lata-iskandar-with-kids', 'safety-tips-lata-iskandar', 'half-day-itinerary-lata-iskandar', 'gerai-lata-iskandar', 'parking-lata-iskandar'],
    },
  },
  'about-lata-iskandar': {
    ms: {
      category: 'attraction',
      meta: { title: 'Tentang Lata Iskandar: Air Terjun Tepi Jalan Tapah', description: 'Lata Iskandar ialah air terjun tepi jalan di Laluan Persekutuan 59 antara Tapah dan Cameron Highlands. Ketahui lokasi, aliran dan kenapa ia jadi hentian popular.' },
      kicker: 'Tentang tarikan',
      h1: 'Tentang Lata Iskandar',
      lead: 'Lata Iskandar ialah air terjun kecil yang mengalir tepat di tepi Laluan Persekutuan 59, kira-kira 20–30 minit memandu dari bandar Tapah menuju Cameron Highlands.',
      facts: [
        { label: 'Lokasi', value: 'Laluan 59, Tapah' },
        { label: 'Negeri', value: 'Perak' },
        { label: 'Plus Code', value: '88FF+PX Tapah, Perak' },
        { label: 'Dari Tapah', value: '20–30 minit' },
      ],
      blocks: [
        { heading: 'Di mana ia berada', paragraphs: ['Air terjun ini terletak di cerun Bukit Tapah, di sebelah jalan lama Tapah–Cameron Highlands.', 'Air turun dari tangga batu ke kolam kecil di tepi jalan — mudah diakses tanpa mendaki jauh.'] },
        { heading: 'Kenapa orang singgah', bullets: ['Berhenti rehat dari pemanduan berliku', 'Ambil angin hutan dan bunyi air', 'Gerai makan dan kraftangan berhampiran'], callout: 'Ia hentian ringan, bukan destinasi seharian. Rancang 30–60 minit.' },
      ],
      faqs: [
        { q: 'Lata Iskandar di negeri mana?', a: 'Di Perak, Malaysia, di Laluan 59 antara Tapah dan Cameron Highlands.' },
        { q: 'Berapa jauh dari Tapah?', a: 'Kira-kira 20–30 minit pemanduan ke utara selepas bandar Tapah.' },
        { q: 'Perlu mendaki?', a: 'Tidak jauh — kolam berada di tepi jalan berhampiran gerai.' },
        { q: 'Boleh mandi?', a: 'Ada kolam cetek; lihat halaman "Bolehkah mandi" untuk keselamatan.' },
      ],
      related: ['can-you-swim-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'parking-lata-iskandar', 'tapah-to-lata-iskandar', 'lata-iskandar-vs-lata-kinjang'],
    },
    en: {
      category: 'attraction',
      meta: { title: 'About Lata Iskandar: The Roadside Waterfall at Tapah', description: 'Lata Iskandar is a roadside waterfall on Federal Route 59 between Tapah and Cameron Highlands. Learn its location, flow and why it is a popular stop.' },
      kicker: 'About the falls',
      h1: 'About Lata Iskandar',
      lead: 'Lata Iskandar is a small waterfall that flows right beside Federal Route 59, roughly 20–30 minutes by car from Tapah town heading up to Cameron Highlands.',
      facts: [
        { label: 'Location', value: 'Route 59, Tapah' },
        { label: 'State', value: 'Perak' },
        { label: 'Plus Code', value: '88FF+PX Tapah, Perak' },
        { label: 'From Tapah', value: '20–30 minutes' },
      ],
      blocks: [
        { heading: 'Where it is', paragraphs: ['The fall sits on the Tapah Hill slope, beside the old Tapah–Cameron Highlands road.', 'Water drops down a rock staircase into a small pool by the road — easy to reach without a long hike.'] },
        { heading: 'Why people stop', bullets: ['Rest from the winding drive', 'Breathe forest air and hear the water', 'Stalls with food and crafts nearby'], callout: 'It is a light stop, not a full-day destination. Plan 30–60 minutes.' },
      ],
      faqs: [
        { q: 'Which state is Lata Iskandar in?', a: 'In Perak, Malaysia, on Route 59 between Tapah and Cameron Highlands.' },
        { q: 'How far from Tapah?', a: 'About 20–30 minutes driving north after Tapah town.' },
        { q: 'Is there a hike?', a: 'Not far — the pool is by the road near the stalls.' },
        { q: 'Can you swim?', a: 'There is a shallow pool; see the "Can you swim" page for safety.' },
      ],
      related: ['can-you-swim-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'parking-lata-iskandar', 'tapah-to-lata-iskandar', 'lata-iskandar-vs-lata-kinjang'],
    },
    zh: {
      category: 'attraction',
      meta: { title: '关于 Lata Iskandar：打巴路边的瀑布', description: 'Lata Iskandar 是打巴—金马仑高原之间 Route 59 上的路边瀑布。了解位置、水流与为何它成为热门停靠点。' },
      kicker: '关于景点',
      h1: '关于 Lata Iskandar',
      lead: 'Lata Iskandar 是一道小瀑布，就在联邦 Route 59 路边，从打巴镇往金马仑高原方向开车约 20–30 分钟即达。',
      facts: [
        { label: '位置', value: 'Route 59，打巴' },
        { label: '州属', value: '霹雳' },
        { label: 'Plus Code', value: '88FF+PX 打巴，霹雳' },
        { label: '距打巴', value: '20–30 分钟' },
      ],
      blocks: [
        { heading: '它在哪里', paragraphs: ['瀑布位于打巴山（Bukit Tapah）坡上，紧邻打巴—金马仑高原旧公路。', '水从岩石阶梯落进路边的浅池——不必远行就能到达。'] },
        { heading: '为什么人们会停靠', bullets: ['蜿蜒驾驶后的休息站', '呼吸森林空气、听水声', '附近有饮食与手工艺摊'], callout: '它是轻量停靠，不是一日游目的地。安排 30–60 分钟。' },
      ],
      faqs: [
        { q: 'Lata Iskandar 在哪个州？', a: '在马来西亚霹雳州，Route 59 打巴—金马仑高原之间。' },
        { q: '离打巴多远？', a: '打巴镇往北开车约 20–30 分钟。' },
        { q: '需要徒步吗？', a: '不远——水池就在路边的摊位点附近。' },
        { q: '可以游泳吗？', a: '有浅池；安全细节请看「可以游泳吗」页面。' },
      ],
      related: ['can-you-swim-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'parking-lata-iskandar', 'tapah-to-lata-iskandar', 'lata-iskandar-vs-lata-kinjang'],
    },
  },
  'lata-iskandar-vs-lata-kinjang': {
    ms: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar vs Lata Kinjang: Mana Satu?', description: 'Dua air terjun di Laluan 59 berhampiran Tapah. Bandingkan akses, ketinggian dan cara singgah supaya anda pilih yang sesuai.' },
      kicker: 'Perbandingan',
      h1: 'Lata Iskandar vs Lata Kinjang',
      lead: 'Kedua-dua air terjun berada di laluan Tapah–Cameron Highlands, tetapi Lata Iskandar lebih mudah diakses manakala Lata Kinjang jauh lebih tinggi.',
      facts: [
        { label: 'Lata Iskandar', value: 'Tepi jalan' },
        { label: 'Lata Kinjang', value: 'Lebih tinggi' },
        { label: 'Akses', value: 'Kereta biasa' },
        { label: 'Laluan', value: 'Route 59' },
      ],
      blocks: [
        { heading: 'Lata Iskandar', paragraphs: ['Berada di tepi jalan utama, sesuai singgah ringan tanpa mendaki.', 'Kolam kecil dan gerai berhampiran menjadikannya mesra keluarga.'] },
        { heading: 'Lata Kinjang', paragraphs: ['Antara air terjun tertinggi di Malaysia, namun akses bergantung kepada susunan semasa dan jarak dari jalan besar.', 'Perlu rancang lebih awal dan sahkan keadaan di tapak sebelum pergi.'] },
        { heading: 'Cara pilih', bullets: ['Mahukan hentian cepat: pilih Lata Iskandar', 'Mahukan pemandangan tinggi: semak Lata Kinjang', 'Sentiasa sahkan akses di tapak'], callout: 'Jangan anggap kedua-dua sama mudah diakses — Lata Kinjang mungkin memerlukan persediaan lebih.' },
      ],
      faqs: [
        { q: 'Yang mana lebih dekat dengan jalan?', a: 'Lata Iskandar — kolamnya betul-betul di tepi Route 59.' },
        { q: 'Yang mana lebih tinggi?', a: 'Lata Kinjang, salah satu yang tertinggi di Malaysia.' },
        { q: 'Boleh singgah kedua-duanya sehari?', a: 'Boleh jika masa mencukupi; Lata Iskandar lebih pantas, Lata Kinjang perlu perancangan.' },
        { q: 'Perlu pandu 4WD?', a: 'Tidak untuk Lata Iskandar; untuk Lata Kinjang sahkan di tapak.' },
      ],
      related: ['about-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'things-to-do-lata-iskandar', 'tapah-to-lata-iskandar', 'parking-lata-iskandar'],
    },
    en: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar vs Lata Kinjang: Which One?', description: 'Two waterfalls near Tapah on Route 59. Compare access, height and how to stop by so you pick the right one.' },
      kicker: 'Comparison',
      h1: 'Lata Iskandar vs Lata Kinjang',
      lead: 'Both waterfalls are on the Tapah–Cameron Highlands route, but Lata Iskandar is far easier to reach while Lata Kinjang is much taller.',
      facts: [
        { label: 'Lata Iskandar', value: 'Roadside' },
        { label: 'Lata Kinjang', value: 'Taller' },
        { label: 'Access', value: 'Normal car' },
        { label: 'Route', value: 'Route 59' },
      ],
      blocks: [
        { heading: 'Lata Iskandar', paragraphs: ['Right by the main road, good for a light stop without hiking.', 'A small pool and nearby stalls make it family-friendly.'] },
        { heading: 'Lata Kinjang', paragraphs: ['Among the tallest waterfalls in Malaysia, but access depends on current arrangements and distance from the highway.', 'Plan ahead and confirm on-site conditions before going.'] },
        { heading: 'How to choose', bullets: ['Want a quick stop: choose Lata Iskandar', 'Want a tall view: check Lata Kinjang', 'Always confirm access on site'], callout: 'Do not assume both are equally easy to reach — Lata Kinjang may need more preparation.' },
      ],
      faqs: [
        { q: 'Which is closer to the road?', a: 'Lata Iskandar — its pool is right beside Route 59.' },
        { q: 'Which is taller?', a: 'Lata Kinjang, one of the tallest in Malaysia.' },
        { q: 'Can you visit both in a day?', a: 'Yes if time allows; Lata Iskandar is quicker, Lata Kinjang needs planning.' },
        { q: 'Need a 4WD?', a: 'No for Lata Iskandar; for Lata Kinjang confirm on site.' },
      ],
      related: ['about-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'things-to-do-lata-iskandar', 'tapah-to-lata-iskandar', 'parking-lata-iskandar'],
    },
    zh: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar 对比 Lata Kinjang：选哪个？', description: 'Route 59 打巴附近的两道瀑布。比较可达性、高度与停靠方式，帮你选对。' },
      kicker: '对比',
      h1: 'Lata Iskandar vs Lata Kinjang',
      lead: '两道瀑布都在打巴—金马仑高原路上，但 Lata Iskandar 容易抵达，Lata Kinjang 则高得多。',
      facts: [
        { label: 'Lata Iskandar', value: '路边' },
        { label: 'Lata Kinjang', value: '更高' },
        { label: '交通', value: '一般轿车' },
        { label: '路线', value: 'Route 59' },
      ],
      blocks: [
        { heading: 'Lata Iskandar', paragraphs: ['就在主路旁，适合不徒步的轻量停靠。', '浅池与附近摊位点，对家庭友善。'] },
        { heading: 'Lata Kinjang', paragraphs: ['是马来西亚最高的瀑布之一，但可达性取决于当下安排与距大路的距离。', '提前规划，出发前确认现场状况。'] },
        { heading: '如何选', bullets: ['想快速停靠：选 Lata Iskandar', '想看高瀑：查 Lata Kinjang', '务必现场确认可达性'], callout: '别假设两者同样好到——Lata Kinjang 可能需要更多准备。' },
      ],
      faqs: [
        { q: '哪个离路更近？', a: 'Lata Iskandar——水池就在 Route 59 旁。' },
        { q: '哪个更高？', a: 'Lata Kinjang，马来西亚最高的瀑布之一。' },
        { q: '一天能看两个吗？', a: '时间够就可以；Lata Iskandar 更快，Lata Kinjang 需规划。' },
        { q: '需要 4WD 吗？', a: 'Lata Iskandar 不用；Lata Kinjang 现场确认。' },
      ],
      related: ['about-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'things-to-do-lata-iskandar', 'tapah-to-lata-iskandar', 'parking-lata-iskandar'],
    },
  },
  'best-time-to-visit-lata-iskandar': {
    ms: {
      category: 'attraction',
      meta: { title: 'Masa Terbaik ke Lata Iskandar: Waktu & Musim', description: 'Lata Iskandar paling selesa pada waktu siang kering. Ketahui masa terbaik, musim tengkujuh dan cara elak hujan lebat.' },
      kicker: 'Masa lawatan',
      h1: 'Masa Terbaik ke Lata Iskandar',
      lead: 'Pagi hingga lewat petang pada hari cerah adalah masa terbaik. Selepas hujan, batu licin dan aliran kuat — utamakan keselamatan.',
      facts: [
        { label: 'Waktu', value: 'Siang, kering' },
        { label: 'Elak', value: 'Hujan lebat' },
        { label: 'Musim', value: 'Antara monsun' },
        { label: 'Hari', value: 'Bekerja lebih senyap' },
      ],
      blocks: [
        { heading: 'Waktu siang', paragraphs: ['Lawatan waktu siang lebih selamat kerana batu kering dan penglihatan jelas.', 'Datang lebih awal untuk elak kesesakan hujung minggu di bahu jalan.'] },
        { heading: 'Musim & hujan', bullets: ['Elak selepas hujan lebat — aliran deras', 'Bulan tengkujuh boleh tutup akses sementara', 'Semak ramalan cuaca sebelum pergi'], callout: 'Tiada jadual rasmi yang tetap; rancang lawatan ikut cuaca dan tanda di tapak.' },
      ],
      faqs: [
        { q: 'Bila paling elok?', a: 'Pagi hingga lewat petang hari cerah.' },
        { q: 'Boleh pergi waktu malam?', a: 'Tidak disarankan — tiada lampu, batu licin dan tiada pengawasan.' },
        { q: 'Musim mana paling kuat air?', a: 'Selepas hujan lebat; aliran deras tetapi kurang selamat.' },
        { q: 'Hujung minggu sesak?', a: 'Ya; datang awal atau hari bekerja untuk lebih selesa.' },
      ],
      related: ['weather-lata-iskandar', 'safety-tips-lata-iskandar', 'about-lata-iskandar', 'lata-iskandar-opening-hours', 'rainy-day-alternatives'],
    },
    en: {
      category: 'attraction',
      meta: { title: 'Best Time to Visit Lata Iskandar: Hours & Season', description: 'Lata Iskandar is most comfortable in dry daylight. Learn the best time, monsoon season and how to avoid heavy rain.' },
      kicker: 'When to visit',
      h1: 'Best Time to Visit Lata Iskandar',
      lead: 'Morning to late afternoon on a clear day is best. After rain, rocks are slippery and the flow is strong — prioritise safety.',
      facts: [
        { label: 'Time', value: 'Daylight, dry' },
        { label: 'Avoid', value: 'Heavy rain' },
        { label: 'Season', value: 'Between monsoons' },
        { label: 'Day', value: 'Weekdays quieter' },
      ],
      blocks: [
        { heading: 'Daylight hours', paragraphs: ['A daytime visit is safer because rocks are dry and visibility is clear.', 'Come earlier to avoid weekend crowding on the road shoulder.'] },
        { heading: 'Season & rain', bullets: ['Avoid right after heavy rain — fast flow', 'Monsoon months can close access temporarily', 'Check the forecast before you go'], callout: 'There is no fixed official schedule; plan around weather and on-site signs.' },
      ],
      faqs: [
        { q: 'When is best?', a: 'Morning to late afternoon on a clear day.' },
        { q: 'Can you go at night?', a: 'Not recommended — no lighting, slippery rocks and no supervision.' },
        { q: 'Which season has the strongest flow?', a: 'After heavy rain; flow is strong but less safe.' },
        { q: 'Are weekends crowded?', a: 'Yes; come early or on a weekday for more comfort.' },
      ],
      related: ['weather-lata-iskandar', 'safety-tips-lata-iskandar', 'about-lata-iskandar', 'lata-iskandar-opening-hours', 'rainy-day-alternatives'],
    },
    zh: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar 最佳到访时间：时段与季节', description: 'Lata Iskandar 在干燥白天最舒适。了解最佳时间、季风季节与如何避开暴雨。' },
      kicker: '何时到访',
      h1: 'Lata Iskandar 最佳到访时间',
      lead: '晴朗日的上午到傍晚最好。雨后岩石湿滑、水流变急——以安全为优先。',
      facts: [
        { label: '时段', value: '白天、干燥' },
        { label: '避免', value: '暴雨' },
        { label: '季节', value: '季风之间' },
        { label: '日子', value: '平日较安静' },
      ],
      blocks: [
        { heading: '白天时段', paragraphs: ['白天到访更安全，岩石干、视线清楚。', '早点到，避开周末路肩的人潮。'] },
        { heading: '季节与雨', bullets: ['避免刚下过大雨——水流急', '季风月可能临时封闭', '出发前查天气预报'], callout: '没有固定的官方时间表；按天气与现场指示规划。' },
      ],
      faqs: [
        { q: '什么时候最好？', a: '晴朗日的上午到傍晚。' },
        { q: '可以晚上去吗？', a: '不建议——无照明、岩石滑、无人看顾。' },
        { q: '哪个季节水最急？', a: '刚下过大雨后；水急但较不安全。' },
        { q: '周末会挤吗？', a: '会；早点到或选平日更舒适。' },
      ],
      related: ['weather-lata-iskandar', 'safety-tips-lata-iskandar', 'about-lata-iskandar', 'lata-iskandar-opening-hours', 'rainy-day-alternatives'],
    },
  },
  'can-you-swim-lata-iskandar': {
    ms: {
      category: 'attraction',
      meta: { title: 'Bolehkah Mandi di Lata Iskandar? Keselamatan Kolam', description: 'Ada kolam cetek di tepi jalan. Ketahui sama ada selamat mandi, risiko air deras dan tips kekal selamat.' },
      kicker: 'Keselamatan air',
      h1: 'Bolehkah Mandi di Lata Iskandar?',
      lead: 'Ada kolam cetek di tepi jalan, tetapi arus boleh deras selepas hujan. Mandi hanya di kawasan cetek yang diawasi dan ikut tanda di tapak.',
      facts: [
        { label: 'Kolam', value: 'Cetek, tepi jalan' },
        { label: 'Risiko', value: 'Air deras selepas hujan' },
        { label: 'Pantau', value: 'Anak setiap masa' },
        { label: 'Tanda', value: 'Ikut arahan tapak' },
      ],
      blocks: [
        { heading: 'Boleh mandi?', paragraphs: ['Ramai pengunjung bermain air di kolam cetek berhampiran gerai.', 'Tiada renang di kawasan dalam atau berdekatan air terjun utama.'] },
        { heading: 'Tips selamat', bullets: ['Kekal di kawasan cetek', 'Jauhi air terjun dan batu licin', 'Awasi kanak-kanak sentiasa'], callout: 'Air boleh naik cepat selepas hujan — jika deras, jangan masuk. Semak keadaan di tapak.' },
      ],
      faqs: [
        { q: 'Selamat untuk kanak-kanak?', a: 'Hanya di kolam cetek dengan pengawasan rapat.' },
        { q: 'Bila tidak boleh masuk?', a: 'Bila air deras atau selepas hujan lebat.' },
        { q: 'Ada penyelamat?', a: 'Tidak ada; ini bukan kawasan renang rasmi.' },
        { q: 'Boleh mandi di air terjun?', a: 'Tidak disarankan — arus kuat dan batu licin.' },
      ],
      related: ['safety-tips-lata-iskandar', 'lata-iskandar-with-kids', 'about-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'toilet-surau-lata-iskandar'],
    },
    en: {
      category: 'attraction',
      meta: { title: 'Can You Swim at Lata Iskandar? Pool Safety', description: 'There is a shallow pool by the road. Learn whether it is safe to bathe, the fast-water risk and tips to stay safe.' },
      kicker: 'Water safety',
      h1: 'Can You Swim at Lata Iskandar?',
      lead: 'There is a shallow pool by the road, but the current can be strong after rain. Bathe only in supervised shallow areas and follow on-site signs.',
      facts: [
        { label: 'Pool', value: 'Shallow, roadside' },
        { label: 'Risk', value: 'Fast water after rain' },
        { label: 'Watch', value: 'Kids at all times' },
        { label: 'Signs', value: 'Follow on-site' },
      ],
      blocks: [
        { heading: 'Can you bathe?', paragraphs: ['Many visitors splash in the shallow pool near the stalls.', 'No swimming in deep areas or near the main fall.'] },
        { heading: 'Safety tips', bullets: ['Stay in shallow areas', 'Keep away from the fall and slippery rocks', 'Supervise children constantly'], callout: 'Water can rise fast after rain — if it is fast, do not enter. Check conditions on site.' },
      ],
      faqs: [
        { q: 'Safe for children?', a: 'Only in the shallow pool with close supervision.' },
        { q: 'When should you not enter?', a: 'When the water is fast or right after heavy rain.' },
        { q: 'Is there a lifeguard?', a: 'No; this is not an official swimming area.' },
        { q: 'Can you swim at the fall?', a: 'Not recommended — strong current and slippery rocks.' },
      ],
      related: ['safety-tips-lata-iskandar', 'lata-iskandar-with-kids', 'about-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'toilet-surau-lata-iskandar'],
    },
    zh: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar 可以游泳吗？水池安全', description: '路边有浅池。了解是否适合戏水、急流风险与安全小提醒。' },
      kicker: '戏水安全',
      h1: 'Lata Iskandar 可以游泳吗？',
      lead: '路边有浅池，但雨后水流可能很急。只在有人看顾的浅处玩水，并遵守现场指示。',
      facts: [
        { label: '水池', value: '浅、路边' },
        { label: '风险', value: '雨后急流' },
        { label: '看顾', value: '随时看小孩' },
        { label: '指示', value: '遵守现场' },
      ],
      blocks: [
        { heading: '可以戏水吗？', paragraphs: ['许多游客在摊位点附近的浅池玩水。', '深处或主瀑布附近不要游泳。'] },
        { heading: '安全小提醒', bullets: ['留在浅处', '远离瀑布与湿滑岩石', '随时看顾小孩'], callout: '雨后水位涨得快——水急就别下水。现场确认状况。' },
      ],
      faqs: [
        { q: '小孩适合吗？', a: '只在有人近身看顾的浅池。' },
        { q: '什么时候不该下水？', a: '水急或刚下过大雨后。' },
        { q: '有救生员吗？', a: '没有；这里不是正式游泳区。' },
        { q: '可以在瀑布下水吗？', a: '不建议——水流强、岩石滑。' },
      ],
      related: ['safety-tips-lata-iskandar', 'lata-iskandar-with-kids', 'about-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'toilet-surau-lata-iskandar'],
    },
  },
  'lata-iskandar-entrance-fee': {
    ms: {
      category: 'attraction',
      meta: { title: 'Tiket Masuk Lata Iskandar: Ada Bayaran?', description: 'Tiada yuran masuk rasmi yang disahkan di Lata Iskandar. Ketahui apa yang mungkin dikenakan dan sahkan di tapak sebelum pergi.' },
      kicker: 'Yuran & tiket',
      h1: 'Tiket Masuk Lata Iskandar',
      lead: 'Tiada yuran masuk rasmi yang disahkan untuk Lata Iskandar. Gerai dan parkir bahu jalan mungkin ada caj tidak rasmi — sahkan di tapak.',
      facts: [
        { label: 'Yuran masuk', value: 'Tidak disahkan' },
        { label: 'Parkir', value: 'Bahu jalan' },
        { label: 'Gerai', value: 'Mungkin caj' },
        { label: 'Sahkan', value: 'Di tapak' },
      ],
      blocks: [
        { heading: 'Tiada tiket rasmi', paragraphs: ['Lata Iskandar ialah hentian tepi jalan, bukan taman berpagar.', 'Kami tidak dapat mengesahkan sebarang yuran masuk tetap.'] },
        { heading: 'Apa yang mungkin dikenakan', bullets: ['Letak kereta di bahu jalan (caj tidak rasmi)', 'Belian di gerai makan/kraftangan', 'Tidak ada kaunter tiket rasmi'], callout: 'Yuran dan kemudahan boleh berubah. Bawa wang tunai kecil dan sahkan jumlah dengan pengusaha di tapak.' },
      ],
      faqs: [
        { q: 'Berapa tiket masuk?', a: 'Tiada yuran masuk rasmi yang disahkan; sahkan di tapak.' },
        { q: 'Perlu bayar parkir?', a: 'Parkir di bahu jalan; mungkin ada caj tidak rasmi — tanya di tempat.' },
        { q: 'Boleh guna kad?', a: 'Tidak pasti; bawa tunai untuk gerai.' },
        { q: 'Ada kaunter tiket?', a: 'Tidak ada kaunter rasmi di lokasi.' },
      ],
      related: ['parking-lata-iskandar', 'facilities-lata-iskandar', 'gerai-lata-iskandar', 'lata-iskandar-opening-hours', 'about-lata-iskandar'],
    },
    en: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar Entrance Fee: Is There a Charge?', description: 'No confirmed official entry fee at Lata Iskandar. Learn what might be charged and confirm on site before you go.' },
      kicker: 'Fees & tickets',
      h1: 'Lata Iskandar Entrance Fee',
      lead: 'No confirmed official entry fee for Lata Iskandar. Roadside stalls and shoulder parking may have informal charges — confirm on site.',
      facts: [
        { label: 'Entry fee', value: 'Not confirmed' },
        { label: 'Parking', value: 'Road shoulder' },
        { label: 'Stalls', value: 'May charge' },
        { label: 'Confirm', value: 'On site' },
      ],
      blocks: [
        { heading: 'No official ticket', paragraphs: ['Lata Iskandar is a roadside stop, not a gated park.', 'We cannot confirm any fixed entry fee.'] },
        { heading: 'What might be charged', bullets: ['Road-shoulder parking (informal charge)', 'Purchases at food/craft stalls', 'No official ticket counter'], callout: 'Fees and facilities can change. Carry small cash and confirm amounts with operators on site.' },
      ],
      faqs: [
        { q: 'How much is entry?', a: 'No confirmed official entry fee; confirm on site.' },
        { q: 'Do you pay for parking?', a: 'Shoulder parking; there may be an informal charge — ask locally.' },
        { q: 'Can you use a card?', a: 'Uncertain; bring cash for stalls.' },
        { q: 'Is there a ticket counter?', a: 'No official counter at the location.' },
      ],
      related: ['parking-lata-iskandar', 'facilities-lata-iskandar', 'gerai-lata-iskandar', 'lata-iskandar-opening-hours', 'about-lata-iskandar'],
    },
    zh: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar 门票：要收费吗？', description: 'Lata Iskandar 没有经确认的官方门票。了解可能产生的费用，出发前现场确认。' },
      kicker: '费用与门票',
      h1: 'Lata Iskandar 门票',
      lead: 'Lata Iskandar 没有经确认的官方门票。路边摊位与路肩停车可能有非官方收费——请现场确认。',
      facts: [
        { label: '门票', value: '未确认' },
        { label: '停车', value: '路肩' },
        { label: '摊位', value: '可能收费' },
        { label: '确认', value: '现场' },
      ],
      blocks: [
        { heading: '没有官方票', paragraphs: ['Lata Iskandar 是路边停靠点，不是围起来的公园。', '我们无法确认任何固定门票。'] },
        { heading: '可能产生的费用', bullets: ['路肩停车（非官方收费）', '在饮食/手工艺摊消费', '没有官方售票处'], callout: '费用与设施会变。带小额现金，现场向经营者确认金额。' },
      ],
      faqs: [
        { q: '门票多少？', a: '没有经确认的官方门票；现场确认。' },
        { q: '停车要付费吗？', a: '路肩停车；可能有非官方收费——当地询问。' },
        { q: '可以刷卡吗？', a: '不确定；摊位带现金。' },
        { q: '有售票处吗？', a: '现场没有官方售票处。' },
      ],
      related: ['parking-lata-iskandar', 'facilities-lata-iskandar', 'gerai-lata-iskandar', 'lata-iskandar-opening-hours', 'about-lata-iskandar'],
    },
  },
  'lata-iskandar-opening-hours': {
    ms: {
      category: 'attraction',
      meta: { title: 'Waktu Buka Lata Iskandar: Ada Pintu Gerbang?', description: 'Lata Iskandar tiada pintu gerbang rasmi. Ketahui waktu tersirat, risiko malam dan sahkan di tapak.' },
      kicker: 'Waktu lawatan',
      h1: 'Waktu Buka Lata Iskandar',
      lead: 'Lata Iskandar tiada pintu gerbang atau waktu rasmi. Ia hentian tepi jalan yang boleh dilihat pada waktu siang; elak lawatan malam.',
      facts: [
        { label: 'Pintu gerbang', value: 'Tiada' },
        { label: 'Waktu', value: 'Siang (tidak rasmi)' },
        { label: 'Malam', value: 'Tidak disarankan' },
        { label: 'Sahkan', value: 'Di tapak' },
      ],
      blocks: [
        { heading: 'Tiada waktu rasmi', paragraphs: ['Sebagai hentian tepi jalan, tiada waktu buka/tutup yang dipagar.', 'Rujukan 24 jam dari peta mungkin tidak menjamin akses malam yang selamat.'] },
        { heading: 'Cadangan lawatan', bullets: ['Datang waktu siang terang', 'Elak malam — tiada lampu', 'Semak tanda dan cuaca di tapak'], callout: 'Rancang lawatan waktu siang. Keselamatan lebih baik dengan penglihatan jelas dan batu kering.' },
      ],
      faqs: [
        { q: 'Pukul berapa buka?', a: 'Tiada waktu rasmi; lawatan waktu siang adalah yang paling selamat.' },
        { q: 'Boleh pergi malam?', a: 'Tidak disarankan — gelap, licin dan tiada pengawasan.' },
        { q: 'Tutup kereta pukul berapa?', a: 'Tiada pagar; tetap jaga keselamatan dan barang.' },
        { q: 'Waktu paling sesak?', a: 'Hujung minggu siang; datang awal.' },
      ],
      related: ['best-time-to-visit-lata-iskandar', 'lata-iskandar-entrance-fee', 'safety-tips-lata-iskandar', 'about-lata-iskandar', 'parking-lata-iskandar'],
    },
    en: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar Opening Hours: Is There a Gate?', description: 'Lata Iskandar has no official gate. Learn the implied hours, night risk and confirm on site.' },
      kicker: 'Visit hours',
      h1: 'Lata Iskandar Opening Hours',
      lead: 'Lata Iskandar has no gate or official hours. It is a roadside stop visible in daylight; avoid night visits.',
      facts: [
        { label: 'Gate', value: 'None' },
        { label: 'Hours', value: 'Daylight (unofficial)' },
        { label: 'Night', value: 'Not advised' },
        { label: 'Confirm', value: 'On site' },
      ],
      blocks: [
        { heading: 'No official hours', paragraphs: ['As a roadside stop, there is no gated open/close time.', 'A map reference of 24 hours may not guarantee safe night access.'] },
        { heading: 'Visit guidance', bullets: ['Come in bright daylight', 'Avoid night — no lighting', 'Check signs and weather on site'], callout: 'Plan a daylight visit. Safety is better with clear visibility and dry rocks.' },
      ],
      faqs: [
        { q: 'What time does it open?', a: 'No official time; a daylight visit is safest.' },
        { q: 'Can you go at night?', a: 'Not advised — dark, slippery and unsupervised.' },
        { q: 'When does the car park close?', a: 'No gate; still mind safety and belongings.' },
        { q: 'When is it busiest?', a: 'Weekday daylight; come early.' },
      ],
      related: ['best-time-to-visit-lata-iskandar', 'lata-iskandar-entrance-fee', 'safety-tips-lata-iskandar', 'about-lata-iskandar', 'parking-lata-iskandar'],
    },
    zh: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar 开放时间：有大门吗？', description: 'Lata Iskandar 没有官方大门。了解隐含时段、夜间风险与现场确认。' },
      kicker: '到访时段',
      h1: 'Lata Iskandar 开放时间',
      lead: 'Lata Iskandar 没有大门或官方时段。它是白天可见的路边停靠点；避免夜间到访。',
      facts: [
        { label: '大门', value: '无' },
        { label: '时段', value: '白天（非官方）' },
        { label: '夜间', value: '不建议' },
        { label: '确认', value: '现场' },
      ],
      blocks: [
        { heading: '没有官方时段', paragraphs: ['作为路边停靠点，没有围起来的开关时间。', '地图上 24 小时的标注未必保证夜间安全可达。'] },
        { heading: '到访建议', bullets: ['白天明亮时到访', '避免夜间——无照明', '现场看指示与天气'], callout: '安排白天到访。视线清楚、岩石干，更安全。' },
      ],
      faqs: [
        { q: '几点开门？', a: '没有官方时间；白天到访最安全。' },
        { q: '可以晚上去吗？', a: '不建议——黑、滑、无人看顾。' },
        { q: '停车场几点关？', a: '没有大门；仍要注意安全与财物。' },
        { q: '什么时候最挤？', a: '周末白天；早点到。' },
      ],
      related: ['best-time-to-visit-lata-iskandar', 'lata-iskandar-entrance-fee', 'safety-tips-lata-iskandar', 'about-lata-iskandar', 'parking-lata-iskandar'],
    },
  },
  'things-to-do-lata-iskandar': {
    ms: {
      category: 'attraction',
      meta: { title: 'Aktiviti di Lata Iskandar: Apa Nak Buat', description: 'Hentian ringan di tepi jalan. Ketahui aktiviti seperti main air, foto, gerai dan rehat sebelum ke Cameron Highlands.' },
      kicker: 'Aktiviti',
      h1: 'Aktiviti di Lata Iskandar',
      lead: 'Lata Iskandar sesuai hentian ringan: main air di kolam cetek, ambil gambar, beli di gerai dan rehat sebelum mendaki ke Cameron Highlands.',
      facts: [
        { label: 'Main air', value: 'Kolam cetek' },
        { label: 'Foto', value: 'Air terjun & hutan' },
        { label: 'Gerai', value: 'Makan & kraft' },
        { label: 'Masa', value: '30–60 minit' },
      ],
      blocks: [
        { heading: 'Apa nak buat', paragraphs: ['Bermain air di kolam cetek berhampiran gerai.', 'Ambil gambar air terjun dan tumbuhan hutan.'], bullets: ['Makan di gerai', 'Beli kraftangan tempatan', 'Rehat dari pemanduan'] },
        { heading: 'Rancang masa', callout: 'Ini bukan taman permainan seharian. Jadikan hentian 30–60 minit sebelum terus ke Cameron Highlands.' },
      ],
      faqs: [
        { q: 'Berapa lama sesuai?', a: '30–60 minit sudah memadai.' },
        { q: 'Ada aktiviti lasak?', a: 'Tidak; ini hentian ringan di tepi jalan.' },
        { q: 'Boleh beli makan?', a: 'Ya, gerai berhampiran menjual makanan dan kraftangan.' },
        { q: 'Sesuai keluarga?', a: 'Ya, di kolam cetek dengan pengawasan.' },
      ],
      related: ['gerai-lata-iskandar', 'can-you-swim-lata-iskandar', 'photography-spots-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'half-day-itinerary-lata-iskandar'],
    },
    en: {
      category: 'attraction',
      meta: { title: 'Things to Do at Lata Iskandar: What to Do', description: 'A light roadside stop. Learn activities like paddling, photos, stalls and a rest before Cameron Highlands.' },
      kicker: 'Activities',
      h1: 'Things to Do at Lata Iskandar',
      lead: 'Lata Iskandar suits a light stop: paddle in the shallow pool, take photos, buy at stalls and rest before climbing to Cameron Highlands.',
      facts: [
        { label: 'Paddle', value: 'Shallow pool' },
        { label: 'Photos', value: 'Fall & forest' },
        { label: 'Stalls', value: 'Food & crafts' },
        { label: 'Time', value: '30–60 minutes' },
      ],
      blocks: [
        { heading: 'What to do', paragraphs: ['Paddle in the shallow pool near the stalls.', 'Photograph the fall and forest plants.'], bullets: ['Eat at stalls', 'Buy local crafts', 'Rest from driving'] },
        { heading: 'Plan your time', callout: 'This is not an all-day playground. Make it a 30–60 minute stop before continuing to Cameron Highlands.' },
      ],
      faqs: [
        { q: 'How long is good?', a: '30–60 minutes is enough.' },
        { q: 'Any strenuous activity?', a: 'No; this is a light roadside stop.' },
        { q: 'Can you buy food?', a: 'Yes, nearby stalls sell food and crafts.' },
        { q: 'Family-friendly?', a: 'Yes, at the shallow pool with supervision.' },
      ],
      related: ['gerai-lata-iskandar', 'can-you-swim-lata-iskandar', 'photography-spots-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'half-day-itinerary-lata-iskandar'],
    },
    zh: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar 做什么：活动指南', description: '轻量的路边停靠点。了解戏水、拍照、摊位与前往金马仑高原前的休息。' },
      kicker: '活动',
      h1: 'Lata Iskandar 做什么',
      lead: 'Lata Iskandar 适合轻量停靠：在浅池戏水、拍照、在摊位购买、继续爬金马仑高原前休息。',
      facts: [
        { label: '戏水', value: '浅池' },
        { label: '拍照', value: '瀑布与森林' },
        { label: '摊位', value: '饮食与手作' },
        { label: '时间', value: '30–60 分钟' },
      ],
      blocks: [
        { heading: '可以做什么', paragraphs: ['在摊位点附近的浅池戏水。', '拍摄瀑布与森林植物。'], bullets: ['摊位用餐', '买当地手工艺', '驾驶后休息'] },
        { heading: '安排时间', callout: '这不是一整天的游乐园。把它当作 30–60 分钟停靠，再续往金马仑高原。' },
      ],
      faqs: [
        { q: '多久合适？', a: '30–60 分钟足够。' },
        { q: '有剧烈运动吗？', a: '没有；这是轻量路边停靠。' },
        { q: '能买吃的吗？', a: '能，附近摊位卖饮食与手作。' },
        { q: '适合家庭吗？', a: '适合，在有人看顾的浅池。' },
      ],
      related: ['gerai-lata-iskandar', 'can-you-swim-lata-iskandar', 'photography-spots-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'half-day-itinerary-lata-iskandar'],
    },
  },
  'photography-spots-lata-iskandar': {
    ms: {
      category: 'attraction',
      meta: { title: 'Tempat Foto Lata Iskandar: Tips Tangkap Gambar', description: 'Air terjun tepi jalan dengan cahaya hutan. Ketahui sudut foto, masa terbaik dan etika tangkap gambar.' },
      kicker: 'Fotografi',
      h1: 'Tempat Foto di Lata Iskandar',
      lead: 'Lata Iskandar memberi latar air terjun, batu dan hutan tropika. Waktu pagi dan selepas hujan memberi cahaya dan aliran terbaik.',
      facts: [
        { label: 'Sudut', value: 'Tepi jalan' },
        { label: 'Cahaya', value: 'Pagi terbaik' },
        { label: 'Aliran', value: 'Selepas hujan' },
        { label: 'Kamera', value: 'Telefon pun cukup' },
      ],
      blocks: [
        { heading: 'Sudut mudah', paragraphs: ['Ambil dari tepi jalan berhampiran gerai — tiada mendaki.', 'Rakam air turun ke kolam dan tumbuhan hijau di sekeliling.'] },
        { heading: 'Tips & etika', bullets: ['Gunakan pagi untuk cahaya lembut', 'Jaga jarak dari air deras', 'Jangan halang lalu lintas'], callout: 'Kongsi jalan dengan kenderaan — jangan berdiri di tengah laluan untuk foto.' },
      ],
      faqs: [
        { q: 'Bila cahaya paling elok?', a: 'Pagi hari dengan cahaya lembut.' },
        { q: 'Perlu drone?', a: 'Tidak perlu; telefon pun cukup.' },
        { q: 'Boleh foto di air terjun?', a: 'Ya dari tepi jalan; jangan masuk kawasan deras.' },
        { q: 'Elak apa?', a: 'Jangan halang jalan dan jauhi batu licin.' },
      ],
      related: ['things-to-do-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'can-you-swim-lata-iskandar', 'about-lata-iskandar', 'lata-iskandar-with-kids'],
    },
    en: {
      category: 'attraction',
      meta: { title: 'Photography Spots at Lata Iskandar: Shooting Tips', description: 'A roadside waterfall with forest light. Learn photo angles, best time and shooting etiquette.' },
      kicker: 'Photography',
      h1: 'Photography Spots at Lata Iskandar',
      lead: 'Lata Iskandar offers a waterfall, rocks and tropical forest backdrop. Morning and after rain give the best light and flow.',
      facts: [
        { label: 'Angle', value: 'Roadside' },
        { label: 'Light', value: 'Morning best' },
        { label: 'Flow', value: 'After rain' },
        { label: 'Camera', value: 'Phone is enough' },
      ],
      blocks: [
        { heading: 'Easy angles', paragraphs: ['Shoot from the roadside near the stalls — no hiking.', 'Capture water dropping to the pool and green plants around.'] },
        { heading: 'Tips & etiquette', bullets: ['Use morning for soft light', 'Keep clear of fast water', 'Do not block traffic'], callout: 'Share the road with vehicles — do not stand in the middle of the lane for a photo.' },
      ],
      faqs: [
        { q: 'When is light best?', a: 'Morning with soft light.' },
        { q: 'Need a drone?', a: 'No; a phone is enough.' },
        { q: 'Can you photo the fall?', a: 'Yes from the roadside; do not enter fast areas.' },
        { q: 'What to avoid?', a: 'Do not block the road and avoid slippery rocks.' },
      ],
      related: ['things-to-do-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'can-you-swim-lata-iskandar', 'about-lata-iskandar', 'lata-iskandar-with-kids'],
    },
    zh: {
      category: 'attraction',
      meta: { title: 'Lata Iskandar 拍照点：取景建议', description: '路边瀑布配森林光线。了解取景角度、最佳时间与拍摄礼仪。' },
      kicker: '摄影',
      h1: 'Lata Iskandar 拍照点',
      lead: 'Lata Iskandar 提供瀑布、岩石与热带森林背景。早晨与雨后光线和水流最好。',
      facts: [
        { label: '角度', value: '路边' },
        { label: '光线', value: '早晨最佳' },
        { label: '水流', value: '雨后' },
        { label: '相机', value: '手机足够' },
      ],
      blocks: [
        { heading: '好拍的角度', paragraphs: ['从摊位点附近的路边拍——不必徒步。', '捕捉水落进池子与四周绿树。'] },
        { heading: '建议与礼仪', bullets: ['早晨拍柔和光', '远离急流', '别挡路'], callout: '与车辆共用道路——别站在车道中央拍照。' },
      ],
      faqs: [
        { q: '什么时候光线最好？', a: '早晨柔和光。' },
        { q: '需要无人机吗？', a: '不用；手机就够。' },
        { q: '能拍瀑布吗？', a: '从路边可以；别进急流区。' },
        { q: '要避免什么？', a: '别挡路、避开湿滑岩石。' },
      ],
      related: ['things-to-do-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'can-you-swim-lata-iskandar', 'about-lata-iskandar', 'lata-iskandar-with-kids'],
    },
  },

  'facilities-lata-iskandar': {
    ms: {
      category: 'stay',
      meta: { title: 'Kemudahan di Lata Iskandar: Tandas, Gerai & Surau', description: 'Kemudahan asas di tepi jalan: gerai, tandas dan surau. Ketahui apa ada dan bawa persediaan sendiri.' },
      kicker: 'Kemudahan',
      h1: 'Kemudahan di Lata Iskandar',
      lead: 'Lata Iskandar mempunyai kemudahan asas di tepi jalan — gerai makan, tandas dan surau berhampiran. Ia bukan tapak lengkap.',
      facts: [
        { label: 'Kemudahan', value: 'Asas' },
        { label: 'Gerai', value: 'Makan & kraft' },
        { label: 'Tandas', value: 'Asas' },
        { label: 'Surau', value: 'Ada berhampiran' },
      ],
      blocks: [
        { heading: 'Apa ada', paragraphs: ['Gerai menjual makanan, minuman dan kraftangan.', 'Tandas asas dan surau disediakan berhampiran gerai.'], bullets: ['Tiada penginapan di lokasi', 'Tiada kedai runcit besar'] },
        { heading: 'Bawa sendiri', bullets: ['Air minuman', 'Tuala dan baju ganti', 'Tisu sendiri untuk selesa'], callout: 'Kemudahan asas; bawa persediaan sendiri untuk lawatan lebih selesa.' },
      ],
      faqs: [
        { q: 'Ada surau?', a: 'Ya, surau berhampiran gerai.' },
        { q: 'Ada tandas?', a: 'Kemudahan asas ada; bawa sendiri untuk selesa.' },
        { q: 'Boleh bermalam?', a: 'Tidak; ini hentian siang, bukan tapak perkhemahan rasmi.' },
        { q: 'Ada kedai runcit?', a: 'Tidak ada kedai besar; gerai jual barang asas.' },
      ],
      related: ['toilet-surau-lata-iskandar', 'gerai-lata-iskandar', 'accommodation-near-lata-iskandar', 'homestay-tapah', 'camping-near-lata-iskandar'],
    },
    en: {
      category: 'stay',
      meta: { title: 'Facilities at Lata Iskandar: Toilets, Stalls & Prayer Room', description: 'Basic roadside facilities: stalls, toilets and a prayer room. Know what is there and bring your own preparation.' },
      kicker: 'Facilities',
      h1: 'Facilities at Lata Iskandar',
      lead: 'Lata Iskandar has basic roadside facilities — food stalls, toilets and a nearby prayer room. It is not a full service site.',
      facts: [
        { label: 'Facilities', value: 'Basic' },
        { label: 'Stalls', value: 'Food & crafts' },
        { label: 'Toilets', value: 'Basic' },
        { label: 'Prayer room', value: 'Nearby' },
      ],
      blocks: [
        { heading: 'What is there', paragraphs: ['Stalls sell food, drinks and crafts.', 'Basic toilets and a prayer room are by the stalls.'], bullets: ['No on-site lodging', 'No large grocery'] },
        { heading: 'Bring your own', bullets: ['Drinking water', 'Towel and change of clothes', 'Own tissues for comfort'], callout: 'Facilities are basic; bring your own preparation for a more comfortable visit.' },
      ],
      faqs: [
        { q: 'Is there a prayer room?', a: 'Yes, a prayer room is near the stalls.' },
        { q: 'Are there toilets?', a: 'Basic facilities exist; bring your own for comfort.' },
        { q: 'Can you stay overnight?', a: 'No; this is a daylight stop, not an official camp site.' },
        { q: 'Is there a grocery?', a: 'No large store; stalls sell basic items.' },
      ],
      related: ['toilet-surau-lata-iskandar', 'gerai-lata-iskandar', 'accommodation-near-lata-iskandar', 'homestay-tapah', 'camping-near-lata-iskandar'],
    },
    zh: {
      category: 'stay',
      meta: { title: 'Lata Iskandar 设施：厕所、摊位与祈祷室', description: '路边基本设施：摊位、厕所与祈祷室。了解有什么，并自备所需。' },
      kicker: '设施',
      h1: 'Lata Iskandar 设施',
      lead: 'Lata Iskandar 路边有基本设施——饮食摊、厕所与附近的祈祷室。这不是完整服务站点。',
      facts: [
        { label: '设施', value: '基本' },
        { label: '摊位', value: '饮食与手作' },
        { label: '厕所', value: '基本' },
        { label: '祈祷室', value: '附近有' },
      ],
      blocks: [
        { heading: '有什么', paragraphs: ['摊位卖饮食与手工艺。', '摊位点附近有基本厕所与祈祷室。'], bullets: ['现场无住宿', '无大型杂货店'] },
        { heading: '自备', bullets: ['饮用水', '毛巾与替换衣物', '自备纸巾更舒适'], callout: '设施基本；自备物品让到访更舒适。' },
      ],
      faqs: [
        { q: '有祈祷室吗？', a: '有，摊位附近有。' },
        { q: '有厕所吗？', a: '有基本设施；自备更舒适。' },
        { q: '能过夜吗？', a: '不能；这是白天停靠点，不是正式营地。' },
        { q: '有杂货店吗？', a: '没有大型店；摊位卖基本物品。' },
      ],
      related: ['toilet-surau-lata-iskandar', 'gerai-lata-iskandar', 'accommodation-near-lata-iskandar', 'homestay-tapah', 'camping-near-lata-iskandar'],
    },
  },
  'accommodation-near-lata-iskandar': {
    ms: {
      category: 'stay',
      meta: { title: 'Penginapan Berhampiran Lata Iskandar: Tapah & Cameron', description: 'Tiada hotel di lokasi. Pilihan bermalam ada di Tapah dan Cameron Highlands. Bandingkan dan tempah awal.' },
      kicker: 'Penginapan',
      h1: 'Penginapan Berhampiran Lata Iskandar',
      lead: 'Tiada penginapan di lokasi Lata Iskandar. Pilihan bermalam paling dekat berada di Tapah (kira-kira 20–30 minit) dan Cameron Highlands ke utara.',
      facts: [
        { label: 'Di lokasi', value: 'Tiada' },
        { label: 'Paling dekat', value: 'Tapah' },
        { label: 'Lain', value: 'Cameron Highlands' },
        { label: 'Tempah', value: 'Lebih awal' },
      ],
      blocks: [
        { heading: 'Pilihan bermalam', paragraphs: ['Tapah ada hotel, motel dan homestay bandar.', 'Cameron Highlands menawar lebih banyak pilihan atas bukit.'], bullets: ['Tapah: lebih dekat & murah', 'Cameron: lebih pelbagai', 'Semak ulasan semasa'] },
        { heading: 'Tips tempah', bullets: ['Tempah lebih awal musim puncak', 'Sahkan lokasi dengan peta', 'Banding harga terus'], callout: 'Kami tidak menamakan operator tertentu — banding sendiri dan sahkan kadar semasa.' },
      ],
      faqs: [
        { q: 'Boleh tidur di Lata Iskandar?', a: 'Tidak; tiada penginapan di lokasi.' },
        { q: 'Di mana paling dekat?', a: 'Tapah, kira-kira 20–30 minit memandu.' },
        { q: 'Cameron Highlands jauh?', a: 'Lebih jauh ke utara; lebih banyak pilihan.' },
        { q: 'Perlu tempah awal?', a: 'Ya pada hujung minggu dan cuti sekolah.' },
      ],
      related: ['homestay-tapah', 'facilities-lata-iskandar', 'camping-near-lata-iskandar', 'one-day-itinerary-tapah', 'tapah-to-lata-iskandar'],
    },
    en: {
      category: 'stay',
      meta: { title: 'Accommodation Near Lata Iskandar: Tapah & Cameron', description: 'No hotels on site. Overnight options are in Tapah and Cameron Highlands. Compare and book ahead.' },
      kicker: 'Stay',
      h1: 'Accommodation Near Lata Iskandar',
      lead: 'No accommodation on site at Lata Iskandar. The closest overnight options are in Tapah (about 20–30 minutes) and Cameron Highlands to the north.',
      facts: [
        { label: 'On site', value: 'None' },
        { label: 'Closest', value: 'Tapah' },
        { label: 'Other', value: 'Cameron Highlands' },
        { label: 'Book', value: 'Ahead' },
      ],
      blocks: [
        { heading: 'Overnight options', paragraphs: ['Tapah has town hotels, motels and homestays.', 'Cameron Highlands offers more hill-station choices.'], bullets: ['Tapah: closer & cheaper', 'Cameron: more variety', 'Check current reviews'] },
        { heading: 'Booking tips', bullets: ['Book early in peak season', 'Confirm location on the map', 'Compare direct rates'], callout: 'We do not name a specific operator — compare yourself and confirm current rates.' },
      ],
      faqs: [
        { q: 'Can you sleep at Lata Iskandar?', a: 'No; there is no accommodation on site.' },
        { q: 'Where is closest?', a: 'Tapah, about 20–30 minutes by car.' },
        { q: 'Is Cameron Highlands far?', a: 'Further north; more choices.' },
        { q: 'Book ahead?', a: 'Yes on weekends and school holidays.' },
      ],
      related: ['homestay-tapah', 'facilities-lata-iskandar', 'camping-near-lata-iskandar', 'one-day-itinerary-tapah', 'tapah-to-lata-iskandar'],
    },
    zh: {
      category: 'stay',
      meta: { title: 'Lata Iskandar 附近住宿：打巴与金马仑', description: '现场没有酒店。过夜选择在于打巴与金马仑高原。比较并提前预订。' },
      kicker: '住宿',
      h1: 'Lata Iskandar 附近住宿',
      lead: 'Lata Iskandar 现场没有住宿。最近的过夜选择在打巴（约 20–30 分钟）与北边的金马仑高原。',
      facts: [
        { label: '现场', value: '无' },
        { label: '最近', value: '打巴' },
        { label: '其他', value: '金马仑高原' },
        { label: '预订', value: '提前' },
      ],
      blocks: [
        { heading: '过夜选择', paragraphs: ['打巴有城镇酒店、汽车旅馆与民宿。', '金马仑高原山上选择更多。'], bullets: ['打巴：更近更便宜', '金马仑：更多样', '查最新评价'] },
        { heading: '预订建议', bullets: ['旺季提早订', '地图确认位置', '比较直订价'], callout: '我们不指定特定业者——自行比较并确认当前价格。' },
      ],
      faqs: [
        { q: '可以在 Lata Iskandar 过夜吗？', a: '不能；现场没有住宿。' },
        { q: '最近在哪里？', a: '打巴，开车约 20–30 分钟。' },
        { q: '金马仑远吗？', a: '更北边；选择更多。' },
        { q: '要提前订吗？', a: '周末与学校假期要。' },
      ],
      related: ['homestay-tapah', 'facilities-lata-iskandar', 'camping-near-lata-iskandar', 'one-day-itinerary-tapah', 'tapah-to-lata-iskandar'],
    },
  },
  'homestay-tapah': {
    ms: {
      category: 'stay',
      meta: { title: 'Homestay & Inap Desa di Tapah', description: 'Tapah ada homestay dan inap desa sebagai asas sebelum ke Cameron Highlands. Ketahui pilihan dan tips tempah.' },
      kicker: 'Homestay',
      h1: 'Homestay & Inap Desa di Tapah',
      lead: 'Tapah menjadi pangkalan pra-Cameron yang baik. Homestay dan bilik bandar memberi pilihan lebih tenang dan berpatutan.',
      facts: [
        { label: 'Jenis', value: 'Homestay & bilik' },
        { label: 'Lokasi', value: 'Bandar Tapah' },
        { label: 'Harga', value: 'Berpatutan' },
        { label: 'Tempah', value: 'Langsung/Platform' },
      ],
      blocks: [
        { heading: 'Pilihan di Tapah', paragraphs: ['Homestay keluarga dan bilik tetamu bandar tersedia.', 'Sesuai sebagai hentian satu malam sebelum mendaki.'], bullets: ['Lebih murah dari Cameron', 'Dekat stesen minyak & makan', 'Tenang pada hari bekerja'] },
        { heading: 'Tips', bullets: ['Baca ulasan semasa', 'Sahkan kemudahan (WiFi/tandas)', 'Tanya dasar pembatalan'], callout: 'Banding beberapa penyenaraian; kami tidak mengesyorkan satu tertentu.' },
      ],
      faqs: [
        { q: 'Ada homestay di Tapah?', a: 'Ya, homestay keluarga dan bilik bandar tersedia.' },
        { q: 'Berbaloi berbanding Cameron?', a: 'Lebih murah dan dekat dengan laluan 59.' },
        { q: 'Boleh tempah hari sama?', a: 'Tidak jamin; tempah lebih awal musim puncak.' },
        { q: 'Sesuai keluarga?', a: 'Ya, banyak homestay mesra keluarga.' },
      ],
      related: ['accommodation-near-lata-iskandar', 'one-day-itinerary-tapah', 'facilities-lata-iskandar', 'tapah-food', 'cafes-tapah'],
    },
    en: {
      category: 'stay',
      meta: { title: 'Homestays in Tapah', description: 'Tapah has homestays and village stays as a base before Cameron Highlands. Learn the options and booking tips.' },
      kicker: 'Homestay',
      h1: 'Homestays in Tapah',
      lead: 'Tapah makes a good pre-Cameron base. Family homestays and town rooms offer a calmer, cheaper option.',
      facts: [
        { label: 'Type', value: 'Homestay & rooms' },
        { label: 'Location', value: 'Tapah town' },
        { label: 'Price', value: 'Affordable' },
        { label: 'Book', value: 'Direct/Platform' },
      ],
      blocks: [
        { heading: 'Options in Tapah', paragraphs: ['Family homestays and town guest rooms are available.', 'Good as a one-night stop before the climb.'], bullets: ['Cheaper than Cameron', 'Near fuel & food', 'Quiet on weekdays'] },
        { heading: 'Tips', bullets: ['Read current reviews', 'Confirm facilities (WiFi/toilet)', 'Ask cancellation policy'], callout: 'Compare a few listings; we do not recommend one in particular.' },
      ],
      faqs: [
        { q: 'Are there homestays in Tapah?', a: 'Yes, family homestays and town rooms are available.' },
        { q: 'Worth it vs Cameron?', a: 'Cheaper and close to Route 59.' },
        { q: 'Same-day booking?', a: 'Not guaranteed; book early in peak season.' },
        { q: 'Family-friendly?', a: 'Yes, many homestays welcome families.' },
      ],
      related: ['accommodation-near-lata-iskandar', 'one-day-itinerary-tapah', 'facilities-lata-iskandar', 'tapah-food', 'cafes-tapah'],
    },
    zh: {
      category: 'stay',
      meta: { title: '打巴民宿与乡村住宿', description: '打巴有民宿与乡村住宿，作为金马仑高原前的基地。了解选择与预订建议。' },
      kicker: '民宿',
      h1: '打巴民宿与乡村住宿',
      lead: '打巴是金马仑高原前不错的中转基地。家庭民宿与城镇客房提供更安静、便宜的选择。',
      facts: [
        { label: '类型', value: '民宿与客房' },
        { label: '位置', value: '打巴镇' },
        { label: '价格', value: '实惠' },
        { label: '预订', value: '直订/平台' },
      ],
      blocks: [
        { heading: '打巴的选择', paragraphs: ['有家庭民宿与城镇客房。', '适合上山前一晚停靠。'], bullets: ['比金马仑便宜', '近加油与饮食', '平日安静'] },
        { heading: '建议', bullets: ['看最新评价', '确认设施（WiFi/厕所）', '问取消政策'], callout: '比较几个房源；我们不特别推荐某一家。' },
      ],
      faqs: [
        { q: '打巴有民宿吗？', a: '有，家庭民宿与城镇客房都有。' },
        { q: '比金马仑值吗？', a: '更便宜、离 Route 59 近。' },
        { q: '能当天订吗？', a: '不保证；旺季提早订。' },
        { q: '适合家庭吗？', a: '适合，许多民宿接待家庭。' },
      ],
      related: ['accommodation-near-lata-iskandar', 'one-day-itinerary-tapah', 'facilities-lata-iskandar', 'tapah-food', 'cafes-tapah'],
    },
  },
  'camping-near-lata-iskandar': {
    ms: {
      category: 'stay',
      meta: { title: 'Perkhemahan Berhampiran Lata Iskandar', description: 'Tiada tapak perkhemahan rasmi di Lata Iskandar. Ketahui pilihan berhampiran dan pastikan permit serta keselamatan.' },
      kicker: 'Perkhemahan',
      h1: 'Perkhemahan Berhampiran Lata Iskandar',
      lead: 'Tiada tapak perkhemahan rasmi di Lata Iskandar. Jika mahu berkhemah, cari tapak berlesen berhampiran dan sahkan permit serta peraturan.',
      facts: [
        { label: 'Di lokasi', value: 'Tiada rasmi' },
        { label: 'Pilihan', value: 'Tapak berlesen' },
        { label: 'Perlu', value: 'Permit' },
        { label: 'Sahkan', value: 'Di tapak' },
      ],
      blocks: [
        { heading: 'Jangan berkhemah di tepi jalan', paragraphs: ['Lata Iskandar ialah hentian tepi jalan sibuk; tidak sesuai khemah.', 'Gunakan tapak perkhemahan berlesen yang diurus jika ada.'], bullets: ['Elak bahu jalan', 'Jauhi air deras', 'Ikut peraturan tapak'] },
        { heading: 'Keselamatan', bullets: ['Semak cuaca & banjir', 'Simpan makanan selamat', 'Bawa lampu & ubat'], callout: 'Kami tidak menyenaraikan tapak tertentu — sahkan dengan pihak berkuasa atau platform sah sebelum pergi.' },
      ],
      faqs: [
        { q: 'Boleh khemah di Lata Iskandar?', a: 'Tidak disarankan; tiada tapak rasmi di lokasi.' },
        { q: 'Di mana boleh khemah?', a: 'Cari tapak berlesen berhampiran; sahkan dengan pihak berkuasa.' },
        { q: 'Perlu permit?', a: 'Mungkin; sahkan dengan pengurusan tapak.' },
        { q: 'Selamat?', a: 'Hanya di tapak berlesen dengan peraturan jelas.' },
      ],
      related: ['accommodation-near-lata-iskandar', 'homestay-tapah', 'safety-tips-lata-iskandar', 'facilities-lata-iskandar', 'weather-lata-iskandar'],
    },
    en: {
      category: 'stay',
      meta: { title: 'Camping Near Lata Iskandar', description: 'No official camp site at Lata Iskandar. Know nearby options and confirm permits and safety.' },
      kicker: 'Camping',
      h1: 'Camping Near Lata Iskandar',
      lead: 'No official camp site at Lata Iskandar. If you want to camp, look for a licensed site nearby and confirm permits and rules.',
      facts: [
        { label: 'On site', value: 'No official' },
        { label: 'Option', value: 'Licensed sites' },
        { label: 'Need', value: 'Permit' },
        { label: 'Confirm', value: 'On site' },
      ],
      blocks: [
        { heading: 'Do not camp by the road', paragraphs: ['Lata Iskandar is a busy roadside stop; not suitable for tents.', 'Use a managed, licensed camp site if available.'], bullets: ['Avoid the road shoulder', 'Stay away from fast water', 'Follow site rules'] },
        { heading: 'Safety', bullets: ['Check weather & floods', 'Store food safely', 'Bring light & medicine'], callout: 'We do not list a specific site — confirm with authorities or a legitimate platform before going.' },
      ],
      faqs: [
        { q: 'Can you camp at Lata Iskandar?', a: 'Not advised; no official site on location.' },
        { q: 'Where can you camp?', a: 'Find a licensed site nearby; confirm with authorities.' },
        { q: 'Need a permit?', a: 'Possibly; confirm with site management.' },
        { q: 'Is it safe?', a: 'Only at a licensed site with clear rules.' },
      ],
      related: ['accommodation-near-lata-iskandar', 'homestay-tapah', 'safety-tips-lata-iskandar', 'facilities-lata-iskandar', 'weather-lata-iskandar'],
    },
    zh: {
      category: 'stay',
      meta: { title: 'Lata Iskandar 附近露营', description: 'Lata Iskandar 没有正式营地。了解附近选择与确认许可及安全。' },
      kicker: '露营',
      h1: 'Lata Iskandar 附近露营',
      lead: 'Lata Iskandar 没有正式营地。想露营就找附近有执照的营地，并确认许可与规定。',
      facts: [
        { label: '现场', value: '无正式' },
        { label: '选择', value: '有照营地' },
        { label: '需要', value: '许可' },
        { label: '确认', value: '现场' },
      ],
      blocks: [
        { heading: '别在路边露营', paragraphs: ['Lata Iskandar 是忙碌的路边停靠点；不适合搭帐篷。', '若有，使用有管理的有照营地。'], bullets: ['避开路肩', '远离急流', '遵守营地规定'] },
        { heading: '安全', bullets: ['查天气与洪水', '食物安全存放', '带灯与药品'], callout: '我们不列具体营地——出发前向当局或正规平台确认。' },
      ],
      faqs: [
        { q: '可以在 Lata Iskandar 露营吗？', a: '不建议；现场无正式营地。' },
        { q: '哪里能露营？', a: '找附近有照营地；向当局确认。' },
        { q: '需要许可吗？', a: '可能需要；向营地管理确认。' },
        { q: '安全吗？', a: '只在规定清楚的有照营地。' },
      ],
      related: ['accommodation-near-lata-iskandar', 'homestay-tapah', 'safety-tips-lata-iskandar', 'facilities-lata-iskandar', 'weather-lata-iskandar'],
    },
  },
  'toilet-surau-lata-iskandar': {
    ms: {
      category: 'stay',
      meta: { title: 'Tandas & Surau di Lata Iskandar', description: 'Kemudahan tandas dan surau asas berhampiran gerai. Ketahui keadaan dan bawa persediaan sendiri.' },
      kicker: 'Tandas & surau',
      h1: 'Tandas & Surau di Lata Iskandar',
      lead: 'Tandas asas dan surau disediakan berhampiran gerai di Lata Iskandar. Keadaan asas — bawa tisu dan tuala sendiri.',
      facts: [
        { label: 'Tandas', value: 'Asas' },
        { label: 'Surau', value: 'Ada' },
        { label: 'Lokasi', value: 'Berhampiran gerai' },
        { label: 'Bawa', value: 'Tisu sendiri' },
      ],
      blocks: [
        { heading: 'Kemudahan', paragraphs: ['Tandas dikongsi berhampiran gerai makan.', 'Surau berhampiran untuk solat.'], bullets: ['Tiada bilik persalinan', 'Air mungkin tidak sentiasa ada'] },
        { heading: 'Persediaan', bullets: ['Bawa tisu/kain', 'Bawa tuala & baju ganti', 'Guna baju sesuai'], callout: 'Kemudahan asas; sediakan sendiri untuk keselesaan.' },
      ],
      faqs: [
        { q: 'Ada tandas?', a: 'Ya, tandas asas berhampiran gerai.' },
        { q: 'Ada surau?', a: 'Ya, surau berhampiran.' },
        { q: 'Bersih?', a: 'Asas; bawa sendiri untuk selesa.' },
        { q: 'Ada bilik persalinan?', a: 'Tidak dinyatakan; sediakan baju sesuai.' },
      ],
      related: ['facilities-lata-iskandar', 'gerai-lata-iskandar', 'can-you-swim-lata-iskandar', 'safety-tips-lata-iskandar', 'lata-iskandar-with-kids'],
    },
    en: {
      category: 'stay',
      meta: { title: 'Toilets & Prayer Room at Lata Iskandar', description: 'Basic toilet and prayer room facilities near the stalls. Know the condition and bring your own preparation.' },
      kicker: 'Toilets & prayer',
      h1: 'Toilets & Prayer Room at Lata Iskandar',
      lead: 'Basic toilets and a prayer room are by the stalls at Lata Iskandar. Conditions are basic — bring your own tissues and towel.',
      facts: [
        { label: 'Toilets', value: 'Basic' },
        { label: 'Prayer room', value: 'Available' },
        { label: 'Location', value: 'Near stalls' },
        { label: 'Bring', value: 'Own tissues' },
      ],
      blocks: [
        { heading: 'Facilities', paragraphs: ['Shared toilets are by the food stalls.', 'A prayer room is nearby for prayers.'], bullets: ['No changing room', 'Water may not always run'] },
        { heading: 'Preparation', bullets: ['Bring tissues/cloth', 'Bring towel & change', 'Wear suitable clothes'], callout: 'Facilities are basic; prepare yourself for comfort.' },
      ],
      faqs: [
        { q: 'Are there toilets?', a: 'Yes, basic toilets near the stalls.' },
        { q: 'Is there a prayer room?', a: 'Yes, a prayer room is nearby.' },
        { q: 'Clean?', a: 'Basic; bring your own for comfort.' },
        { q: 'Changing room?', a: 'Not specified; wear suitable clothes.' },
      ],
      related: ['facilities-lata-iskandar', 'gerai-lata-iskandar', 'can-you-swim-lata-iskandar', 'safety-tips-lata-iskandar', 'lata-iskandar-with-kids'],
    },
    zh: {
      category: 'stay',
      meta: { title: 'Lata Iskandar 厕所与祈祷室', description: '摊位附近有基本厕所与祈祷室。了解状况并自备所需。' },
      kicker: '厕所与祈祷',
      h1: 'Lata Iskandar 厕所与祈祷室',
      lead: 'Lata Iskandar 摊位附近有基本厕所与祈祷室。状况基本——自备纸巾与毛巾。',
      facts: [
        { label: '厕所', value: '基本' },
        { label: '祈祷室', value: '有' },
        { label: '位置', value: '摊位附近' },
        { label: '自带', value: '纸巾' },
      ],
      blocks: [
        { heading: '设施', paragraphs: ['摊位点附近有共用厕所。', '附近有祈祷室可用。'], bullets: ['无更衣室', '水未必常流'] },
        { heading: '准备', bullets: ['带纸巾/布', '带毛巾与替换衣物', '穿合适衣物'], callout: '设施基本；自备更舒适。' },
      ],
      faqs: [
        { q: '有厕所吗？', a: '有，摊位附近基本厕所。' },
        { q: '有祈祷室吗？', a: '有，附近有。' },
        { q: '干净吗？', a: '基本；自备更舒适。' },
        { q: '有更衣室吗？', a: '未注明；穿合适衣物。' },
      ],
      related: ['facilities-lata-iskandar', 'gerai-lata-iskandar', 'can-you-swim-lata-iskandar', 'safety-tips-lata-iskandar', 'lata-iskandar-with-kids'],
    },
  },
  'safety-tips-lata-iskandar': {
    ms: {
      category: 'safety',
      meta: { title: 'Tips Keselamatan Lata Iskandar', description: 'Hentian tepi jalan dengan air. Ketahui risiko batu licin, air deras dan kenderaan, serta cara kekal selamat.' },
      kicker: 'Keselamatan',
      h1: 'Tips Keselamatan Lata Iskandar',
      lead: 'Lata Iskandar selamat untuk hentian ringan jika berhati-hati. Risiko utama: batu licin, air deras selepas hujan dan kenderaan di bahu jalan.',
      facts: [
        { label: 'Risiko', value: 'Batu licin' },
        { label: 'Risiko 2', value: 'Air deras' },
        { label: 'Risiko 3', value: 'Kenderaan' },
        { label: 'Masa', value: 'Siang' },
      ],
      blocks: [
        { heading: 'Risiko utama', paragraphs: ['Batu dan tebing menjadi licin selepas hujan.', 'Aliran deras naik cepat — jauhi tepi sungai.'], bullets: ['Jaga anak setiap masa', 'Jangan parkir halang jalan', 'Pakai kasut grip'] },
        { heading: 'Sebelum pergi', bullets: ['Semak cuaca & ramalan', 'Isi minyak & tandas di Tapah', 'Bawa air & tuala'], callout: 'Tiada penyelamat atau kakitangan di lokasi — jaga keselamatan sendiri.' },
      ],
      faqs: [
        { q: 'Bila paling selamat?', a: 'Hari cerah, waktu siang, selepas tempoh kering.' },
        { q: 'Ada penyelamat?', a: 'Tidak; tiada kakitangan rasmi.' },
        { q: 'Bahu jalan selamat?', a: 'Letak di ruang selamat; jangan halang lalu lintas.' },
        { q: 'Apa bawa?', a: 'Air, tuala, kasut grip, tisu.' },
      ],
      related: ['can-you-swim-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'weather-lata-iskandar', 'lata-iskandar-with-kids', 'rainy-day-alternatives'],
    },
    en: {
      category: 'safety',
      meta: { title: 'Safety Tips at Lata Iskandar', description: 'A roadside stop with water. Know the risks of slippery rocks, fast water and vehicles, and how to stay safe.' },
      kicker: 'Safety',
      h1: 'Safety Tips at Lata Iskandar',
      lead: 'Lata Iskandar is safe for a light stop if careful. Main risks: slippery rocks, fast water after rain and vehicles on the road shoulder.',
      facts: [
        { label: 'Risk', value: 'Slippery rocks' },
        { label: 'Risk 2', value: 'Fast water' },
        { label: 'Risk 3', value: 'Vehicles' },
        { label: 'Time', value: 'Daylight' },
      ],
      blocks: [
        { heading: 'Main risks', paragraphs: ['Rocks and banks get slippery after rain.', 'Fast flow rises quickly — keep away from the stream edge.'], bullets: ['Watch children at all times', 'Do not block the road', 'Wear grippy shoes'] },
        { heading: 'Before you go', bullets: ['Check weather & forecast', 'Top up fuel & toilet in Tapah', 'Bring water & towel'], callout: 'No lifeguard or staff on site — look after your own safety.' },
      ],
      faqs: [
        { q: 'When is safest?', a: 'Clear day, daylight, after a dry spell.' },
        { q: 'Is there a lifeguard?', a: 'No; no official staff.' },
        { q: 'Is the road shoulder safe?', a: 'Park in a safe spot; do not block traffic.' },
        { q: 'What to bring?', a: 'Water, towel, grippy shoes, tissues.' },
      ],
      related: ['can-you-swim-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'weather-lata-iskandar', 'lata-iskandar-with-kids', 'rainy-day-alternatives'],
    },
    zh: {
      category: 'safety',
      meta: { title: 'Lata Iskandar 安全提示', description: '路边的瀑布停靠点。了解湿滑岩石、急流与车辆风险，以及如何保持安全。' },
      kicker: '安全',
      h1: 'Lata Iskandar 安全提示',
      lead: 'Lata Iskandar 只要小心就适合轻量停靠。主要风险：雨后岩石滑、水流急，以及路肩车辆。',
      facts: [
        { label: '风险', value: '湿滑岩石' },
        { label: '风险 2', value: '急流' },
        { label: '风险 3', value: '车辆' },
        { label: '时段', value: '白天' },
      ],
      blocks: [
        { heading: '主要风险', paragraphs: ['雨后岩石与岸坡变滑。', '水流涨得快——远离溪边。'], bullets: ['随时看顾小孩', '别挡路停车', '穿防滑鞋'] },
        { heading: '出发前', bullets: ['查天气与预报', '在打巴加满油、上厕所', '带水与毛巾'], callout: '现场无救生员或工作人员——自己注意安全。' },
      ],
      faqs: [
        { q: '什么时候最安全？', a: '晴朗日、白天、干燥一阵后。' },
        { q: '有救生员吗？', a: '没有；无正式工作人员。' },
        { q: '路肩安全吗？', a: '停在安全处；别挡车流。' },
        { q: '带什么？', a: '水、毛巾、防滑鞋、纸巾。' },
      ],
      related: ['can-you-swim-lata-iskandar', 'best-time-to-visit-lata-iskandar', 'weather-lata-iskandar', 'lata-iskandar-with-kids', 'rainy-day-alternatives'],
    },
  },
  'rainy-day-alternatives': {
    ms: {
      category: 'safety',
      meta: { title: 'Alternatif Hujan di Lata Iskandar', description: 'Jika hujan lebat, elak air terjun. Ketahui alternatif dalaman seperti Tapah, Cameron Highlands dan makanan tempatan.' },
      kicker: 'Hari hujan',
      h1: 'Alternatif Harian Hujan',
      lead: 'Selepas hujan lebat, elak Lata Iskandar — batu licin dan air deras. Pilih aktiviti dalaman di Tapah atau Cameron Highlands.',
      facts: [
        { label: 'Elak', value: 'Air terjun' },
        { label: 'Pilih', value: 'Dalaman' },
        { label: 'Tempat', value: 'Tapah/Cameron' },
        { label: 'Makan', value: 'Gerai & kafe' },
      ],
      blocks: [
        { heading: 'Kenapa elak', paragraphs: ['Aliran deras dan batu licin meningkatkan risiko.', 'Penglihatan dan parking lebih sukar.'], bullets: ['Tunda lawatan ke hari cerah', 'Guna masa di bandar'] },
        { heading: 'Alternatif', bullets: ['Makan & kraft di Tapah', 'Kafe & pasar Cameron Highlands', 'Muzium atau kedai tempatan'], callout: 'Rancang fleksibel; hujan tropika biasanya singkat — tunggu reda jika boleh.' },
      ],
      faqs: [
        { q: 'Boleh pergi waktu hujan?', a: 'Tidak disarankan; tunggu reda.' },
        { q: 'Apa buat di Tapah?', a: 'Makan, kraftangan, stesen minyak — rehat sebelum mendaki.' },
        { q: 'Cameron ada dalaman?', a: 'Ya, kafe, pasar dan kebun buah berbumbung.' },
        { q: 'Hujan lama?', a: 'Biasanya singkat; rancang mengikut cuaca.' },
      ],
      related: ['weather-lata-iskandar', 'safety-tips-lata-iskandar', 'tapah-food', 'cafes-tapah', 'cameron-highlands-day-trip'],
    },
    en: {
      category: 'safety',
      meta: { title: 'Rainy Day Alternatives for Lata Iskandar', description: 'If heavy rain, avoid the falls. Know indoor alternatives like Tapah, Cameron Highlands and local food.' },
      kicker: 'Rainy day',
      h1: 'Rainy Day Alternatives',
      lead: 'After heavy rain, avoid Lata Iskandar — slippery rocks and fast water. Pick indoor activities in Tapah or Cameron Highlands.',
      facts: [
        { label: 'Avoid', value: 'The falls' },
        { label: 'Pick', value: 'Indoor' },
        { label: 'Places', value: 'Tapah/Cameron' },
        { label: 'Food', value: 'Stalls & cafés' },
      ],
      blocks: [
        { heading: 'Why avoid', paragraphs: ['Fast flow and slippery rocks raise the risk.', 'Visibility and parking are harder.'], bullets: ['Delay the visit to a clear day', 'Use time in town'] },
        { heading: 'Alternatives', bullets: ['Food & crafts in Tapah', 'Cafés & markets in Cameron Highlands', 'Local museums or shops'], callout: 'Plan flexibly; tropical rain is usually short — wait it out if you can.' },
      ],
      faqs: [
        { q: 'Go during rain?', a: 'Not advised; wait for it to ease.' },
        { q: 'What to do in Tapah?', a: 'Eat, crafts, fuel — rest before the climb.' },
        { q: 'Indoor in Cameron?', a: 'Yes, cafés, markets and covered fruit farms.' },
        { q: 'Does rain last?', a: 'Usually short; plan around the weather.' },
      ],
      related: ['weather-lata-iskandar', 'safety-tips-lata-iskandar', 'tapah-food', 'cafes-tapah', 'cameron-highlands-day-trip'],
    },
    zh: {
      category: 'safety',
      meta: { title: 'Lata Iskandar 雨天替代方案', description: '若下大雨，避开瀑布。了解打巴、金马仑高原与当地饮食等室内替代。' },
      kicker: '雨天',
      h1: '雨天替代方案',
      lead: '大雨后避开 Lata Iskandar——岩石滑、水流急。改在打巴或金马仑高原进行室内活动。',
      facts: [
        { label: '避开', value: '瀑布' },
        { label: '改选', value: '室内' },
        { label: '地点', value: '打巴/金马仑' },
        { label: '饮食', value: '摊位与咖啡馆' },
      ],
      blocks: [
        { heading: '为何避开', paragraphs: ['水急与岩石滑增加风险。', '视线与停车更困难。'], bullets: ['改到晴天再去', '在镇上打发时间'] },
        { heading: '替代', bullets: ['打巴饮食与手作', '金马仑咖啡馆与市场', '当地博物馆或小店'], callout: '弹性安排；热带雨通常短——能等就等停。' },
      ],
      faqs: [
        { q: '下雨能去吗？', a: '不建议；等雨小。' },
        { q: '打巴做什么？', a: '吃、手作、加油——上山前休息。' },
        { q: '金马仑有室内？', a: '有，咖啡馆、市场与带棚果园。' },
        { q: '雨会久吗？', a: '通常短；按天气安排。' },
      ],
      related: ['weather-lata-iskandar', 'safety-tips-lata-iskandar', 'tapah-food', 'cafes-tapah', 'cameron-highlands-day-trip'],
    },
  },
  'weather-lata-iskandar': {
    ms: {
      category: 'safety',
      meta: { title: 'Cuaca Lata Iskandar: Ramalan & Monsun', description: 'Iklim tropika dengan dua monsun. Ketahui musim, ramalan dan cara semak cuaca sebelum ke Route 59.' },
      kicker: 'Cuaca',
      h1: 'Cuaca di Lata Iskandar',
      lead: 'Lata Iskandar mengalami iklim tropika — hujan boleh turun bila-bila masa. Semak ramalan dan elak selepas hujan lebat.',
      facts: [
        { label: 'Iklim', value: 'Tropika' },
        { label: 'Monsun', value: 'Dua musim' },
        { label: 'Hujan', value: 'Boleh tiba-tiba' },
        { label: 'Semak', value: 'Ramalan' },
      ],
      blocks: [
        { heading: 'Iklim & musim', paragraphs: ['Kawasan ini melalui monsun timur laut dan barat daya.', 'Hujan lebat biasa; aliran air terjun kuat.'], bullets: ['Bulan tengkujuh: elak', 'Pagi lebih cerah', 'Petang kerap hujan'] },
        { heading: 'Semak sebelum pergi', bullets: ['Lihat ramalan cuaca rasmi', 'Tanya keadaan di Tapah', 'Bawa baju hujan'], callout: 'Kami tidak menjanjikan cuaca tertentu — sahkan ramalan semasa sebelum memandu.' },
      ],
      faqs: [
        { q: 'Bulan mana paling elok?', a: 'Antara monsun; elak puncak tengkujuh.' },
        { q: 'Selalu hujan?', a: 'Boleh tiba-tiba; pagi biasanya lebih cerah.' },
        { q: 'Cara semak?', a: 'Guna ramalan cuaca rasmi sebelum pergi.' },
        { q: 'Bawa apa?', a: 'Baju hujan, kasut grip, air.' },
      ],
      related: ['best-time-to-visit-lata-iskandar', 'rainy-day-alternatives', 'safety-tips-lata-iskandar', 'tapah-to-lata-iskandar', 'about-lata-iskandar'],
    },
    en: {
      category: 'safety',
      meta: { title: 'Weather at Lata Iskandar: Forecast & Monsoon', description: 'Tropical climate with two monsoons. Know the seasons, forecast and how to check weather before Route 59.' },
      kicker: 'Weather',
      h1: 'Weather at Lata Iskandar',
      lead: 'Lata Iskandar has a tropical climate — rain can fall any time. Check the forecast and avoid right after heavy rain.',
      facts: [
        { label: 'Climate', value: 'Tropical' },
        { label: 'Monsoon', value: 'Two seasons' },
        { label: 'Rain', value: 'Can be sudden' },
        { label: 'Check', value: 'Forecast' },
      ],
      blocks: [
        { heading: 'Climate & seasons', paragraphs: ['The area goes through northeast and southwest monsoons.', 'Heavy rain is common; the fall flow is strong.'], bullets: ['Monsoon months: avoid', 'Mornings clearer', 'Afternoons often rain'] },
        { heading: 'Check before going', bullets: ['See the official weather forecast', 'Ask conditions in Tapah', 'Bring a raincoat'], callout: 'We do not promise specific weather — confirm the current forecast before driving.' },
      ],
      faqs: [
        { q: 'Which month is best?', a: 'Between monsoons; avoid the peak monsoon.' },
        { q: 'Always rainy?', a: 'Can be sudden; mornings usually clearer.' },
        { q: 'How to check?', a: 'Use the official forecast before going.' },
        { q: 'What to bring?', a: 'Raincoat, grippy shoes, water.' },
      ],
      related: ['best-time-to-visit-lata-iskandar', 'rainy-day-alternatives', 'safety-tips-lata-iskandar', 'tapah-to-lata-iskandar', 'about-lata-iskandar'],
    },
    zh: {
      category: 'safety',
      meta: { title: 'Lata Iskandar 天气：预报与季风', description: '热带气候，两季风。了解季节、预报与出发前如何查天气。' },
      kicker: '天气',
      h1: 'Lata Iskandar 天气',
      lead: 'Lata Iskandar 属热带气候——随时可能下雨。查预报，并避开水势最急之后。',
      facts: [
        { label: '气候', value: '热带' },
        { label: '季风', value: '两季' },
        { label: '雨', value: '可能突来' },
        { label: '查', value: '预报' },
      ],
      blocks: [
        { heading: '气候与季节', paragraphs: ['当地经历东北与西南季风。', '常有大雨；瀑布水流强。'], bullets: ['季风月：避开', '早晨较晴', '下午常下雨'] },
        { heading: '出发前查', bullets: ['看官方天气预报', '问打巴当地状况', '带雨衣'], callout: '我们不保证特定天气——开车前确认最新预报。' },
      ],
      faqs: [
        { q: '哪个月最好？', a: '季风之间；避开季风高峰。' },
        { q: '常下雨吗？', a: '可能突来；早晨通常较晴。' },
        { q: '怎么查？', a: '出发前看官方预报。' },
        { q: '带什么？', a: '雨衣、防滑鞋、水。' },
      ],
      related: ['best-time-to-visit-lata-iskandar', 'rainy-day-alternatives', 'safety-tips-lata-iskandar', 'tapah-to-lata-iskandar', 'about-lata-iskandar'],
    },
  },
  'lata-iskandar-with-kids': {
    ms: {
      category: 'safety',
      meta: { title: 'Lata Iskandar dengan Kanak-kanak', description: 'Hentian mesra keluarga jika dijaga. Tips bawa anak: kolam cetek, keselamatan air dan persediaan.' },
      kicker: 'Bersama kanak',
      h1: 'Lata Iskandar dengan Kanak-kanak',
      lead: 'Dengan pengawasan, Lata Iskandar sesuai keluarga. Kekal di kolam cetek, jauhi air deras dan bawa persediaan sendiri.',
      facts: [
        { label: 'Sesuai', value: 'Keluarga' },
        { label: 'Masa', value: '30–60 minit' },
        { label: 'Risiko', value: 'Air deras' },
        { label: 'Kemudahan', value: 'Gerai, tandas' },
      ],
      blocks: [
        { heading: 'Susunan mesra kanak', paragraphs: ['Parkir berhampiran gerai supaya dekat.', 'Biarkan kanak-kanak di kawasan cetek yang diawasi; jangan dekati air deras.'], bullets: ['Bawa tuala & baju ganti', 'Guna gerai untuk rehat', 'Jaga setiap masa'] },
        { heading: 'Tips keselamatan', bullets: ['Elak batu licin', 'Jauhkan dari tepi sungai deras', 'Semak cuaca'], callout: 'Air boleh naik cepat selepas hujan — jauhkan kanak-kanak dari tepi sungai deras.' },
      ],
      faqs: [
        { q: 'Selamat untuk kanak?', a: 'Ya dengan pengawasan; kekal di kawasan cetek.' },
        { q: 'Berapa lama cukup?', a: '30–60 minit sudah memadai.' },
        { q: 'Ada tandas?', a: 'Kemudahan asas berhampiran gerai.' },
        { q: 'Bila paling senang?', a: 'Pagi hari bekerja.' },
      ],
      related: ['safety-tips-lata-iskandar', 'can-you-swim-lata-iskandar', 'toilet-surau-lata-iskandar', 'facilities-lata-iskandar', 'half-day-itinerary-lata-iskandar'],
    },
    en: {
      category: 'safety',
      meta: { title: 'Lata Iskandar with Children', description: 'A family-friendly stop if supervised. Tips for kids: shallow pool, water safety and preparation.' },
      kicker: 'With kids',
      h1: 'Lata Iskandar with Children',
      lead: 'With supervision, Lata Iskandar suits families. Stay in the shallow pool, keep away from fast water and bring your own preparation.',
      facts: [
        { label: 'Suits', value: 'Families' },
        { label: 'Time', value: '30–60 minutes' },
        { label: 'Risk', value: 'Fast water' },
        { label: 'Facilities', value: 'Stalls, toilets' },
      ],
      blocks: [
        { heading: 'Kid-friendly plan', paragraphs: ['Park near the stalls so you are close.', 'Keep children in supervised shallow areas; avoid fast water.'], bullets: ['Bring towel & change', 'Use stalls to rest', 'Watch at all times'] },
        { heading: 'Safety tips', bullets: ['Avoid slippery rocks', 'Keep from the fast stream edge', 'Check weather'], callout: 'Water can rise fast after rain — keep children away from the fast stream edge.' },
      ],
      faqs: [
        { q: 'Safe for children?', a: 'Yes with supervision; stay in shallow areas.' },
        { q: 'How long is enough?', a: '30–60 minutes is enough.' },
        { q: 'Are there toilets?', a: 'Basic facilities near the stalls.' },
        { q: 'When is easiest?', a: 'Weekday mornings.' },
      ],
      related: ['safety-tips-lata-iskandar', 'can-you-swim-lata-iskandar', 'toilet-surau-lata-iskandar', 'facilities-lata-iskandar', 'half-day-itinerary-lata-iskandar'],
    },
    zh: {
      category: 'safety',
      meta: { title: 'Lata Iskandar 亲子游', description: '有看顾就适合家庭的停靠。带孩子建议：浅池、戏水安全与准备。' },
      kicker: '亲子',
      h1: 'Lata Iskandar 亲子游',
      lead: '有看顾，Lata Iskandar 适合家庭。留在浅池、远离急流，并自备所需。',
      facts: [
        { label: '适合', value: '家庭' },
        { label: '时间', value: '30–60 分钟' },
        { label: '风险', value: '急流' },
        { label: '设施', value: '摊位、厕所' },
      ],
      blocks: [
        { heading: '亲子安排', paragraphs: ['停在摊位点附近，离车近。', '让小孩待在有人看顾的浅处；别靠近急流。'], bullets: ['带毛巾与替换衣物', '用摊位休息', '随时看顾'] },
        { heading: '安全小提醒', bullets: ['避开湿滑岩石', '远离急流边', '查天气'], callout: '雨后水位涨得快——让小孩远离急流边。' },
      ],
      faqs: [
        { q: '适合小孩吗？', a: '有看顾就适合；留在浅处。' },
        { q: '多久够？', a: '30–60 分钟足够。' },
        { q: '有厕所吗？', a: '摊位点附近有基本设施。' },
        { q: '什么时候最顺？', a: '平日早上。' },
      ],
      related: ['safety-tips-lata-iskandar', 'can-you-swim-lata-iskandar', 'toilet-surau-lata-iskandar', 'facilities-lata-iskandar', 'half-day-itinerary-lata-iskandar'],
    },
  },

};

export function getTopic(slug: TopicId, locale: Locale): TopicContent | undefined {
  return topics[slug]?.[locale];
}
