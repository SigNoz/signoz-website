const BlockQuote = ({ children }: Props): JSX.Element => {
  return <blockquote className="overflow-x-auto">{children}</blockquote>;
};

interface Props {
  children?: React.ReactNode;
}

export default BlockQuote;
