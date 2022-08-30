import getIcons from "asset/icons";
import SubscribeToUpdates from "container/SubscribeToUpdates";
import getSubLinks from "./config";
import Link from "./Link";

const Footer = () => {
  return (
    <footer className="bg-signoz-medium relative mt-20">
      <div className="transform -translate-y-1/4 md:-translate-y-2/4">
        <div className="w-[95%] md:w-full m-auto">
          <SubscribeToUpdates />
        </div>
      </div>

      <div className="w-[90%] pb-12 flex flex-col md:justify-center relative m-auto">
        <div className="flex items-center">
          {getIcons("logo")}
          <span className="ml-1 font-openSans font-semibold text-white text-lg">
            Signoz
          </span>
        </div>

        <div className="flex md:mt-8 md:flex-row flex-col md:gap-20 flex-wrap">
          <Link text="DOCS" subLinks={getSubLinks("DOCS")} />
          <Link text="COMMUNITY" subLinks={getSubLinks("COMMUNITY")} />
          <Link text="MORE" subLinks={getSubLinks("MORE")} />
          <Link text="MORE" subLinks={getSubLinks("MORE")} />
          <Link text="MORE" subLinks={getSubLinks("MORE")} />
          <Link text="MORE" subLinks={getSubLinks("MORE")} />
          <Link text="MORE" subLinks={getSubLinks("MORE")} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
