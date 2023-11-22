import Image from "next/image";
import Link from "next/link";

import Catalog from "@/features/userSearch/catalog";
import Search from "@/features/userSearch/search";

import styles from "./Header.module.scss";
export const ManagerHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            className={styles.logoDesktop}
            src="/logo/headerDesktop.svg"
            alt="Logo"
            width={152}
            height={32}
          />
        </Link>
      </div>
      <div className={styles.productActions}>
        <div className={styles.catalog}>
          <button className={styles.catalogBtn}>
            <Image
              src="/header/menu.svg"
              alt="Catalog Icon"
              width={24}
              height={24}
            />

            <a>
              Каталог
              <Catalog style={"menu"} />
            </a>
          </button>
        </div>

        <div className={styles.search}>
          <Search />
        </div>
      </div>

      <div className={styles.actions}>
        <ul>
          <div className={styles.action}>
            <Image
              src="header/orders.svg"
              alt="order icon"
              width={24}
              height={24}
            />
            <li>
              <a className={styles.link} data-replace="Заказы">
                <span>Заказы</span>
              </a>
            </li>
          </div>
        </ul>
      </div>

      <div className={styles.user}>
        <ul>
          <div className={styles.userBar}>
            <Image
              className={styles.avatar}
              src="/header/manager.png"
              alt="user icon"
              width={24}
              height={16}
            />
            <a>Менеджерн</a>
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
};