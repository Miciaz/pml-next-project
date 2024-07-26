"use client";

import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';


//qua uguale all'altro componente lo metto come funzione
export function NavbarTop(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <StyledNavbar>
      <HamburgerMenu onClick={toggleMenu}>
        &#9776;
      </HamburgerMenu>
      {isMenuOpen && (
        <DropdownMenu>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </DropdownMenu>
      )}
      <HomeLink href="/">Home</HomeLink>
      <SearchContainer>
        <SearchIcon onClick={toggleSearch}>
          &#128269;
        </SearchIcon>
        {isSearchOpen && <SearchInput type="text" placeholder="Search..." />}
      </SearchContainer>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 3rem;
  left: 1rem;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
    padding: 0.5rem 0;
    text-decoration: none;
    &:hover {
      background-color: #444;
    }
  }
`;

const HomeLink = styled.a`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
`;

const SearchInput = styled.input`
  position: absolute;
  top: 2rem;
  right: 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;



