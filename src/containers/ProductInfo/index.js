import React from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';

import {Header, GradientButton, ImageSlider} from '../../components';
import {Images, Colors, Metrics} from '../../theme';

import styles from './styles';

const ProductInfo = props => {
  const {productType} = props.route.params;

  const images = [
    'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];

  const totalRating = [1, 2, 3, 4, 5];

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={Colors.Concrete}
        barStyle="dark-content"
      />
      <Header
        headerBgColor={Colors.Concrete}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Product Info'}
        rightIcon={productType === 'own' ? Images.edit_product_info : null}
        isRightIconImg={true}
        rightBtnPress={() =>
          productType === 'own' ? handleNavigation('EditProducts') : null
        }
        rightSecIcon={productType === 'own' ? Images.delete_product_info : null}
        isRightSecIconImg={true}
        rightSecBtnPress={() =>
          productType === 'own' ? console.log('delete') : null
        }
      />
      <ScrollView>
        <View style={{...styles.contentContainer}}>
          <ImageSlider images={images} imageWidth={Metrics.screenWidth} />

          <View style={{...styles.detailContainer}}>
            <View style={{...styles.productNameContainer}}>
              <Text style={{...styles.productName}} numberOfLines={1}>
                Nike Sports shoes UK4 Nike Sports shoes UK4
              </Text>
              <TouchableOpacity style={{...styles.wishlistContainer}}>
                <Image
                  source={Images.wishlist}
                  resizeMode={'contain'}
                  style={{...styles.wishlistImage}}
                />
                <Text style={{...styles.wishlistText}}>Add to Wishlist</Text>
              </TouchableOpacity>
            </View>

            <View style={{...styles.priceContainer}}>
              <Text style={{...styles.priceText}}>$32.18</Text>
            </View>

            <View style={{...styles.timeAndNameContainer}}>
              <Image
                resizeMode={'contain'}
                source={Images.clock_product_info}
                style={{...styles.timeImage}}
              />
              <Text style={{...styles.timeText}} numberOfLines={1}>
                07 Hours ago by{' '}
                <Text style={{...styles.nameText}}>Emma Norman</Text>
              </Text>
            </View>

            <View style={{...styles.ratingAndReviewsContainer}}>
              <View style={{...styles.ratingContainer}}>
                {totalRating.map(item => (
                  <Image
                    style={{...styles.ratingImage}}
                    resizeMode="contain"
                    source={item <= 3 ? Images.star : Images.empty_star}
                  />
                ))}
              </View>
              <Text style={{...styles.reviewText}}>3,448 Reviews </Text>
              <TouchableOpacity
                onPress={() => handleNavigation('Reviews')}>
                <Text style={{...styles.reviewViewBtn}}>View</Text>
              </TouchableOpacity>
            </View>

            <View style={{...styles.descriptionContainer}}>
              <Text style={{...styles.descriptionText}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </View>

            {productType === 'other' ? (
              <View style={{...styles.buttonsRow}}>
                <TouchableOpacity style={{...styles.chatBtn}}>
                  <Text style={{...styles.chatBtnText}}>Chat</Text>
                </TouchableOpacity>
                <GradientButton
                  label={'Buy Now'}
                  onPress={() => handleNavigation('PlaceOrder')}
                  containerStyle={{...styles.gradientBtnContainer}}
                  gradientContainer={{...styles.gradientContainer}}
                  labelStyle={{...styles.gradientLabel}}
                />
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

ProductInfo.defaultProps = {};

ProductInfo.propTypes = {};

export default ProductInfo;
