import cx from "classnames";

const Subtext = ({ children, className, style }: SubtextProps): JSX.Element => {
  return (
    <div
      className={cx(
        "text-base text-signoz-dark-intermediate leading-5 md:text-2xl",
        className
      )}
      style={style}
    >
      <span>{children}</span>
    </div>
  );
};

interface SubtextProps {
  children: React.ReactElement | string;
  className?: string;
  style?: React.CSSProperties;
}

export default Subtext;
