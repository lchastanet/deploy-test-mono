import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  background-color: var(--main-blue);
`;

const StyledList = styled.nav`
  display: flex;
  list-style-type: none;
  margin-left: 1rem;
`;

const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  &.active {
    color: #1e1e6e;
    text-decoration: underline;
  }
`;

const StyledItem = styled.ul`
  margin: 1.2rem 0.7rem;
`;

function Header() {
  return (
    <StyledHeader>
      <nav>
        <StyledList className="navbar-nav">
          <StyledItem className="nav-item">
            <StyledLink to="/" className="nav-link">
              Home
            </StyledLink>
          </StyledItem>
          <StyledItem className="nav-item">
            <StyledLink to="/item-list" className="nav-link">
              Items
            </StyledLink>
          </StyledItem>
        </StyledList>
      </nav>
    </StyledHeader>
  );
}

export default Header;
