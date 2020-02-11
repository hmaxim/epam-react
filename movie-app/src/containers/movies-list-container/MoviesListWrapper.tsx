import styled from "styled-components";

interface IMoviesList {
  isEmptyList: boolean;
}

const MoviesListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${(props: IMoviesList) =>
    props.isEmptyList ? "center" : "flex-start"};
  padding: 0 8%;
  overflow-y: auto;
  height: 50%;

  h1 {
    color: white;
    font-size: 45px;
    letter-spacing: 1.5px;
  }
`;

export default MoviesListWrapper;
