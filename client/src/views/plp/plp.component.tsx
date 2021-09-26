import React from "react";
import { Query } from "react-apollo";
import {
  Container,
  SpinnerWrapper,
  ImageWrapper,
  List,
  Item,
  Section,
  Wrapper,
  Content,
  Header,
} from "./plp.styled";
import { PRODUCT_LIST_QUERY } from "./plp.data";
import logo from "../../utils/image/rocket.png";
import { Spinner, NavLink } from "../../components";

interface ListProps {
  rocket_id: string;
  rocket_name: string;
  company?: string;
  cost_per_launch?: number;
  country?: string;
  description?: string;
  active?: boolean;
}

export const PLP = () => {
  return (
    <Container>
      <Query query={PRODUCT_LIST_QUERY}>
        {({ loading, error, data }: any) => {
          if (loading)
            return (
              <SpinnerWrapper>
                <Spinner />
              </SpinnerWrapper>
            );

          // eslint-disable-next-line no-console
          if (error) console.error(error);

          return (
            <List>
              {data?.product_list?.map(
                ({
                  rocket_id,
                  rocket_name,
                  company,
                  country,
                  cost_per_launch,
                  active,
                }: ListProps) => (
                  <Item key={rocket_id}>
                    <Header>
                      <h2>{rocket_name}</h2>
                      <ImageWrapper>
                        <img
                          src={logo}
                          alt="Logo"
                          height="100px"
                          width="100px"
                        />
                      </ImageWrapper>
                    </Header>
                    <div>
                      <Content>
                        <Section>COMPANY: </Section>
                        {company}
                      </Content>
                      <Content>
                        <Section>COUNTRY: </Section>
                        {country}
                      </Content>
                      <Content>
                        <Section>COST PER LAUNCH: </Section>
                        {cost_per_launch}
                      </Content>
                      <Content variety={active}>
                        <Section>
                          {active ? "Still active!" : "Not active!"}
                        </Section>
                      </Content>
                    </div>
                    <Wrapper>
                      <NavLink id="plp-navlink" to={`/rocket/${rocket_id}`}>
                        Read more
                      </NavLink>
                    </Wrapper>
                  </Item>
                )
              )}
            </List>
          );
        }}
      </Query>
    </Container>
  );
};
