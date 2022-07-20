import Header from "components/Header";
import Footer from "components/Footer";
import { FC, PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;
