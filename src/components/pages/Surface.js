
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import MobilePlanetNav from "../MobilePlanetNav";

import data from '../../data.js';
import {QUERIES} from "../../constants";
import PlanetImg from '../CategoryPage/PlanetImg';
import Content from "../CategoryPage/Content";
import FactBlocks from "../CategoryPage/FactBlocks";
import ButtonGroup from '../ButtonGroup/ButtonGroup';


const Wrapper = styled.div`
  color: var(--white);
  display: grid;
  justify-self: center;
  width: min(690px, 100%);
  grid-template-rows: min-content 1fr;
  max-height: 830px;



  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
    align-self: center;
    height: auto;
  
  }

  @media ${QUERIES.desktopAndUp} {
    width: min(1110px, 100%);
    grid-template-columns: 1fr min-content;
    grid-template-rows:  1fr  max-content;
    grid-column-gap: 100px;
    grid-row-gap: 40px;
    margin-top: 50px;
  }
`;




const Structure = () => {
    const {planet} = useParams();
    const filterPlanet = data.filter(item => item.name.toLowerCase() === planet);
    const array =  ['overview', 'internal structure', 'surface geology'];
    return (
        <>
            <MobilePlanetNav/>
            {filterPlanet.map(item => {
                return (
                    <Wrapper key={item.name}>
                        <PlanetImg source={item.images.planet} surfaceImg={item.images.geology} />
                        <Content name={item.name} content={item.geology.content} source={item.geology.source}/>
                        <ButtonGroup array={array} />
                        <FactBlocks radius={item.radius} temp={item.temperature} revolution={item.revolution}
                                    rotation={item.rotation}/>
                    </Wrapper>
                )
            })}


        </>
    )
}

export default Structure;