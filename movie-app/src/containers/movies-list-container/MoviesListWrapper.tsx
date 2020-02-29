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
`;

export default MoviesListWrapper;
