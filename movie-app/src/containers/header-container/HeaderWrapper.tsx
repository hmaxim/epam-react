import styled from "styled-components";

const headerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /* background-image: url('../../assets/images/netflix-streaming-vs-traditional-cable.jpg') no-repeat; */

  .app-title {
    color: #f65261;
    height: 20px;
    font-size: 20px;
    padding: 20px 60px;
  }

  .search-icon {
    color: #F65261;
    cursor: pointer;
  }
`;

export default headerWrapper;
