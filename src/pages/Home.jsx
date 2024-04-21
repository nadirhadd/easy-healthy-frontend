import styles from "../style";
import { Navbar, Ask, Booking, Footer, News, Hero } from "../components";

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
