import UIHeader from "@/shared/ui/header";
import styles from "./Map.module.scss";

const YandexMap = () => {
  return (
    <section className={styles.map}>
      <div className="container">
        <div className={styles.map__wrapper}>
         <UIHeader type="category" header="Наши магазины" /> 
        </div>
      </div>
    </section>
  );
};

export default YandexMap;
