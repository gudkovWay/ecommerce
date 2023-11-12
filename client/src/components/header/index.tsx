import Image from "next/image";
import styles from "./Header.module.scss";
import Catalog from "../catalog";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          className={styles.logoDesktop}
          src="/logo/headerDesktop.svg"
          alt="Logo"
          width={152}
          height={32}
        />
      </div>

      <div className={styles.productActions}>
        <div className={styles.catalog}>
          <Image
            src="/header/menu.svg"
            alt="Catalog Icon"
            width={24}
            height={24}
          />
          <a>
            Каталог
            <div>
              <Catalog style={"menu"} />
            </div>
          </a>
        </div>

        <div className={styles.search}>search</div>
      </div>

      <div className={styles.actions}>
        <ul>
          <div className={styles.action}>
            <Image
              src="/header/favorite.svg"
              alt="favorite icon"
              width={24}
              height={16}
            />
            <li>
              <a>Избранное</a>
            </li>
          </div>
          <div className={styles.action}>
            <Image
              src="header/orders.svg"
              alt="order icon"
              width={24}
              height={16}
            />
            <li>
              <a>Заказы</a>
            </li>
          </div>
          <div className={styles.action}>
            <Image
              src="header/cart.svg"
              alt="basket icon"
              width={24}
              height={16}
            />
            <li>
              <a>Корзина</a>
            </li>
          </div>
        </ul>
      </div>

      <div className={styles.user}>
        <ul>
          <div className={styles.userBar}>
            <Image
              className={styles.avatar}
              src="/header/user.png"
              alt="user icon"
              width={24}
              height={16}
            />
            <a>Elliot</a>
          </div>
          <div className={styles.userMenu}>
            <li>
              <a>
                <Image
                  className={styles.userIcon}
                  src="header/arrowDown.svg"
                  alt="buttond Down icon"
                  width={13}
                  height={7}
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
}
