import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.p`
    text-align: center;
    border: 1px solid red;
    font-size: 40px;
    padding-block: 5px 15px;
`;

const PageNav = () => {
  return (
    <Nav>
      <Title>Supreme</Title>
    </Nav>
  );
};

export default PageNav;
