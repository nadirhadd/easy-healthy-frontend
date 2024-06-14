import { Navbar, Footer, TanyaDok } from "../components";
import styles from "../style";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TanyaDokter = () => {
  return (
    <div className="bg-primary w-full h-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      <h1 className={`${styles.flexCenter} ${styles.paddingY} text-4xl font-bold`}>
        Forum Tanya Dokter
      </h1>

      <div className={`${styles.flexCenter} ${styles.paddingY}`}>
        <TanyaDok/>
      </div>

      <div>
          <Footer/>
        </div>
    </div>
  );
};

export default TanyaDokter;
