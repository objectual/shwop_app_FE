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
    orderNum: 1,
    name: 'Nipe - Shoes',
    price: 32.18,
  },
  {
    id: 3,
    orderNum: 1,
    name: 'Nipe - Shoes',
    price: 32.18,
  },
  {
    id: 4,
    orderNum: 1,
    name: 'Nipe - Shoes',
    price: 32.18,
  },
  {
    id: 5,
    orderNum: 1,
    name: 'Nipe - Shoes',
    price: 32.18,
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
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <View>
              <Text>Order 1</Text>
              <Text>Nipe - Shoes</Text>
              <View>
                <Text>{`$${9}`}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </Layout>
  );
};

OrdersListing.defaultProps = {};

OrdersListing.propTypes = {};

export default OrdersListing;
