"use client";

import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <StyledContent>
      <p>Main Content Area</p>
    </StyledContent>
  );
};

const StyledContent = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: #f4f4f4;
  text-align: center;
`;

export default Content;
