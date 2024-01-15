import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import renderRating from "@/features/product/rating";
import ProductDrawer from "@/features/product/card";
import { Favorite } from "@/features/product/favorite";
import { ProductProps } from "@/shared/types/product";
import { RootState } from "@/shared/lib/redux/store";
import styles from "../../ui/Product.module.scss";

const ProductCardDemo: React.FC<ProductProps> = ({
  productName,
  productRate,
  productPrice,
  productDiscountPrice,
  productImages,
  productId,
}) => {
  const { items } = useSelector((state: RootState) => state.purchaseDrawer);
  const isAdded = items && items.find((item) => item.id === productId);

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
          src={productImages[0]}
          alt="product"
          width={272}
          height={160}
          className={styles.product__card__image__product}
        />

        <Favorite type="icon" id={productId} />

      </div>
      <div className={styles.product__card__content}>
        <div className={styles.product__card__content__price}>
          {productDiscountPrice ? (
            <span className={styles.product__card__content__price__discount}>
              {productDiscountPrice} ₽
              <br />
              <p>С картой</p>
            </span>
          ) : null}
          <span
            className={`${productDiscountPrice
                ? styles.product__card__content__price__real
                : styles.product__card__content__price__real +
                " " +
                styles.product__card__content__price__real__bold
              }`}
          >
            {productPrice} ₽ <br />
            {productDiscountPrice ? <p>Обычная</p> : null}
          </span>
        </div>
        <Link href={`/product/${productId}`} className={styles.product__card__content__name}>
          <h3 className={styles.product__card__content__name}>{productName}</h3>
        </Link>
        <div className={styles.product__card__content__rating}>
          {renderRating({ rating: productRate })}
        </div>
        
          <ProductDrawer productId={productId} />

      </div>
    </div>
  );
};

export default ProductCardDemo;
