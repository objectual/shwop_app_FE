import React from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Colors, Images, Metrics} from '../../theme';

const CommentInput = props => {
  const {
    container,
    nestedStyling,
    keyboardType,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    icon,
    righticon,
    input,
    isIcons,
    lefticon,
    iconView,
    onPress,
  } = props;

  return (
    <View style={styles.mainView}>
      <View style={[styles.mainContainer, container]}>
        <View style={[styles.nestedContainer, nestedStyling]}>
          {righticon && (
            <View style={styles.smileView}>
              <Image
                style={{...styles.smileImg}}
                source={Images.smiling_face}
                resizeMode="contain"
              />
            </View>
          )}
          <TextInput
            value={value}
            keyboardType={keyboardType}
            onChangeText={text => onChangeText(text)}
            style={[styles.inputContainer, input]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={Colors.silver}
          />
        </View>
      </View>
      {isIcons && (
        <TouchableOpacity
          style={[styles.inputView, iconView]}
          onPress={onPress}>
          <Image
            style={styles.imageSend}
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
  icon: (
    <MaterialCommunityIcons
      name="close"
      size={Metrics.ratio(10)}
      color={Colors.Charade}
    />
  ),
  isTitle: true,
  isIcons: true,
  righticon: true,
  lefticon: (
    <MaterialCommunityIcons
      name="close"
      size={Metrics.ratio(10)}
      color={Colors.Charade}
    />
  ),
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
  lefticon: PropTypes.any,
  icon: PropTypes.any,
  onPress: PropTypes.any,
};
export default CommentInput;
