import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
          <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold text-primary" to="/">
              UserFlow
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/signup">
                    <span className="text-dark">Signup</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/">
                    <span className="text-dark">User</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/View">
                    <span className="text-dark">View</span>
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex ms-lg-4">
                <input
                  className="form-control me-2 border border-primary"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
