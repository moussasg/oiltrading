import "@/styles/main.scss";
import 'animate.css';
import type { AppProps } from "next/app"; /* provides types for the properties passed to other compo */
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes"; /* library.allows to handle theme switching in application.*/
import Layout from "../components/layout";
import type { NextComponentType, NextPageContext } from "next"; /* NextComponentType type d'un composant dans  Next.js. /// NextPageContext sur la requête HTTP , le routage, les cookies*/
type ComponentWithLayout = {
  getLayout?: (page: React.ReactNode) => JSX.Element;
} & NextComponentType<NextPageContext, any, AppProps["pageProps"]>;

export default function App({ Component, pageProps }: AppProps) { /* main componenet */
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setIsLoading(false);
      // Initialize WOW only if it's available (i.e., on the client side)
  } , []);

  
  if ((Component as ComponentWithLayout).getLayout) {
    return (
      <>
        {isLoading ? (
          <div className="preloader">
            <div className="preloader__img">
              <img src="/images/favicon.png" alt="image" />
            </div>
          </div>
        ) : null}
        <ThemeProvider enableSystem={false}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
  return (
    <ThemeProvider enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
