import BlogStrip from "components/BlogStrip";
import { PropsWithChildren, useState } from "react";
import { useIsDesktop } from "hooks/useDeviceType";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("components/Header"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});
const Footer = dynamic(() => import("components/Footer"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const PropertyControlledComponent = dynamic(
  () => import("components/PropertyControllComponent"),
  { ssr: false }
);

const AppLayout = ({ children }: PropsWithChildren) => {
  const isDesktop = useIsDesktop();

  const [isOpen, setIsOpen] = useState(true);

  const onToggleHandler = (value: boolean) => {
    return () => setIsOpen(value);
  };

  return (
    <main>
      <PropertyControlledComponent controllerProperty={isDesktop}>
        <BlogStrip onToggleHandler={onToggleHandler} isOpen={isOpen} />
      </PropertyControlledComponent>
      <Header isBlogStripOpen={isOpen} />
      <div className="mt-32">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default AppLayout;
