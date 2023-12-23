import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import styles from "./Links.module.scss";

export type UILinksProps = {
  text: string;
  href: string;
  current?: boolean;
}

const UILinks: React.FC<UILinksProps> = ({text, href, current}) => {
  return (
    <Link href={href} className={clsx(styles.link, {
      [styles.link__current]: current === true, 
    })} >{text}
      <Image src="/icons/arrow-right.svg" alt="arrow right icon" width={7} height={13} />
    </Link> 
  )
}

export default UILinks
