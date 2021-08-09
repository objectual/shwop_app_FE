import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';

import {
  Header,
  GradientButton,
  ImageSlider,
  OverlayLoader,
} from '../../components';
import {Images, Colors, Metrics} from '../../theme';
import util from '../../util';
import ApiSauce from '../../services/ApiSauce';
import {PRODUCT} from '../../config/WebServices';

import styles from './styles';

const ProductInfo = props => {
  const {productType, productId} = props.route.params;

  const userDetailsResponse = useSelector(state => state.userDetails);

  const [isLoading, setIsLoading] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (productId) {
      getProductInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const getProductInfo = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        PRODUCT(productId),
        userDetailsResponse.data.access_token,
      );
      setIsLoading(false);
      if (result.data) {
        setProductInfo(result.data);
      }
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
    }
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
        rightIcon={
          productType === 'own' && productInfo?.id
            ? Images.edit_product_info
            : null
        }
        isRightIconImg={true}
        rightBtnPress={() =>
          productType === 'own' && productInfo?.id
            ? handleNavigation('EditProducts')
            : null
        }
        rightSecIcon={
          productType === 'own' && productInfo?.id
            ? Images.delete_product_info
            : null
        }
        isRightSecIconImg={true}
        rightSecBtnPress={() =>
          productType === 'own' && productInfo?.id
            ? console.log('delete')
            : null
        }
      />

      {!isLoading && productInfo?.id ? (
        <ScrollView>
          <View style={{...styles.contentContainer}}>
            <ImageSlider
              images={productInfo?.images?.map(({path}) => path)}
              imageWidth={Metrics.screenWidth}
            />

            <View style={{...styles.detailContainer}}>
              <View style={{...styles.productNameContainer}}>
                <Text style={{...styles.productName}} numberOfLines={1}>
                  {productInfo?.title}
                </Text>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{...styles.wishlistContainer}}>
                  <Image
                    source={Images.wishlist}
                    resizeMode={'contain'}
                    style={{...styles.wishlistImage}}
                  />
                  <Text style={{...styles.wishlistText}}>Add to Wishlist</Text>
                </TouchableOpacity>
              </View>

              <View style={{...styles.priceContainer}}>
                <Text style={{...styles.priceText}}>
                  {util.currencySymbol(productInfo?.currency)}
                  {Number.isInteger(productInfo?.baseCost)
                    ? productInfo?.baseCost
                    : productInfo?.baseCost?.toFixed(2)}
                </Text>
              </View>

              <View style={{...styles.timeAndNameContainer}}>
                <Image
                  resizeMode={'contain'}
                  source={Images.clock_product_info}
                  style={{...styles.timeImage}}
                />
                <Text style={{...styles.timeText}} numberOfLines={1}>
                  {`${moment(productInfo?.createdAt).fromNow()} `}
                  <Text style={{...styles.nameText}}>
                    {productInfo?.user?.profile?.name}
                  </Text>
                </Text>
              </View>

              <View style={{...styles.ratingAndReviewsContainer}}>
                <View style={{...styles.ratingContainer}}>
                  {[1, 2, 3, 4, 5].map(item => (
                    <Image
                      style={{...styles.ratingImage}}
                      resizeMode="contain"
                      source={
                        item <= util.avgRating(productInfo?.review)
                          ? Images.star
                          : Images.empty_star
                      }
                    />
                  ))}
                </View>
                <Text style={{...styles.reviewText}}>
                  {`${productInfo?.review?.length} Reviews `}
                </Text>
                <TouchableOpacity onPress={() => handleNavigation('Reviews')}>
                  <Text style={{...styles.reviewViewBtn}}>View</Text>
                </TouchableOpacity>
              </View>

              <View style={{...styles.descriptionContainer}}>
                <Text style={{...styles.descriptionText}}>
                  {productInfo?.description}
                </Text>
              </View>

              {productType === 'other' ? (
                <View style={{...styles.buttonsRow}}>
                  <TouchableOpacity
                    onPress={() => handleNavigation('Messages')}
                    style={{...styles.chatBtn}}>
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
      ) : null}

      {!isLoading && !productInfo?.id ? (
        <View style={{...styles.notFoundContainer}}>
          <Text style={{...styles.notFoundText}}>
            {'Sorry, something went wrong.\nPlease try again later.'}
          </Text>
        </View>
      ) : null}

      <OverlayLoader isLoading={isLoading} />
    </View>
  );
};

ProductInfo.defaultProps = {};

ProductInfo.propTypes = {};

export default ProductInfo;
