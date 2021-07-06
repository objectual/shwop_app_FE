import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, Text, FlatList} from 'react-native';

import {Header, Search, ProductCard, CustomRating} from '../../components';
import {Images, Colors, Metrics} from '../../theme';

import styles from './styles';

const tagProducts = [
  {
    id: 1,
    image: Images.product,
    title: 'Nike New Era Shoes',
    brand: 'Nike Corporation',
    noOfTakes: 3,
  },
  {
    id: 2,
    image: Images.product,
    title: 'Shoes Cop',
    brand: 'Nike Corporation',
    noOfTakes: 2,
  },
];

const TagProduct = props => {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState(0);
  const [ratingModalId, setRatingModalId] = useState(0);

  const onPressProduct = id => {
    setRating(0);
    setRatingModalId(id === ratingModalId ? 0 : id);
  };

  const hideRatingModal = () => {
    setRatingModalId(0);
    setRating(0);
  };

  const results = !search
    ? tagProducts
    : tagProducts?.filter(
        item =>
          item?.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
          item?.brand.toLowerCase().includes(search.toLocaleLowerCase()),
      );

  const renderProduct = item => {
    return (
      <React.Fragment>
        <ProductCard
          image={item.image}
          title={item.title}
          brand={item.brand}
          takes={item.noOfTakes}
          isTake={true}
          onPressCard={() => onPressProduct(item.id)}
        />
        {item.id === ratingModalId && (
          <View style={{...styles.ratingContainer}}>
            <View>
              <View style={{...styles.ratingLine}} />
              <Text style={{...styles.ratingText}}>
                {'How Would You Rate This Product'}
              </Text>
            </View>

            <CustomRating
              rating={rating}
              containerStyle={{...styles.customRatingContainer}}
              onPress={rate => setRating(rate)}
            />

            <TouchableOpacity
              style={{...styles.notNowBtn}}
              onPress={hideRatingModal}>
              <Text style={{...styles.notNowBtnText}}>{'Not Now'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </React.Fragment>
    );
  };

  return (
    <View>
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
        headerText={'Tag Products'}
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
        contentContainerStyle={{paddingBottom: Metrics.ratio(32)}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderProduct(item)}
      />
    </View>
  );
};

TagProduct.defaultProps = {};

TagProduct.propTypes = {};

export default TagProduct;
