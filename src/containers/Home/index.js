import React from 'react';
import {Text} from 'react-native';

import styles from './styles';
import {Layout} from '../../components';

const Home = props => {
  return (
    <Layout {...props}>
      <Text style={{...styles.heading}}>Home Screen</Text>
    </Layout>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
