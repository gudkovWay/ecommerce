import "../styles/globals.scss";
import Home from "./Home";
import { AppProvider } from "./api/app-provider";

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
