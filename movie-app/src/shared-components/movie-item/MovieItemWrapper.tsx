import styled from "styled-components";

const MovieItemWrapper = styled.div`
  width: 323px;
  margin: 40px 20px;

  .movie-info {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .movie-title {
      font-size: 20px;
      font-weight: 600;
    }

    .movie-genre {
    }

    .movie-year {
      padding: 3px 5px;
      border: 1px solid white;
      border-radius: 3px;
    }
  }
`;

MovieItemWrapper.displayName = "MovieItemWrapper";

export default MovieItemWrapper;
