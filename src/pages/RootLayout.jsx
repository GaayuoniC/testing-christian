import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import "./RootLayout.css";

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
