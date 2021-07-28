import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {Search, ProductCard, Layout} from '../../components';
import {Images} from '../../theme';

import styles from './styles';

const brands = [
  {
    id: 1,
    image: Images.search_brand_1,
  },
  {
    id: 2,
    image: Images.search_brand_2,
  },
];

const users = [
  {
    id: 1,
    image: Images.user,
  },
  {
    id: 2,
    image: Images.user,
  },
];

const products = [
  {
    id: 1,
    image: Images.FollowCardImg,
    title: 'Nike New Era Shoes',
    brand: 'Nike Corporation',
    noOfTakes: 3,
  },
  {
    id: 2,
    image: Images.FollowCardImg,
    title: 'Shoes Cop',
    brand: 'Nike Corporation',
    noOfTakes: 2,
  },
];

const SearchScreen = props => {
  const [search, setSearch] = useState('');

  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <ImageBackground
        source={Images.search_bg}
        resizeMode={'cover'}
        style={{...styles.bannerImageContainer}}>
        <Search
          value={search}
          placeholder="Search Here.."
          onChangeText={text => setSearch(text)}
          onPressSearch={() => {}}
          onPressRemove={() => setSearch('')}
          searchContainerStyle={{...styles.searchContainerStyle}}
        />
      </ImageBackground>

      <ScrollView>
        <View style={{...styles.container}}>
          <View style={{...styles.brandContainer}}>
            <View style={{...styles.brandRow}}>
              <Text style={{...styles.brandHeading}}>Top Brands</Text>
              <TouchableOpacity>
                <Text style={{...styles.brandNumbers}}>1,387</Text>
              </TouchableOpacity>
            </View>
            {brands.map(item => (
              <View style={{...styles.brandImageContainer}}>
                <Image
                  resizeMode={'cover'}
                  source={item.image}
                  style={{...styles.brandImage}}
                />
              </View>
            ))}
          </View>

          <View style={{...styles.peopleContainer}}>
            <Text style={{...styles.peopleHeading}}>People To Follow</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{...styles.peopleScrollView}}>
              {users.map(item => (
                <View style={{...styles.peopleProfileContainer}}>
                  <View style={{...styles.peopleProfileImageContainer}}>
                    <Image
                      source={item.image}
                      resizeMode={'cover'}
                      style={{...styles.peopleProfileImage}}
                    />
                  </View>
                  <TouchableOpacity style={{...styles.peopleAddBtn}}>
                    <Image
                      source={Images.plus_floating_btn}
                      style={{...styles.peopleAddBtnImage}}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={{...styles.trandingContainer}}>
            <View style={{...styles.trandingRow}}>
              <Text style={{...styles.trandingHeading}}>Trending</Text>
              <TouchableOpacity>
                <Text style={{...styles.trandingNumber}}>2,978</Text>
              </TouchableOpacity>
            </View>
            {products.map(item => (
              <ProductCard
                image={item.image}
                title={item.title}
                brand={item.brand}
                takes={item.noOfTakes}
                isTake={true}
                containerStyle={{...styles.productContainerStyle}}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

SearchScreen.defaultProps = {};

SearchScreen.propTypes = {};

export default SearchScreen;
