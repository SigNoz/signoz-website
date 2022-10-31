const Table = ({ children, ...props }: Props): JSX.Element => {
  return (
    <table className="w-full" {...props}>
      {children}
    </table>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default Table;
