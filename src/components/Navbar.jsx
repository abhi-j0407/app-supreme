import styled from "styled-components";
import Cart from "../components/Cart";

const StyledNav = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  return (
    <StyledNav>
        <h1>Shop</h1>
        {/* <Link to="/register">
          <button>Register</button>
        </Link> */}
        <Cart />
      </StyledNav>
  );
};

export default Navbar;
