export type ButtonProps = {
  buttonFn: () => void;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  decoration?: "default" | "outline";
  size?: "s" | "m" | "l" | "xl";
  color?: "primary" | "secondary";
  muted?: boolean;
  icon?: JSX.Element;
};
