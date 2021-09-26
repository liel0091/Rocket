import React, { useEffect, useState } from "react";
import { Query } from "react-apollo";
import { PRODUCT_QUERY } from "./pdp.data";
import {
  ContainerWrapper,
  Container,
  Content,
  Label,
  Wrapper,
  Header,
  Icon,
  SpinnerWrapper,
} from "./pdp.styled";
import logo from "../../utils/image/rocket.png";
import { Spinner, NavLink, Button } from "../../components";

export const PDP = (props) => {
  const [isActive, setActive] = useState(false);
  const rocket_id = props.match.params.rocker_id;

  const getStorage = (key) => {
    const local_list = localStorage.getItem(key);
    return local_list === null || local_list === undefined
      ? null
      : JSON.parse(local_list);
  };

  const setStorage = (key, list) => {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(list));
  };

  const addProduct = (list) => {
    const found = list?.filter((i) => i === rocket_id);
    return found?.length === 0 ? list?.concat(rocket_id) : list;
  };

  const removeProduct = (list) => {
    return list?.filter((i) => i !== rocket_id);
  };

  const toggleFavorite = (list) => {
    isActive
      ? setStorage("local_favo", removeProduct(list))
      : setStorage("local_favo", addProduct(list));

    setActive(!isActive);
  };

  const handleFavorite = () => {
    const list = getStorage("local_favo");

    list === null
      ? setStorage("local_favo", [rocket_id])
      : toggleFavorite(list);
  };

  useEffect(() => {
    const check = getStorage("local_favo")?.filter((i) => i === rocket_id);
    check?.length > 0 ? setActive(true) : setActive(false);
  }, [rocket_id]);

  return (
    <Container>
      <Query query={PRODUCT_QUERY} variables={{ rocket_id }}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <SpinnerWrapper>
                <Spinner />
              </SpinnerWrapper>
            );

          // eslint-disable-next-line no-console
          if (error) console.error(error);

          const {
            rocket_name,
            description,
            country,
            company,
            cost_per_launch,
            success_rate_pct,
            active,
          } = data.product;

          return (
            <ContainerWrapper>
              <img src={logo} alt="Logo" height="100px" width="100px" />
              <Header>
                <div>
                  <h1>{rocket_name}</h1>
                  <p>{description}</p>
                </div>
                <Icon
                  onClick={handleFavorite}
                  active={isActive}
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
                </Icon>
              </Header>
              <Content>
                <Label>COUNTRY:</Label>
                {country}
              </Content>
              <Content>
                <Label>COMPANY:</Label>
                {company}
              </Content>
              <Content>
                <Label>COST PER LAUNCH:</Label> {cost_per_launch}
              </Content>
              <Content>
                <Label>SUCCESS RATE:</Label> {success_rate_pct}
              </Content>
              <Content variety={active}>
                {active ? "ACTIVE" : "INACTIVE"}
              </Content>
              <Wrapper>
                <NavLink id="pdp-navlink" to="/">
                  Go Back
                </NavLink>
                <Button
                  variety="success"
                  onClick={() =>
                    alert(
                      "Chosen api did unfortunately not support any mutations yet. "
                    )
                  }
                >
                  Buy
                </Button>
              </Wrapper>
            </ContainerWrapper>
          );
        }}
      </Query>
    </Container>
  );
};
