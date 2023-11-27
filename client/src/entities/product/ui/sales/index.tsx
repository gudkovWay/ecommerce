import styles from "../Product.module.scss";
import SectionHeader from "@/shared/ui/header";
import ProductCard from "../ProductCard";
import products from "../../products.json";

const ProductSales = () => {
  return (
    <section className={styles.products__section}>
      <SectionHeader header="Акции" link="/sales" linkName="Все акции" />
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
            />
          ))}
      </div>
    </section>
  );
};

export default ProductSales;
