import styled from "styled-components";

export const Container = styled.div`
  max-height: 590px;
`;

export const ContainerWrapper = styled.div`
  border-top: 2px solid ${({ theme }) => theme.pallet.pallet200};
  padding: 40px 0;
  margin: 40px 0;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div<{
  variety?: boolean;
}>`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  white-space: pre;
  font-weight: 400;
  padding: 10px 0;
  margin: 8px 0;

  ${({ variety, theme }) =>
    variety === true && `color: ${theme.variety.success}; font-weight: 600;`};
  ${({ variety, theme }) =>
    variety === false && `color: ${theme.variety.danger}; font-weight: 600;`};
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.svg<{
  active: boolean;
}>`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  cursor: pointer;

  &:hover {
    stroke: ${({ theme }) => theme.variety.info};
  }

  &:active,
  &:focus {
    stroke: ${({ theme }) => theme.variety.danger};
  }

  stroke: ${({ active, theme }) =>
    active ? theme.variety.danger : theme.variety.secondary};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  > div {
    max-width: 300px;
    margin: 0 40px 0 0;
  }
`;
