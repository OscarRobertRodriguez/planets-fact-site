import styled from "styled-components";
import {QUERIES} from "../../constants";
import IconSource from '../../assets/icon-source.svg';

const Wrapper = styled.div`
  font-size: calc(12rem / 16);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    justify-content: start;

  }

  @media ${QUERIES.desktopAndUp} {
    font-size: calc(14rem / 16);
  }
`;
const SourceLink = styled.div`
  color: #fff;
  opacity: .7;

  & a {
    color: inherit;
    opacity: inherit;
    font-weight: 700;
    padding: 0 4px;
  }
`;



const Source = ({source}) => {
    return (
        <Wrapper>
            <SourceLink>
                <span>Source :</span>
                <a href={source}>Wikipedia</a>
            </SourceLink>
            <img src={IconSource} alt='icon source' />
        </Wrapper>
    )
}

export default Source;