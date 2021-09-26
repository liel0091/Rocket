import React from "react";
import { Wrapper } from "./button.styled";

interface ButtonProps {
  name?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  value?: string;
  children?: JSX.Element | string;
  onClick?: () => void;
  variety?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
}

export const Button = ({
  name,
  variety = "primary",
  disabled = false,
  type = "button",
  children,
  value,
  onClick,
}: ButtonProps) => (
  <Wrapper
    variety={variety}
    name={name}
    value={value}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Wrapper>
);
