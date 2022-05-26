
import styled from "styled-components";
import {QUERIES} from "../../constants";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 8px;
  padding-top: 28px;
  padding-bottom: 40px;
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(4, 1fr);
    grid-column: 1/ -1;
    grid-row: 3/ 4;
    grid-column-gap: 13px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-column-gap: 30px;
    padding-top: 80px;
  }
`;

const FactBlock = styled.div`
  border: 1px solid rgba(255, 255, 255, .2);
  padding: 13px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column; 
    align-items: start;
    
  }

  @media ${QUERIES.desktopAndUp} {
    flex-direction: column;
    align-items: start;
    max-width: 255px;
    height: 128px;
    
  }
  
  & p {
    opacity: .5;
    font-weight: 700;
    font-size: calc(8rem / 16);
    letter-spacing: .72px;
    
    @media ${QUERIES.desktopAndUp} {
      font-size: calc(11rem / 16);
    }
  }
  
  & h3 {
    font-family: 'Antonio', sans-serif;
    font-size: calc(20rem / 16);
    letter-spacing: .75px;
    font-weight: 500;

    @media ${QUERIES.tabletAndUp} {
      font-size: calc(24rem / 16);
    }

    @media ${QUERIES.desktopAndUp} {
      font-size: calc(40rem / 16);

    }
  }

`

const FactBlocks = ({rotation, revolution, radius, temp}) => {
    return (
        <Wrapper>
            <FactBlock>
                <p>rotation time</p>
                <h3>{rotation}</h3>
            </FactBlock>
            <FactBlock>
                <p>revolution time</p>
                <h3>{revolution}</h3>
            </FactBlock>
            <FactBlock>
                <p>radius</p>
                <h3>{radius}</h3>
            </FactBlock>
            <FactBlock>
                <p>average temp</p>
                <h3>{temp}</h3>
            </FactBlock>
        </Wrapper>
    )
}

export default FactBlocks;




