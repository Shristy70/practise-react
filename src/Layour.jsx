import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Link to="Home">Home</Link>
      <Link to="About">About</Link>
      <Link to="Contact">Contact</Link>
      <hr size="3" color="red" />
      <Outlet />
      <hr size="3" color="red" />
      www.company.com2024
    </>
  );
};
export default Layout;
