import styled from "styled-components";

const ListHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 9.5%;
  color: white;
  background: #555555;

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
      height: 30px;
    }
  }
`;

export default ListHeaderWrapper;
