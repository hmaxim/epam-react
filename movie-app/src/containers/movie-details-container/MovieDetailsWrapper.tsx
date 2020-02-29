import styled from "styled-components";

interface IMovieDetails {
    score: number;
}

const MovieDetailsWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 9.5%;

  .movie-poster {
    width: 323px;
  }

  .movie-details {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 375px);

    .movie-title-container {
      display: flex;
      align-items: center;

      .title {
        color: white;
        display: inline-block;
        margin-right: 40px;
      }

      .score {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: ${(props: IMovieDetails) => {
          if (props.score <= 1.9) {
            return "#f65261";
          } else if (props.score >= 2 && props.score <= 3.9) {
            return "orange";
          } else {
            return "#A1E66F";
          }
        }};
        border: 1px solid white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }

    .genre {
      color: white;
    }

    .year-time {
      color: #f65261;
      span {
        display: inline-block;
        margin-right: 40px;
      }
    }

    .description {
      margin-top: 50px;
      color: white;
      font-size: 14px;
    }
  }
`;

export default MovieDetailsWrapper;
