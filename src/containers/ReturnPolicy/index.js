import React, {useEffect, useState} from 'react';
import {View, Text, Image, StatusBar, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import styles from './styles';

import util from '../../util';
import {Header} from '../../components';
import {Images, Colors} from '../../theme';
import {OverlayLoader} from '../../components';
import ApiSauce from '../../services/ApiSauce';
import {RETURN_POLICY} from '../../config/WebServices';

const ReturnPolicy = props => {
  const isFocused = useIsFocused();

  const userDetailsResponse = useSelector(state => state.userDetails);

  const [isLoading, setIsLoading] = useState(false);
  const [returnPolicy, setReturnPolicy] = useState();

  useEffect(() => {
    if (isFocused) {
      getReturnPolicy();
    } else {
      setReturnPolicy();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  // GET RETURN POLICY FUNCTION //
  const getReturnPolicy = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        RETURN_POLICY,
        userDetailsResponse.data.access_token,
      );
      if (result?.data) {
        setReturnPolicy(result?.data);
      }
      setIsLoading(false);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={Colors.Concrete}
        barStyle="dark-content"
      />

      <Header
        {...props}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        rightIcon={Images.edit_product_info}
        isLeftIconImg={true}
        isRightIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        rightBtnPress={() => handleNavigation('EditReturnPolicy')}
        headerText={'Return Policy'}
      />

      <ScrollView>
        <View style={{...styles.formContainer}}>
          <Image
            resizeMode="contain"
            style={styles.terms_bg}
            source={Images.returnPolicy}
          />

          {!isLoading && returnPolicy ? (
            <View style={{...styles.descriptionContainer}}>
              <Text style={{...styles.descriptionText}}>
                {returnPolicy?.returnpolicy}
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>

      {!isLoading && !returnPolicy ? (
        <View style={{...styles.notFoundContainer}}>
          <Text style={{...styles.notFoundText}}>
            {'Sorry, Return policy not found.'}
          </Text>
        </View>
      ) : null}

      <OverlayLoader isLoading={isLoading} />
    </View>
  );
};

ReturnPolicy.defaultProps = {};

ReturnPolicy.propTypes = {};

export default ReturnPolicy;
