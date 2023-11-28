import Image from "next/image";
import styles from "./Header.module.scss";

const ManagerMenu = () => {
  return (
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
  );
};

export default ManagerMenu;
