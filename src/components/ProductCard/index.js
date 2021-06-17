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
    onPressRightIcon,
    onPressCard,
    isWishlist,
    isEdit,
    isPrice,
    containerStyle,
  } = props;

  const totalRating = [1, 2, 3, 4, 5];

  return (
    <TouchableOpacity
      onPress={onPressCard}
      disabled={onPressCard == null ? true : false}
      style={{...styles.searchContainer, ...containerStyle}}>
      <View style={{...styles.productImgContainer}}>
        <Image
          resizeMode={'cover'}
          style={{...styles.productImg}}
          source={image}
        />
      </View>
      <View style={{...styles.cardMain}}>
        <View style={{...styles.productNameAndIconContainer}}>
          <View style={{...styles.productNameContainer}}>
            <Text style={{...styles.productTitle}} numberOfLines={1}>
              {title}
            </Text>
            <Text style={{...styles.productDesc}} numberOfLines={1}>
              {brand}
            </Text>
          </View>
          {isWishlist && (
            <TouchableOpacity onPress={onPressRightIcon}>
              <Image
                resizeMode="contain"
                style={{...styles.wishlist_img}}
                source={Images.wishlist}
              />
            </TouchableOpacity>
          )}
          {isEdit && (
            <TouchableOpacity onPress={onPressRightIcon}>
              <Image
                resizeMode="contain"
                style={{...styles.wishlist_img}}
                source={Images.edit_btn}
              />
            </TouchableOpacity>
          )}
        </View>

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
            <Text style={{...styles.takeTxt}}>{`${takes} Takes`}</Text>
          </View>
          {isPrice ? (
            <View style={{...styles.priceContainer}}>
              <Text style={{...styles.price}}>{`$${price}`}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

ProductCard.defaultProps = {
  title: '',
  brand: '',
  takes: 0,
  isRating: false,
  rating: 0,
  price: 0,
  onPressRightIcon: undefined,
  onPressCard: undefined,
  isWishlist: false,
  isEdit: false,
  isPrice: false,
  containerStyle: {},
};

ProductCard.propTypes = {
  image: PropTypes.object || PropTypes.number,
  title: PropTypes.any,
  brand: PropTypes.any,
  takes: PropTypes.any,
  rating: PropTypes.number,
  isRating: PropTypes.bool,
  isPrice: PropTypes.bool,
  isWishlist: PropTypes.bool,
  isEdit: PropTypes.bool,
  price: PropTypes.number,
  onPressRightIcon: PropTypes.func,
  onPressCard: PropTypes.func,
  containerStyle: PropTypes.object,
};

export default ProductCard;
