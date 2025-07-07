import React, { useReducer, useState } from "react";
import styled from "styled-components";

// Poké Ball - $10Great Ball - $20Ultra Ball - $30
const initialState = {
  items: [
    { name: "Poké Ball", price: 10, id: 1 },
    { name: "Ultra Ball", price: 30, id: 2 },
    { name: "Great Ball", price: 20, id: 3 },
  ],
  cart: [],
};

//  [...state.cart, action.payload]

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      }
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        ),
      };
    case "RESET":
      return {
        ...state,
        cart: [],
      };
  }
}

const PokeMartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  font-family: sans-serif;
`;

const PokeMartCard = styled.div`
  background-color: #242424;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 12px;
`;

const ProductList = styled.div`
  margin-bottom: 20px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #444;
  padding-bottom: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

const AddToCartButton = styled.button`
  background-color: #f0ad4e;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ShoppingCartSection = styled.div`
  margin-top: 2rem;
`;

const ShoppingCartTitle = styled.h2`
  margin-bottom: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const CartTotal = styled.div`
  text-align: right;
  margin-top: 1rem;
  font-size: 16px;
`;

const ResetButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: 1px solid #888;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PokeMart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const total = state.cart.reduce(
    (sum, obj) => sum + obj.price * obj.quantity,
    0
  );

  function handleAddToCart(itemName, id, quantity, price) {
    dispatch({
      type: "ADD_TO_CART",
      payload: { itemName, id, quantity, price },
    });
  }

  function handleIncrement(id) {
    dispatch({ type: "INCREMENT", payload: id });
  }

  function handleDecrement(id) {
    dispatch({ type: "DECREMENT", payload: id });
  }

  return (
    <PokeMartContainer>
      <PokeMartCard>
        <Title>POKÉ MART</Title>
        <ProductList>
          {state.items.map((product) => (
            <Product key={product.id}>
              <span>{`${product.name} - $${product.price}`}</span>
              <AddToCartButton
                onClick={() =>
                  handleAddToCart(product.name, product.id, 1, product.price)
                }
              >
                ADD TO CART
              </AddToCartButton>
            </Product>
          ))}
        </ProductList>

        <ShoppingCartSection>
          <ShoppingCartTitle>Shopping Cart</ShoppingCartTitle>
          {state.cart.map(
            (product) =>
              product.quantity > 0 && (
                <CartItem key={product.id}>
                  <span>{product.itemName}</span>
                  <QuantityControls>
                    <QuantityButton onClick={() => handleDecrement(product.id)}>
                      -
                    </QuantityButton>
                    <span>{product.quantity}</span>
                    <QuantityButton onClick={() => handleIncrement(product.id)}>
                      +
                    </QuantityButton>
                  </QuantityControls>
                </CartItem>
              )
          )}
          <CartTotal>
            <p>Total: ${total}</p>
          </CartTotal>
          <ResetButton onClick={() => dispatch({ type: "RESET" })}>
            Reset
          </ResetButton>
        </ShoppingCartSection>
      </PokeMartCard>
    </PokeMartContainer>
  );
}

export default PokeMart;
