import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../constants";
import data from "../../data.json";
import Planet from "../Nav/ListPlanet";
import Chevron from "../../assets/icon-chevron.svg";

const Wrapper = styled.nav`
  padding-top: 44px;
  min-height: 100%;
`;

const ListMenu = styled.ul`
  display: grid;
  grid-template-rows: 45px repeat(6, 65px) 45px;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  border-bottom: 1px solid RGBA(255, 255, 255, 0.2);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: RGBA(255, 255, 255, 0.1);
    padding: 10px 10px;
    padding-bottom: 20px;
  }

  &:first-of-type {
    align-self: start;
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h5`
  color: var(--white);
  font-family: "Spartan", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  line-height: 25px;
  letter-spacing: 1.36px;
  padding-left: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ChevronIcon = styled.img``;

const Nav = ({ Link }) => {
  return (
    <Wrapper>
      <ListMenu>
        {data.map((planet, index) => (
          <ListItem key={index}>
            <StyledLink to={`/${String(planet.name).toLowerCase()}`}>
              <Info>
                <Planet className="planet" color={`var(${planet.color})`} />
                <Name>{planet.name}</Name>
              </Info>
              <ChevronIcon src={Chevron} />
            </StyledLink>
          </ListItem>
        ))}
      </ListMenu>
    </Wrapper>
  );
};

export default Nav;
