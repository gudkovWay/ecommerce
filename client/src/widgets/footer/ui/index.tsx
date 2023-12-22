import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__wrapper__nav}>
            <ul className={styles.footer__wrapper__nav__site}>
              <li>
                <Link href="/" className={styles.footer__link}>
                  <Image
                    src="/logo/footer.svg"
                    alt="Logotype"
                    width={64}
                    height={44}
                  />
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footer__link}>
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contacts" className={styles.footer__link}>
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/vacancies" className={styles.footer__link}>
                  Вакансии
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.footer__link}>
                  Статьи
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.footer__link}>
                  Политика обработки персональных данных
                </Link>
              </li>
            </ul>

            <ul className={styles.footer__wrapper__nav__contacts}>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/footer/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="https://vk.com/" target="_blank" rel="noreferrer">
                  <Image src="/footer/vk.svg" alt="VK" width={24} height={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/footer/facebook.svg"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="https://ok.ru/" target="_blank">
                  <Image src="/footer/ok.svg" alt="ok" width={20} height={20} />
                </a>
              </li>
              <li>
                <a
                  href="tel:+88005553535"
                  target="_blank"
                  className={styles.footer__link}
                >
                  <Image
                    src="/footer/phone.svg"
                    alt="phone"
                    width={20}
                    height={20}
                  />
                  8 800 555 35 35
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <ul>
            <li>
              <a href="https://zasovskiy.ru/">
                Дизайн
                <Image
                  src="/footer/design.svg"
                  alt="design"
                  width={100}
                  height={10}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/gudkovWay/" target="_blank">
                © 2023. gudkovWay.
                <Image
                  src="/footer/github.png"
                  alt="github"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
