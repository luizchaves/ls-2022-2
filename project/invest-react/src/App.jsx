import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { useInvestiment } from './contexts/InvestimentContext';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const { loadInvestiments } = useInvestiment();

  useEffect(() => {
    loadInvestiments();
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink as={Navbar.Brand} className="navbar-brand" to="/">
            InvestApp
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                as={Nav.Link}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                aria-current="page"
                to="/"
              >
                Investimentos
              </NavLink>
              <NavLink
                as={Nav.Link}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to="/report"
              >
                Extrato
              </NavLink>
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
