import Head from "next/head";
import Header from "@/widgets/header";
import SignUp from "@/features/auth/sign-up";
import SignIn from "@/features/auth/sign-in";
import { useSelector } from "react-redux";

export default function Home() {
  const isSignUpOpen = useSelector((state: any) => state.signUp.isOpen);
  const isSignInOpen = useSelector((state: any) => state.signIn.isOpen);

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
      </main>
    </>
  );
}
