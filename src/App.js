// noinspection CssReplaceWithShorthandSafely

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { QUERIES } from "./constants";
import starBackground from "./assets/background-stars.svg";
import Nav from "./components/Nav/Nav";
import Mercury from "./components/pages/Mercury";
import Venus from "./components/pages/Venus";
import Earth from "./components/pages/Earth";
import Mars from "./components/pages/Mars";
import Jupiter from "./components/pages/Jupiter";
import Saturn from "./components/pages/Saturn";
import Uranus from "./components/pages/Uranus";
import Neptune from "./components/pages/Neptune";
import Header from "./components/Header";

var Wrapper = styled.div`
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
  padding: 0 23px;
  padding-top: 16px;
`;

function App() {
  return (
    <Router>
      <Wrapper style={{ backgroundImage: `url(${starBackground})` }}>
        <Header />
        <Nav Link={Link} />
        <Routes>
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
        </Routes>
        <GlobalStyles />
      </Wrapper>
    </Router>
  );
}

export default App;
