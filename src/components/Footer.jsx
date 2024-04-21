import styles from "../style";
import logo from "../assets/logo.svg";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <section className="pt-20">
      <div
        className={`flex bg-[#D9D9D9] justify-between font-mont ${styles.paddingY} px-20`}
      >
        <div>
          <img src={logo} className={`h-[100px] ${styles.paddingX}`} />
        </div>
        <div>
          <ul>
            {navLinks.map((nav) => (
              <li key={nav.id} className="py-2">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={`max-w-[300px] text-20px`}>
            Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom
            University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa
            Barat 40257
          </p>
        </div>
      </div>
      <div className={`bg-accent py-10`}>
        <h3 className="px-10">©EASY HEALTHY, 2024. ALL RIGHTS RESERVED</h3>
      </div>
    </section>
  );
};

export default Footer;