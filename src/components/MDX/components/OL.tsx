const OL = ({ children }: Props) => {
  return (
    <ol className="font-openSans list-inside list-decimal font-normal text-base leading-[160%] text-signoz-dark-intermediate">
      {children}
    </ol>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default OL;
