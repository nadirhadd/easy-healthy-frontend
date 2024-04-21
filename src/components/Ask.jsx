import styles from "../style";
import askDoctor from "../assets/ask-doctor.jpg";
import { Link, NavLink } from "react-router-dom";

const Ask = () => {
  return (
    <section id="ask" className="w-full">
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
          <h2 className="text-5xl font-bold pb-2">Konsultasi Gratis</h2>
          <span className="text-4xl font-light py-5">Melalui Forum</span>
        </div>
        <div>
          <NavLink to={(Link.path = "/tanya-dokter")}>
            <button className="bg-accent text-xl rounded-[5px] p-3">
              Tanya Dokter
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Ask;
