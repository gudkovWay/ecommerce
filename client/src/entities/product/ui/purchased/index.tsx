import styles from "../Product.module.scss";
import ProductCard from "../ProductCard";
import SectionHeader from "@/shared/ui/header";
import products from "../../products.json";

const ProductPurchased = () => {
  return (
    <section className={styles.products__section}>
      <SectionHeader
        header="Покупали раньше"
        link="/purchased"
        linkName="Все покупки"
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
            />
          ))}
      </div>
    </section>
  );
};

export default ProductPurchased;
