import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity, Text, Keyboard} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {Metrics, Colors} from '../../theme';

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
              <Ionicons
                name="close-circle-outline"
                size={Metrics.ratio(20)}
                color={Colors.Silver_Chalice}
              />
            </TouchableOpacity>
          </View>
        ))}
        <View style={{...styles.tagTextInputContainer}}>
          <TextInput
            placeholder={placeholder}
            value={value}
            style={{...styles.tagTextInput}}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onPressOut={Keyboard.dismiss}
          />
          <TouchableOpacity onPress={addTag} style={{...styles.addBtn}}>
            <Ionicons
              size={Metrics.ratio(30)}
              name="md-add-circle-sharp"
              color={Colors.Affair}
              style={styles.addBtnIcon}
            />
          </TouchableOpacity>
        </View>
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
