import styled from "styled-components";
import Cart from "../components/Cart";

const StyledNav = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  > h1 {
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
        <h1>Catalog</h1>
        {/* <Link to="/register">
          <button>Register</button>
        </Link> */}
        <Cart />
      </StyledNav>
  );
};

export default Navbar;
