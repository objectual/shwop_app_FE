import React, {useRef} from 'react';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextInput from 'react-native-otp-textinput';
import {Header} from '../../components';
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
                // backgroundColor: 'green',
                borderRadius: Metrics.ratio(30),
                borderWidth: 2,
                borderBottomWidth: 2,
                borderColor: '#dddddd',
              }}
            />
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('otp')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0.1, 0.3, 0.4, 0.6, 0.8, 0.9]}
              colors={[
                '#8A49A1',
                '#C1558B',
                '#C1558B',
                '#E56969',
                '#FFC273',
                '#FFDF9E',
              ]}
              style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt}>Confirm</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Otp;
