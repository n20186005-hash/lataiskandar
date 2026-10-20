export const locales = ['ms', 'en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ms';

export const localeLabels: Record<Locale, string> = {
  ms: 'BM',
  en: 'EN',
  zh: '中文',
};

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PlanCard {
  title: string;
  body: string;
}

export interface GetCard {
  eyebrow: string;
  title: string;
  body: string;
}

export interface ListItem {
  title: string;
  body: string;
}

export interface Translation {
  htmlLang: string;
  ogLocale: string;
  site: {
    name: string;
    title: string;
  };
  head: {
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    plan: string;
    getting: string;
    around: string;
    faq: string;
    openMap: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    chips: string[];
    alt: string;
  };
  plan: {
    eyebrow: string;
    heading: string;
    lead: string;
    cards: PlanCard[];
  };
  safety: {
    eyebrow: string;
    heading: string;
    body: string[];
    figcaption: string;
    portraitAlt: string;
  };
  getting: {
    eyebrow: string;
    heading: string;
    lead: string;
    cards: GetCard[];
    train: { eyebrow: string; route: string; note: string };
  };
  mapCard: {
    eyebrow: string;
    heading: string;
    link: string;
    iframeTitle: string;
  };
  around: {
    eyebrow: string;
    heading: string;
    food: ListItem[];
    nearbyEyebrow: string;
    nearby: ListItem[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: FaqItem[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    button: string;
    entranceAlt: string;
  };
  footer: {
    about: string;
    photos: string;
    disclaimer: string;
  };
  facts: { heading: string; snapshot: string; caution: string; sources: string };
  schemaDescription: string;
}

const ms: Translation = {
  htmlLang: 'ms',
  ogLocale: 'ms_MY',
  site: {
    name: 'Lata Iskandar',
    title: 'Lata Iskandar Tapah Panduan Pelancongan: Air Terjun & Parkir',
  },
  head: {
    description:
      'Perjalanan ke Cameron Highlands? Singgah di Air Terjun Lata Iskandar di Tapah. Semak laluan Route 59, parkir, kemudahan gerai, waktu terbaik dan tips keselamatan terkini.',
    ogTitle: 'Lata Iskandar — Air terjun di tengah perjalanan',
    ogDescription: 'Panduan praktikal untuk berhenti di Lata Iskandar di laluan Tapah–Cameron Highlands.',
  },
  nav: {
    plan: 'Rancang lawatan',
    getting: 'Cara ke sini',
    around: 'Sekitar',
    faq: 'FAQ',
    openMap: 'Buka peta ↗',
  },
  hero: {
    eyebrow: 'Federal Route 59 · Tapah, Perak',
    h1: 'Lata Iskandar, Tapah.',
    lead: 'Lata Iskandar ialah air terjun yang muncul hampir terus di tepi jalan lama Tapah–Cameron Highlands — tempat untuk merehatkan kaki, merasa udara hutan dan menyambung perjalanan dengan lebih segar.',
    chips: ['Air terjun tepi jalan', 'Singgah ± 30–60 min', 'Gerai & kraftangan'],
    alt: 'Air terjun Lata Iskandar mengalir di celah batu dan hutan tropika',
  },
  plan: {
    eyebrow: 'Kenapa singgah',
    heading: 'Ritma hutan, cuma beberapa langkah dari jalan.',
    lead: 'Tidak perlu trek panjang. Dari kawasan gerai, bunyi air sudah memenuhi ruang. Batu bertingkat, percikan putih dan kanopi hijau menjadikan Lata Iskandar satu hentian yang terasa jauh dari lebuh raya walaupun aksesnya mudah.',
    cards: [
      {
        title: 'Bayaran / kos',
        body: 'Semak papan tanda untuk aturan akses dan sebarang bayaran semasa. Ketersediaan gerai dan kemudahan boleh berubah; sediakan wang kecil jika diperlukan.',
      },
      {
        title: 'Masa terbaik',
        body: 'Datang waktu pagi atau siang ketika cahaya masih baik. Selepas hujan, aliran boleh lebih deras dan batu sangat licin.',
      },
      {
        title: 'Parkir',
        body: 'Ruang parkir adalah terhad dan kebanyakannya di bahu jalan berhampiran gerai. Hujung minggu boleh sesak; jangan parkir hingga menyempitkan laluan.',
      },
      {
        title: 'Tempoh lawatan',
        body: 'Peruntukkan 30–60 minit untuk foto, melihat air terjun dan snek. Jika mahu bermain air atau berehat lebih lama, tambah masa secukupnya.',
      },
    ],
  },
  safety: {
    eyebrow: 'Nota keselamatan',
    heading: 'Cantik tidak bermakna jinak.',
    body: [
      'Batu di sekitar air terjun sentiasa boleh menjadi licin. Gunakan kasut bertapak baik, elakkan memanjat permukaan basah dan pastikan kanak-kanak sentiasa dalam pengawasan.',
      'Jika hujan lebat di kawasan hulu atau air kelihatan berubah warna dan semakin deras, jauhkan diri daripada alur sungai. Nikmati pemandangan dari kawasan yang stabil.',
    ],
    figcaption: 'Air yang turun bertingkat di antara batu granit',
    portraitAlt: 'Pandangan dekat aliran bertingkat Lata Iskandar',
  },
  getting: {
    eyebrow: 'Cara ke Lata Iskandar',
    heading: 'Naik ke Route 59, kemudian biar bunyi air jadi penanda.',
    lead: 'Laluan Tapah–Cameron Highlands sempit dan berselekoh. Kereta biasa memadai; pandu perlahan terutama selepas hujan dan beri ruang kepada kenderaan berat.',
    cards: [
      {
        eyebrow: 'Lapangan terbang',
        title: 'Sultan Azlan Shah, Ipoh (IPH)',
        body: 'Dari lapangan terbang, pilihan paling fleksibel ialah kereta sewa atau teksi/pemandu persendirian menuju Tapah dan seterusnya Laluan 59. Jika mahu bas, bergerak dahulu ke terminal bas Ipoh dan sambung ke arah Cameron Highlands/Tapah mengikut perkhidmatan semasa.',
      },
      {
        eyebrow: 'Bas',
        title: 'Turun di Tapah',
        body: 'Terminal Bas Tapah ialah titik pertukaran yang lebih praktikal. Jangan anggap bas ekspres akan berhenti di air terjun: sambung dengan teksi, e-hailing jika tersedia atau pemandu yang telah ditempah.',
      },
      {
        eyebrow: 'Teksi / e-hailing',
        title: 'Tempah perjalanan pergi-balik',
        body: 'Liputan dan pemandu di jalan bukit tidak semestinya konsisten. Beritahu pemandu anda mahu berhenti di Lata Iskandar dan atur masa jemputan pulang sebelum tiba.',
      },
    ],
    train: {
      eyebrow: 'Datang dengan kereta api?',
      route: 'KTM ETS → Tapah Road → teksi / kereta ke Tapah → Route 59.',
      note: 'Jika tiba di Tapah Road, atur sambungan jalan raya lebih awal dan semak perkhidmatan tren semasa.',
    },
  },
  mapCard: {
    eyebrow: 'Peta',
    heading: 'Lata Iskandar · Tapah · Route 59',
    link: 'Buka arahan di Google Maps ↗',
    iframeTitle: 'Peta Google Lata Iskandar',
  },
  around: {
    eyebrow: 'Makan sekitar',
    heading: 'Dari buah tepi jalan ke laksa di Tapah.',
    food: [
      {
        title: 'Gerai Lata Iskandar',
        body: 'Pilihan paling dekat untuk minuman, buah tempatan, snek ringkas dan kraftangan sebelum menyambung perjalanan.',
      },
      {
        title: 'Makan di Tapah',
        body: 'Singgah di bandar Tapah untuk hidangan Melayu seperti ikan bakar dan nasi campur.',
      },
      {
        title: 'Bekalan perjalanan',
        body: 'Bawa air minuman dan makanan ringan jika perlu; jangan bergantung pada semua gerai dibuka ketika ketibaan anda.',
      },
    ],
    nearbyEyebrow: 'Tempat menarik berdekatan',
    nearby: [
      {
        title: 'Kuala Woh',
        body: 'Hutan rekreasi berhampiran Tapah untuk suasana sungai, pokok besar dan rehat dalam teduhan.',
      },
      {
        title: 'Lata Kinjang',
        body: 'Satu lagi air terjun terkenal di daerah Batang Padang, sesuai digabungkan jika anda meneroka kawasan Tapah–Chenderiang.',
      },
      {
        title: 'Cameron Highlands',
        body: 'Teruskan perjalanan mendaki Route 59 ke Ringlet dan kawasan tanah tinggi untuk ladang teh, cuaca sejuk dan pemandangan bukit.',
      },
    ],
  },
  faq: {
    eyebrow: 'Soalan lazim',
    heading: 'Sebelum enjin dimatikan.',
    items: [
      {
        q: 'Adakah masuk ke Lata Iskandar berbayar?',
        a: 'Bayaran semasa belum disahkan. Semak papan tanda dan aturan di lokasi; jangan anggap akses atau kemudahan sentiasa percuma.',
      },
      {
        q: 'Boleh mandi di air terjun?',
        a: 'Keselamatan untuk mandi tidak disahkan. Ikut papan tanda dan arahan tempatan; elakkan sungai semasa hujan atau arus meningkat, dan awasi kanak-kanak dari tempat yang stabil.',
      },
      {
        q: 'Berapa lama patut singgah?',
        a: 'Untuk foto, melihat air terjun dan membeli snek, sekitar 30–60 minit biasanya selesa. Tambah masa jika mahu berehat atau bermain air.',
      },
      {
        q: 'Ada tempat letak kereta?',
        a: 'Parkir kebanyakannya di bahu jalan berhampiran gerai dan ruangnya terhad. Datang lebih awal pada hujung minggu dan jangan menghalang laluan utama.',
      },
      {
        q: 'Ada bas terus ke Lata Iskandar?',
        a: 'Jangan bergantung pada bas awam yang berhenti terus di air terjun. Cara lebih praktikal ialah tiba di Tapah atau Tapah Road dahulu, kemudian sambung dengan teksi, e-hailing jika tersedia, kereta sewa atau pemandu persendirian.',
      },
      {
        q: 'Waktu apa paling sesuai?',
        a: 'Pagi hingga lewat petang ketika masih terang paling sesuai. Selepas hujan, batu boleh sangat licin dan aliran lebih kuat; utamakan keadaan cuaca dan keselamatan.',
      },
    ],
  },
  cta: {
    eyebrow: 'Satu hentian kecil',
    heading: 'Biar perjalanan ke tanah tinggi ada bunyi air.',
    button: 'Navigasi ke Lata Iskandar ↗',
    entranceAlt: 'Pemandangan kawasan jalan dan pintu masuk berhampiran Lata Iskandar',
  },
  footer: {
    about: 'Laman panduan bebas untuk membantu merancang persinggahan. Bukan laman rasmi Lata Iskandar, pihak berkuasa tempatan atau mana-mana pengendali.',
    photos:
      'Foto: Ronykr (CC BY-SA 4.0), Ghaydaa Sayed (CC BY-SA 4.0), Sasha India (CC BY 2.0), melalui Wikimedia Commons. Foto disimpan secara tempatan dalam projek.',
    disclaimer:
      'Maklumat waktu, akses, bayaran dan kemudahan boleh berubah; semak keadaan di lokasi sebelum perjalanan.',
  },
  facts: { heading: 'Lokasi dan semakan lawatan', snapshot: 'Disemak 19 Oktober 2026: Google Maps menyenaraikan 4.4/5 daripada 6,042 ulasan; alamat Exit 59, 35000 Tapah, Perak. Ini penarafan di Google Maps, bukan ulasan laman ini.', caution: 'Maps menyenaraikan buka 24 jam pada tarikh semakan. Ini tidak menjamin akses atau keselamatan pada waktu malam. Rancang lawatan ketika terang dan semak cuaca, papan tanda serta aturan semasa.', sources: 'Sumber' },
  schemaDescription: 'Air terjun tepi Laluan Persekutuan 59 di antara Tapah dan Cameron Highlands, Perak.',
};

const en: Translation = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  site: {
    name: 'Lata Iskandar',
    title: 'Lata Iskandar Tapah Travel Guide: Waterfall & Parking',
  },
  head: {
    description:
      'Driving to Cameron Highlands? Stop at Lata Iskandar waterfall on Route 59 near Tapah, Perak. Check directions, parking, stall facilities, best times and safety tips.',
    ogTitle: 'Lata Iskandar — a waterfall midway on your drive',
    ogDescription: 'A practical guide to stopping at Lata Iskandar on the Tapah–Cameron Highlands route.',
  },
  nav: {
    plan: 'Plan your visit',
    getting: 'How to get here',
    around: 'Nearby',
    faq: 'FAQ',
    openMap: 'Open map ↗',
  },
  hero: {
    eyebrow: 'Federal Route 59 · Tapah, Perak',
    h1: 'Lata Iskandar, Tapah.',
    lead: 'Lata Iskandar is a waterfall that appears almost beside the old Tapah–Cameron Highlands road — a place to rest your legs, breathe the forest air and continue the drive feeling fresher.',
    chips: ['Roadside waterfall', 'Stop for ± 30–60 min', 'Stalls & handicrafts'],
    alt: 'Lata Iskandar waterfall flowing between rocks and tropical rainforest',
  },
  plan: {
    eyebrow: 'Why stop here',
    heading: 'Forest rhythm, only steps from the road.',
    lead: 'No long trek required. From the stall area, the sound of water already fills the air. Tiered rocks, white spray and green canopy make Lata Iskandar feel far from the highway even though access is easy.',
    cards: [
      {
        title: 'Entry / cost',
        body: 'Check signs for current access arrangements and any fees. Stall and facility availability can change; bring small change if needed.',
      },
      {
        title: 'Best time',
        body: 'Come in the morning or midday while the light is still good. After rain, the current can be stronger and the rocks very slippery.',
      },
      {
        title: 'Parking',
        body: 'Parking is limited and mostly on the road shoulder near the stalls. Weekends can get crowded; do not park in a way that narrows the road.',
      },
      {
        title: 'Visit duration',
        body: 'Allow 30–60 minutes for photos, viewing the falls and a snack. Add time if you want to play in the water or rest longer.',
      },
    ],
  },
  safety: {
    eyebrow: 'Safety notes',
    heading: 'Beautiful doesn’t mean tame.',
    body: [
      'Rocks around the waterfall can always be slippery. Wear shoes with good grip, avoid climbing wet surfaces and keep children within sight at all times.',
      'If heavy rain falls upstream or the water turns cloudy and faster, stay clear of the river channel. Enjoy the view from stable ground.',
    ],
    figcaption: 'Water cascading in tiers between granite rocks',
    portraitAlt: 'A close view of Lata Iskandar’s tiered stream',
  },
  getting: {
    eyebrow: 'How to get to Lata Iskandar',
    heading: 'Take Route 59, then let the sound of water be your marker.',
    lead: 'The Tapah–Cameron Highlands road is narrow and winding. A regular car is enough; drive slowly especially after rain and give way to heavy vehicles.',
    cards: [
      {
        eyebrow: 'Airport',
        title: 'Sultan Azlan Shah, Ipoh (IPH)',
        body: 'From the airport, the most flexible options are a rental car or taxi/private driver heading to Tapah and onwards on Route 59. For buses, first make your way to the Ipoh bus terminal and connect toward Cameron Highlands/Tapah according to current services.',
      },
      {
        eyebrow: 'Bus',
        title: 'Get off at Tapah',
        body: 'Tapah Bus Terminal is the more practical transfer point. Do not assume express buses stop at the waterfall: continue by taxi, e-hailing where available or a pre-booked driver.',
      },
      {
        eyebrow: 'Taxi / e-hailing',
        title: 'Book a return trip',
        body: 'Coverage and drivers on the hill road are not always consistent. Tell your driver you want to stop at Lata Iskandar and arrange the pickup time before you arrive.',
      },
    ],
    train: {
      eyebrow: 'Arriving by train?',
      route: 'KTM ETS → Tapah Road → taxi / car to Tapah → Route 59.',
      note: 'If arriving at Tapah Road, arrange the onward road transfer in advance and check current train services.',
    },
  },
  mapCard: {
    eyebrow: 'Map',
    heading: 'Lata Iskandar · Tapah · Route 59',
    link: 'Open directions in Google Maps ↗',
    iframeTitle: 'Google Map of Lata Iskandar',
  },
  around: {
    eyebrow: 'Where to eat nearby',
    heading: 'From roadside fruit to laksa in Tapah.',
    food: [
      {
        title: 'Gerai Lata Iskandar',
        body: 'The closest option for drinks, local fruit, simple snacks and handicrafts before continuing your journey.',
      },
      {
        title: 'Food in Tapah',
        body: 'Stop in the town of Tapah for Malay dishes such as grilled fish and mixed rice (nasi campur).',
      },
      {
        title: 'Supplies for the drive',
        body: 'Bring drinking water and snacks if needed; do not rely on every stall being open when you arrive.',
      },
    ],
    nearbyEyebrow: 'Nearby attractions',
    nearby: [
      {
        title: 'Kuala Woh',
        body: 'A forest recreation area near Tapah with riverside scenery, big trees and shady resting spots.',
      },
      {
        title: 'Lata Kinjang',
        body: 'Another well-known waterfall in the Batang Padang district, easy to combine if you explore the Tapah–Chenderiang area.',
      },
      {
        title: 'Cameron Highlands',
        body: 'Continue up Route 59 to Ringlet and the highlands for tea plantations, cool weather and hill views.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Before you switch off the engine.',
    items: [
      {
        q: 'Is there an entrance fee for Lata Iskandar?',
        a: 'Current fees have not been confirmed. Check signs and arrangements on site; do not assume access or facilities are always free.',
      },
      {
        q: 'Can you swim at the waterfall?',
        a: 'Swimming safety has not been confirmed. Follow local signs and instructions; avoid the river during rain or rising flows, and supervise children from stable ground.',
      },
      {
        q: 'How long should a stop be?',
        a: 'For photos, viewing the falls and buying snacks, around 30–60 minutes is usually comfortable. Add time if you want to rest or play in the water.',
      },
      {
        q: 'Is there parking?',
        a: 'Parking is mostly on the road shoulder near the stalls and space is limited. Come earlier on weekends and do not block the main road.',
      },
      {
        q: 'Is there a direct bus to Lata Iskandar?',
        a: 'Do not rely on public buses stopping right at the waterfall. A more practical approach is to reach Tapah or Tapah Road first, then continue by taxi, e-hailing where available, rental car or private driver.',
      },
      {
        q: 'What time is best?',
        a: 'Morning to late afternoon while it is still bright is best. After rain, rocks can be very slippery and the flow stronger; prioritise weather conditions and safety.',
      },
    ],
  },
  cta: {
    eyebrow: 'One small stop',
    heading: 'Let the drive to the highlands carry the sound of water.',
    button: 'Navigate to Lata Iskandar ↗',
    entranceAlt: 'View of the road area and entrance near Lata Iskandar',
  },
  footer: {
    about:
      'An independent guide site to help plan your stop. Not the official site of Lata Iskandar, local authorities or any operator.',
    photos:
      'Photos: Ronykr (CC BY-SA 4.0), Ghaydaa Sayed (CC BY-SA 4.0), Sasha India (CC BY 2.0), via Wikimedia Commons. Photos are stored locally in this project.',
    disclaimer:
      'Opening times, access, fees and facilities can change; check conditions on site before travelling.',
  },
  facts: { heading: 'Location and visit check', snapshot: 'Checked 19 October 2026: Google Maps lists 4.4/5 from 6,042 reviews and the address Exit 59, 35000 Tapah, Perak. This is a Google Maps rating, not reviews collected by this site.', caution: 'Maps listed 24-hour opening on the check date. This does not guarantee night-time access or safety. Plan a daylight visit and check weather, local signs and current arrangements.', sources: 'Sources' },
  schemaDescription: 'A roadside waterfall on Federal Route 59 between Tapah and Cameron Highlands, Perak, Malaysia.',
};

const zh: Translation = {
  htmlLang: 'zh-CN',
  ogLocale: 'zh_CN',
  site: {
    name: 'Lata Iskandar',
    title: 'Lata Iskandar 打巴旅游指南：瀑布与停车',
  },
  head: {
    description:
      '前往金马仑高原？别错过打巴（Tapah）Route 59 沿线的 Lata Iskandar 瀑布。查看路线方向、停车、摊位设施、最佳到访时间与安全提示。',
    ogTitle: 'Lata Iskandar — 旅途中的瀑布',
    ogDescription: '打巴—金马仑高原路线上的 Lata Iskandar 瀑布实用停留指南。',
  },
  nav: {
    plan: '行程规划',
    getting: '交通方式',
    around: '周边',
    faq: '常见问题',
    openMap: '打开地图 ↗',
  },
  hero: {
    eyebrow: 'Federal Route 59 · 霹雳州打巴（Tapah）',
    h1: 'Lata Iskandar 打巴瀑布。',
    lead: 'Lata Iskandar 是几乎就贴着打巴—金马仑高原旧公路出现的瀑布——让双腿歇一歇、呼吸森林空气，再以更清爽的状态继续旅程。',
    chips: ['路边瀑布', '停留约 30–60 分钟', '摊位与手工艺品'],
    alt: 'Lata Iskandar 瀑布在岩石与热带雨林之间流下',
  },
  plan: {
    eyebrow: '为何停留',
    heading: '森林的节奏，离公路只有几步。',
    lead: '无需长途徒步。从摊位区开始，水声已充满四周。层层叠叠的岩石、白色水花与绿色林冠，让 Lata Iskandar 虽然容易抵达，却有种远离大道的悠远感。',
    cards: [
      {
        title: '门票 / 费用',
        body: '请查看现场告示，确认当前通行安排与收费。摊位和设施的开放情况可能变化，可按需准备零钱。',
      },
      {
        title: '最佳时间',
        body: '建议在上午或中午光线尚好时到访。雨后水流可能更急，岩石也会非常湿滑。',
      },
      {
        title: '停车',
        body: '停车位有限，多在摊位附近的路肩。周末可能拥挤；切勿把车停到压缩行车道的程度。',
      },
      {
        title: '停留时长',
        body: '拍照、观瀑和买点小吃，一般 30–60 分钟就很从容。若想玩水或多休息，可酌情增加时间。',
      },
    ],
  },
  safety: {
    eyebrow: '安全须知',
    heading: '景色很美，但并不温驯。',
    body: [
      '瀑布周围的岩石随时可能湿滑。请穿抓地力好的鞋，避免攀爬湿滑岩面，并让儿童始终保持在视线范围内。',
      '如果上游下大雨，或水流变浑浊、变急，请远离河道。在稳固的地面上欣赏景色即可。',
    ],
    figcaption: '水流在花岗岩之间层层跌落',
    portraitAlt: 'Lata Iskandar 层叠水流的近景',
  },
  getting: {
    eyebrow: '如何前往 Lata Iskandar',
    heading: '驶上 Route 59，然后让水声成为你的路标。',
    lead: '打巴—金马仑高原公路狭窄多弯。普通轿车即可通行；雨后请减速慢行，并给重型车辆让出空间。',
    cards: [
      {
        eyebrow: '机场',
        title: '怡保 Sultan Azlan Shah 机场（IPH）',
        body: '从机场出发，最灵活的选择是租车或出租车/私人司机前往打巴，再驶上 Route 59。若想坐巴士，可先到怡保巴士总站，再按现有班次转乘往金马仑高原/打巴方向。',
      },
      {
        eyebrow: '巴士',
        title: '在打巴下车',
        body: '打巴巴士总站是更实际的中转点。不要指望长途巴士会在瀑布前停靠：需再转出租车、网约车（如有）或提前预订的司机。',
      },
      {
        eyebrow: '出租车 / 网约车',
        title: '建议预订往返程',
        body: '山路上的网约车覆盖和司机并不总是稳定。请告知司机你想在 Lata Iskandar 停留，并在抵达前就约好返程接送时间。',
      },
    ],
    train: {
      eyebrow: '搭火车前往？',
      route: 'KTM ETS → Tapah Road 站 → 出租车/汽车至打巴 → Route 59。',
      note: '若乘火车抵达 Tapah Road，请提前安排公路接驳，并核实当前列车服务。',
    },
  },
  mapCard: {
    eyebrow: '地图',
    heading: 'Lata Iskandar · 打巴 · Route 59',
    link: '在 Google Maps 打开导航 ↗',
    iframeTitle: 'Lata Iskandar 的 Google 地图',
  },
  around: {
    eyebrow: '周边美食',
    heading: '从路边水果，到打巴的一碗叻沙。',
    food: [
      {
        title: 'Gerai Lata Iskandar',
        body: '距离最近的选择：饮料、本地水果、简单小吃和手工艺品，适合继续行程前补给。',
      },
      {
        title: '打巴镇用餐',
        body: '顺路在打巴镇上品尝马来菜，如烤鱼和什锦饭（nasi campur）。',
      },
      {
        title: '行程补给',
        body: '可按需携带饮用水与零食，不要假定到访时所有摊位都营业。',
      },
    ],
    nearbyEyebrow: '附近景点',
    nearby: [
      {
        title: 'Kuala Woh',
        body: '打巴附近的森林休闲区，有溪流景致、大树与荫凉休息处。',
      },
      {
        title: 'Lata Kinjang',
        body: 'Batang Padang 县另一处著名瀑布，若游览打巴—Chenderiang 一带可顺道安排。',
      },
      {
        title: '金马仑高原（Cameron Highlands）',
        body: '沿 Route 59 继续上到 Ringlet 与高原地区：茶园、凉爽气候与山景在前方等你。',
      },
    ],
  },
  faq: {
    eyebrow: '常见问题',
    heading: '熄火之前，先看这里。',
    items: [
      {
        q: '进入 Lata Iskandar 需要门票吗？',
        a: '当前收费尚未核实。请以现场告示与通行安排为准，不要假定景区或设施始终免费。',
      },
      {
        q: '可以在瀑布玩水吗？',
        a: '此处是否适合游泳尚未确认。请遵守现场告示与指引，雨天或水流上涨时远离河道，并在稳固地面上照看儿童。',
      },
      {
        q: '建议停留多久？',
        a: '拍照、观瀑、买小吃，一般 30–60 分钟即可。若想玩水或多休息，可再增加时间。',
      },
      {
        q: '有停车场吗？',
        a: '停车位多在摊位附近的路肩，数量有限。周末请提早前来，且不要占用主行车道。',
      },
      {
        q: '有巴士直达 Lata Iskandar 吗？',
        a: '不要指望公共巴士恰好停在瀑布前。更实际的做法是先到打巴或 Tapah Road，再转出租车、网约车（如有）、租车或私人司机。',
      },
      {
        q: '什么时候去最合适？',
        a: '上午到傍晚天色尚亮时最合适。雨后岩石可能非常湿滑、水流更强；请以天气状况和安全为先。',
      },
    ],
  },
  cta: {
    eyebrow: '小小的一站',
    heading: '让通往高原的旅程，多一段水声。',
    button: '导航至 Lata Iskandar ↗',
    entranceAlt: 'Lata Iskandar 附近道路与入口一带的景象',
  },
  footer: {
    about: '独立攻略网站，帮助你规划停留行程。非 Lata Iskandar、当地主管机关或任何经营者的官方网站。',
    photos:
      '照片：Ronykr（CC BY-SA 4.0）、Ghaydaa Sayed（CC BY-SA 4.0）、Sasha India（CC BY 2.0），来自 Wikimedia Commons。照片已在本地项目中存储。',
    disclaimer: '开放时间、通行方式、收费与设施可能变动；出行前请在现场确认实际情况。',
  },
  facts: { heading: '位置与到访信息核查', snapshot: '核查日期：2026年10月19日。Google Maps 显示 4.4/5 分、6,042 条评价，地址为 Exit 59, 35000 Tapah, Perak。此为 Google Maps 评分，并非本站收集的评价。', caution: '核查当日 Maps 列为24小时开放，这不代表夜间一定可以进入或安全。建议白天到访，并确认天气、现场告示与当前安排。', sources: '资料来源' },
  schemaDescription: '位于霹雳州打巴与金马仑高原之间、联邦 59 号公路（Route 59）沿线的路边瀑布。',
};

export const translations: Record<Locale, Translation> = { ms, en, zh };
