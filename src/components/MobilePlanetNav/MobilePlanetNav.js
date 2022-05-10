import styled from "styled-components";
import {Link, useParams} from 'react-router-dom';
import {useState} from "react";
const Wrapper = styled.div`
 color: #fff;
  border-bottom: 1px solid RGBA(255, 255, 255, 0.2);
  align-items: center;
  justify-content:  space-between;
  margin: 0 -25px;
  padding: 0 25px;
  display :flex;
`;

const StyledLink = styled(Link)`
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-family: 'Spartan', sans-serif;
  font-size: 10px;
  font-weight: 700;
  opacity: 0.5;
  letter-spacing: 1.92px;
  cursor: pointer;
  color: #fff;
`;



const MobilePlanetNav = () => {
    const {planet} = useParams();

    return (
     <Wrapper>
         <StyledLink to={`/${planet}/overview`} replace >overview</StyledLink>
         <StyledLink to={`/${planet}/structure`} replace  >structure</StyledLink>
         <StyledLink to={`/${planet}/surface`} replace  >surface</StyledLink>
     </Wrapper>
 )
};


export default MobilePlanetNav;