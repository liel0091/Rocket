import styled, { createGlobalStyle } from "styled-components";
import { Breakpoint, Theme } from "./utils";
export const GlobalStyle = createGlobalStyle<{
  theme: Theme;
}>`
    * { 
        color: ${({ theme }) => theme?.variety?.primary};
        font-family: ${({ theme }) => theme?.font};
        font-size: 12px; 
        font-weight: 300; 
    }

    body { 
        margin: 0;
        background: ${({ theme }) => theme?.pallet?.pallet200};
        font-family: ${({ theme }) => theme?.font};
    }

    h1 {
        font-family: ${({ theme }) => theme?.font};
        font-size: 24px; 
        font-weight: 400;
    }
    
    h2 {
        font-family: ${({ theme }) => theme?.font};
        font-size: 14px; 
        font-weight: 500;
    }

    h3 {
        font-family: ${({ theme }) => theme?.font};
        font-size: 12px; 
        font-weight: 500;
    }

    p {  
        font-family: ${({ theme }) => theme?.font};
        font-size: 12px; 
        font-weight: 400;
    }
`;

export const Container = styled.main`
  background: ${({ theme }) => theme?.pallet?.pallet500};
  border-radius: 20px;
  margin: 40px 0;
  padding: 20px;
  min-height: 670px;

  @media (min-width: ${Breakpoint.Mobile}) {
    margin: 40px 20%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  height: 150px;
  padding: 20px;
  background: ${({ theme }) => theme?.pallet?.pallet500};
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  > span {
    * {
      ${({ theme }) => theme?.pallet?.pallet200};
    }
  }

  button {
    background: ${({ theme }) => theme?.pallet?.pallet100};
    border: 2px solid ${({ theme }) => theme?.pallet?.pallet100};
    border-radius: 20px;
    padding: 6px 8px;
    font-weight: 600;

    &:hover {
      background: ${({ theme }) => theme?.pallet?.pallet200};
      border: 2px solid ${({ theme }) => theme?.pallet?.pallet200};
    }

    &:active {
      border: 2px solid ${({ theme }) => theme?.pallet?.pallet500};
    }
  }
`;

export const HeadlineContent = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  margin: 0 10px;
  color: ${({ theme }) => theme?.variety?.primary};
`;
