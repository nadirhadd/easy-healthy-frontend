import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import styles from "../style";

const JadwalDokter = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/profiles')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => {
      console.error('Error fetching!', error);
    })
  }, []);

  return (
    <section className={`bg-primary w-full overflow-hidden`}>
      <div className={`${styles.paddingX}`}>
        <Navbar />
        <div className={`${styles.paddingY}`}>
          <div
            className={`${styles.flexCenter} ${styles.paddingY} font-bold font-mont text-4xl`}
          >
            <h1>Jadwal Dokter</h1>
          </div>
          <div
            className={`${styles.paddingX} ${styles.paddingY} ${styles.gridDoc} bg-accent rounded-xl`}
          >
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold py-3">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.unit}</p>
                  <p className="text-gray-600">{doctor.spesialis}</p>
                  <p className="text-gray-600">{doctor.jadwal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default JadwalDokter;
