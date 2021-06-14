import React from 'react';
import {View, TouchableOpacity, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';

import {Images} from '../../theme';

import styles from './style';

const Search = props => {
  const {value, placeholder, onChangeText, onPressSearch, onPressRemove} =
    props;

  return (
    <View style={{...styles.searchContainer}}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{...styles.searchInput}}
        placeholder={placeholder}
      />
      {value.length >= 1 ? (
        <TouchableOpacity onPress={onPressRemove}>
          <Image style={{...styles.closeIcon}} source={Images.search_remove} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressSearch}>
          <Image
            style={{...styles.searchIcon}}
            source={Images.Search_Bottom_Tab}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

Search.defaultProps = {
  placeholder: '',
  value: '',
  onChangeText: undefined,
  onPressSearch: undefined,
  onPressRemove: undefined,
};

Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onPressSearch: PropTypes.func,
  onPressRemove: PropTypes.func,
};

export default Search;
