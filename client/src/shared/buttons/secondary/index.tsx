import { ButtonProps } from "../ButtonProps";
import styles from "../Buttons.module.scss";

const SecondaryButton: React.FC<ButtonProps> = ({
  buttonFn,
  buttonType,
  buttonText,
}) => {
  return (
    <button
      className={styles.secondaryButton}
      type={buttonType}
      onClick={() => buttonFn()}
    >
      {buttonText}
    </button>
  );
};
export default SecondaryButton;
