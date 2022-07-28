import Minus from "./icons/minus";
import Plus from "./icons/plus";
import WhySignozCard from "./icons/whysignozcard";
import ShieldIcon from "./icons/shield";
import DataStorage from "./icons/dataStorage";
import NoComplianceDocument from "./icons/compliancedocument";
import ShieldWithTick from "./icons/shieldwiththeTick";
import ComplianceDocumentTick from "./icons/complianceDocumentTick";
import Share from "./icons/Share";
import Linkedin from "./icons/linkedin";
import Logo from "./icons/logo";
import HamburgerMenu from "./icons/hamburgermenu";
import CloseIcon from "./icons/closeicon";
import GithubIcon from "./icons/github";

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
  | "linkedin"
  | "logo"
  | "hamburgermenu"
  | "closeIcon"
  | "github";

const getIcons = (
  icons: Icons,
  className?: IconProps["className"]
): JSX.Element => {
  switch (icons) {
    case "plus":
      return <Plus className={className} />;
    case "minus":
      return <Minus className={className} />;
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
    case "logo":
      return <Logo className={className} />;
    case "hamburgermenu":
      return <HamburgerMenu className={className} />;
    case "closeIcon":
      return <CloseIcon className={className} />;
    case "github":
      return <GithubIcon className={className} />;
    default: {
      throw new Error("Icon not found");
    }
  }
};

export interface IconProps {
  className?: string;
}

export default getIcons;
