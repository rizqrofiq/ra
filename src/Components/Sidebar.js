import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="col-md-2 bg-dark text-start min-vh-100">
      <ul className="py-0 px-3">
        <li className="nav-item active sidebar-divider my-0 py-2">
          <a className="nav-link text-white" href="/user">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span> Dashboard</span>
          </a>
        </li>
        <li className="nav-item active sidebar-divider my-0 py-2">
          <Link to={"/user"} className="nav-link text-white">
            <i className="fas fa-fw fa-user-alt" />
            <span> User</span>
          </Link>
        </li>
        <li className="nav-item active sidebar-divider my-0 py-2">
          <Link to={"/menu"} className="nav-link text-white">
            <i className="fas fa-fw fa-table" />
            <span> Menu</span>
          </Link>
        </li>
        <li className="nav-item active sidebar-divider my-0 py-2">
          <a className="nav-link text-white" href="/pesanan">
            <i className="fas fa-fw fa-bell" />
            <span> Pesanan</span>
          </a>
        </li>
        <li className="nav-item active sidebar-divider my-0 py-2">
          <a className="nav-link text-white" href="/user">
            <i className="fas fa-fw fa-book-open" />
            <span> Detail Pesanan</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
