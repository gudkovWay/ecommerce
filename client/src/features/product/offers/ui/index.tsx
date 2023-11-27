import Image from "next/image";
import styles from "./Offers.module.scss";

const SpecialOffers = () => {
  return (
    <section className={styles.offers}>
      <h2 className="sectionTitle">Специальные предложения</h2>

      <div className={styles.offers__banners}>
        <div className={styles.offers__banner}>
          <div className={styles.offers__banner__text}>
            <h3>Оформите карту «Северяночка»</h3>
            <p>
              {" "}
              И получайте бонусы при покупке <br /> в магазинах и на сайте{" "}
            </p>
          </div>
          <Image
            className={styles.offers__banner__image}
            src="/offers/loyalcard.png"
            width={206}
            height={138}
            alt="Карта лояльности магазина 'Северяночка'"
          />
        </div>

        <div
          className={styles.offers__banner + " " + styles.offers__banner__last}
        >
          <div className={styles.offers__banner__text}>
            <h3> Покупайте акционные товары </h3>
            <p>
              И получайте вдвое больше <br /> бонусов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
