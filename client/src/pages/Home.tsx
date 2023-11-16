import Head from "next/head";
import Header from "@/components/header";
import SignUp from "@/features/auth/sign-up";
import SignIn from "@/features/auth/sign-in";

export default function Home() {
  return (
    <>
      <Head>
        <title>северЯночки</title>
        <meta name="description" content="pet project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <SignUp />
        <SignIn />
      </main>
    </>
  );
}
