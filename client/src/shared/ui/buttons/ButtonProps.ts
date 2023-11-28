export type ButtonProps = {
  buttonFn: () => void;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  decoration: "default" | "outline";
  size: "s" | "m" | "l" | "xl";
  icon?: JSX.Element;
};
