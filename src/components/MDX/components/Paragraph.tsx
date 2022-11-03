const Paragraph = ({ children }: Props) => {
  return (
    <p className="font-openSans inline my-1 font-normal text-base leading-loose text-signoz-dark-intermediate">
      {children}
    </p>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default Paragraph;
