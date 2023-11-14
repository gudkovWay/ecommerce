import Head from "next/head";
import Header from "@/components/header";
import SignIn from "@/components/sign-in";
import SignUp from "@/components/sign-up";

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
        {/* <SignIn /> */}
        <SignUp />
      </main>
    </>
  );
}
