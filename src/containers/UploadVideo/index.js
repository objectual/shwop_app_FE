import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';

import styles from './styles';

import {Layout, Header} from '../../components';
import {Images, Metrics, Fonts, Colors} from '../../theme';

const UploadVideo = props => {
  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />
      <Header
        {...props}
        headerBgColor={Colors.White}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Add Video'}
      />
      <View
        style={{
          backgroundColor: Colors.White,
          width: '100%',
          height: Metrics.ratio(50),
          borderBottomLeftRadius: Metrics.ratio(10),
          borderBottomRightRadius: Metrics.ratio(10),
        }}
      />
      <ScrollView style={{marginTop: Metrics.ratio(-40)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: Metrics.screenWidth * 0.32,
              height: Metrics.screenWidth * 0.32,
              borderRadius: Metrics.ratio(10),
              backgroundColor: Colors.White,
              margin: Metrics.ratio(12),
              padding: Metrics.ratio(12),
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Image
              source={Images.upload_video_icon}
              resizeMode={'contain'}
              style={{
                width: Metrics.ratio(25),
                height: Metrics.ratio(25),
                flex: 1,
              }}
            />
            <Text
              style={{
                fontSize: Metrics.ratio(14),
                fontFamily: Fonts.type.NunitoBold,
                color: Colors.Affair,
              }}>
              Upload Video
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: Metrics.screenWidth * 0.32,
              height: Metrics.screenWidth * 0.32,
              borderRadius: Metrics.ratio(10),
              backgroundColor: Colors.Affair,
              margin: Metrics.ratio(12),
              padding: Metrics.ratio(12),
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Image
              source={Images.record_video_icon}
              resizeMode={'contain'}
              style={{
                width: Metrics.ratio(25),
                height: Metrics.ratio(25),
                flex: 1,
              }}
            />
            <Text
              style={{
                fontSize: Metrics.ratio(14),
                fontFamily: Fonts.type.NunitoBold,
                color: Colors.White,
              }}>
              Record Video
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            paddingHorizontal: Metrics.ratio(16),
          }}>
          <View style>
            <TextInput
              onChangeText={text => console.log(text)}
              style={{
                backgroundColor: Colors.Affair,
                alignContent: 'flex-start',
                borderRadius: Metrics.ratio(16),
              }}
              placeholder={'Title'}
              placeholderTextColor={Colors.Mercury}
              multiline={true}
              numberOfLines={9}
            />
            <Text>{`Character ${0}/120`}</Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

UploadVideo.defaultProps = {};

UploadVideo.propTypes = {};

export default UploadVideo;
