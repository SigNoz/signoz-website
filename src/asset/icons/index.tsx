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
import ArrowDown from "./icons/arrowDown";
import ArrowUp from "./icons/arrowUp";
import LogoWithText from "./icons/logowithtext";
import ArrowLeft from "./icons/arrowLeft";
import ArrowRight from "./icons/arrowRight";
import Search from "./icons/search";
import Twitter from "./icons/twitter";
import Facebook from "./icons/facebook";
import Redit from "./icons/redit";

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
  | "close"
  | "github"
  | "arrowDown"
  | "arrowUp"
  | "logowithtext"
  | "arrowLeft"
  | "arrowRight"
  | "search"
  | "twitter"
  | "facebook"
  | "redit";

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
    case "close":
      return <CloseIcon className={className} />;
    case "github":
      return <GithubIcon className={className} />;
    case "arrowDown":
      return <ArrowDown className={className} />;
    case "arrowUp":
      return <ArrowUp className={className} />;
    case "logowithtext":
      return <LogoWithText className={className} />;
    case "arrowLeft":
      return <ArrowLeft className={className} />;
    case "arrowRight":
      return <ArrowRight className={className} />;
    case "search":
      return <Search className={className} />;
    case "twitter":
      return <Twitter className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "redit":
      return <Redit className={className} />;
    default: {
      throw new Error("Icon not found");
    }
  }
};

export interface IconProps {
  className?: string;
}

export default getIcons;
