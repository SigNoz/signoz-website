import Header from "components/Header";
import Footer from "components/Footer";
import BlogStrip from "components/BlogStrip";
import { PropsWithChildren } from "react";
import { useIsDesktop } from "hooks/useDeviceType";
import dynamic from "next/dynamic";

const PropertyControlledComponent = dynamic(
  () => import("components/PropertyControllComponent"),
  { ssr: false }
);

const AppLayout = ({ children }: PropsWithChildren) => {
  const isDesktop = useIsDesktop();
  return (
    <main>
      <PropertyControlledComponent controllerProperty={isDesktop}>
        <BlogStrip />
      </PropertyControlledComponent>
      <div className="mb-5 py-6 px-4">
        <Header />
      </div>
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;
