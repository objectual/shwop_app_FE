import React, {useRef} from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {Header, GradientButton} from '../../components';
import {Images, Metrics} from '../../theme';

import styles from './styles';

const Otp = props => {
  const otpInput = useRef(null);
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
            <OTPTextInput
              //  handleTextChange={()=>{}}
              tintColor="#8A49A1"
              textInputStyle={{
                borderRadius: Metrics.ratio(30),
                borderWidth: 2,
                borderBottomWidth: 2,
                borderColor: '#dddddd',
              }}
            />
          </View>
          <GradientButton
            label={'Confirm'}
            containerStyle={{...styles.gradientButtonContainer}}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Otp;
