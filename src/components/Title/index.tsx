import { getLastWord } from "./utils";
import cx from "classnames";

const Title = ({
  isLastWordColor,
  children,
  className,
  style = {},
}: TitleProps): JSX.Element => {
  const { lastWord, preWord } = getLastWord(children);

  return (
    <div
      className={cx(
        "font-WorkSans font-bold text-2xl md:text-2xl leading-tight tracking-tight not-italic",
        className
      )}
      style={style}
    >
      <span>{preWord}</span>

      {lastWord.length > 0 && (
        <span
          className={cx({
            "text-signoz-primary": isLastWordColor,
          })}
        >{` ${lastWord}`}</span>
      )}
    </div>
  );
};

export interface TitleProps {
  children: React.ReactElement | string;
  isLastWordColor?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default Title;
