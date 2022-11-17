import getIcons from "asset/icons";
import SubscribeToUpdates from "container/SubscribeToUpdates";
import getSubLinks from "./config";
import Link from "./Link";
import NextImage from "next/image";

const Footer = () => {
  return (
    <footer className="bg-signoz-medium relative ">
      <div className="transform -translate-y-1/4 md:-translate-y-2/4">
        <div className="w-[95%] md:w-full m-auto">
          <SubscribeToUpdates />
        </div>
      </div>
      <div className="flex pb-14 px-8 md:mt-8 md:flex-row flex-col md:gap-20  justify-evenly flex-wrap relative">
        <div className="md:w-93px md:h-11 flex flex-col">
          <div className="flex sm:flex-col sm:flex-wrap items-start mb-6 mt-4 md:px-2">
            <NextImage
              src={"/img/yc-logo.png"}
              alt={"Y Combinator"}
              width={80}
              height={80}
            />
          </div>
          <div className="md:w-3/5 mb-4  font-openSans font-semibold text-white text-lg">
            Backed by Y Combinator
          </div>
        </div>
        <Link text="DOCS" subLinks={getSubLinks("DOCS")} />
        <Link text="COMMUNITY" subLinks={getSubLinks("COMMUNITY")} />
        <Link text="BLOGS" subLinks={getSubLinks("BLOGS")} />
        <Link text="MORE" subLinks={getSubLinks("MORE")} />
      </div>
    </footer>
  );
};

export default Footer;
