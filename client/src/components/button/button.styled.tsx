import styled from "styled-components";

export const Wrapper = styled.button<{
  disabled: boolean;
  variety: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  padding: 8px 12px;
  margin: 24px 0;
  font-weight: 600;
  font-size: 10px;
  text-decoration: unset;
  color: rgb(0, 0, 0);
  cursor: pointer;
  ${({ theme, variety }) => {
    switch (variety) {
      case "primary":
        return `
                  background: ${theme.variety.primary}; 
                  color: ${theme.variety.secondary}; 
                `;
      case "secondary":
        return `
                  background: ${theme.variety.secondary}; 
                  color: ${theme.variety.primary}; 
                `;
      case "danger":
        return `
                  background: ${theme.variety.danger}; 
                  color: ${theme.variety.primary}; 
                `;
      case "warning":
        return `
                  background: ${theme.variety.warning}; 
                  color: ${theme.variety.primary}; 
                `;
      case "success":
        return `
                  background: ${theme.variety.success}; 
                  color: ${theme.variety.primary}; 
                `;
      case "info":
      default:
        return `
                background: ${theme.variety.info}; 
                color: ${theme.variety.primary}; 
              `;
    }
  }};

  &:hover {
    box-shadow: 0px 0px 3px ${({ theme }) => theme.pallet.pallet100};
  }

  &:active {
    box-shadow: inset 0px 0px 3px ${({ theme }) => theme.pallet.pallet100};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
