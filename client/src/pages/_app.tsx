import { Provider } from "react-redux";
import { store } from "@/shared/lib/redux/store";

import "../styles/globals.scss";
import Home from "./home";
import { AppProvider } from "./app-provider";

export default function App() {
  return (
    <AppProvider>
      <Provider store={store}>
        <Home />
      </Provider>
    </AppProvider>
  );
}
