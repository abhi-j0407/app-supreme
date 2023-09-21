/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledButton = styled.div`
  padding: 2px 15px;
  min-width: 35px;
  display: flex;
  justify-content: center;
  background-color: var(--accent-cream);
  color: var(--accent-dark-olive);
  border-radius: 50px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
