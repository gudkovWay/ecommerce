import { useSelector } from "react-redux";
import { useEffect } from "react";

import SignUp from "@/features/auth/sign-up";
import SignIn from "@/features/auth/sign-in";

const AuthModals = () => {

    const isSignUpOpen = useSelector((state: any) => state.signUp.isOpen);
  const isSignInOpen = useSelector((state: any) => state.signIn.isOpen);

  useEffect(() => {
    isSignInOpen || isSignUpOpen
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [isSignInOpen, isSignUpOpen]);


  return (
    <>
          {isSignUpOpen || isSignInOpen ? <div className="overlay"></div> : null}
        <SignUp />
        <SignIn />
    </>
  )
}

export default AuthModals
