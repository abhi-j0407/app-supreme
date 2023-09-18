import { useState } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  z-index: 2;
`;

const StyledCart = styled.div`
  width: 500px;
  height: 500px;
  background-color: antiquewhite;
  border-radius: 20px;
  z-index: 3;
  padding: 25px;
`;

const Cart = () => {
  const [show, setShow] = useState(false);

    function closeCart(e) {
    //   Closes modal if clicked on close or outside modal
    if (
      e.target.matches("#button-close-modal") ||
      !e.target.closest("#cart-modal")
    )
      setShow((prevShow) => !prevShow);
    console.log("Close cart clicked");
  }

  return (
    <>
      <button onClick={closeCart}>Cart</button>
      {show && (
        <StyledModal onClick={closeCart}>
          <StyledCart id='cart-modal'>
            <header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h2>Cart</h2>
              <button id="button-close-modal">Close</button>
            </header>
          </StyledCart>
        </StyledModal>
      )}
    </>
  );
};

export default Cart;
