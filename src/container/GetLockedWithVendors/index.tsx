import Title from "components/Title";
import getIcons from "asset/icons";
import Subtext from "components/SubText";
import LeftBorder from "components/LeftBorder";
import PropertyControlledComponent from "components/PropertyControllComponent";
import { useIsDesktop } from "hooks/useDeviceType";

const GetLockedWithVendors = () => {
  const isDesktop = useIsDesktop();
  const vendorsFeatures = [
    {
      icon: getIcons("shield", "md:w-8 md:h-8"),
      text: "No fear of SaaS service getting hacked and your customer’s data getting compromised. Have complete control on your data.",
    },
    {
      icon: getIcons("datastorage", "md:w-8 md:h-8"),
      text: "Your data storage cost is only dependent on your application load, rather than factors like number of nodes, which is an architectural preference.",
    },
    {
      icon: getIcons("nocompliancedocument", "md:w-8 md:h-8"),
      text: "No compliance needed to use SigNoz. No need to go through multiple rounds with legal/security teams just for trying it out.",
    },
  ];

  return (
    <div className="md:flex md:justify-around md:items-center md:py-12 md:max-w-[1156px] m-auto">
      <PropertyControlledComponent controllerProperty={isDesktop}>
        <LeftBorder>
          <Title className="text-center md:w-80 md:text-left">
            Why get locked-in with SaaS vendors like DataDog when you can use
            Open source?
          </Title>
        </LeftBorder>
      </PropertyControlledComponent>
      <PropertyControlledComponent controllerProperty={!isDesktop}>
        <Title className="text-center text-base">
          Why get locked-in with SaaS vendors like DataDog when you can use Open
          source?
        </Title>
      </PropertyControlledComponent>

      <div className="flex flex-col justify-center items-start md:max-w-sm">
        {vendorsFeatures.map(({ text, icon }) => {
          return (
            <div
              className="flex gap-5 items-start mt-8 justify-center md:m-0 md:mb-8 md:text-base"
              key={text}
            >
              <div className="mt-1 md:mt-2">{icon}</div>
              <div className="text-justify text-sm text-signoz-dark-intermediate tracking-lightTigher leading-150 font-light md:text-base">
                {text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetLockedWithVendors;
