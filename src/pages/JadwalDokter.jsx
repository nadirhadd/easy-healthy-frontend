import { Footer, Navbar } from "../components";
import styles from "../style";
import { doctor } from "../constants";

const JadwalDokter = () => {
  return (
    <section className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX}`}>
        <Navbar />
        <div className={`${styles.paddingY}`}>
          <div
            className={`${styles.flexCenter} ${styles.paddingY} font-bold font-mont text-4xl`}
          >
            <h1>Jadwal Dokter</h1>
          </div>
          <div
            className={`${styles.paddingX} ${styles.paddingY} ${styles.gridDoc}`}
          >
            {doctor.map((jadwal) => (
              <div
                key={jadwal.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
              >
                <img
                  src={jadwal.photo}
                  alt={jadwal.name}
                  className="h-full w-full"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold py-3">{jadwal.name}</h2>
                  <p className="text-gray-600">{jadwal.unit}</p>
                  <p className="text-gray-600">{jadwal.spesialis}</p>
                  <p className="text-gray-600">{jadwal.jadwal}</p>
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
