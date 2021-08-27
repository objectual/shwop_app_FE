import React from 'react';
import {View, Text, Image} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import PropTypes from 'prop-types';

import styles from './styles';

import {Images, Metrics} from '../../theme';

const CustomModalSelector = props => {
  const {
    value,
    options,
    onChange,
    label,
    error,
    initValue,
    initValueTextStyle,
  } = props;

  return (
    <View style={{marginBottom: error ? Metrics.ratio(0) : Metrics.ratio(20)}}>
      <View style={{...styles.inputContainer}}>
        {value?.key ? <Text style={{...styles.labelText}}>{label}</Text> : null}
        <ModalSelector
          style={{...styles.modalSelectorStyle}}
          selectStyle={{...styles.selectStyle}}
          initValueTextStyle={{
            ...styles.initValueTextStyle,
            ...initValueTextStyle,
          }}
          optionTextStyle={{...styles.optionTextStyle}}
          cancelTextStyle={{...styles.cancelTextStyle}}
          selectTextStyle={{...styles.selectTextStyle}}
          data={options}
          initValue={initValue}
          key={label}
          onChange={onChange}
        />
        <View style={{...styles.dropdownIconContainer}}>
          <Image
            style={{...styles.dropdownIcon}}
            resizeMode="contain"
            source={Images.picker_arrow}
          />
        </View>
      </View>
      {error ? <Text style={{...styles.errorText}}> {error}</Text> : null}
    </View>
  );
};

CustomModalSelector.defaultProps = {
  value: {},
  options: [],
  onChange: undefined,
  label: '',
  initValue: '',
  error: '',
  initValueTextStyle: {},
};

CustomModalSelector.propTypes = {
  value: PropTypes.object,
  options: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  initValue: PropTypes.string,
  error: PropTypes.string,
  initValueTextStyle: PropTypes.object,
};

export default CustomModalSelector;
