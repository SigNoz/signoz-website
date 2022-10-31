import React, { useState } from "react";
import CloseIcon from "./close.png";
import NextImage from "next/image";

const BlogStrip = ({ onToggleHandler, isOpen }: Props): JSX.Element => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="bg-signoz-medium flex justify-center">
      <div className="py-4 px-6 text-center flex gap-3 w-full justify-center">
        <span className="font-bold text-xs text-white">
          New blog post!&nbsp;
        </span>
        <span className="font-semibold text-xs text-white">
          “Understand the performance of your applications and identify any
          potential problems before your users”
        </span>
        <span className="font-semibold cursor-pointer text-xs text-signoz-primary-light">
          &nbsp;Learn more
        </span>
      </div>
      <div
        onClick={onToggleHandler(false)}
        className="flex justify-center items-center w-16 cursor-pointer"
      >
        <NextImage width={16} height={16} src={CloseIcon} />
      </div>
    </div>
  );
};

interface Props {
  onToggleHandler: (value: boolean) => VoidFunction
  isOpen: boolean;
}

export default BlogStrip;
