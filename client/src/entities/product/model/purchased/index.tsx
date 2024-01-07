import styles from "../../ui/Product.module.scss";
import ProductCard from "../../ui/ProductCard";
import UIHeader from "@/shared/ui/header";
import products from "@/shared/constants/products.json";


const ProductPurchased = () => {
  return (
    <section className={styles.products__section}>
      <div className="container">
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
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPurchased;
