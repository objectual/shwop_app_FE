import React, {useState} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity, Text} from 'react-native';

import {Header, Layout} from '../../components';
import {Images, Colors} from '../../theme';

import styles from './styles';

const orders = [
  {
    id: 1,
    orderNum: 1,
    name: 'Nipe - Shoes',
    price: 32.18,
  },
  {
    id: 2,
    orderNum: 2,
    name: 'Nipe - Shoes',
    price: 50,
  },
  {
    id: 3,
    orderNum: 3,
    name: 'Nipe - Shoes',
    price: 23,
  },
  {
    id: 4,
    orderNum: 4,
    name: 'Nipe - Shoes',
    price: 45.09,
  },
  {
    id: 5,
    orderNum: 5,
    name: 'Nipe - Shoes',
    price: 67.34,
  },
];

const OrdersListing = props => {
  const [activeBtn, setActiveBtn] = useState('new');

  const renderHeaderButton = ({isActive, label, onPress}) => {
    return (
      <TouchableOpacity
        style={isActive ? styles.activeBtn : styles.inactiveBtn}
        onPress={() => {
          setActiveBtn(label);
          onPress();
        }}>
        <Text style={isActive ? styles.activeBtnText : styles.inactiveBtnText}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderOrderCard = item => {
    return (
      <View style={{...styles.orderCardContainer}}>
        <View style={{...styles.detailContainer}}>
          <Text style={{...styles.orderNum}}>{`Order ${item.orderNum}`}</Text>
          <Text style={{...styles.orderName}}>{item.name}</Text>
          <View style={{...styles.priceContainer}}>
            <Text style={{...styles.priceText}}>{`$${item.price.toFixed(
              2,
            )}`}</Text>
          </View>
        </View>
        <View style={{...styles.buttonContainer}}>
          <TouchableOpacity style={{...styles.completeBtn}}>
            <Text style={{...styles.completeBtnText}}>Complete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.cancelBtn}}>
            <Text style={{...styles.cancelBtnText}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
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
        headerText={'Orders'}
      />

      <View style={{...styles.headerSeparator}}>
        {renderHeaderButton({
          isActive: activeBtn === 'new',
          label: 'new',
          onPress: () => {},
        })}
        {renderHeaderButton({
          isActive: activeBtn === 'completed',
          label: 'completed',
          onPress: () => {},
        })}
      </View>

      <FlatList
        data={orders}
        contentContainerStyle={{...styles.contentContainerStyle}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderOrderCard(item)}
      />
    </Layout>
  );
};

OrdersListing.defaultProps = {};

OrdersListing.propTypes = {};

export default OrdersListing;
