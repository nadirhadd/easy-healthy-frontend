import styles from "../style";
import { news } from "../constants";

const News = () => {
  return (
    <section className={`flex md:flex-col flex-col`}>
      <div
        className={`${styles.paddingY} flex flex-row items-center px-[20px]`}
      >
        <h1 className="flex md:flex-col justify-start items-center text-4xl font-bold font-mont">
          Berita Kesehatan
        </h1>
      </div>

      <div className={`${styles.flexStart} flex-col flex-wrap`}>
        {news.map((berita) => (
          <div
            key={berita.id}
            className={`flex-1 flex justify-start items-center flex-row m-3 w-full rounded-[10px]`}
            style={{
              backgroundImage: `url(${berita.bg})`,
              backgroundSize: "cover",
              minHeight: "150px",
              position: "relative",
            }}
          >
            <div
              className="inset-x-0 inset-y-0 absolute bg-black-500/[.50] z-1"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
                zIndex: 1,
                borderRadius: "10px",
              }}
            />
            <h4 className="px-[20px] font-mont text-primary font-bold text-2xl relative z-10 flex flex-col justify-start">
              {berita.title}
              <a href="#" className="py-[10px] text-sm hover:text-secondary">
                Baca Selengkapnya
              </a>
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
