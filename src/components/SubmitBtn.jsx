import styles from "../style";

const SubmitBtn = () => {
  return (
    <div className={`flex ${styles.flexCenter} pt-[3rem]`}>
      <h1
        className={`bg-primary rounded-[8px] ${styles.flexCenter} cursor-pointer py-[10px] px-[25px] text-black text-lg font-semibold font-mont`}
      >
        Submit
      </h1>
    </div>
  );
};

export default SubmitBtn;
