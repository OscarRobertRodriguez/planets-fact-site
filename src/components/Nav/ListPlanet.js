import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ListPlanet = ({ color }) => {
  return <Wrapper style={{ background: color }}></Wrapper>;
};

export default ListPlanet;
