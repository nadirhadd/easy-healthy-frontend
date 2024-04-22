import styles from "../style";
import {
  NavbarUser,
  Ask,
  Booking,
  News,
  Hero,
  FooterUser,
} from "../components";

const HomeLogin = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarUser />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} w-full`}
      >
        <div className={`${styles.boxWidth}`}>
          <News />
          <Booking />
          <Ask />
          <FooterUser />
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
