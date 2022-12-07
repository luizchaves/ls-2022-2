import { NavLink, Outlet } from 'react-router-dom';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            InvestApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  aria-current="page"
                  to="/"
                >
                  Investimentos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to="/report"
                >
                  Extrato
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mb-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
