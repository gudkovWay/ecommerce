import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const MAP_API_KEY = process.env.MAP_API_KEY;

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <Script
          src={`https://api-maps.yandex.ru/3.0/?apikey=${MAP_API_KEY}&lang=ru_RU`}
          type="module"
          strategy="beforeInteractive"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
