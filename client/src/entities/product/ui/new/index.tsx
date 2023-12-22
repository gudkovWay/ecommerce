import styles from "../Product.module.scss";
import SectionHeader from "@/shared/ui/header";
import ProductCard from "../ProductCard";
import products from "../../products.json";

const ProductNew = () => {
  return (
    <section className={styles.products__section}>
      <div className="container">
        <SectionHeader header="Новиники" link="/new" linkName="Все новинки" />
        <div className={styles.products__section__list}>
          {products
            .filter((product) => product.categories.includes("new"))
            .slice(0, 4)
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
      </div>
    </section>
  );
};

export default ProductNew;
