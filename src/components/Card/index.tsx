import cx from "classnames";

const Card = ({
  children,
  className,
  refernce,
  id,
}: CardProps): JSX.Element => {
  return (
    <div
      id={id}
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
  id?: string;
}

export default Card;
