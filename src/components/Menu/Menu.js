import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { QUERIES } from "../../constants";
import data  from "../../data.js";
import Planet from ".//ListPlanet";
import Chevron from "../../assets/icon-chevron.svg";

const Wrapper = styled.nav`
  min-height: 100%;
  transition: transform .2s ease-in-out;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-110%)' };
  background: var(--dark-blue);
  position: absolute;
  top: 75px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 25px;
  padding-top: 44px;
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

const Menu = ({ open, setOpen }) => {

  return (
    <Wrapper open={open}>
      <ListMenu>
        {data.map((planet, index) => (
          <ListItem key={index} onClick={() => setOpen(!open)}>
            <StyledLink to={`/${String(planet.name).toLowerCase()}/overview`}>
              <Info>
                <Planet color={ `var(${planet.color})`} />
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

export default Menu;
