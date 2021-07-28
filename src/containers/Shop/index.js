import React from 'react';
import {View, StatusBar, FlatList, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

import {Header, Layout, ImageSlider} from '../../components';
import {Images, Colors, Metrics} from '../../theme';

const products = [
  {
    id: 1,
    images: [
      'https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/1546333/pexels-photo-1546333.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ],
    name: 'Natalia Doe',
    price: 32.18,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    images: [
      'https://images.pexels.com/photos/545004/pexels-photo-545004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ],
    name: 'Natalia Doe ',
    price: 32.18,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Shop = props => {
  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />

      <Header
        headerBgColor={Colors.White}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Shop'}
      />

      <View style={{...styles.headerSeparator}} />

      <View style={{...styles.flatListContainer}}>
        <FlatList
          data={products}
          contentContainerStyle={{...styles.contentContainerStyle}}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{...styles.cardContainer}}>
              <ImageSlider
                images={item.images}
                imageWidth={Metrics.screenWidth - 32}
                imageStyle={{...styles.imageStyle}}
              />
              <TouchableOpacity
                onPress={() =>
                  handleNavigation('ProductInfo', {productType: 'other'})
                }
                style={{...styles.cardContentContainer}}>
                <View style={{...styles.nameAndPriceRow}}>
                  <Text numberOfLines={1} style={{...styles.nameText}}>
                    {item.name}
                  </Text>
                  <View style={{...styles.priceBtn}}>
                    <Text
                      style={{...styles.priceBtnText}}>{`$${item.price}`}</Text>
                  </View>
                </View>
                <Text numberOfLines={5} style={{...styles.descriptionText}}>
                  {item.description}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Layout>
  );
};

Shop.defaultProps = {};

Shop.propTypes = {};

export default Shop;
