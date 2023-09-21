import styled from "styled-components";
import { offers } from "../constants/texts";

const StyledMarquee = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  animation: scrollText 33s infinite linear;
`;

const StyledContainer = styled.div`
  color: var(--accent-biege);
  background-color: var(--accent-light-olive);
  border-radius: 50px;
  padding: 5px 10px;
  overflow: hidden;
`;

const Marquee = () => {
  return (
    <StyledContainer>
      <StyledMarquee>
        {offers.map((offer, index) => (
          <div style={{display: 'flex', gap: '15px'}} key={index}>
            <p>*</p>
            <p>{offer}</p>
          </div>
        ))}
      </StyledMarquee>
    </StyledContainer>
  );
};

export default Marquee;
