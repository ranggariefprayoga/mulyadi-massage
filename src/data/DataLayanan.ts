export interface PaketDurasi {
  durasi: string;
  harga: string;
}

export interface DetailLayanan {
  nama: string;
  daftarDurasi: PaketDurasi[];
}

export interface LayananInterface {
  id: number;
  gambarUtama: string;
  namaLayanan: string;
  paket: DetailLayanan[];
}

export const DataLayanan: LayananInterface[] = [
  {
    id: 1,
    gambarUtama: "layanan/umum.jpg",
    namaLayanan: "Treatment Umum",
    paket: [
      {
        nama: "\u2022 Pijat Tradisional",
        daftarDurasi: [
          {
            durasi: "60 Menit",
            harga: "100k",
          },
          {
            durasi: "90 Menit",
            harga: "150k",
          },
          {
            durasi: "120 Menit",
            harga: "200k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat dan Lulur",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "185k",
          },
          {
            durasi: "120 Menit",
            harga: "225k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Masuk Angin",
        daftarDurasi: [
          {
            durasi: "60 Menit",
            harga: "100k",
          },
          {
            durasi: "90 Menit",
            harga: "150k",
          },
          {
            durasi: "120 Menit",
            harga: "200k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat dan Boreh",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "225k",
          },
          {
            durasi: "120 Menit",
            harga: "285k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Hot Slimming Lympatik Manual",
        daftarDurasi: [
          {
            durasi: "120 Menit",
            harga: "400k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Lympatik Modero",
        daftarDurasi: [
          {
            durasi: "120 Menit",
            harga: "500k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Aroma Terapi",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "250k",
          },
          {
            durasi: "120 Menit",
            harga: "300k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Keseleo",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "225k",
          },
          {
            durasi: "120 Menit",
            harga: "265k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Pasca Melahirkan",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "250k",
          },
          {
            durasi: "120 Menit",
            harga: "285k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Ibu Hamil",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "225k",
          },
          {
            durasi: "120 Menit",
            harga: "285k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Balines",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "285k",
          },
          {
            durasi: "120 Menit",
            harga: "350k",
          },
        ],
      },
      {
        nama: "\u2022 Dry Massage",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "185k",
          },
          {
            durasi: "120 Menit",
            harga: "285k",
          },
        ],
      },
      {
        nama: "\u2022 Thai Massage",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "300k",
          },
          {
            durasi: "120 Menit",
            harga: "350k",
          },
        ],
      },
      {
        nama: "\u2022 Spot Massage",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "300k",
          },
          {
            durasi: "120 Menit",
            harga: "350k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Relaksasi Jamoe Spa",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "350k",
          },
          {
            durasi: "120 Menit",
            harga: "400k",
          },
        ],
      },
      {
        nama: "\u2022 Hot Stone Massage",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "300k",
          },
          {
            durasi: "120 Menit",
            harga: "350k",
          },
        ],
      },
      {
        nama: "\u2022 Deep Massage",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "185k",
          },
          {
            durasi: "120 Menit",
            harga: "225k",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    gambarUtama: "layanan/totok.jpg",
    namaLayanan: "Paket Treatment",
    paket: [
      {
        nama: "\u2022 Pijat + Totok Wajah",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "185k",
          },
          {
            durasi: "120 Menit",
            harga: "215k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat + Refleksi",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "195k",
          },
          {
            durasi: "120 Menit",
            harga: "225k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat + Lulur",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "235k",
          },
          {
            durasi: "120 Menit",
            harga: "250k",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    gambarUtama: "layanan/keluarga.jpg",
    namaLayanan: "Paket Keluarga",
    paket: [
      {
        nama: "\u2022 Pijat Bayi",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "90k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Anak",
        daftarDurasi: [
          {
            durasi: "60 Menit",
            harga: "135k",
          },
        ],
      },
      {
        nama: "\u2022 Paket Pijat Ibu dan Anak",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "265k",
          },
          {
            durasi: "120 Menit",
            harga: "300k",
          },
        ],
      },
      {
        nama: "\u2022 Paket Keluarga Ceria (Bapak Pijat 90 Menit, Ibu Pijat 90 Menit, Anak/Bayi)",
        daftarDurasi: [
          {
            durasi: "",
            harga: "435k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Lansia",
        daftarDurasi: [
          {
            durasi: "60 Menit",
            harga: "150k",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    gambarUtama: "layanan/relaksasi.jpg",
    namaLayanan: "Pijat Relaksasi dan Laktasi",
    paket: [
      {
        nama: "\u2022 Pijat Relaksasi dan Laktasi",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "250k",
          },
          {
            durasi: "120 Menit",
            harga: "300k",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    gambarUtama: "layanan/pijat-hamil.jpg",
    namaLayanan: "Paket Ibu Hamil",
    paket: [
      {
        nama: "\u2022 Pijat Bumil dan Totok Wajah",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "200k",
          },
          {
            durasi: "120 Menit",
            harga: "250k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Bumil dan Lulur",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "265k",
          },
          {
            durasi: "120 Menit",
            harga: "300k",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    gambarUtama: "layanan/pengantin.jpeg",
    namaLayanan: "Paket Pengantin",
    paket: [
      {
        nama: "\u2022 Pijat + Totok Aura + Lulur Pengantin",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "300k",
          },
          {
            durasi: "120 Menit",
            harga: "365k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Pengantin + Totok Vagina + Totok Aura",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "350k",
          },
          {
            durasi: "120 Menit",
            harga: "485k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Pengantin, Totok Vagina, Lulur Pengantin, dan Ratus",
        daftarDurasi: [
          {
            durasi: "150 Menit",
            harga: "550k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Vitalitas/Kejantanan",
        daftarDurasi: [
          {
            durasi: "120 Menit",
            harga: "400k",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    gambarUtama: "layanan/bekam.jpeg",
    namaLayanan: "Paket Bekam",
    paket: [
      {
        nama: "\u2022 Pijat dan Bekam",
        daftarDurasi: [
          {
            durasi: "90 Menit",
            harga: "250k",
          },
          {
            durasi: "120 Menit",
            harga: "300k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat, Totok Wajah, dan Bekam",
        daftarDurasi: [
          {
            durasi: "120 Menit",
            harga: "350k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat, Bekam Api, dan Totok Wajah",
        daftarDurasi: [
          {
            durasi: "120 Menit",
            harga: "350k",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    gambarUtama: "layanan/additional.jpg",
    namaLayanan: "Additional",
    paket: [
      {
        nama: "\u2022 Pijat",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "50k",
          },
        ],
      },
      {
        nama: "\u2022 Kerokan",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "35k",
          },
        ],
      },
      {
        nama: "\u2022 Totok Wajah",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "65k",
          },
        ],
      },
      {
        nama: "\u2022 Pijat Keseleo",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "90k",
          },
        ],
      },
      {
        nama: "\u2022 Refleksi",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "50k",
          },
        ],
      },
      {
        nama: "\u2022 Lulur",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "75k",
          },
        ],
      },
      {
        nama: "\u2022 Lulur Rempah",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "85k",
          },
        ],
      },
      {
        nama: "\u2022 Creambath",
        daftarDurasi: [
          {
            durasi: "60 Menit",
            harga: "125k",
          },
        ],
      },
      {
        nama: "\u2022 Kopring",
        daftarDurasi: [
          {
            durasi: "30 Menit",
            harga: "90k",
          },
        ],
      },
      {
        nama: "\u2022 Totok Punggung",
        daftarDurasi: [
          {
            durasi: "60 Menit",
            harga: "85k",
          },
        ],
      },
      {
        nama: "\u2022 Bambu Massage",
        daftarDurasi: [
          {
            durasi: "60 Menit",
            harga: "150k",
          },
        ],
      },
    ],
  },
];
