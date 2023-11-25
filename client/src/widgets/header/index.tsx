import { UnAuthHeader } from "./ui";
import { AuthHeader } from "./ui/userHeader";
import { ManagerHeader } from "./ui/managerHeader";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  return isAuth ? <AuthHeader /> : <UnAuthHeader />;
};

export default Header;
