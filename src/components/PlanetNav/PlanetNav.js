import styled from "styled-components";
import {QUERIES} from "../../constants";
import {Link, NavLink} from 'react-router-dom';

import data from "../../data";


const Wrapper = styled.div`
  display:none;
  width: min(665px, 100%);
  padding-top: 45px;

  @media ${QUERIES.tabletAndUp} {
    display: initial;
  }

  @media ${QUERIES.desktopAndUp} {
   padding-top: 0;  
    height: 65px;

  }
`;

const ListMenu = styled.ul`
  list-style-type: none;
  display:flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  
 
`;

const ListItem = styled.li`
`;


const StyledLink = styled(NavLink)`
  height: 100%;
   text-decoration: none;
   color: var(--white);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  padding-bottom: 5px;
  cursor: pointer;
  font-family: 'Spartan', sans-serif;
  @media ${QUERIES.desktopAndUp} {
    padding-bottom: 0;
    padding-top: 30px;
    border-top: 4px solid transparent;
  }
  
  &.active {
    

    @media ${QUERIES.tabletAndUp} {
      border-bottom: ${props => `4px solid var(${props.inputcolor})` || "#fff"};
    }

    @media ${QUERIES.desktopAndUp} {
      border-bottom: none;
      border-top: ${props => `4px solid var(${props.inputcolor})` || "#fff"};
    }
   
  }
`;



const PlanetNav = () => {
    return (
        <Wrapper>
            <ListMenu>
                {data.map((planet, index) => (
                        <StyledLink key={planet.name} inputcolor={planet.color} to={`/${String(planet.name).toLowerCase()}/overview`}>
                            {planet.name}
                        </StyledLink>
                ))}
            </ListMenu>
        </Wrapper>)

};

export default PlanetNav;
