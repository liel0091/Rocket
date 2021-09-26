import styled from "styled-components";

export const List = styled.ol`
  padding: 0;
  height: 600px;
  overflow-y: scroll;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  white-space: pre;
  margin: 10px 0;
  padding: 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme?.pallet?.pallet300};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const ImageWrapper = styled.div`
  margin: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export const Content = styled.span<{
  variety?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: ${({ variety, theme }) => variety === true && theme.variety.success};
  color: ${({ variety, theme }) => variety === false && theme.variety.danger};
`;

export const Section = styled.p`
  font-weight: 600;
  font-size: 10px;
`;

export const Container = styled.div`
  max-height: 590px;
`;
