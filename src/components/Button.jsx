/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledButton = styled.div`
  padding: 5px 15px;
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
