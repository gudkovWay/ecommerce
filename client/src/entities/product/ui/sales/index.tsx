import styles from "../Product.module.scss";
import ProductCard from "../ProductCard";
import ProductHeader from "../ProductHeader";
import products from "../../products.json";

const ProductSales = () => {
  return (
    <section className={styles.products__section}>
      <ProductHeader header="Акции" link="/sales" linkName="Все акции" />
      <div className={styles.products__section__list}>
        {products.map((product) => (
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
