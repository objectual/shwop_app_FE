import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import {Images, Metrics, Colors} from '../../theme';

const VideoBuyCard = () => {
  return (
    <View style={styles.cardArea}>
      <View style={styles.imageText}>
        <Image style={styles.ImageCard} source={Images.cardProduct} />
        <View style={styles.buyArea}>
          <Text style={styles.buyProductTitle}>The New Products</Text>
          <Text style={styles.buyProductPrice}>$15.00</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.buyBtn}>
        <Text style={styles.BuyBtnText}>BUY NOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.close}>
        <MaterialCommunityIcons
          name="close"
          size={Metrics.ratio(15)}
          color={Colors.Black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoBuyCard;
