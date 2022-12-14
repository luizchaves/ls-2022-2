import { NavLink, Outlet } from 'react-router-dom';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import { InvestimentProvider } from './contexts/InvestimentContext';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
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
        <InvestimentProvider>
          <Outlet />
        </InvestimentProvider>
      </Container>
    </>
  );
}

export default App;
