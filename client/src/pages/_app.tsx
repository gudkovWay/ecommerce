import { Provider } from "react-redux";
import { store } from "@/shared/lib/redux/store";

import "../styles/globals.scss";
import Home from "./home";

export default function App() {
  return (
      <Provider store={store}>
        <Home />
      </Provider>
  );
}
