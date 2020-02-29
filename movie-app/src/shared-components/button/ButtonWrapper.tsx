import styled from "styled-components";

const buttonWrapper = styled.button`
  background: #f65261;
  color: #ffffff;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    opacity: 0.8;
  }
`;

export default buttonWrapper;
