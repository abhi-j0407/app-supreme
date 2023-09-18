import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductsGrid from "../components/ProductsGrid";
import Cart from "../components/Cart";

const StyledNav = styled.nav`
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Shop = () => {
  return (
    <div>
      <StyledNav>
        <h1>Shop</h1>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Cart />
      </StyledNav>
      <ProductsGrid />
    </div>
  );
};

export default Shop;
