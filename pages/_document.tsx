import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='es-MX'>
      <Head>
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-EZWF1W7RHN' strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EZWF1W7RHN');
          `}
        </Script>
        <Script id='cookie-hub' strategy='afterInteractive'>
          {`
            var cpm = {};
            (function(h,u,b){
              var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
              e.async=true;e.src='https://cdn.cookiehub.eu/c2/7664d83d.js';
              e.onload=function(){u.cookiehub.load(b);};
              d.parentNode.insertBefore(e,d);
            })(document,window,cpm);
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
