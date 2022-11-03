import App, { AppContext, AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import "../src/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { DeviceType, DeviceTypeProvider } from "hooks/useDeviceType";
import { isMobile } from "lib/isMobileFromUA";
import AppLayout from "container/AppLayout";
import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { config } from "lib/react-query-config";
import { MDXComponents } from "components/MDX";
import { Analytics } from '@vercel/analytics/react';

interface MyAppProps extends AppProps {
  device: DeviceType;
}
function MyApp({ Component, pageProps, device }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient(config));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DeviceTypeProvider type={device}>
          {/* <ThemeProvider disableTransitionOnChange defaultTheme="light"> */}
          <AppLayout>
            <MDXProvider components={MDXComponents}>
              <Component {...pageProps} />
            </MDXProvider>
          </AppLayout>
          {/* </ThemeProvider> */}
        </DeviceTypeProvider>
        <Analytics />
      </Hydrate>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async (
  AppContext: AppContext
): Promise<{ device: DeviceType }> => {
  const pageProps = await App.getInitialProps(AppContext);
  let deviceType: DeviceType = "mobile";
  if (typeof window === "undefined") {
    const agent = AppContext.ctx?.req?.headers["user-agent"] || "";
    deviceType = isMobile(agent.toLowerCase()) ? "mobile" : "desktop";
  }

  return {
    ...pageProps,
    device: deviceType,
  };
};

export default MyApp;
