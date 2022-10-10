const Pre = (props: PreProps) => {
  return <pre className="overflow-scroll">{props.children}</pre>;
};

interface PreProps {
  children?: React.ReactNode;
}

export default Pre;
