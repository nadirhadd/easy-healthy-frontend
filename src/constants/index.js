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
    path: "/tanya-dokter"
  },
  {
    id: "schedule",
    title: "Jadwal Dokter",
    path: "/schedule",
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
    type: 'text',
    name: 'NIK',
  },
  {
    id: "form2",
    nameForm: "Nama Pasien",
    placeholder: "Nama Pasien",
    type: 'text',
    name: 'Nama_Pasien',
  },
  {
    id: "form3",
    nameForm: "Jenis Pasien",
    placeholder: "Jenis Pasien",
    type: 'select',
    name: 'Jenis_Pasien',
  },
  {
    id: "form4",
    nameForm: "Nomor HP",
    placeholder: "Nomor HP",
    type: 'text',
    name: 'Nomor_HP',
  },
  {
    id: "form5",
    nameForm: "Dokter",
    placeholder: "Dokter",
    type: 'text',
    name: 'Dokter',
  },
  {
    id: "form6",
    nameForm: "Poli",
    placeholder: "Poli",
    type: 'text',
    name: 'Poli',
  },
  {
    id: "form7",
    nameForm: "Tanggal Periksa",
    placeholder: "Tanggal Periksa",
    type: 'date',
    name: 'Tanggal_Periksa',
  },
];
