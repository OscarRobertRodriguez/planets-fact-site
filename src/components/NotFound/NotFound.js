import styled from "styled-components";
import {Link} from "react-router-dom";
import {QUERIES} from "../../constants";


const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  justify-items: center;
`;


const Title = styled.h1`
  color: var(--star-wars);
  font-size: calc(40rem / 16);
  align-content: start;
  padding-top: 5rem;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 0;
  }

  @media ${QUERIES.desktopAndUp} {
    width: min(calc(1110rem / 16), 100%);
    font-size: calc(70rem / 16);
  }
`;


const Subtitle = styled.p`
  color: var(--star-wars);
  font-size: calc(30rem / 16);
  padding-top: 20px;
  text-align: center;


  @media ${QUERIES.tabletAndUp} {
    font-size: calc(30rem / 16);
  }
`

const StyledLink = styled(Link)`
  color: inherit;
  padding: 0 15px;
  font-family: 'Antonio', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: letter-spacing .2s ease;
  
  &:hover {
    letter-spacing: 1px;
  }
`


const NotFound = () => {
    return (
        <Wrapper>
            <Title>A long time ago in a galaxy far, far away....</Title>
            <Subtitle>Ooops you went too far<StyledLink to={`/mercury/overview`}  replace >click here</StyledLink>to go back to our solar system</Subtitle>
        </Wrapper>
    )
};


export default NotFound;