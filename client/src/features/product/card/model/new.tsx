import styles from "../ui/ProductCard.module.scss";
import UIHeader from "@/shared/ui/header";
import ProductCard from "../ui/ProductCard";
import products from "@/shared/constants/products.json";

const ProductNew = () => {
  return (
    <section className={styles.products__section}>
      <div className="container">
        <div className={styles.wrapper}>
          <UIHeader header="Новиники" link="/new" linkName="Все новинки" type="category" />
          <div className={styles.products__section__list}>
            {products
              .filter((product) => product.categories.includes("new"))
              .slice(0, 4)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  productId={product.id}
                  productName={product.name}
                  productRate={product.rating}
                  productPrice={product.price}
                  productDiscountPrice={product.discountPrice}
                  productImages={product.image}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductNew;
