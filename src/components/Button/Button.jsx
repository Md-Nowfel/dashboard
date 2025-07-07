import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => `var(${props.color})` || "var(--color-light)"};
  color: var(--color-light);
  border: none;
  border-radius: 50px;
  padding: 18px 22px;
  width: ${(props) => `${props.width}px` || "100px"};
  text-align: center;
  font-size: var(--font-size-medium);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-dark-hover);
  }

  &:active {
    background-color: var(--color-dark-active);
  }
`;

const Button = ({ children, onClick, color, width }) => {
  return (
    <StyledButton onClick={onClick} color={color} width={width}>
      {children}
    </StyledButton>
  );
};

export default Button;
