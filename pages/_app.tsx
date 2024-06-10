import { useRouter } from "next/router";
import useI18n from "../lib/hooks/hooks/use-18n";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import Loader from "../components/global/Loader";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const language = useI18n();
  const { locale } = useRouter();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    // <html dir={`${locale == 'ar' ? 'rtl' : 'ltr'}`}>
    <Provider store={store}>
      <div
        // style={{
        //   fontFamily: language === "ar" ? "sans-serif" : "Poppins",
        // }}
        className={`${language == "en" ? " font-Poppins" : "font-GraphikArabic"}`}
      >
        {loading ? <Loader /> : <Component {...pageProps} />}
      </div>
    </Provider>
    // </html>
  );
}

export default appWithTranslation(MyApp);
