import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { Nunito } from "next/font/google";
import uk from "../lang/uk.json";
import ru from "../lang/ru.json";
import Loader from "@/components/Loader";
import "normalize.css/normalize.css";
import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
});
const messages = {
  uk,
  ru,
};

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);

    const handleComplete = (url) => {
      if (url === "/ru") {
        router.asPath = url;
        setLoading(false);
      }
      if (url === "/uk") {
        router.asPath = url;
        setLoading(false);
      }
      if (url === "/") {
        router.asPath = url;
        setLoading(false);
      }
      url === router.asPath &&
        setTimeout(() => {
          setLoading(false);
        }, 2000);
    };
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
      } else {
        console.log(`Route!`);
      }
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router, router.locale, router.asPath]);

  return <Loader loading={loading} />;
}

function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <Loading />
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className={`${nunito.className} `}>
          <Component {...pageProps} />
        </div>
      </IntlProvider>
    </>
  );
}

export default App;
