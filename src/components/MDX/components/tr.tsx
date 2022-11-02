const tr = ({ children, ...props }: Props): JSX.Element => {
  return (
    <tr
      className="border border-solid border-signoz-secondary-light p-3"
      {...props}
    >
      {children}
    </tr>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default tr;
