import NextImage, { ImageProps as NextImageProps } from "next/image";
import React from "react";

const Image = (props: ImageProps) => <NextImage {...props} />;

interface ImageProps extends NextImageProps {
  children?: React.ReactNode;
}
export default Image;
