"use client";

import React from 'react';
import styled from 'styled-components';

const NavbarBottom = () => {
  return (
    <StyledNavbar>
      <h1>Navbar Bottom</h1>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
`;


export default NavbarBottom;
