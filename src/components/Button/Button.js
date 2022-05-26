import styled from "styled-components";
import {NavLink, Link, useParams} from 'react-router-dom';
import { QUERIES } from "../../constants";
import data from '../../data';


const Wrapper = styled(NavLink)`
  width: 100%;
  padding: 15px 20px;
  height: 40px;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 17px;
  align-content: center;
  background-color: transparent;
  border: 1px solid rgba(255,255,255, .2);
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: var(--dark-grey);
    border: 1px solid var(--dark-grey);
  }

  &.active {
    opacity: 1;
    background-color: ${props => `var(${props.inputColor})` || "transparent"};
    border: ${props => `1px solid var(${props.inputColor})` || "transparent"};
  }


  @media ${QUERIES.desktopAndUp} {
     padding: 23px 28px;

  }
  &  h4, span {
    color: var(--white);
    font-size: calc(9rem / 16);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.92px;
    font-family: 'Spartan', sans-serif;

    @media ${QUERIES.desktopAndUp} {
       font-size: calc(12rem / 16);
    }
  }
`;

const IndexText = styled.span`
  opacity: 0.5 ;
`;


const Button = ({index, children, path}) => {

    const {planet} = useParams();
    const [filterPlanet] = data.filter(item => item.name.toLowerCase() === planet);
           path =  path.replace(/\s+/g, '-');

    return (
       <Wrapper to={`/${planet}/${path}`} inputColor={filterPlanet.color}  >
           <IndexText>{`0${index}`}</IndexText>
           {children}
       </Wrapper>
    )
};

export default Button;
