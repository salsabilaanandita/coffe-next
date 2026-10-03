export type Category =
  | "Kopi"
  | "Roti & Pastry"
  | "Dessert";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;

  tag?:
    | "Best Seller"
    | "Baru"
    | "Signature"
    | "Pilihan Barista";

  notes?: string[];
  origin?: string;

  image: string;

  /**
   * Posisi objek di dalam gambar.
   * Contoh:
   * "center center"
   * "center 30%"
   * "center 70%"
   */
  imagePosition?: string;

  /**
   * cover   = memenuhi area gambar
   * contain = gambar ditampilkan lebih utuh
   */
  imageFit?: "cover" | "contain";

  /**
   * Rotasi gambar dalam derajat.
   */
  imageRotation?: number;

  featured?: boolean;
};

export const categories: Array<
  "Semua" | Category
> = [
  "Semua",
  "Kopi",
  "Roti & Pastry",
  "Dessert",
];

/* =========================================================
   IMAGE HELPER
   ========================================================= */

const image = (
  id: string,
  position = "center center",
  fit: "cover" | "contain" = "cover",
  rotation = 0,
) => ({
  image: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=95`,
  imagePosition: position,
  imageFit: fit,
  imageRotation: rotation,
});

/* =========================================================
   MENU
   ========================================================= */

export const menuItems: MenuItem[] = [
  /* =======================================================
     KOPI
     ======================================================= */

  {
    id: "kopi-susu-rengkuh",
    name: "Kopi Susu Rengkuh",
    description:
      "Espresso house blend, susu segar, dan gula aren dengan rasa karamel yang lembut.",
    price: 28000,
    category: "Kopi",
    tag: "Best Seller",
    notes: [
      "Gula Aren",
      "Creamy",
      "Karamel",
    ],
    featured: true,
    ...image(
      "1517701550927-30cf4ba1dba5",
      "center 20%",
    ),
  },

  {
    id: "rengkuh-latte",
    name: "Rengkuh Latte",
    description:
      "Espresso dengan steamed milk lembut dan microfoam dengan karakter kopi yang seimbang.",
    price: 30000,
    category: "Kopi",
    notes: [
      "Milky",
      "Smooth",
      "Espresso",
    ],
    ...image(
      "1534778101976-62847782c213",
      "center 70%",
    ),
  },

  {
    id: "cappuccino",
    name: "Cappuccino",
    description:
      "Espresso dengan susu steamed dan foam lembut untuk rasa yang creamy dan seimbang.",
    price: 30000,
    category: "Kopi",
    tag: "Pilihan Barista",
    notes: [
      "Foamy",
      "Creamy",
      "Bold",
    ],
    ...image(
      "1572442388796-11668a67e53d",
      "center 52%",
    ),
  },

  {
    id: "flat-white",
    name: "Flat White",
    description:
      "Double espresso dengan microfoam susu yang halus dan karakter kopi yang tetap terasa.",
    price: 32000,
    category: "Kopi",
    notes: [
      "Velvety",
      "Nutty",
      "Balanced",
    ],
    ...image(
      "1577968897966-3d4325b36b61",
      "center 48%",
    ),
  },

  {
    id: "americano",
    name: "Americano",
    description:
      "Espresso dengan air untuk menghasilkan kopi yang clean, ringan, dan tetap aromatik.",
    price: 24000,
    category: "Kopi",
    notes: [
      "Clean",
      "Light",
      "Roasted",
    ],
    ...image(
      "1514432324607-a09d9b4aefdd",
      "center 50%",
    ),
  },

  {
    id: "long-black",
    name: "Long Black",
    description:
      "Double espresso dengan air panas untuk karakter kopi yang lebih bold dan aromatic.",
    price: 26000,
    category: "Kopi",
    notes: [
      "Bold",
      "Rich",
      "Roasted",
    ],
    ...image(
      "1551030173-122aabc4489c",
      "center 50%",
    ),
  },

  {
    id: "mocha-rengkuh",
    name: "Mocha Rengkuh",
    description:
      "Espresso, dark chocolate, dan susu dengan rasa cokelat yang pekat namun tetap seimbang.",
    price: 33000,
    category: "Kopi",
    tag: "Signature",
    notes: [
      "Chocolate",
      "Creamy",
      "Espresso",
    ],
    ...image(
      "1578314675249-a6910f80cc4e",
      "center 55%",
    ),
  },

  {
    id: "kopi-susu-aren",
    name: "Kopi Susu Aren",
    description:
      "Espresso, susu, dan gula aren dengan rasa manis yang ringan dan creamy.",
    price: 28000,
    category: "Kopi",
    notes: [
      "Gula Aren",
      "Milky",
      "Sweet",
    ],
    ...image(
      "1461023058943-07fcbe16d735",
      "center 50%",
    ),
  },

  {
    id: "cold-brew-rengkuh",
    name: "Cold Brew Rengkuh",
    description:
      "Kopi yang diseduh perlahan dengan metode cold brew untuk rasa smooth dan rendah pahit.",
    price: 30000,
    category: "Kopi",
    tag: "Baru",
    notes: [
      "Smooth",
      "Low Acid",
      "Chocolate",
    ],
    ...image(
      "1517256064527-09c73fc73e38",
      "center 65%",
    ),
  },

  {
    id: "v60-single-origin",
    name: "V60 Single Origin",
    description:
      "Seduhan manual menggunakan biji pilihan dengan karakter rasa yang khas dari setiap origin.",
    price: 35000,
    category: "Kopi",
    tag: "Pilihan Barista",
    origin: "Single Origin",
    notes: [
      "Manual Brew",
      "Aromatic",
      "Clean",
    ],
    featured: true,
    ...image(
      "1495474472287-4d71bcdd2085",
      "center 50%",
    ),
  },

  {
    id: "espresso-tonic",
    name: "Espresso Tonic",
    description:
      "Double espresso dengan tonic water dingin dan sentuhan citrus yang menyegarkan.",
    price: 32000,
    category: "Kopi",
    tag: "Baru",
    notes: [
      "Citrus",
      "Sparkling",
      "Refreshing",
    ],
    ...image(
      "1517701550927-30cf4ba1dba5",
      "center 50%",
    ),
  },

  /* =======================================================
     ROTI & PASTRY
     ======================================================= */

  {
    id: "butter-croissant",
    name: "Butter Croissant",
    description:
      "Croissant klasik dengan lapisan flaky, aroma butter, dan tekstur renyah di luar.",
    price: 24000,
    category: "Roti & Pastry",
    tag: "Best Seller",
    notes: [
      "Buttery",
      "Flaky",
      "Classic",
    ],
    featured: true,
    ...image(
      "1555507036-ab1f4038808a",
      "center 50%",
    ),
  },

  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description:
      "Croissant butter dengan almond cream, irisan almond, dan taburan gula halus.",
    price: 30000,
    category: "Roti & Pastry",
    notes: [
      "Almond",
      "Buttery",
      "Sweet",
    ],
    ...image(
      "1509440159596-0249088772ff",
      "center 50%",
    ),
  },

  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    description:
      "Pastry berlapis dengan dark chocolate yang meleleh di bagian tengah.",
    price: 28000,
    category: "Roti & Pastry",
    tag: "Pilihan Barista",
    notes: [
      "Chocolate",
      "Flaky",
      "Buttery",
    ],
    ...image(
      "1509440159596-0249088772ff",
      "center 55%",
    ),
  },

  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    description:
      "Roti lembut dengan cinnamon butter filling dan glaze tipis di atasnya.",
    price: 28000,
    category: "Roti & Pastry",
    tag: "Best Seller",
    notes: [
      "Cinnamon",
      "Soft",
      "Buttery",
    ],
    ...image(
      "1509365465985-25d11c17e812",
      "center 50%",
    ),
  },

  {
    id: "banana-bread",
    name: "Banana Bread",
    description:
      "Banana bread lembut dengan aroma pisang matang, butter, dan sedikit kayu manis.",
    price: 26000,
    category: "Roti & Pastry",
    notes: [
      "Banana",
      "Cinnamon",
      "Soft",
    ],
    ...image(
      "1602351447937-745cb720612f",
      "center 50%",
    ),
  },

  {
    id: "brioche-toast",
    name: "Brioche Toast",
    description:
      "Roti brioche panggang dengan butter dan madu untuk rasa sederhana yang comforting.",
    price: 26000,
    category: "Roti & Pastry",
    notes: [
      "Brioche",
      "Honey",
      "Buttery",
    ],
    ...image(
      "1509440159596-0249088772ff",
      "center 48%",
    ),
  },

  {
    id: "chocolate-danish",
    name: "Chocolate Danish",
    description:
      "Danish pastry renyah dengan isian chocolate cream yang lembut.",
    price: 29000,
    category: "Roti & Pastry",
    notes: [
      "Chocolate",
      "Crispy",
      "Creamy",
    ],
    ...image(
      "1555507036-ab1f4038808a",
      "center 55%",
    ),
  },

  {
    id: "apple-danish",
    name: "Apple Danish",
    description:
      "Danish pastry dengan apel cinnamon yang manis dan sedikit rasa citrus.",
    price: 29000,
    category: "Roti & Pastry",
    tag: "Baru",
    notes: [
      "Apple",
      "Cinnamon",
      "Flaky",
    ],
    ...image(
      "1509440159596-0249088772ff",
      "center 50%",
    ),
  },

  /* =======================================================
     DESSERT
     ======================================================= */

  {
    id: "basque-cheesecake",
    name: "Basque Burnt Cheesecake",
    description:
      "Cheesecake panggang dengan permukaan caramelized dan bagian tengah yang creamy.",
    price: 38000,
    category: "Dessert",
    tag: "Best Seller",
    notes: [
      "Creamy",
      "Caramelized",
      "Vanilla",
    ],
    featured: true,
    ...image(
      "1533134242443-d4fd215305ad",
      "center 50%",
    ),
  },

  {
    id: "tiramisu-rengkuh",
    name: "Tiramisu Rengkuh",
    description:
      "Mascarpone cream, espresso-soaked ladyfinger, dan cocoa powder dengan rasa kopi yang lembut.",
    price: 36000,
    category: "Dessert",
    tag: "Signature",
    notes: [
      "Espresso",
      "Mascarpone",
      "Cocoa",
    ],
    ...image(
      "1571877227200-a0d98ea607e9",
      "center 50%",
    ),
  },

  {
    id: "chocolate-brownie",
    name: "Chocolate Brownie",
    description:
      "Brownie dark chocolate dengan tekstur fudgy dan rasa kakao yang intens.",
    price: 28000,
    category: "Dessert",
    notes: [
      "Dark Chocolate",
      "Fudgy",
      "Cocoa",
    ],
    ...image(
      "1564355808539-22fda35bed7e",
      "center 50%",
    ),
  },

  {
    id: "lemon-cheesecake",
    name: "Lemon Cheesecake",
    description:
      "Cheesecake creamy dengan lemon curd yang memberikan rasa segar dan sedikit tangy.",
    price: 36000,
    category: "Dessert",
    tag: "Baru",
    notes: [
      "Lemon",
      "Creamy",
      "Tangy",
    ],
    ...image(
      "1565958011703-44f9829ba187",
      "center 50%",
    ),
  },

  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    description:
      "Chocolate cake lembut dengan dark chocolate ganache yang kaya dan creamy.",
    price: 35000,
    category: "Dessert",
    notes: [
      "Chocolate",
      "Ganache",
      "Moist",
    ],
    ...image(
      "1578985545062-69928b1d9587",
      "center 50%",
    ),
  },

  {
    id: "panna-cotta",
    name: "Panna Cotta Vanilla",
    description:
      "Panna cotta lembut dengan vanilla bean dan saus buah musiman.",
    price: 32000,
    category: "Dessert",
    notes: [
      "Vanilla",
      "Creamy",
      "Fruity",
    ],
    ...image(
      "1488477181946-6428a0291777",
      "center 50%",
    ),
  },

  {
    id: "cookies-dark-chocolate",
    name: "Dark Chocolate Cookies",
    description:
      "Cookies renyah di bagian luar dan chewy di tengah dengan potongan dark chocolate.",
    price: 22000,
    category: "Dessert",
    tag: "Pilihan Barista",
    notes: [
      "Dark Chocolate",
      "Chewy",
      "Buttery",
    ],
    ...image(
      "1499636136210-6f4ee915583e",
      "center 50%",
    ),
  },

  {
    id: "carrot-cake",
    name: "Carrot Cake",
    description:
      "Carrot cake lembut dengan cinnamon, walnut, dan cream cheese frosting.",
    price: 34000,
    category: "Dessert",
    notes: [
      "Carrot",
      "Cinnamon",
      "Cream Cheese",
    ],
    ...image(
      "1571115177098-24ec42ed204d",
      "center 50%",
    ),
  },
];

/* =========================================================
   OPTIONAL HELPERS
   ========================================================= */

export const getMenuByCategory = (
  category: Category,
) => {
  return menuItems.filter(
    (item) => item.category === category,
  );
};

export const getFeaturedMenus = () => {
  return menuItems.filter(
    (item) => item.featured,
  );
};

export const getMenuById = (
  id: string,
) => {
  return menuItems.find(
    (item) => item.id === id,
  );
};

export const tickerBeans = [
  "Aceh Gayo Pantan Musara (Natural)",
  "Toraja Sapan (Fully Washed)",
  "Flores Bajawa (Anaerobic)",
  "Bali Kintamani Ulian (Honey Process)",
  "Kerinci Radja Mountain (Washed)",
];

export const testimonials = [
  {
    name: "Rani Adhisty",
    role: "Product Designer & Regular Guest",
    text: "Tempat paling kondusif untuk deep work di Jaksel. Playlist-nya tenang, pencahayaannya hangat, dan Kopi Susu Rengkuh konsisten enaknya.",
    favorite: "Kopi Susu Rengkuh",
  },
  {
    name: "Budi Santoso",
    role: "Coffee Enthusiast",
    text: "V60 single origin-nya diseduh dengan presisi rasio dan suhu yang pas. Baristanya komunikatif dan tahu cerita di balik biji yang disajikan.",
    favorite: "V60 Single Origin Gayo",
  },
  {
    name: "Dewi Paramita",
    role: "Creative Director",
    text: "Reservasi mejanya sangat praktis. Begitu kami sampai untuk meeting sore, meja sudah tertata rapi dan pastry-nya selalu fresh dari oven.",
    favorite: "Basque Burnt Cheesecake",
  },
];

export const features = [
  {
    title: "Sangrai Mandiri (Micro-batch)",
    text: "Setiap biji disangrai dalam kapasitas 2kg untuk menjaga kesegaran dan profil rasa optimal.",
    icon: "leaf",
  },
  {
    title: "Suasana Hangat & Terang Alami",
    text: "Ruang lega dengan pencahayaan senja alami, musik lo-fi akustik, dan tanaman hidup.",
    icon: "coffee",
  },
  {
    title: "Ruang Kerja Cepat & Tenang",
    text: "Koneksi internet fiber 100Mbps, stopkontak di setiap sudut meja, dan kursi ergonomis.",
    icon: "wifi",
  },
  {
    title: "Buka Sepanjang Hari",
    text: "Siap melayani sarapan pagi hingga teman ngobrol santai hingga pukul 22.00 malam.",
    icon: "clock",
  },
] as const;

export const openingHours = [
  { day: "Senin – Jumat", hours: "08.00 – 22.00 WIB" },
  { day: "Sabtu", hours: "08.00 – 23.00 WIB" },
  { day: "Minggu", hours: "09.00 – 22.00 WIB" },
];

export const contactInfo = {
  address: "Jl. Rengkuh Raya No. 12, Senopati, Jakarta Selatan 12190",
  phone: "+62 21 5555 0123",
  email: "halo@kopirengkuh.id",
  instagram: "@kopirengkuh.id",
};

export const team = [
  { name: "Ayu Lestari", role: "Head Barista & Sensory Specialist" },
  { name: "Raka Pratama", role: "Master Roaster & Q-Grader" },
  { name: "Sinta Maharani", role: "Head Pastry & Artisan Baker" },
];

export const nav = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Tentang" },
  { href: "/reservation", label: "Reservasi" },
  { href: "/contact", label: "Kontak" },
];