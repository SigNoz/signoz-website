import getIcons from "asset/icons";
import SubscribeToUpdates from "container/SubscribeToUpdates";
import getSubLinks from "./config";
import Link from "./Link";
import NextImage from "next/image";

const Footer = () => {
  return (
    <footer className="bg-signoz-medium relative mt-20">
      <div className="transform -translate-y-1/4 md:-translate-y-2/4">
        <div className="w-[95%] md:w-full m-auto">
          <SubscribeToUpdates />
        </div>
      </div>

      <div className="w-[95%] pb-12 flex flex-row justify-evenly  relative m-auto">
        <div className="flex md:mt-8 md:flex-row flex-col md:gap-20 flex-wrap">
          <div className="md:w-93px md:h-11 flex flex-col">
            <div className="flex sm:flex-col sm:flex-wrap items-start mb-6">
              <NextImage
                src={"/img/yc-logo.png"}
                alt={"Y Combinator"}
                width={80}
                height={80}
              />

              <div className="md:w-24 md:h-11  font-openSans font-semibold text-white text-lg">
                Backed by Y Combinator
              </div>
            </div>
          </div>
          <Link text="DOCS" subLinks={getSubLinks("DOCS")} />
          <Link text="COMMUNITY" subLinks={getSubLinks("COMMUNITY")} />
          <Link text="BLOGS" subLinks={getSubLinks("BLOGS")} />
          <Link text="MORE" subLinks={getSubLinks("MORE")} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
