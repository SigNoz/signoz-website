const LeftBorder = ({ children }: LeftBorderProps) => {
  return (
    <div className="flex">
      <div className="bg-signoz-primary w-[5px] h-10 rounded-sm" />
      <div className="ml-3">{children}</div>
    </div>
  );
};

interface LeftBorderProps {
  children: React.ReactNode;
}

export default LeftBorder;
