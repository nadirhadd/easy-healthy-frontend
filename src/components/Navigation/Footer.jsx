import styles from "../../style";
import logo from "../../assets/logo.svg";
import { navLinks } from "../../constants";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className={`pt-20 flex flex-col`}>
      <div
        className={`flex bg-[#D9D9D9] justify-between font-mont ${styles.paddingY} px-20`}
      >
        <div>
          <NavLink to={(Link.path = "/")}>
            <img src={logo} className={`h-[100px] ${styles.paddingX}`} />
          </NavLink>
        </div>
        <div>
          <ul>
            {navLinks.map((nav) => (
              <li key={nav.id} className="py-2">
                {nav.path ? (
                  <a href={`${nav.path}`}>{nav.title}</a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[300px] mt-6 lg:mt-0">
          <p className={`text-start text-20px pb-2`}>
            Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom
            University, Sukapura
          </p>
          <p className="py-2">Kec. Dayeuhkolot</p>
          <p className="py-2">Kabupaten Bandung</p>
          <p className="py-2">Jawa Barat</p>
          <p className="py-2">40257</p>
        </div>
      </div>
      <div className={`bg-accent py-10`}>
        <h3 className="px-10">©EASY HEALTHY, 2024. ALL RIGHTS RESERVED</h3>
      </div>
    </section>
  );
};

export default Footer;
