export type ButtonProps = {
  buttonFn: () => void;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
};
