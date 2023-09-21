import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductsGrid from "../components/ProductsGrid";
import Marquee from "../components/Marquee";

const StyledContainer = styled.section`
  width: 97vw;
  margin: auto;
  margin-top: 20px;
  background-color: var(--accent-dark-olive);
  padding: 20px;
  border-radius: 30px;
`;

const Shop = () => {
  return (
    <StyledContainer>
      <Marquee />
      <Navbar />
      <ProductsGrid />
    </StyledContainer>
  );
};

export default Shop;
