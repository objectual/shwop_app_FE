import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const CustomTagInput = props => {
  const {
    value,
    list,
    removeTag,
    addTag,
    onChangeText,
    onSubmitEditing,
    placeholder,
    errorText,
  } = props;

  return (
    <View>
      <View style={{...styles.inputAndTextContainer}}>
        {list.map((val, index) => (
          <View style={{...styles.tagTextConatiner}}>
            <Text style={{...styles.tagText}}>{val}</Text>
            <TouchableOpacity
              onPress={() => removeTag(index)}
              style={{...styles.removeBtn}}>
              <Text style={{...styles.removeBtnText}}>&times;</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TextInput
          placeholder={placeholder}
          value={value}
          style={{...styles.tagTextInput}}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <TouchableOpacity onPress={addTag} style={{...styles.addBtn}}>
          <Text style={{...styles.addBtnText}}>&#x2b;</Text>
        </TouchableOpacity>
      </View>
      <Text style={{...styles.errorText}}>{errorText}</Text>
    </View>
  );
};

CustomTagInput.defaultProps = {
  value: '',
  list: [],
  removeTag: undefined,
  addTag: undefined,
  onChangeText: undefined,
  onSubmitEditing: undefined,
  errorText: '',
  placeholder: '',
};

CustomTagInput.propTypes = {
  value: PropTypes.string,
  list: PropTypes.array,
  removeTag: PropTypes.func,
  addTag: PropTypes.func,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
};

export default CustomTagInput;
