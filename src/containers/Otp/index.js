import React, {useState} from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import {Header, GradientButton} from '../../components';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {Images, Colors, Metrics, Fonts} from '../../theme';

import styles from './styles';

const Otp = props => {
  const [code, setCode] = useState();
  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  return (
    <>
      <Header
        {...props}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        headerText={'One Time Password'}
        leftBtnPress={() => props.navigation.goBack()}
        rightBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
      />
      <ScrollView style={styles.imageView}>
        <View style={styles.verificationView}>
          <Image
            resizeMode="contain"
            style={styles.verification_bg}
            source={Images.verification}
          />
          <Text style={styles.verificationTitle}>Enter Verification Code</Text>
          <Text style={styles.verificationText}>
            Enter Verification Code which is sent on your mobile
          </Text>
          <View style={styles.otpView}>
            <SmoothPinCodeInput
              placeholder="X"
              cellStyle={{...styles.cellViewStyle}}
              cellStyleFocused={{...styles.cellViewFocused}}
              textStyle={{...styles.txtStyle}}
              textStyleFocused={{
                color: Colors.Affair,
              }}
              value={code}
              onTextChange={_code => setCode(_code)}
            />
          </View>
          <GradientButton
            label={'Confirm'}
            containerStyle={{...styles.gradientButtonContainer}}
            onPress={() => handleNavigation('UploadVideo')}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Otp;
