import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Search = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Search Screen</Text>
    </View>
  );
};

Search.defaultProps = {};

Search.propTypes = {};

export default Search;
