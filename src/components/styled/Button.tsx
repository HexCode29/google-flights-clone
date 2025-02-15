import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the airplane icon rotation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Keyframes for the loading spinner
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled button component
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #0056b3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
}

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Airplane icon with rotation animation
const AirplaneIcon = styled.span`
  display: inline-block;
  margin-left: 8px;
  font-size: 20px;
  /* animation: ${rotate} 2s linear infinite; */
`;

// Loading spinner
export const LoadingSpinner = styled.div<{bgColor?: string}>`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  top: 25%;
  left: 45%;
  transform: translate(-50%, -50%);
`;

const ButtonText = styled.span<{loading: boolean}>`
  visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
`;

export const ButtonWithIcon = ({text='send', type, handleClick=() => {}, loading}) => {
  return (
    <StyledButton onClick={handleClick} disabled={loading} type={type}>
      {loading === true && <LoadingSpinner />}
      <ButtonText loading={loading}>
        {text}
        <AirplaneIcon>✈️</AirplaneIcon>
      </ButtonText>
    </StyledButton>
  );
};
