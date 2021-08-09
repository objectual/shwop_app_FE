import React, {useState, useEffect} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity, Image} from 'react-native';
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
import {PRODUCT} from '../../config/WebServices';

import styles from './styles';

const MyProducts = props => {
  const isFocused = useIsFocused();

  const userDetailsResponse = useSelector(state => state.userDetails);

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isFocused) {
      getProducts();
    } else {
      setProducts([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        PRODUCT,
        userDetailsResponse.data.access_token,
      );
      console.log(result, 'result');
      setIsLoading(false);
      if (result?.data?.length) {
        setProducts(result?.data);
      }
    } catch (error) {
      console.log(error, 'error');
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

  const renderProduct = ({images, title, review, baseCost}) => {
    const rating = review?.reduce((a, b) => a + (b?.rating?.stars || 0), 0);
    const avgRating = rating / review?.length;

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
        rating={avgRating ? avgRating : 0}
        onPressCard={() =>
          handleNavigation('ProductInfo', {productType: 'own'})
        }
        onPressRightIcon={() => handleNavigation('EditProducts')}
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
        contentContainerStyle={{paddingBottom: Metrics.ratio(140)}}
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

      <OverlayLoader isLoading={isLoading} />
    </Layout>
  );
};

MyProducts.defaultProps = {};

MyProducts.propTypes = {};

export default MyProducts;
