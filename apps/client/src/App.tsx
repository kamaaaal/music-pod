import { Toaster } from "./components/ui/sonner";
import "./globals.css";
import Routers from "./Routes";

function App() {
  return (
    <>
      <Toaster />
      <Routers />;
    </>
  );
}

export default App;
