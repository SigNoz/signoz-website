import { useCallback } from "react";
import cx from "classnames";

const Button = ({
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  children = "",
}: ButtonProps): JSX.Element => {
  const onKeyDownHandler: React.KeyboardEventHandler<HTMLButtonElement> =
    useCallback(
      (event) => {
        if (
          (event.key === "Enter" || event.key === "Space") &&
          !disabled &&
          onClick
        ) {
          onClick();
        }
      },
      [onClick, disabled]
    );

  return (
    <button
      onKeyDown={onKeyDownHandler}
      className=""
      tabIndex={0}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

interface ButtonProps {
  onClick?: VoidFunction;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default Button;
