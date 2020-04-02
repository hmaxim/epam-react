// const register = require('@babel/register').default;
// register({ extensions: ['.ts','.tsx', '.js', '.jsx'] });
// require('./express.js');

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getNavUrl } from '../src/constants/constants';
import { connect } from 'react-redux';

const IndexApp = props => {
  const router = useRouter();

  const url = `/search${getNavUrl(props.searchParams)}`;
  useEffect(() => {
    router.push(url);
  }, []);
  return <div></div>;
};

const mapStateToProps = state => {
  return {
    searchParams: state.searchParams
  };
};

export default connect(mapStateToProps, null)(IndexApp);
