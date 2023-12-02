import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./Product.module.scss";
import renderRating from "@/features/product/rating";
import { decrement, increment } from "@/features/drawer/drawerSlice";
import { RootState } from "@/shared/lib/redux/store";

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
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.drawer.counter);

  const [isFavorite, setIsFavorite] = useState<Boolean>(false);
  const [isAddedToCart, setIsAddedToCart] = useState<Boolean>(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const handleAddToCard = () => {
    setIsAddedToCart(true);
  };

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
        <button
          className={clsx(styles.product__card__image__favorite, {
            [styles.product__card__image__favorite__active]:
              isFavorite === true,
          })}
          onClick={handleFavorite}
        >
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
              <br />
              <p>С картой</p>
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
        {isAddedToCart === false ? (
          <button
            onClick={() => handleAddToCard()}
            className={styles.product__card__content__button}
          >
            В корзину
          </button>
        ) : (
          <div className={styles.product__card__content__button__added}>
            <button
              onClick={() => dispatch(decrement({ id }))}
              className={styles.product__card__content__button__added__button}
            >
              <Image
                src="/icons/minus.svg"
                alt="minus"
                width={24}
                height={24}
              />
            </button>
            <p>{counter}</p>
            <button
              onClick={() => dispatch(increment({ id }))}
              className={styles.product__card__content__button__added__button}
            >
              <Image src="/icons/plus.svg" alt="plus" width={24} height={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
