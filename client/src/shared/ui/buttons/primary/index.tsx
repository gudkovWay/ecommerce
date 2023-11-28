import clsx from "clsx";

import { ButtonProps } from "../ButtonProps";
import styles from "../Buttons.module.scss";

const PrimaryButton: React.FC<ButtonProps> = ({
  buttonFn,
  buttonType,
  buttonText,
  decoration,
  size,
  icon,
}) => {
  return (
    <button
      type={buttonType}
      onClick={() => buttonFn()}
      className={clsx(styles.primaryButton, {
        [styles.button__size__s]: size === "s",
        [styles.button__size__m]: size === "m",
        [styles.button__size__l]: size === "l",
        [styles.button__size__xl]: size === "xl",
        [styles.primaryButton__outline]: decoration === "outline",
        [styles.primaryButton__default]: decoration === "default",
      })}
    >
      {buttonText}
      {icon ? icon : null}
    </button>
  );
};

export default PrimaryButton;
