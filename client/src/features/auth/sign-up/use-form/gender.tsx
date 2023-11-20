import styles from "./Gender.module.scss";

const ChooseGender = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="radio"
        id="male"
        name="radio"
        value="male"
        defaultChecked
        required
      />
      <label className={styles.label} htmlFor="male">
        Мужской
      </label>
      <input className={styles.input} type="radio" id="female" name="radio" />
      <label className={styles.label} htmlFor="female">
        Женский
      </label>
    </div>
  );
};

export default ChooseGender;
