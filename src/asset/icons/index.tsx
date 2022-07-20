import Minus from "./icons/minus";
import Plus from "./icons/plus";

type Icons = "plus" | "minus";

const getIcons = (
  icons: Icons,
  className?: IconProps["className"]
): JSX.Element => {
  switch (icons) {
    case "plus": {
      return <Plus className={className} />;
    }
    case "minus": {
      return <Minus className={className} />;
    }
    default: {
      throw new Error("Icon not found");
    }
  }
};

export interface IconProps {
  className?: string;
}

export default getIcons;
