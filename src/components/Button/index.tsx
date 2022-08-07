import React, { useCallback } from "react";
import cx from "classnames";

const Button = ({
  onClick,
  variant = "secondary",
  type = "button",
  disabled = false,
  children = "",
  fullWidth,
  className,
  style,
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
      style={style}
      onKeyDown={onKeyDownHandler}
      type={type}
      className={cx(
        {
          "bg-signoz-primary text-white": variant === "primary",
          "bg-white text-black border border-solid border-signoz-medium":
            variant === "secondary",
          "w-full": fullWidth,
          "opacity-50 cursor-not-allowed": disabled,
        },
        "rounded-lg px-6 py-4 text-sm font-semibold",
        className
      )}
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
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default Button;
