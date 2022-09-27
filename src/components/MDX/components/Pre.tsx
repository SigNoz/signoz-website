const Pre = (props: PreProps) => {
  return <pre>{props.children}</pre>;
};

interface PreProps {
  children?: React.ReactNode;
}

export default Pre;
