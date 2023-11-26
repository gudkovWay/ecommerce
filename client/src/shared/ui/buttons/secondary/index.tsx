import { ButtonProps } from "../ButtonProps";
import styles from "../Buttons.module.scss";

const SecondaryButton: React.FC<ButtonProps> = ({
  buttonFn,
  buttonType,
  buttonText,
  decoration,
  size,
}) => {
  if (decoration === "default") {
    return (
      <button
        type={buttonType}
        onClick={() => buttonFn()}
        className={
          styles.secondaryButton + " " + styles.secondaryButton__default
        }
      >
        {buttonText}
      </button>
    );
  } else if (decoration === "outline") {
    return (
      <button
        type={buttonType}
        onClick={() => buttonFn()}
        className={styles.secondaryButton}
      >
        {buttonText}
      </button>
    );
  }
};
export default SecondaryButton;
