const Code = ({ children }: Props) => {
  return (
    <code className="font-openSans block p-2 my-2 rounded font-normal text-base leading-[160%] bg-black text-white break-words">
      {children}
    </code>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Code;
