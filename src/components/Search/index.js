import React from 'react';
import {View, TouchableOpacity, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';

import {Images} from '../../theme';

import styles from './style';

const Search = props => {
  const {placeholder, onPressSearch, onPressRemove, onChangeText, value} =
    props;

  return (
    <View style={{...styles.searchContainer}}>
      <View style={{...styles.searchInputContainer}}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={{...styles.searchInput}}
          placeholder={placeholder}
        />
      </View>
      <View style={{...styles.remove_Search}}>
        {value.length >= 1 ? (
          <TouchableOpacity onPress={onPressRemove}>
            <Image
              style={{...styles.search_remove}}
              source={Images.search_remove}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPressSearch}>
            <Image
              style={{...styles.search_remove}}
              source={Images.Search_Bottom_Tab}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

Search.defaultProps = {};
Search.propTypes = {
  placeholder: PropTypes.any,
  onPressRemove: PropTypes.func,
  onPressSearch: PropTypes.func,
};

export default Search;
