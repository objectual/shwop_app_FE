import React, {useRef} from 'react';
import {View, TouchableOpacity, TextInput, Image, Keyboard} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

import {Images} from '../../theme';

const Search = props => {
  const {
    value,
    placeholder,
    onChangeText,
    onPressSearch,
    onPressRemove,
    searchContainerStyle,
  } = props;

  const textInputRef = useRef();

  return (
    <View style={{...styles.searchContainer, ...searchContainerStyle}}>
      <TextInput
        ref={textInputRef}
        value={value}
        onChangeText={onChangeText}
        style={{...styles.searchInput}}
        placeholder={placeholder}
        onPressOut={Keyboard.dismiss}
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
  searchContainerStyle: {},
};

Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onPressSearch: PropTypes.func,
  onPressRemove: PropTypes.func,
  searchContainerStyle: PropTypes.object,
};

export default Search;
