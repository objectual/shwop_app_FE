import React, {useState} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity, Image} from 'react-native';

import {Header, Search, ProductCard, Layout} from '../../components';
import {Images, Colors, Metrics} from '../../theme';

import styles from './styles';

const myProducts = [
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

const MyProducts = props => {
  const [search, setSearch] = useState('');

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const results = !search
    ? myProducts
    : myProducts?.filter(
        item =>
          item?.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
          item?.brand.toLowerCase().includes(search.toLocaleLowerCase()),
      );

  const renderProduct = item => {
    return (
      <ProductCard
        image={item.image}
        title={item.title}
        brand={item.brand}
        takes={item.noOfTakes}
        isRating={true}
        isPrice={true}
        isEdit={true}
        isTake={true}
        price={item.price.toFixed(2)}
        rating={item.rating}
        onPressCard={() =>
          handleNavigation('ProductInfo', {productType: 'own'})
        }
        onPressRightIcon={() => handleNavigation('EditProducts')}
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
        headerText={'My Products'}
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
        contentContainerStyle={{paddingBottom: Metrics.ratio(75)}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderProduct(item)}
      />

      <TouchableOpacity
        style={{...styles.addProductBtn}}
        onPress={() => handleNavigation('AddProducts')}>
        <Image
          source={Images.plus_floating_btn}
          style={{...styles.addProductImage}}
        />
      </TouchableOpacity>
    </Layout>
  );
};

MyProducts.defaultProps = {};

MyProducts.propTypes = {};

export default MyProducts;
