import Image from "next/image";
import { ButtonProps } from "../ButtonProps";
import styles from "../Buttons.module.scss";

const CloseButton: React.FC<ButtonProps> = ({
  buttonFn,
  buttonType,
  buttonText,
}) => {
  return (
    <button
      className={styles.closeButton}
      onClick={() => buttonFn()}
      type={buttonType}
    >
      <Image
        className={styles.closeIcon}
        src="auth/close.svg"
        alt={buttonText}
        width={13}
        height={13}
      />
    </button>
  );
};

export default CloseButton;
