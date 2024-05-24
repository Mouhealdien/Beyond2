import { useRouter } from 'next/router';
import useI18n from '../lib/hooks/hooks/use-18n';
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';


function MyApp({ Component, pageProps }) {
  const language = useI18n();
	const { locale } = useRouter();
  return (
  // <html dir={`${locale == 'ar' ? 'rtl' : 'ltr'}`}>
  <Provider store={store}>
    <div style={{
      fontFamily:
        language === 'ar'
          ? "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji"
          : "Poppins",
    }}>
      <Component  {...pageProps} />
    </div>
    
    </Provider>
  // </html>

  )
  
}

export default appWithTranslation(MyApp);
