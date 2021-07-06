import React, {useState} from 'react';
import {View, StatusBar, FlatList} from 'react-native';

import styles from './styles';

import {Header, Search, ProductCard, Layout} from '../../components';
import {Images, Colors} from '../../theme';

const myWishList = [
  {
    id: 1,
    image: Images.FollowCardImg,
    title: 'Nike New Era Shoes',
    brand: 'Nike Corporation',
    noOfTakes: 3,
    price: 32.18,
    rating: 3,
  },
  {
    id: 2,
    image: Images.FollowCardImg,
    title: 'Shoes Cop',
    brand: 'Nike Corporation',
    noOfTakes: 2,
    price: 30,
    rating: 2,
  },
];

const WishList = props => {
  const [search, setSearch] = useState('');

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const results = !search
    ? myWishList
    : myWishList?.filter(
        item =>
          item?.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
          item?.brand.toLowerCase().includes(search.toLocaleLowerCase()),
      );

  const renderWishListProduct = item => {
    return (
      <ProductCard
        image={item.image}
        title={item.title}
        brand={item.brand}
        takes={item.noOfTakes}
        isRating={true}
        isWishlist={true}
        isPrice={true}
        isTake={true}
        price={item.price.toFixed(2)}
        rating={item.rating}
        onPressCard={() =>
          handleNavigation('ProductInfo', {productType: 'other'})
        }
        onPressRightIcon={() => {}}
      />
    );
  };

  return (
    <Layout {...props} isLogedIn={true}>
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
        headerText={'My Wishlist'}
      />

      <View style={{...styles.headerSeparator}}>
        <Search
          value={search}
          placeholder="Search Here.."
          onChangeText={value => setSearch(value)}
          onPressSearch={() => {}}
          onPressRemove={() => setSearch('')}
        />
      </View>

      <FlatList
        data={results}
        contentContainerStyle={{...styles.contentContainerStyle}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderWishListProduct(item)}
      />
    </Layout>
  );
};

WishList.defaultProps = {};

WishList.propTypes = {};

export default WishList;
