import styled from "styled-components";

export interface ISwitcherButton {
    active: boolean;
    firstElement: boolean;
    lastElement: boolean;
}

const switcherButtonWrapper = styled.button`
  background: ${(props: ISwitcherButton) =>
    props.active ? "#F65261" : "rgba(85, 85, 85, 0.5)"};
  border-radius: 3px;
  border-top-left-radius: ${(props: ISwitcherButton) =>
    props.firstElement ? "3px" : "0px"};
  border-bottom-left-radius: ${(props: ISwitcherButton) =>
    props.firstElement ? "3px" : "0px"};
  border-bottom-right-radius: ${(props: ISwitcherButton) =>
    props.lastElement ? "3px" : "0px"};
  border-top-right-radius: ${(props: ISwitcherButton) =>
    props.lastElement ? "3px" : "0px"};
  color: white;
  outline: none;
  text-transform: uppercase;
  width: auto;
  padding: 5px 10px;
`;

export default switcherButtonWrapper;
