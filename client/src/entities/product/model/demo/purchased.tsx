import styles from "../../ui/Product.module.scss";
import ProductCard from "../../ui/ProductCard";
import UIHeader from "@/shared/ui/header";
import products from "@/shared/constants/products.json";


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
                  type="demo"
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

export default ProductPurchased;
