const LI = ({ children }: Props) => {
  return (
    <li className="font-openSans my-2 list-decimal font-normal text-base leading-[160%] text-signoz-dark-intermediate">
      {children}
    </li>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default LI;
