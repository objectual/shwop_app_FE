import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

import {Images, Metrics, Colors} from '../../theme';

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
    isTake,
    isStock,
    stocks,
    onPressIncStock,
    onPressDeccStock,
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

        <View
          style={{
            ...styles.takesMainContainer,
            justifyContent: isStock || isTake ? 'space-between' : 'flex-end',
          }}>
          {isStock ? (
            <View style={{...styles.stockContainer}}>
              <TouchableOpacity
                onPress={onPressDeccStock}
                disabled={stocks === 0}>
                <MaterialCommunityIcons
                  name={'minus-circle-outline'}
                  color={stocks > 0 ? Colors.Affair : Colors.silver}
                  size={Metrics.ratio(20)}
                />
              </TouchableOpacity>

              <Text style={{...styles.stockNumber}}>{stocks}</Text>

              <TouchableOpacity onPress={onPressIncStock}>
                <MaterialCommunityIcons
                  name={'plus-circle-outline'}
                  color={Colors.Affair}
                  size={Metrics.ratio(20)}
                />
              </TouchableOpacity>
            </View>
          ) : null}

          {isTake ? (
            <View style={{...styles.takesContainer}}>
              <Image
                style={{...styles.takeImg}}
                resizeMode="contain"
                source={Images.play_purple}
              />
              <Text style={{...styles.takeTxt}}>{`${takes} Takes`}</Text>
            </View>
          ) : null}

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
  isTake: false,
  isStock: false,
  stocks: 0,
  onPressIncStock: undefined,
  onPressDeccStock: undefined,
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
  isTake: PropTypes.bool,
  price: PropTypes.number,
  isStock: PropTypes.bool,
  stocks: PropTypes.number,
  onPressIncStock: PropTypes.func,
  onPressDeccStock: PropTypes.func,
  onPressRightIcon: PropTypes.func,
  onPressCard: PropTypes.func,
  containerStyle: PropTypes.object,
};

export default ProductCard;
