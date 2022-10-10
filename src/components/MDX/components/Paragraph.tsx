const Paragraph = ({ children }: Props) => {
  return (
    <p className="font-openSans my-4 font-normal text-base leading-[160%] text-signoz-dark-intermediate">
      {children}
    </p>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default Paragraph;
