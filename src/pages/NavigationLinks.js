import { Outlet, Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Pure</Link>
          </li>
          <li>
            <Link to="/Hoc">HOC</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationLinks;
