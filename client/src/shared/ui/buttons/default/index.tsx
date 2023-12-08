import clsx from "clsx";

import { ButtonProps } from "../ButtonProps";
import styles from "../Buttons.module.scss";

const UIButton: React.FC<ButtonProps> = ({
  buttonFn,
  buttonType,
  buttonText,
  decoration,
  size,
  color,
  muted,
  icon,
}) => {
  return (
    <button
      type={buttonType}
      onClick={buttonFn}
      className={clsx(styles.button, {
        [styles.button__size__s]: size === "s",
        [styles.button__size__m]: size === "m",
        [styles.button__size__l]: size === "l",
        [styles.button__size__xl]: size === "xl",
        [styles.button__primary]: color === "primary",
        [styles.button__secondary]: color === "secondary",
        [styles.button__primary__muted]: muted === true && color === "primary",
        [styles.button__secondary__muted]:
          muted === true && color === "secondary",
        [styles.button__primary__outline]:
          decoration === "outline" && color === "primary",
        [styles.button__secondary__outline]:
          decoration === "outline" && color === "secondary",
      })}
    >
      {buttonText}
      {icon ? icon : null}
    </button>
  );
};

export default UIButton;
