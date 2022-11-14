const Normal = ({ children }: NormalProps) => {
  return (<p className="font-openSans inline my-1 font-normal text-base leading-loose text-signoz-dark-intermediate">
    {children}
  </p>)
}

interface NormalProps {
  children?: React.ReactNode;
}

export default Normal