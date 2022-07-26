import Minus from "./icons/minus";
import Plus from "./icons/plus";
import WhySignozCard from "./icons/whysignozcard";
import ShieldIcon from "./icons/shield";
import DataStorage from "./icons/dataStorage";
import NoComplianceDocument from "./icons/noComplianceDocument";
import ShieldWithTick from "./icons/shieldWithTick";
import ComplianceDocumentTick from "./icons/complianceDocumentTick";
import Share from "./icons/Share";
import Linkedin from "./icons/linkedin";

type Icons =
  | "plus"
  | "minus"
  | "whysignozcard"
  | "shield"
  | "datastorage"
  | "nocompliancedocument"
  | "shieldWithTick"
  | "compliancedocumenttick"
  | "share"
  | "linkedin";

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
    case "whysignozcard":
      return <WhySignozCard className={className} />;
    case "shield":
      return <ShieldIcon className={className} />;
    case "datastorage":
      return <DataStorage className={className} />;
    case "nocompliancedocument":
      return <NoComplianceDocument className={className} />;
    case "shieldWithTick":
      return <ShieldWithTick className={className} />;
    case "compliancedocumenttick":
      return <ComplianceDocumentTick className={className} />;
    case "share":
      return <Share className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    default: {
      throw new Error("Icon not found");
    }
  }
};

export interface IconProps {
  className?: string;
}

export default getIcons;
