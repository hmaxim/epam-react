import styled from "styled-components";

const searchWrapper = styled.div`
  height: 25%;
  width: 100%;

  .search-container {
    padding: 0 9.5%;

    .search-title {
      color: #ffffff;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
      vertical-align: top;
    }

    button {
      width: 150px;
      height: 39.5px;
      font-size: 20px;
      vertical-align: top;
    }

    .search-buttons-container {
      display: flex;
      align-items: center;
      color: white;
      padding: 20px 0;

      span {
        letter-spacing: 1px;
        margin-right: 30px;
        font-size: 20px;
      }

      button {
        width: auto;
        border: none;
        cursor: pointer;
      }
    }
  }
`;

export default searchWrapper;
