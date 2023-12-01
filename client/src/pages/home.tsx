import Head from "next/head";
import { useSelector } from "react-redux";

import Header from "@/widgets/header";
import SignUp from "@/features/auth/sign-up";
import SignIn from "@/features/auth/sign-in";
import WelcomeSlider from "@/features/slider";
import Products from "@/entities/product";
import Offers from "@/features/product/offers";
import YandexMap from "@/widgets/map";
import Blog from "@/entities/blog";
import Footer from "@/widgets/footer";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const isSignUpOpen = useSelector((state: any) => state.signUp.isOpen);
  const isSignInOpen = useSelector((state: any) => state.signIn.isOpen);

  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(), // 3:13:27
  });

  return (
    <>
      <Head>
        <title>северЯночки</title>
        <meta name="description" content="pet project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isSignUpOpen || isSignInOpen ? <div className="overlay"></div> : null}
        <Header />
        <SignUp />
        <SignIn />
        <WelcomeSlider />
        <article>
          <Products />
          <Offers />
          <YandexMap />
          <Blog />
        </article>
        <Footer />
      </main>
    </>
  );
}
