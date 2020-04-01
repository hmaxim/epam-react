import React from 'react';
import { useRouter } from 'next/router';
import AppWrapper from '../../src/containers/app/AppWrapper';
import MovieDetailsContainer from '../../src/containers/movie-details-container/MovieDetailsContainerSSR';
import { connect } from 'react-redux';
import MoviesList from '../movies-list.js';
import HeaderContainer from '../../src/containers/header-container/HeaderContainer';

const MovieDetails = () => {
  const router = useRouter();

  return (
    <AppWrapper>
      <HeaderContainer></HeaderContainer>
      <MovieDetailsContainer></MovieDetailsContainer>
      <MoviesList></MoviesList>
    </AppWrapper>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    searchParams: state.searchParams
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
