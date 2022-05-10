// noinspection CssReplaceWithShorthandSafely

import { Routes, Route, Navigate, useParams } from "react-router-dom";
import {useState} from 'react';
import styled from "styled-components";
import GlobalStyles from "../../GlobalStyles";
import { QUERIES } from "../../constants";
import starBackground from "../../assets/background-stars.svg";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Overview from '../pages/Overview';
import Structure from "../pages/Structure";
import Surface from "../pages/Surface";
import MobilePlanetNav from "../MobilePlanetNav";


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

  font-family: "Spartan", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  width: 100%;
  background-color: var(--dark-blue);
  padding: 0 25px;
  padding-top: 16px;
`;

function App() {

  const [open, setOpen] = useState(false);
     console.log(useParams(), 'value');
    return (
      <Wrapper style={{ backgroundImage: `url(${starBackground})` }}>
        <Header open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen}  />
        <Routes>
            <Route path='/' element={<Navigate to='/mercury/overview'/>} />
            <Route path='/:planet/overview' element={<Overview /> }  />
            <Route path='/:planet/structure' element={<Structure />} />
            <Route path='/:planet/surface' element={<Surface  />} />
        </Routes>
        <GlobalStyles />
      </Wrapper>
  );
}

export default App;
