import Head from "next/head";

import WelcomeSlider from "@/features/slider";
import Products from "@/entities/product";
import Offers from "@/features/product/offers";
import YandexMap from "@/widgets/map";
import Blog from "@/entities/blog";

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
