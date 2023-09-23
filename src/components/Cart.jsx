import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";

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
  background-color: var(--accent-light-olive);
  border-radius: 20px;
  z-index: 3;
  padding: 25px;
`;

const CartRow = styled.div`
  display: flex;
  gap: 20px;
  margin-block: 10px;
`;

const Cart = () => {
  const [show, setShow] = useState(false);
  const cart = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    cart.getTotalCost().then((cost) => setTotalCost(cost));
  }, [cart]);

  const totalProducts = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  function closeCart(e) {
    //   Closes modal if clicked on close or outside modal
    if (
      e.target.matches("#button-close-modal") ||
      !e.target.closest("#cart-modal")
    )
      setShow((prevShow) => !prevShow);
  }

  return (
    <>
      <Button onClick={closeCart}>{ totalProducts > 0 ? `Cart : ${totalProducts}` : 'Cart Empty' }</Button>
      {show && (
        <StyledModal onClick={closeCart}>
          <StyledCart id="cart-modal">
            <header
              style={{ display: "flex", justifyContent: "space-between", marginBottom: '40px' }}
            >
              <h2>Cart</h2>
              <Button id="button-close-modal">Close</Button>
            </header>
            <section>
              {cart.items.map((item) => (
                <CartRow key={item.id}>
                  <p>{item.id}</p>
                  <Button onClick={() => cart.removeOneFromCart(item.id)}>
                    -
                  </Button>
                  <p>{item.quantity}</p>
                  <Button onClick={() => cart.addOneToCart(item.id)}>+</Button>
                  <Button onClick={() => cart.deleteFromCart(item.id)}>
                    Remove
                  </Button>
                </CartRow>
              ))}
              <h2 style={{marginTop: '40px'}}>Total: {totalCost}</h2>
            </section>
          </StyledCart>
        </StyledModal>
      )}
    </>
  );
};

export default Cart;
