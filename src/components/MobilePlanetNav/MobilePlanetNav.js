import styled from "styled-components";
import {NavLink, useParams} from 'react-router-dom';
import { QUERIES } from "../../constants";
import data from '../../data';


const Wrapper = styled.div`
 color: #fff;
  border-bottom: 1px solid RGBA(255, 255, 255, 0.2);
  align-items: center;
  justify-content:  space-between;
  margin: 0 -25px;
  padding: 0 25px;
  display :flex;
  @media ${QUERIES.tabletAndUp} {
   display: none;

  }
`;

const StyledLink = styled(NavLink)`
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-family: 'Spartan', sans-serif;
  font-size: calc(10rem / 16);;
  font-weight: 700;
  opacity: 0.5;
  letter-spacing: 1.92px;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  
  &.active {
    opacity: 1;
    border-bottom: ${props => `4px solid var(${props.inputcolor})` || "4px solid #fff"};
  }

  
`;





const MobilePlanetNav = () => {
    const {planet} = useParams();

    let [filterPlanet] = data.filter(item => item.name.toLowerCase() === planet);

    if(!filterPlanet) {
        filterPlanet = 'mercury';
    }

    return (
     <Wrapper>
         <StyledLink to={`/${planet}/overview`} inputcolor={filterPlanet.color}  replace >overview</StyledLink>
         <StyledLink to={`/${planet}/internal-structure`} inputcolor={filterPlanet.color}  replace  >structure</StyledLink>
         <StyledLink to={`/${planet}/surface-geology`}  inputcolor={filterPlanet.color}  replace   >surface</StyledLink>
     </Wrapper>
 )
};


export default MobilePlanetNav;