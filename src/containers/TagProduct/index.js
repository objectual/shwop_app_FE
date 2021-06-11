import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';

import {Header, Search, ProductCard} from '../../components';
import {Images, Colors} from '../../theme';

import styles from './styles';

const TagProduct = props => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    alert('searched');
  };

  const handleWishlistRemove = () => {
    alert('removed');
  };

  const handleSearchRemove = () => {
    setSearch('');
  };

  const handleCard = () => {
    alert('Card');
  };

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />
      <Header
        {...props}
        headerBgColor={Colors.White}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Tag Products'}
      />
      <View style={{...styles.headerSeparator}}>
        <Search
          onPressSearch={handleSearch}
          onPressRemove={handleSearchRemove}
          placeholder="Search Here.."
          onChangeText={value => setSearch(value)}
          value={search}
        />
      </View>
      <View style={{...styles.productContainer}}>
        <ProductCard
          title="Nike New Era Shoes"
          brand="Nike Corporation"
          takes="2 Takes"
          rating={3}
          price="$ 312.1"
          rightIcon={Images.wishlist}
          onPressRightIcon={handleWishlistRemove}
          onPressCard={handleCard}
        />
      </View>
    </View>
  );
};

TagProduct.defaultProps = {};

TagProduct.propTypes = {};

export default TagProduct;
