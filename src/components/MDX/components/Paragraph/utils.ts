import { PararaphProps } from "./index";


const END_OF_LINE = ':::'

export const getTextFromChildren = (children: React.ReactNode, type: PararaphProps['type']): string => {
  const replaceText = getReplaceText(type);

  const note = children?.toString().replace(replaceText, '').replace(END_OF_LINE, '').trim() || "";
  return note;
}


const getReplaceText = (type: PararaphProps['type']): string => {
  if (type === "note") {
    return ":::note"
  }

  return ""
}