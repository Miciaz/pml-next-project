"use client";

import React from 'react';
import styled from 'styled-components';

const NavbarBottom = () => {
  return (
    <StyledNavbar>
      <ButtonContainer>
        <button>Home</button>
        <button>Squadra</button>
        <button>Mercato</button>
      </ButtonContainer>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    background-color: #555;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #777;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    }
  }
`;

export default NavbarBottom;
