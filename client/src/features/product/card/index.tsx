import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import renderRating from "@/features/product/rating";
import ProductDrawer from "../drawer";
import { Favorite } from "../favorite";
import { RootState } from "@/shared/lib/redux/store";
import styles from "./ProductCard.module.scss";
import DiscountPrice from "@/shared/ui/discount";

type ProductCardProps = {
  id: number;
  name: string;
  rating: number;
  price: string;
  discountPrice?: string;
  imageSrc: string[];
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  rating,
  price,
  discountPrice,
  imageSrc,
  id,
}) => {
  const { items } = useSelector((state: RootState) => state.purchaseDrawer);
  const isAdded = items && items.find((item) => item.id === id);

  return (
    <div
      className={clsx(styles.product__card, {
        [styles.product__card__overlay]: isAdded,
      })}
    >
      <div className={styles.product__card__image}>
        {isAdded ? (
          <div className={styles.product__card__image__overlay}>
            <div className={styles.product__card__image__overlay__icon}>
              <Image
                className={styles.product__card__image__overlay__check}
                src="/icons/check.svg"
                alt="check"
                width={24}
                height={24}
              />
            </div>
          </div>
        ) : null}

        <Image
          src={imageSrc[0]}
          alt="product"
          width={272}
          height={160}
          className={styles.product__card__image__product}
        />

        <Favorite type="icon" id={id} />

        <DiscountPrice price={price} discountPrice={discountPrice} position="left" />

      </div>
      <div className={styles.product__card__content}>
        <div className={styles.product__card__content__price}>
          {discountPrice ? (
            <span className={styles.product__card__content__price__discount}>
              {discountPrice} ₽
              <br />
              <p>С картой</p>
            </span>
          ) : null}
          <span
            className={`${discountPrice
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
        <Link href={`/product/${id}`}><h3 className={styles.product__card__content__name}>{name}</h3></Link> 
        <div className={styles.product__card__content__rating}>
          {renderRating({ rating })}
        </div>

        <ProductDrawer id={id} /> 
      </div>
    </div>
  );
};

export default ProductCard;
