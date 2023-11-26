import styles from "../Product.module.scss";
import ProductCard from "../ProductCard";
import ProductHeader from "../ProductHeader";
import products from "../../products.json";

const ProductPurchased = () => {
  return (
    <section className={styles.products__section}>
      <ProductHeader
        header="Покупали раньше"
        link="/purchased"
        linkName="Все покупки"
      />
      <div className={styles.products__section__list}>
        {products
          .filter((product) => product.categories.includes("early"))
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              rating={product.rating}
              price={product.price}
              discountPrice={product.discountPrice}
              imageSrc={product.image}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductPurchased;
