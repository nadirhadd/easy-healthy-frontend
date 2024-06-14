import styles from "../style";
import { Navbar, Ask, Booking, Footer, News, Hero } from "../components";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Easy Healthy"
  });

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`w-full`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex flex-col`}
      >
        <div className={`${styles.boxWidth}`}>
          <Booking />
          <Ask />
          <News />
        </div>
      </div>
      <div className="w-full">
          <Footer/>
        </div>
    </div>
  );
};

export default Home;
