import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Login()} />
        <Route path="/login" element={Login()} />
      </Routes>
    </BrowserRouter>
  );
}
