import styles from "../style";
import askDoctor from "../assets/ask-doctor.jpg";

const Ask = () => {
  return (
    <section className="w-full">
      <div className={`flex ${styles.flexCenter} ${styles.paddingY}`}>
        <h1 className="font-mont font-bold text-4xl">Tanya Dokter</h1>
      </div>

      <div
        className={`flex ${styles.paddingX} ${styles.paddingY} ${styles.flexStart} flex-col text-primary font-mont`}
        style={{
          backgroundImage: `url(${askDoctor})`,
          backgroundSize: "cover",
          minHeight: "400px",
          position: "relative",
        }}
      >
        <div className="py-12">
          <h2 className="text-5xl font-bold">Konsultasi Gratis</h2>
          <span className="text-4xl font-light py-5">Chat dengan Dokter</span>
        </div>
        <button className="bg-accent text-xl rounded-[5px] p-3">
          Tanya Dokter
        </button>
      </div>
    </section>
  );
};

export default Ask;
