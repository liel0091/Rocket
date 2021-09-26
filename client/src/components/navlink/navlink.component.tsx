import React from "react";
import { Navigation } from "./navlink.styled";

interface NavLinkProps {
  id: string;
  to: string;
  children: string | JSX.Element;
}

export const NavLink = ({ id, to, children }: NavLinkProps) => (
  <Navigation id={id} to={to}>
    {children}
  </Navigation>
);
