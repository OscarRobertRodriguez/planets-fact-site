import styled from "styled-components";
import {QUERIES} from "../../constants";
import Source from "./Source";


const Wrapper = styled.div`
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    grid-column: 1/ 2;
    grid-row: 2/3;
    text-align: left;

  }

  @media ${QUERIES.desktopAndUp} {
     grid-row: 1/2;
    grid-column: 2/3;
    align-self: center;
    // made some changes come back
  }
`;

const Title = styled.h1`
  font-family: 'Antonio', sans-serif;
  font-size: calc(40rem / 16);
  text-transform: uppercase;
  line-height: 52px;
  padding-bottom: 25px;

  @media ${QUERIES.tabletAndUp} {
   padding-bottom: 32px; 

  }

  @media ${QUERIES.desktopAndUp} {
   font-size : calc(80rem / 16);
   padding-bottom: 40px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Spartan', sans-serif;
  font-size: calc(11rem / 16);
  line-height: 22px;
  font-weight: 400;
  padding-bottom: 32px;

  @media ${QUERIES.tabletAndUp} {
  padding-bottom: 36px;
  }

  @media ${QUERIES.desktopAndUp} {
    font-size: calc(14rem / 16);

  }
`

const Content = ({name, content, source}) => {

    return (

        <Wrapper>
            <Title>{name}</Title>
            <Subtitle>{content}</Subtitle>
            <Source source={source} />
        </Wrapper>

    )
};

export default Content;


