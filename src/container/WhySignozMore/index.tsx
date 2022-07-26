import Title from "components/Title";
import getIcons from "asset/icons";
import Subtext from "components/SubText";
import LeftBorder from "components/LeftBorder";
import dynamic from "next/dynamic";
const PropertyControlledComponent = dynamic(
  () => import("components/PropertyControllComponent"),
  {
    ssr: false,
    loading() {
      return <div>Loading...</div>;
    },
  }
);
import { useIsDesktop } from "hooks/useDeviceType";

import Feedback from "./Feedback";

const WhySignozMore = () => {
  const isDesktop = useIsDesktop();
  const vendorsFeatures = [
    {
      icon: getIcons("shieldWithTick", "md:w-8 md:h-8 w-6 h-6"),
      title: "Your data in your boundary",
      text: "No need to worry about GDPR and other data protection laws. All your tracing and monitoring data is now in YOUR infra.",
    },
    {
      icon: getIcons("compliancedocumenttick", "md:w-8 md:h-8 w-6 h-6"),
      title: "Forget HUGE SaaS bills",
      text: "Your data storage cost is only dependent on your application load, rather than factors like number of nodes, which is an architectural preference.",
    },
    {
      icon: getIcons("share", "md:w-8 md:h-8 w-6 h-6"),
      title: "Take control",
      text: "No compliance needed to use SigNoz. No need to go through multiple rounds with legal/security teams just for trying it out.",
    },
  ];

  return (
    <>
      <div className="bg-hero-pattern-gradient bg-contain bg-opacity-50 bg-no-repeat transform">
        <div className="md:pt-20 md:flex md:justify-around md:items-center md:max-w-[1156px] m-auto w-[95%]">
          <PropertyControlledComponent controllerProperty={isDesktop}>
            <LeftBorder>
              <Title className="text-center md:w-80 md:text-left">
                Why is SigNoz more than an APM?
              </Title>
              <Subtext className="w-80 mt-6">
                We provide all features like metrics and request traces which
                APMs provide, in addition to filtering on trace data and custom
                aggregation on it.
              </Subtext>
            </LeftBorder>
          </PropertyControlledComponent>

          <PropertyControlledComponent controllerProperty={!isDesktop}>
            <div className="flex flex-col items-center justify-center">
              <Title className="text-center md:w-80 md:text-left">
                Why is SigNoz more than an APM?
              </Title>
              <Subtext className="md:w-80 mt-4 text-center w-full">
                We provide all features like metrics and request traces which
                APMs provide, in addition to filtering on trace data and custom
                aggregation on it.
              </Subtext>
            </div>
          </PropertyControlledComponent>

          <div className="flex flex-col justify-center items-start md:max-w-sm">
            {vendorsFeatures.map(({ text, icon, title }) => {
              return (
                <div
                  className="flex gap-5 items-start mt-8 justify-center md:m-0 md:mb-8 md:text-base"
                  key={text}
                >
                  <div className="mt-1 md:mt-2">{icon}</div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-base text-signoz-pure font-semibold md:text-2xl md:font-bold">
                      {title}
                    </div>
                    <div className="text-sm text-signoz-dark-intermediate mt-2 tracking-lightTigher">
                      {text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Feedback />
    </>
  );
};

export default WhySignozMore;
