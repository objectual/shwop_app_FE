import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

const VideoBuyCard = props => {
  const {onPress, cardImage, cardTitle, cardPrice} = props;

  return (
    <View style={{...styles.cardArea}}>
      <View style={{...styles.imageText}}>
        <Image style={{...styles.ImageCard}} source={cardImage} />
        <View style={{...styles.buyArea}}>
          <Text style={{...styles.buyProductTitle}}>{cardTitle}</Text>
          <Text style={{...styles.buyProductPrice}}>{cardPrice}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={{...styles.buyBtn}}>
        <Text style={{...styles.BuyBtnText}}>BUY NOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.close}}>
        <MaterialCommunityIcons
          name="close"
          size={Metrics.ratio(10)}
          color={Colors.Black}
        />
      </TouchableOpacity>
    </View>
  );
};

VideoBuyCard.defaultProps = {
  cardImage: undefined,
  cardTitle: '',
  cardPrice: '',
  onPress: undefined,
};

VideoBuyCard.propTypes = {
  cardImage: PropTypes.object || PropTypes.number,
  cardTitle: PropTypes.string,
  cardPrice: PropTypes.string,
  onPress: PropTypes.func,
};

export default VideoBuyCard;
