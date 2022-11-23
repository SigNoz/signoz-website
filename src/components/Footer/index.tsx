import getIcons from "asset/icons";
import SubscribeToUpdates from "container/SubscribeToUpdates";
import getSubLinks from "./config";
import Link from "./Link";
import NextImage from "next/image";

const Footer = () => {
  return (
    <footer className="bg-signoz-medium relative mt-20 ">
      <div className="transform -translate-y-1/4 md:-translate-y-2/4">
        <div className="w-[95%] md:w-full m-auto">
          <SubscribeToUpdates />
        </div>
      </div>
      <div className="flex pb-14 px-12 md:mt-8 md:flex-row flex-col md:gap-20  justify-center flex-wrap relative">
        <div className="flex flex-col flex-wrap items-start mb-6 mt-4 md:pr-2 ">
          <NextImage
            src={"/img/yc-logo.png"}
            alt={"Y Combinator"}
            width={80}
            height={80}
          />

          <div className="mt-4 font-openSans font-semibold text-white text-lg">
            Backed by Y
          </div>
          <div className="font-openSans font-semibold text-white text-lg">
            Combinator
          </div>
        </div>
        <Link text="DOCS" subLinks={getSubLinks("DOCS")} />
        <Link text="COMMUNITY" subLinks={getSubLinks("COMMUNITY")} />
        <Link text="BLOGS" subLinks={getSubLinks("BLOGS")} />
        <Link text="MORE" subLinks={getSubLinks("MORE")} />
      </div>
      <div className="text-center pb-12 font-openSans font-light leading-6 text-white">
        Copyright © 2022 SigNoz, Inc.
      </div>
    </footer>
  );
};

export default Footer;
