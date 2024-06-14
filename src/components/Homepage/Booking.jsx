import React, { useState } from "react";
import styles from "../../style";
import { bookForm } from "../../constants";
import bookBg from "../../assets/booking-bg.jpg";
import axios from "axios";

const Booking = () => {
  const [formData, setFormData] = useState({
    NIK: "",
    Nama_Pasien: "",
    Jenis_Pasien: "Umum",
    Nomor_HP: "",
    Dokter: "",
    Poli: "",
    Tanggal_Periksa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/pasien", formData)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.error("There was an error making the booking!", error);
      });
  };

  return (
    <section id="booking" className="h-full">
      <div className={`${styles.flexCenter} ${styles.paddingY}`}>
        <h1 className="font-bold text-4xl font-mont">Booking Antrian</h1>
      </div>

      <div
        style={{
          backgroundImage: `url(${bookBg})`,
          backgroundSize: "cover",
        }}
        className={`${styles.paddingY} rounded-xl`}
      >
        <div
          className={`${styles.paddingY} bg-accent rounded-xl flex flex-col items-center justify-center md:w-3/4 mx-auto`}
        >
          <form onSubmit={handleSubmit} className={`${styles.gridBook} p-4 font-mont`}>
            {bookForm.map((booking) => (
              booking.name !== "Jenis_Pasien" ? (
                <div
                  key={booking.id}
                  className={`text-sm font-semibold flex flex-col ${styles.paddingX}`}
                >
                  {booking.nameForm}
                  <input
                    type={booking.type}
                    name={booking.name}
                    placeholder={booking.placeholder}
                    value={formData[booking.Tanggal_Periksa]}
                    onChange={handleChange}
                    className="mt-2 rounded-xl border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none focus:bg-gray-500 focus:text-gray-100"
                  />
                </div>
              ) : (
                <div
                  key={booking.id}
                  className={`text-sm font-semibold flex flex-col ${styles.paddingX}`}
                >
                  {booking.nameForm}
                  <select
                    name={booking.name}
                    value={formData[booking.name]}
                    onChange={handleChange}
                    className="mt-2 rounded-xl border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none focus:bg-gray-500 focus:text-gray-100"
                  >
                    <option value="Umum">Umum</option>
                    <option value="BPJS">BPJS</option>
                  </select>
                </div>
              )
            ))}
            <div className={`${styles.flexCenter}`}>
              <div className={`flex ${styles.flexCenter} pt-[3rem]`}>
                <button
                  type="submit"
                  className={`bg-primary rounded-[8px] ${styles.flexCenter} cursor-pointer py-[10px] px-[25px] text-black text-lg font-semibold font-mont`}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
