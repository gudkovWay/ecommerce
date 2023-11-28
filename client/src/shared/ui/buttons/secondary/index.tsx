import clsx from "clsx";

import { ButtonProps } from "../ButtonProps";
import styles from "../Buttons.module.scss";

const SecondaryButton: React.FC<ButtonProps> = ({
  buttonFn,
  buttonType,
  buttonText,
  decoration,
  size,
}) => {
  return (
    <button
      type={buttonType}
      onClick={() => buttonFn()}
      className={clsx(styles.secondaryButton, {
        [styles.button__size__s]: size === "s",
        [styles.button__size__m]: size === "m",
        [styles.button__size__l]: size === "l",
        [styles.button__size__xl]: size === "xl",
        [styles.secondaryButton__outline]: decoration === "outline",
        [styles.secondaryButton__default]: decoration === "default",
      })}
    >
      {buttonText}
    </button>
  );
};
export default SecondaryButton;
