import { Outlet, Link } from "react-router-dom";
import "./style.css";
const Layout = () => {
  return (
    <div>
      <nav>
        <h1>Arda Yeşilkaya</h1>
        <a href="" className="etiket">
          {" "}
          <Link to="/">Hakkımda</Link>{" "}
        </a>

        <a href="" className="etiket">
          {" "}
          <Link to="/blogs">Dersler</Link>
        </a>

        <a href="" className="etiket">
          {" "}
          <Link to="/contact">İletişim</Link>
        </a>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
