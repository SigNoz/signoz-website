const ToolTipPollygon = () => {
  return (
    <div
      className="absolute w-0 h-0 left-1/2 bottom-0"
      style={{
        borderLeft: "1rem solid transparent",
        borderRight: `1rem solid transparent`,
        borderTop: `2rem solid #fff`,
        transform: "translate(-50%, 70%)",
      }}
    />
  );
};

export default ToolTipPollygon;
