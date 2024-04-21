// Booking.jsx
import styles from "../style";
import { bookForm } from "../constants";
import SubmitBtn from "./SubmitBtn";
import bookBg from "../assets/booking-bg.jpg";

const Booking = () => (
  <section className="h-full">
    <div className={`${styles.flexCenter} ${styles.paddingY}`}>
      <h1 className="font-bold text-4xl font-mont">Booking Antrian</h1>
    </div>

    <div
      style={{
        backgroundImage: `url(${bookBg})`,
        backgroundSize: "cover",
      }}
      className={`${styles.paddingY}`}
    >
      <div
        className={`${styles.paddingY} bg-accent rounded-xl flex flex-col items-center justify-center md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto`}
      >
        <div className={`${styles.gridBook} p-4 font-mont`}>
          {bookForm.map((booking) => (
            <div
              key={booking.id}
              className={`text-sm font-semibold flex flex-col ${styles.paddingX}`}
            >
              {booking.nameForm}
              <input
                type="text"
                placeholder={booking.placeholder}
                className="mt-2 rounded-xl border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none focus:bg-gray-500 focus:text-gray-100"
              />
            </div>
          ))}
        </div>
        <SubmitBtn />
      </div>
    </div>
  </section>
);

export default Booking;
