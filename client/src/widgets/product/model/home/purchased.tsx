import UIHeader from "@/shared/ui/header";
import ProductCard from "@/shared/ui/product/card";
import products from "@/shared/constants/products";
import styles from "@/shared/ui/product/card/ProductCard.module.scss";

const ProductPurchased = () => {
  return (
    <section className={styles.products__section}>
      <div className="container">
        <div className={styles.wrapper}>
          <UIHeader
            header="Покупали раньше"
            link="/purchased"
            linkName="Все покупки"
            type="category"
          />
          <div className={styles.products__section__list}>
            {products
              .filter((product) => product.categories.includes("purchased"))
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  rating={product.rating}
                  price={product.price}
                  discountPrice={product.discountPrice}
                  imageSrc={product.image}
                  slug={product.slug}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPurchased;
