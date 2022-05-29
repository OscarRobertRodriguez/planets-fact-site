// noinspection CssReplaceWithShorthandSafely

import { Routes, Route, Navigate, useParams } from "react-router-dom";
import {useState} from 'react';
import styled from "styled-components";
import GlobalStyles from "../../GlobalStyles";
import { QUERIES } from "../../constants";
import starBackground from "../../assets/background-stars.svg";
import Overview from "../pages/Overview";
import Structure from "../pages/Structure";
import Surface from "../pages/Surface";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";


const Wrapper = styled.div`
  --mercury: HSL(194, 48%, 49%);
  --venus: HSL(33, 82%, 61%);
  --earth: HSL(263, 67%, 51%);
  --mars: HSL(10, 63%, 51%);
  --jupiter: HSL(2, 68%, 53%);
  --saturn: HSL(17, 73%, 46%);
  --uranus: HSL(169, 73%, 44%);
  --neptune: HSL(222, 87%, 56%);
  --white: HSL(0, 0%, 100%);
  --dark-blue: HSL(240, 67%, 8%);
  --dark-grey: HSL(240, 17%, 26%);
  --light-grey: HSL(240, 6%, 54%);
  --star-wars: HSL(183, 89%, 54%);

  font-family: "Spartan", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  width: 100%;
  background-color: var(--dark-blue);
  padding: 0 25px;
  padding-top: 16px;
  padding-bottom: 47px;
  display: grid;
  grid-template-rows: min-content min-content  1fr;

  @media ${QUERIES.tabletAndUp} {
    grid-template-rows: min-content 1fr;

  }

  
  @media ${QUERIES.desktopAndUp} {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 0;

  }
`;

const RouteWrapper = styled(Routes)`
  display: grid;
  justify-content: center;
`;



function App() {

  const [open, setOpen] = useState(false);

  let {planet} = useParams();
     console.log(planet, 'value');
    return (
      <Wrapper style={{ backgroundImage: `url(${starBackground})` }}>
        <Header open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen}  />
        <RouteWrapper>

            <Route path='/' element={<Navigate to='/mercury/overview' replace/>} />
            <Route path='/:planet/overview' element={<Overview/> }  />
            <Route path='/:planet/internal-structure' element={<Structure/>} />
            <Route path='/:planet/surface-geology' element={<Surface/>} />
            <Route path="*" element={<NotFound />} />
        </RouteWrapper>

        <GlobalStyles />
      </Wrapper>
  );
}

export default App;
