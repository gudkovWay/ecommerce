import styles from "../../ui/Product.module.scss";
import UIHeader from "@/shared/ui/header";
import ProductCard from "../../ui/ProductCard";
import products from "@/shared/constants/products.json";

const ProductSales = () => {
  return (
    <section className={styles.products__section}>
      <div className="container">
        <UIHeader header="Акции" link="/sales" linkName="Все акции" type="category"/>
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
      </div>
    </section>
  );
};

export default ProductSales;
