import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modalize} from 'react-native-modalize';

import {Metrics, Colors} from '../../theme';

import styles from './styles';

const CustomModalize = props => {
  const {modalTopOffset, modalizeRef, onClosed, headerText, children} = props;

  return (
    <Modalize
      ref={modalizeRef ? modalizeRef : null}
      modalStyle={{...styles.modalStyle}}
      handleStyle={{...styles.handleStyle}}
      overlayStyle={{...styles.overlayStyle}}
      handlePosition={'inside'}
      HeaderComponent={
        <>
          <TouchableOpacity onPress={onClosed} style={styles.close}>
            <MaterialCommunityIcons
              name="close"
              size={Metrics.ratio(10)}
              color={Colors.Charade}
            />
          </TouchableOpacity>
          <View style={styles.HeaderView}>
            <Text style={styles.HeaderText}>{headerText}</Text>
          </View>
        </>
      }
      modalTopOffset={modalTopOffset}
      onClosed={onClosed}>
      {children}
    </Modalize>
  );
};

CustomModalize.defaultProps = {
  data: [],
  isLoading: false,
  alwaysOpen: 0,
  modalTopOffset: 0,
};

CustomModalize.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  renderItem: PropTypes.node.isRequired,
  headerText: PropTypes.string,
  footerComponent: PropTypes.node,
  alwaysOpen: PropTypes.number,
  modalTopOffset: PropTypes.number,
  modalizeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any}),
  ]),
  onClosed: PropTypes.func,
  onOpened: PropTypes.func,
};

export default CustomModalize;
