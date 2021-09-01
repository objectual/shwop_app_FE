import React, {useEffect, useState} from 'react';
import {View, Text, Image, StatusBar, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import styles from './styles';

import util from '../../util';
import {Header} from '../../components';
import {Images, Colors} from '../../theme';
import {OverlayLoader} from '../../components';
import ApiSauce from '../../services/ApiSauce';
import {TERM_CONDITION} from '../../config/WebServices';

const TermsAndConditions = props => {
  const isFocused = useIsFocused();

  const userDetailsResponse = useSelector(state => state.userDetails);

  const [isLoading, setIsLoading] = useState(false);
  const [term_Condition, setTerm_Condition] = useState();

  useEffect(() => {
    if (isFocused) {
      getTermCondition();
    } else {
      setTerm_Condition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  // GET TERMS AND CONDITION FUNCTION //
  const getTermCondition = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        TERM_CONDITION,
        userDetailsResponse.data.access_token,
      );
      if (result?.data) {
        setTerm_Condition(result?.data);
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
        rightBtnPress={() => handleNavigation('EditTermsAndConditions')}
        headerText={'Term & Conditions'}
      />

      <ScrollView>
        <View style={{...styles.formContainer}}>
          <Image
            resizeMode="contain"
            style={styles.terms_bg}
            source={Images.terms}
          />
          {!isLoading && term_Condition ? (
            <View style={{...styles.descriptionContainer}}>
              <Text style={{...styles.descriptionText}}>
                {term_Condition?.termsandconditions}
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>

      {!isLoading && !term_Condition ? (
        <View style={{...styles.notFoundContainer}}>
          <Text style={{...styles.notFoundText}}>
            {'Sorry, Term and Condition not found.'}
          </Text>
        </View>
      ) : null}

      <OverlayLoader isLoading={isLoading} />
    </View>
  );
};

TermsAndConditions.defaultProps = {};

TermsAndConditions.propTypes = {};

export default TermsAndConditions;
