import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import "jest-enzyme";
import "jest-styled-components";
import toJson from "enzyme-to-json";
import SwitchersButtons from "./SwitchersButtons";
import SwitchersButtonWrapper from "./SwitchersButtonWrapper";
import switcherButtonWrapper from "./SwitchersButtonWrapper";

const buttons = [
  {
    label: "test1",
    active: false
  },
  {
    label: "test2",
    active: true
  }
];

describe("SwitchersButtons component", () => {
  const component = mount(<SwitchersButtons searchButtonsParams={buttons} />);

  test("should call callBack and activate first button", () => {
    const notActiveButton = component.find("button");
    notActiveButton.first().simulate("click");
    expect(buttons[0].active).toBeTruthy();
  });

  test("should have props", () => {
    expect(component.props).toBeTruthy();
  });

  test("should define search-buttons-container", () => {
    expect(toJson(component.find(".search-buttons-container"))).toBeDefined();
  });

  test("should define search-buttons-container", () => {
    expect(toJson(component.find(SwitchersButtonWrapper))).toHaveLength(2);
  });
});
