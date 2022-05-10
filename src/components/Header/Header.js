import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Hamburger from "../../assets/icon-hamburger.svg";

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
`;

const Title = styled.h5`
  font-size: 28px;
  letter-spacing: -1.05px;
`;

const Icon = styled.img`
  cursor: pointer;
  opacity: ${({open}) => open ? '.25' : 'revert' };
  transition: opacity .2s ease;
`;

const Header = ({open, setOpen}) => {
  return (
    <Wrapper>
      <Title>The Planets</Title>
      <Icon open={open} onClick={() => setOpen(!open)} src={Hamburger} />
    </Wrapper>
  );
};

export default Header;
