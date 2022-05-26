import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Hamburger from "../../assets/icon-hamburger.svg";
import PlanetNav from "../PlanetNav/PlanetNav";

const Wrapper = styled.header`
  color: var(--white);
  font-family: "Antonio", sans-serif;
  border-bottom: 1px solid RGBA(255, 255, 255, 0.2);
  margin: 0 -24px;
  padding: 0 24px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 27px;
    padding-top: 32px;

  }

  @media ${QUERIES.desktopAndUp} {
    flex-direction: row;
    align-content: center;
    padding-top: 0;

  }
`;

const Title = styled.h5`
  font-size: calc(28rem / 16);
  letter-spacing: -1.05px;

  @media ${QUERIES.desktopAndUp} {
   margin-right: auto;
    padding-top: 22px;
  }
`;

const Icon = styled.img`
  cursor: pointer;
  opacity: ${({open}) => open ? '.25' : 'revert' };
  transition: opacity .2s ease;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Header = ({open, setOpen}) => {
  return (
    <Wrapper>
      <Title>The Planets</Title>
      <Icon open={open} onClick={() => setOpen(!open)} src={Hamburger} />
        <PlanetNav/>
    </Wrapper>
  );
};

export default Header;
