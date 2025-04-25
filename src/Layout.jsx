import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Óra & Stopperóra</Link>
          </li>
          <li>
            <Link to="/expense">Kiadáskezelő</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export default Layout;
