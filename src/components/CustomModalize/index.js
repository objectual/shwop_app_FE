import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Modalize} from 'react-native-modalize';

import {Colors} from '../../theme';

import styles from './styles';

const CustomModalize = props => {
  const {
    modalizeRef,
    modalStyle,
    handleStyle,
    overlayStyle,
    alwaysOpen,
    modalTopOffset,
    onClosed,
    onOpened,
    footerComponent,
    headerComponent,
    data,
    renderItem,
    children,
    isLoading,
    modalizeType,
  } = props;

  const renderListEmptyComponent = () => {
    return (
      <View style={{...styles.emptyComponentContainer}}>
        {isLoading && <ActivityIndicator color={Colors.Affair} size="small" />}
        <Text style={{...styles.emptyComponentText}}>
          {isLoading ? 'Loading, please wait.' : 'No record found.'}
        </Text>
      </View>
    );
  };

  return (
    <React.Fragment>
      {modalizeType === 'flatList' && (
        <Modalize
          ref={modalizeRef ? modalizeRef : null}
          modalStyle={{...styles.modalStyle, ...modalStyle}}
          handleStyle={{...styles.handleStyle, ...handleStyle}}
          overlayStyle={{...styles.overlayStyle, ...overlayStyle}}
          handlePosition={'inside'}
          alwaysOpen={alwaysOpen}
          adjustToContentHeight={false}
          modalTopOffset={modalTopOffset}
          onClosed={onClosed}
          onOpened={onOpened}
          FooterComponent={footerComponent ? footerComponent : null}
          HeaderComponent={headerComponent ? headerComponent : null}
          flatListProps={
            data
              ? {
                  data: data,
                  ListEmptyComponent: renderListEmptyComponent,
                  renderItem: renderItem,
                  keyExtractor: item => item.id,
                  showsVerticalScrollIndicator: false,
                }
              : null
          }
        />
      )}

      {modalizeType === 'children' && (
        <Modalize
          ref={modalizeRef ? modalizeRef : null}
          modalStyle={{...styles.modalStyle, ...modalStyle}}
          handleStyle={{...styles.handleStyle, ...handleStyle}}
          overlayStyle={{...styles.overlayStyle, ...overlayStyle}}
          handlePosition={'inside'}
          alwaysOpen={alwaysOpen}
          adjustToContentHeight={false}
          modalTopOffset={modalTopOffset}
          onClosed={onClosed}
          onOpened={onOpened}
          FooterComponent={footerComponent ? footerComponent : null}
          HeaderComponent={headerComponent ? headerComponent : null}>
          {children}
        </Modalize>
      )}
    </React.Fragment>
  );
};

CustomModalize.defaultProps = {
  modalizeType: '',
  modalStyle: {},
  handleStyle: {},
  overlayStyle: {},
  alwaysOpen: 0,
  modalTopOffset: 0,
  data: [],
  isLoading: false,
};

CustomModalize.propTypes = {
  modalizeType: PropTypes.string,
  modalizeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any}),
  ]),
  modalStyle: PropTypes.object,
  handleStyle: PropTypes.object,
  overlayStyle: PropTypes.object,
  alwaysOpen: PropTypes.number,
  modalTopOffset: PropTypes.number,
  onClosed: PropTypes.func,
  onOpened: PropTypes.func,
  footerComponent: PropTypes.node,
  headerComponent: PropTypes.node,
  data: PropTypes.array,
  renderItem: PropTypes.node,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default CustomModalize;
