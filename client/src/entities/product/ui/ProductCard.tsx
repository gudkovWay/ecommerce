import Image from "next/image";
import styles from "./Product.module.scss";

type ProductCardProps = {
  id: number;
  name: string;
  rating: number;
  price: string;
  discountPrice: string;
  imageSrc: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  rating,
  price,
  discountPrice,
  imageSrc,
  id,
}) => {
  const renderRating = () => {
    const stars = [];
    for (var i = 0; i < rating; i++) {
      stars.push(
        <Image
          src="/ratings/star__active.svg"
          alt="star"
          width={16}
          height={16}
        />,
      );
    }

    var starsLen = stars.length;
    for (var j = 0; j < 5 - starsLen; j++) {
      stars.push(
        <Image
          src="/ratings/star__inactive.svg"
          alt="star"
          width={16}
          height={16}
        />,
      );
    }
    console.log(stars.length);

    return stars;
  };

  return (
    <div className={styles.product__card}>
      <Image
        src={imageSrc}
        alt="product"
        width={272}
        height={160}
        className={styles.product__card__image}
      />
      <div className={styles.product__card__content}>
        <div className={styles.product__card__content__price}>
          <span className={styles.product__card__content__price__discount}>
            {discountPrice} ₽ <br />
            <p>С картой </p>
          </span>
          <span className={styles.product__card__content__price__real}>
            {price} ₽ <br />
            <p>Обычная</p>
          </span>
        </div>
        <h3 className={styles.product__card__content__name}>{name}</h3>
        <div className={styles.product__card__content__rating}>
          {renderRating()}
        </div>
        <button
          onClick={() => console.log(`you press on ${id} product`)}
          className={styles.product__card__content__button}
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
