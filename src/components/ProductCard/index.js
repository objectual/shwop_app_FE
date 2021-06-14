import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import {Images} from '../../theme';

import styles from './style';

const ProductCard = props => {
  const {
    image,
    title,
    brand,
    takes,
    isRating,
    rating,
    price,
    rightIcon,
    onPressRightIcon,
    onPressCard,
    isWishlist,
    isPrice,
  } = props;

  const totalRating = [1, 2, 3, 4, 5];

  return (
    <TouchableOpacity onPress={onPressCard} style={{...styles.searchContainer}}>
      <Image style={{...styles.productImg}} source={image} />
      <View style={{...styles.cardMain}}>
        <Text style={{...styles.productTitle}}>{title}</Text>
        <Text style={{...styles.productDesc}}>{brand}</Text>

        <View style={{...styles.ratingContainer}}>
          {isRating &&
            totalRating.map(item => (
              <Image
                style={{...styles.ratingImg}}
                resizeMode="contain"
                source={item <= rating ? Images.star : Images.empty_star}
              />
            ))}
        </View>

        <View style={{...styles.takesMainContainer}}>
          <View style={{...styles.takesContainer}}>
            <Image
              style={{...styles.takeImg}}
              resizeMode="contain"
              source={Images.play_purple}
            />
            <Text style={{...styles.takeTxt}}>{takes}</Text>
          </View>
          {isPrice ? (
            <View style={{...styles.priceContainer}}>
              <Text style={{...styles.price}}>{price}</Text>
            </View>
          ) : null}
        </View>
      </View>
      {isWishlist ? (
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={{...styles.wishlistContainer}}>
          <Image
            resizeMode="contain"
            style={{...styles.wishlist_img}}
            source={rightIcon}
          />
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

ProductCard.defaultProps = {};
ProductCard.propTypes = {
  image: PropTypes.object || PropTypes.number,
  title: PropTypes.any,
  brand: PropTypes.any,
  takes: PropTypes.any,
  rating: PropTypes.number,
  isRating: PropTypes.bool,
  isPrice: PropTypes.bool,
  isWishlist: PropTypes.bool,
  price: PropTypes.number,
  rightIcon: PropTypes.object || PropTypes.number,
  onPressRightIcon: PropTypes.func,
  onPressCard: PropTypes.func,
};

export default ProductCard;
