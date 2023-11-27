import Image from "next/image";
import styles from "./index.module.scss";

type SectionHeaderProps = {
  header: string;
  link: string;
  linkName: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  header,
  link,
  linkName,
}) => {
  return (
    <div className={styles.section__header}>
      <h2 className="sectionTitle">{header}</h2>
      <a href={link}>
        {linkName}
        <Image src="/icons/arrow-right.svg" alt="arrow" width={7} height={13} />
      </a>
    </div>
  );
};

export default SectionHeader;
