import styles from "./Map.module.scss";

const YandexMap = () => {
  return (
    <section className={styles.map}>
      <div className="container">
        <div className={styles.map__wrapper}>
          <h2 className="sectionTitle">Наши магазины</h2>
        </div>
      </div>
    </section>
  );
};

export default YandexMap;
