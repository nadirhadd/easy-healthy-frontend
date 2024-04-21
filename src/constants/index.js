import article1 from "../assets/article-1.jpg";
import article2 from "../assets/article-3.jpg";
import article3 from "../assets/article-2.jpg";
import { doct1, doct2, doct3, doct4 } from "../assets/assets";

export const navLinks = [
  {
    id: "booking",
    title: "Booking Antrian",
    path: "/#booking",
  },
  {
    id: "ask",
    title: "Tanya Dokter",
  },
  {
    id: "room",
    title: "Ketersediaan Ruang",
  },
  {
    id: "schedule",
    title: "Jadwal Dokter",
    path: "/schedule",
  },
];

export const doctor = [
  {
    id: "doctor-1",
    name: "dr. Antonella Chauvez",
    unit: "Poli Umum",
    spesialis: "Umum",
    jadwal: "Senin - Jumat : 08.00 - 14.00",
    photo: doct1,
  },
  {
    id: "doctor-2",
    name: "dr. Ousmane Hakimi",
    unit: "Bedah",
    spesialis: "Bedah Plastik",
    jadwal: "Kamis - Sabtu : 14.00 - 20.00",
    photo: doct2,
  },
  {
    id: "doctor-3",
    name: "dr. Syarif Hamzah",
    unit: "Psikologi",
    spesialis: "Psikolog",
    jadwal: "Selasa - Kamis : 15.00 - 21.00",
    photo: doct3,
  },
  {
    id: "doctor-4",
    name: "dr. Annie Leonhart",
    unit: "Pediatric",
    spesialis: "Anak",
    jadwal: "Rabu - Sabtu : 09.00 - 15.00",
    photo: doct4,
  },
];

export const ruangan = [
  {
    id: "ruang-1",
    gedung: "Gedung",
    lantai: "Lantai",
    kasur: "Jumlah Kasur Tersedia",
  },
  {
    id: "ruang-2",
    gedung: "Gedung",
    lantai: "Lantai",
    kasur: "Jumlah Kasur Tersedia",
  },
  {
    id: "ruang-3",
    gedung: "Gedung",
    lantai: "Lantai",
    kasur: "Jumlah Kasur Tersedia",
  },
  {
    id: "ruang-4",
    gedung: "Gedung",
    lantai: "Lantai",
    kasur: "Jumlah Kasur Tersedia",
  },
];

export const news = [
  {
    id: "news1",
    title: "Studi: Minum Kopi dan Teh Baik untuk Kesehatan Liver",
    bg: article1,
    link: "https://health.kompas.com/read/24D14080140468/studi-minum-kopi-dan-teh-baik-untuk-kesehatan-liver",
  },
  {
    id: "news2",
    title: "16 Cara Sederhana Mengatasi Stres",
    bg: article2,
    link: "https://health.kompas.com/read/24D14204500868/16-cara-sederhana-mengatasi-stres?page=all",
  },
  {
    id: "news3",
    title: "Tips Mengatasi Kelelahan Perjalanan Selama Mudik Lebaran",
    bg: article3,
    link: "https://health.kompas.com/read/24D14140000768/tips-mengatasi-kelelahan-perjalanan-selama-mudik-lebaran?page=all",
  },
];

export const bookForm = [
  {
    id: "form1",
    nameForm: "NIK",
    placeholder: "NIK",
  },
  {
    id: "form2",
    nameForm: "Nama Pasien",
    placeholder: "Nama Pasien",
  },
  {
    id: "form3",
    nameForm: "Jenis Pasien",
    placeholder: "Jenis Pasien",
  },
  {
    id: "form4",
    nameForm: "Nomor HP",
    placeholder: "Nomor HP",
  },
  {
    id: "form5",
    nameForm: "Dokter",
    placeholder: "Dokter",
  },
  {
    id: "form6",
    nameForm: "Poli",
    placeholder: "Poli",
  },
  {
    id: "form7",
    nameForm: "Tanggal Periksa",
    placeholder: "Tanggal Periksa",
  },
];
