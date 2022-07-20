import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import components from "lib/mdxComponents";
import "../src/styles/globals.css";
import { ThemeProvider } from "next-themes";
// import AppLayout from "container/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange defaultTheme="light">
      {/* <AppLayout> */}
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
      {/* </AppLayout> */}
    </ThemeProvider>
  );
}

export default MyApp;
