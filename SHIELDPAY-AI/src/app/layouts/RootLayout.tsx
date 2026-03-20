import { Outlet } from "react-router";
import DevNavigation from "../components/DevNavigation";

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <DevNavigation />
    </>
  );
}
