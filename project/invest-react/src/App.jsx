import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { useUserAuth } from './contexts/UserAuthContext';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink
            as={Navbar.Brand}
            className="navbar-brand"
            to="/investiments"
          >
            InvestApp
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    aria-current="page"
                    to="/investiments"
                  >
                    Investimentos
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    to="/report"
                  >
                    Extrato
                  </NavLink>
                  <Nav.Link to="#" onClick={handleLogout}>
                    Sair
                  </Nav.Link>
                </>
              ) : (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    to="/"
                  >
                    Entrar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    to="/signup"
                  >
                    Cadastrar
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mb-5">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
