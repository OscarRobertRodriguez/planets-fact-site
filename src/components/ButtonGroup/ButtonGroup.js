import Button from "../Button/Button";
import styled from "styled-components";
import {QUERIES} from "../../constants";

const Wrapper = styled.div`
  grid-row-gap: 16px;
  width: 281px;
  align-self: center;
  justify-self: end;
  display: none;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 25px;
    display: grid;
  }
      
  @media ${QUERIES.desktopAndUp} {
    width: 350px;
    padding-left:0;
    grid-column: 2/3;

  }
`;


const ButtonGroup = ({array}) => {
    return (
        <Wrapper>
         {array.map((item, index) => {
            return  (
              <Button key={item} index={index + 1} path={item}>
                  <h4>{item}</h4>
              </Button>
            )
            })}
        </Wrapper>
    )
}


export default ButtonGroup;