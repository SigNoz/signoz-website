const th = ({ children, ...props }: Props): JSX.Element => {
  return (
    <th className="text-center" {...props}>
      {children}
    </th>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default th;
