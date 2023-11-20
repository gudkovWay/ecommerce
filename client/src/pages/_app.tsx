import { Provider } from "react-redux";
import { store } from "@/shared/lib/redux/store";
import { AppProvider } from "./api/app-provider";

import "../styles/globals.scss";
import Home from "./Home";

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Home />
      </AppProvider>
    </Provider>
  );
}
