import { ButtonProps } from "../ButtonProps";
import styles from "../Buttons.module.scss";

const PrimaryButton: React.FC<ButtonProps> = ({
  buttonFn,
  buttonType,
  buttonText,
}) => {
  return (
    <button
      type={buttonType}
      className={styles.primaryButton}
      onClick={() => buttonFn()}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
