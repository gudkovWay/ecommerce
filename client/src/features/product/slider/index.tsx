import Image from "next/image";
import { useState } from "react";
import styles from "./Slider.module.scss";
import DiscountPrice from "@/shared/ui/discount";

type ProductSliderProps = {
  productImages: string[],
  price: string,
  discountPrice?: string,
}

const ProductSlider: React.FC<ProductSliderProps> = ({ productImages, price, discountPrice }) => {

  const [index, setIndex] = useState<number>(0)

  return (
    <div className={styles.images}>
      <div className={styles.images__left}>
        {
          productImages
            .map((src, ind) => (
              <div key={ind} onClick={() => setIndex(ind)}>
                <Image width={64} height={86.4} alt="preview" src={src} />
              </div>
            ))
            .filter((_, ind) => ind !== index)
        }

      </div>
      <div className={styles.images__right}>
        <Image
          width={272}
          height={160}
          alt="Предпросмотр товара"
          src={productImages[index]}
        />

        <DiscountPrice price={price} discountPrice={discountPrice} position="right" />

      </div>
    </div>
  )
}

export default ProductSlider;
