import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import {
  Header,
  Search,
  ProductCard,
  Layout,
  OverlayLoader,
} from '../../components';
import {Images, Colors, Metrics} from '../../theme';
import util from '../../util';
import ApiSauce from '../../services/ApiSauce';
import {MY_PRODUCT} from '../../config/WebServices';

import styles from './styles';

const MyProducts = props => {
  const isFocused = useIsFocused();

  const userDetailsResponse = useSelector(state => state.userDetails);

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isFocused && userDetailsResponse.data.access_token) {
      getProducts();
    } else {
      setProducts([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, userDetailsResponse.data.access_token]);

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        MY_PRODUCT,
        userDetailsResponse.data.access_token,
      );
      setIsLoading(false);
      if (result?.data?.length) {
        setProducts(result?.data);
      }
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
    }
  };

  const results = !search
    ? products
    : products?.filter(
        item =>
          item?.title?.toLowerCase().includes(search.toLocaleLowerCase()) ||
          item?.brand?.toLowerCase().includes(search.toLocaleLowerCase()),
      );

  const renderProduct = ({id, images, title, review, baseCost}) => {
    return (
      <ProductCard
        image={{uri: images[0]?.path}}
        title={title}
        brand={''}
        takes={review?.length}
        isRating={true}
        isPrice={true}
        isEdit={true}
        isTake={true}
        price={Number.isInteger(baseCost) ? baseCost : baseCost?.toFixed(2)}
        rating={util.avgRating(review)}
        onPressCard={() =>
          handleNavigation('ProductInfo', {productType: 'own', productId: id})
        }
        onPressRightIcon={() =>
          handleNavigation('EditProducts', {productId: id})
        }
      />
    );
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
        headerText={'My Products'}
      />

      {!isLoading && results.length ? (
        <View style={{...styles.headerSeparator}}>
          <Search
            value={search}
            placeholder="Search Here.."
            onChangeText={value => setSearch(value)}
            onPressSearch={() => {}}
            onPressRemove={() => setSearch('')}
          />
        </View>
      ) : null}

      {!isLoading && results.length ? (
        <FlatList
          data={results}
          contentContainerStyle={{paddingBottom: Metrics.ratio(140)}}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => renderProduct(item)}
        />
      ) : null}

      {!isLoading &&
      !results.length &&
      userDetailsResponse.data.access_token ? (
        <View style={{...styles.notFoundContainer}}>
          <Text style={{...styles.notFoundText}}>
            {'Sorry, no record found.\nPlease try again later.'}
          </Text>
        </View>
      ) : null}

      {!userDetailsResponse.data.access_token ? (
        <View style={{...styles.notFoundContainer}}>
          <Text style={{...styles.notFoundText}}>
            {'You are not currently logged in to see your products.'}
          </Text>
        </View>
      ) : null}

      {userDetailsResponse.data.access_token ? (
        <TouchableOpacity
          style={{...styles.addProductBtn}}
          onPress={() => handleNavigation('AddProducts')}>
          <Image
            source={Images.plus_floating_btn}
            style={{...styles.addProductImage}}
          />
        </TouchableOpacity>
      ) : null}

      <OverlayLoader isLoading={isLoading} />
    </Layout>
  );
};

MyProducts.defaultProps = {};

MyProducts.propTypes = {};

export default MyProducts;
