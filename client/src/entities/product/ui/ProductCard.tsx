import Image from "next/image";
import styles from "./Product.module.scss";
import renderRating from "@/features/product/rating";

type ProductCardProps = {
  id: number;
  name: string;
  rating: number;
  price: string;
  discountPrice?: string;
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
  return (
    <div className={styles.product__card}>
      <div className={styles.product__card__image}>
        <Image
          src={imageSrc}
          alt="product"
          width={272}
          height={160}
          className={styles.product__card__image__product}
        />
        <button className={styles.product__card__image__favorite}>
          <Image
            src="/icons/favorite.svg"
            alt="favorite"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className={styles.product__card__content}>
        <div className={styles.product__card__content__price}>
          {discountPrice ? (
            <span className={styles.product__card__content__price__discount}>
              {discountPrice} ₽
            </span>
          ) : null}
          <span
            className={`${
              discountPrice
                ? styles.product__card__content__price__real
                : styles.product__card__content__price__real +
                  " " +
                  styles.product__card__content__price__real__bold
            }`}
          >
            {price} ₽ <br />
            {discountPrice ? <p>Обычная</p> : null}
          </span>
        </div>
        <h3 className={styles.product__card__content__name}>{name}</h3>
        <div className={styles.product__card__content__rating}>
          {renderRating({ rating })}
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
