import styled from "styled-components";

const inputWrapper = styled.input`
  width: calc(100% - 190px);
  height: 30px;
  padding: 5px 15px;
  color: #ffffff;
  margin-right: 10px;
  background: rgba(85, 85, 85, 0.5);
  border: none;
  border-radius: 4px;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export default inputWrapper;
