import React from "react";

import Normal from "./Type/Normal";
import Note from "./Type/Note";

import { Props } from "./index";

const Paragraph = ({ children }: Props) => {
  const isNote = children?.toString().includes(':::note');

  return <Normal>{children}</Normal>;
};



export default Paragraph;
