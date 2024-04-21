import styles from "../style";
import hero from "../assets/hero.jpg";

const Hero = () => (
  <section id="hero" className={`flex md:flex-row flex-col pt-6`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-10 min-h-[700px]`}
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row justify-between items-center w-full px-[2rem]">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-primary ss:leading-[100px] leading-[75px]">
          Layanan <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Rumah Sakit</span>{" "}
        </h1>
      </div>

      <p
        className={`${styles.paragraph} max-w-[490px] mt-5 text-white px-[2rem]`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui
        laudantium a autem ad eum est facilis porro inventore eligendi?
      </p>
    </div>
  </section>
);

export default Hero;
