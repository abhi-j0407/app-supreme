import styled from "styled-components";
import { offers } from "../constants/texts";

const StyledMarquee = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  animation: scrollText 90s infinite linear;
`;

const StyledContainer = styled.div`
  color: var(--accent-biege);
  background-color: var(--accent-light-olive);
  border-radius: 50px;
  padding: 10px 0px;
  overflow: hidden;
  white-space: nowrap;
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
