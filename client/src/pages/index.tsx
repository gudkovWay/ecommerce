import Head from "next/head";

import Products from "@/widgets/product";
import YandexMap from "@/widgets/map";
import Blog from "@/widgets/blog";
import Offers from "@/features/product/offers";
import WelcomeSlider from "@/features/slider";

export default function Home() {

  return (
    <>
      <Head>
        <title>северЯночки</title>
        <meta
          name="description"
          content="Северяночка. Интернет Магазин Продуктов. Доставка. Работа курьером."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WelcomeSlider />
        <article>
          <Products />
          <Offers />
          <YandexMap />
          <Blog />
        </article>
      </main>
    </>
  );
}
