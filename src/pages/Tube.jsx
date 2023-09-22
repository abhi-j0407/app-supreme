import "../styles/tubeStyles.css"
import styled from "styled-components";
import ProductsGrid from "../components/ProductsGrid";
import { Navbar } from "../components/Tube";

const StyledContainer = styled.section`
  margin: auto;
  margin-top: 20px;
  background-color: var(--accent-dark-olive);
  padding: 20px 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Tube = () => {
  return (
    <StyledContainer>
      <Navbar />
      <ProductsGrid />
    </StyledContainer>
  );
};

export default Tube;