const ul = ({ children }: Props) => {
  return (
    <ul className="font-openSans pl-2 list-none list-inside font-normal text-base leading-[160%] text-signoz-dark-intermediate">
      {children}
    </ul>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default ul;
