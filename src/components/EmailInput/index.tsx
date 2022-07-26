import React from "react";
import cx from "classnames";

const EmailInput = ({
  refernce,
  placeholder,
  required,
  className,
  value,
  onChange,
}: EmailInputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      ref={refernce}
      type={"email"}
      placeholder={placeholder}
      className={cx(
        "h-12 w-full px-4 py-3 border border-solid border-signoz-medium rounded-lg text-signoz-dark-light text-base font-light font-openSans",
        className
      )}
      required={required}
    />
  );
};

interface EmailInputProps {
  refernce?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  required?: HTMLInputElement["required"];
  className?: string;
  value: string;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}

export default EmailInput;
