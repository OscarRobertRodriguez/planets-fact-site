

import styled from 'styled-components';
import {QUERIES} from "../../constants";
import {useParams} from 'react-router-dom';
import data from "../../data";




const Wrapper = styled.div`
     height: 305px;
     display: grid;
     place-content: center;
  position: relative;
  isolation: isolate;
  margin-bottom: 80px;

  @media ${QUERIES.tabletAndUp} {
    height: 435px;
    grid-column: 1/-1;
    grid-row: 1/2;
    margin-bottom: 100px;
  }


  @media ${QUERIES.desktopAndUp} {
    grid-column: 1/2;
    grid-row: 1/3;
    height: auto;
    margin-bottom: 0;
  }

    
`;



const Img = styled.img`
     display: block;
     width: ${props => props.size.phone || "800px"};

  @media ${QUERIES.tabletAndUp} {
    width: ${props => props.size.tab || "300px"};
  }

  @media ${QUERIES.desktopAndUp} {
    width: ${props => props.size.desk || "300px"};

  }
    `;

const SurfaceImg = styled.img`
  position: absolute;
  bottom: -10px;
  display: block;
  width: 100px;
  justify-self: center;
  z-index: 10;

  @media ${QUERIES.tabletAndUp} {
    width: 163px;
    bottom: -50px;
  }
`;


const PlanetImg = ({source, surfaceImg}) => {

    const {planet} = useParams();
    const [filterPlanet] = data.filter(item => item.name.toLowerCase() === planet);
    console.log(filterPlanet.imgSizes, 'phone')


    return (
        <Wrapper>
                <Img  src={source} alt={planet} size={filterPlanet.imgSizes}/>
                <SurfaceImg src={surfaceImg}/>
        </Wrapper>
    )
}

export default PlanetImg;