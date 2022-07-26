import cx from "classnames";

const Card = ({ children, className, refernce }: CardProps): JSX.Element => {
  return (
    <div
      className={cx("p-4 bg-white rounded-lg shadow-1", className)}
      ref={refernce}
    >
      {children}
    </div>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  refernce?: React.Ref<HTMLDivElement>;
}

export default Card;
