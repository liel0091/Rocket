import React, { useState, useRef } from "react";
import {
  Wrapper,
  ImageWrapper,
  Drop,
  Favorite,
  List,
  ListItem,
} from "./header.styled";
import { Button } from "../../components";
import { useClickOutside } from "../../hooks";

export const Header = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [productList, setProductList] = useState(["No item"]);

  const openDropDown = () => {
    setVisible(!visible);
    const local = localStorage.getItem("local_favo");

    if (local !== null) {
      setProductList(JSON.parse(local));
    }
  };

  const clearDropDown = () => {
    setVisible(false);
    setProductList(["No item"]);
    localStorage.removeItem("local_favo");
  };

  const handleRemove = (item: string) => {
    const newList = productList.filter((product) => product !== item);
    localStorage.setItem("local_favo", JSON.stringify(newList));
    setProductList(newList);
  };

  const handleClickOutside = () => {
    setVisible(false);
  };

  useClickOutside(ref, handleClickOutside);

  return (
    <div>
      <Wrapper>
        <ImageWrapper>
          <img
            alt="Fly a way!"
            height="40px"
            src="https://www.iconpacks.net/icons/1/free-rocket-icon-1206-thumb.png"
          />
        </ImageWrapper>
        <h1>ROCKET STORE</h1>
        <Favorite ref={ref}>
          <Button variety="info" onClick={openDropDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </Button>
          <Drop visible={visible}>
            <List>
              {productList.map((product, i) => (
                <ListItem key={`${i}_product`}>
                  <p>{product}</p>{" "}
                  <Button
                    variety="danger"
                    onClick={() => handleRemove(product)}
                  >
                    X
                  </Button>
                </ListItem>
              ))}
            </List>
            <Button
              disabled={productList.length === 0}
              variety="primary"
              value="Clear ALL items!"
              onClick={clearDropDown}
            >
              Clear ALL items!
            </Button>
          </Drop>
        </Favorite>
      </Wrapper>
    </div>
  );
};
