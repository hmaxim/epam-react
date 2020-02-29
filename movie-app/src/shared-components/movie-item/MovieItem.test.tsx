import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import { IMovie } from "../../interfaces/Movie";
import MovieItem from "./MovieItem";
import "jest-enzyme";
import "jest-styled-components";
import MovieItemWrapper from "./MovieItemWrapper";
import toJson from "enzyme-to-json";

const MOVIE: IMovie = {
  id: 0,
  title: "Titanic",
  tagline: null,
  vote_average: 4,
  vote_count: 0,
  release_date: "1997",
  poster_path: "../../assets/images/netflix-streaming-vs-traditional-cable.jpg",
  overview:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  budget: 0,
  revenue: 0,
  runtime: 150,
  genres: ["Action"]
};


describe("MovieItem Component", () => {
  const component = mount(<MovieItem {...MOVIE} />);

  test("should have props", () => {
    expect(component.props).toBeTruthy()
  });

  test("should be rendered", () => {
    expect(toJson(component.find(MovieItemWrapper))).toMatchSnapshot();
  });

  test("should have movie-poster", () => {
    expect(toJson(component.find(".movie-poster"))).toBeDefined();
  });

  test("should have movie-title", () => {
    expect(toJson(component.find(".movie-title"))).toBeDefined();
  });

  test("should have  movie-year", () => {
    expect(toJson(component.find(".movie-year"))).toBeDefined();
  });

  // test("should receive props", () => {
  //   let spy =  jest.spyOn(component.instance(), 'navigate')
  //   .mockImplementation(() => 8)

  //   component.find(MovieItemWrapper).simulate('click');
  //   expect(spy).toHaveBeenCalled()
  // });
});
