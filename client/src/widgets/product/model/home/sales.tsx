import UIHeader from "@/shared/ui/header";
import ProductCard from "@/features/product/card";
import products from "@/shared/constants/products.json";
import styles from "@/features/product/card/ProductCard.module.scss";

const ProductSales = () => {
  return (
    <section className={`${styles.products__section}  ${styles.products__section__sales}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <UIHeader header="Акции" link="/sales" linkName="Все акции" type="category" />
          <div className={styles.products__section__list}>
            {products
              .filter((product) => product.categories.includes("sales"))
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

export default ProductSales;
