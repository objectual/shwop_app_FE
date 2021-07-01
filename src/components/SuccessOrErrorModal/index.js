import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { Colors, Metrics } from '../../theme';

const SuccessOrErrorModal = props => {
  const { visible, modalType, headingText, messageText, onPressConfirm, onPressCancel } = props;

  return (
    <Spinner
      visible={visible}
      customIndicator={
        <View style={{ ...styles.container }}>
          {modalType === 'success' && (
            <Ionicons
              name={'checkmark-circle-outline'}
              size={Metrics.ratio(35)}
              color={Colors.Eucalyptus}
              style={{ ...styles.icon }}
            />
          )}

          {modalType === 'error' && (
            <Ionicons
              name={'close-circle-outline'}
              size={Metrics.ratio(35)}
              color={Colors.Punch}
              style={{ ...styles.icon }}
            />
          )}

          {modalType === 'warning' && (
            <Ionicons
              name={'alert-circle-outline'}
              size={Metrics.ratio(35)}
              color={Colors.Amber}
              style={{ ...styles.icon }}
            />
          )}

          <Text style={{ ...styles.heading }}>{headingText}</Text>
          <Text style={{ ...styles.message }}>{messageText}</Text>

          {modalType === 'warning' ? (
            <View style={{ ...styles.buttonRow }}>
              <TouchableOpacity onPress={onPressCancel} style={{ ...styles.cancelButton }}>
                <Text style={{ ...styles.buttonText }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressConfirm} style={{ ...styles.confirmButton }}>
                <Text style={{ ...styles.buttonText }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ ...styles.buttonRow }}>
              <TouchableOpacity onPress={onPressConfirm} style={{ ...styles.confirmButton }}>
                <Text style={{ ...styles.buttonText }}>Okay</Text>
              </TouchableOpacity>
            </View>
          )}
        </View >
      }
    />
  );
};

SuccessOrErrorModal.defaultProps = {
  visible: false,
  modalType: '',
  headingText: '',
  messageText: '',
  onPressConfirm: undefined,
  onPressCancel: undefined,
};

SuccessOrErrorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  modalType: PropTypes.string,
  headingText: PropTypes.string,
  messageText: PropTypes.string,
  onPressConfirm: PropTypes.func,
  onPressCancel: PropTypes.func,
};

export default SuccessOrErrorModal;
