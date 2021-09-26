import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled(Link)`
  border-radius: 10px;
  padding: 8px 12px;
  margin: 8px 4px;
  height: fit-content;
  font-weight: 600;
  font-size: 10px;
  text-decoration: unset;
  background: ${({ theme }) => theme.variety.info};
  color: rgb(0, 0, 0);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 3px ${({ theme }) => theme.pallet.pallet100};
  }

  &:active,
  &:focus {
    box-shadow: inset 0px 0px 3px ${({ theme }) => theme.pallet.pallet100};
  }
`;
