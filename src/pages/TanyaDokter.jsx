import { Navbar, Footer } from "../components";
import styles from "../style";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TanyaDokter = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="py-10">
        <h1 className={`text-3xl font-mont ${styles.flexCenter}`}>
          Forum Tanya Dokter
        </h1>
      </div>

      <div>
        <FontAwesomeIcon icon={faUser}/>
      </div>

      <div>
          <Footer/>
        </div>
    </div>
  );
};

export default TanyaDokter;
