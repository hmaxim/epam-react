import 'jsdom-global/register';
import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import { IMovie } from '../../interfaces/IMovie';
import MovieItem from './MovieItem';
import 'jest-enzyme';
import 'jest-styled-components';
import MovieItemWrapper from './MovieItemWrapper';

const MOVIE: IMovie = {
  id: 0,
  title: 'Titanic',
  tagline: null,
  vote_average: 4,
  vote_count: 0,
  release_date: '1997',
  poster_path: '../../assets/images/netflix-streaming-vs-traditional-cable.jpg',
  overview:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  budget: 0,
  revenue: 0,
  runtime: 150,
  genres: ['Action'],
};

describe('MovieItem Component', () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<MovieItem {...MOVIE} />);
  });

  test('should be rendered', () => {
    expect(component.find(MovieItemWrapper)).toMatchSnapshot();
  });

  test('should does click', () => {
    component.find(MovieItemWrapper).simulate('click');
  });
});
