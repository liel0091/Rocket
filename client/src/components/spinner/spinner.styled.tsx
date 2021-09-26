import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
`;

export const Loader = styled.div`
  border: 16px solid ${({ theme }) => theme?.pallet?.pallet100};
  border-radius: 50%;
  border-top: 16px solid ${({ theme }) => theme?.variety?.info};
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;
