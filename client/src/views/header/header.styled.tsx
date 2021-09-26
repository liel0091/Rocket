import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  margin: 0 0 60px 0;
  background: ${({ theme }) => theme?.pallet?.pallet500};
`;

export const ImageWrapper = styled.div`
  margin: 20px;
`;

export const Favorite = styled.div`
  margin: 20px;
`;

export const Drop = styled.div<{
  visible: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 60px;
  right: 20px;
  width: 200px;
  padding: 10px;
  overflow: scroll;
  border-radius: 10px 0 10px 10px;
  box-shadow: 1px 2px 10px 1px ${({ theme }) => theme.pallet.pallet500};
  background: ${({ theme }) => theme.pallet.pallet100};
  color: ${({ theme }) => theme.pallet.pallet500};

  height: ${({ visible }) => (visible ? "300px" : "0")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};

  * {
    opacity: ${({ visible }) => (visible ? "1" : "0")};
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  }

  transition: height 300ms, opacity 300ms, visibility 300ms;
`;

export const List = styled.ol`
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  font-weight: 600;
  font-size: 14px;
  list-style: none;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.pallet.pallet500};
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  * {
    margin: 5px 0;
  }
`;
