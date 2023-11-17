import Image from "next/image";

import { ButtonProps } from "../ButtonProps";
import styles from "../Buttons.module.scss";

const BackButton: React.FC<ButtonProps> = ({
  buttonFn,
  buttonType,
  buttonText,
}) => {
  return (
    <button
      type={buttonType}
      onClick={() => buttonFn()}
      className={styles.backButton}
    >
      <Image src="auth/arrow-left.svg" alt="arrow" width={24} height={24} />
      {buttonText}
    </button>
  );
};

export default BackButton;
