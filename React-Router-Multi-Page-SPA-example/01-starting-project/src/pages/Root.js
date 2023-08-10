import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <h1>Root Layout</h1>; // Outlet is the marker where the child routes will
      be rendered to
      <Outlet />
    </>
  );
}

export default RootLayout;
