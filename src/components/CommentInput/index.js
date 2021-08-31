import React, {useRef} from 'react';
import {View, TextInput, Image, TouchableOpacity, Keyboard} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

import {Colors, Images} from '../../theme';

const CommentInput = props => {
  const {
    container,
    nestedStyling,
    keyboardType,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    righticon,
    input,
    isIcons,
    iconView,
    onPress,
  } = props;

  const ref = useRef();

  return (
    <View style={{...styles.mainView}}>
      <View style={{...styles.mainContainer, ...container}}>
        <View style={{...styles.nestedContainer, ...nestedStyling}}>
          {righticon && (
            <View style={{...styles.smileView}}>
              <Image
                style={{...styles.smileImg}}
                source={Images.smiling_face}
                resizeMode="contain"
              />
            </View>
          )}
          <TextInput
            multiline
            ref={ref}
            value={value}
            keyboardType={keyboardType}
            onChangeText={text => onChangeText(text)}
            style={{...styles.inputContainer, ...input}}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={Colors.silver}
            onPressOut={Keyboard.dismiss}
          />
        </View>
      </View>
      {isIcons && (
        <TouchableOpacity
          style={{...styles.inputView, ...iconView}}
          onPress={onPress}>
          <Image
            style={{...styles.imageSend}}
            resizeMode="contain"
            source={Images.send}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
CommentInput.defaultProps = {
  container: {},
  nestedStyling: {},
  keyboardType: 'default',
  iconView: {},
  onPress: {},
  value: '',
  onChangeText: () => {},
  placeholder: 'Enter your email',
  secureTextEntry: false,
  isTitle: true,
  isIcons: true,
  righticon: true,
};

CommentInput.propTypes = {
  container: PropTypes.object,
  nestedStyling: PropTypes.object,
  keyboardType: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  isTitle: PropTypes.bool,
  input: PropTypes.object,
  isIcons: PropTypes.bool,
  iconView: PropTypes.object,
  righticon: PropTypes.bool,
  onPress: PropTypes.any,
};
export default CommentInput;
