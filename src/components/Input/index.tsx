import React from "react";
import cx from "classnames";

const Input = ({
  refernce,
  placeholder,
  required,
  className,
  value,
  onChange,
  type = "email",
  prefix,
}: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      ref={refernce}
      type={type}
      placeholder={placeholder}
      className={cx(
        "h-12 w-full px-4 py-3 border border-solid border-signoz-medium rounded-lg text-signoz-dark-light text-base font-light font-openSans border-opacity-5",
        className
      )}
      required={required}
    />
  );
};

interface InputProps {
  refernce?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  required?: HTMLInputElement["required"];
  className?: string;
  value: string;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  prefix?: JSX.Element;
}

export default Input;
