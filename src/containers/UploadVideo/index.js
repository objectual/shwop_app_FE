import React, {useState} from 'react';
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

import {Layout, Header, GradientButton} from '../../components';
import {Images, Colors} from '../../theme';

const UploadVideo = props => {
  const [title, setTitle] = useState('');

  const onChangeTitle = text => title.length <= 120 && setTitle(text);

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

      <View style={{...styles.headerSeparator}} />

      <ScrollView style={{...styles.contentScrollView}}>
        <View style={{...styles.uploadBtnContainer}}>
          <TouchableOpacity style={{...styles.uploadBtn}}>
            <Image
              source={Images.upload_video_icon}
              resizeMode={'contain'}
              style={{...styles.uploadBtnImage}}
            />
            <Text style={{...styles.uploadBtnText}}>Upload Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.recordBtn}}>
            <Image
              source={Images.record_video_icon}
              resizeMode={'contain'}
              style={{...styles.recordBtnImage}}
            />
            <Text style={{...styles.recordBtnText}}>Record Video</Text>
          </TouchableOpacity>
        </View>

        <View style={{...styles.formContainer}}>
          <View style={{...styles.titleContainer}}>
            <TextInput
              value={title}
              onChangeText={onChangeTitle}
              style={{...styles.titleTextInput}}
              placeholder={'Title'}
              placeholderTextColor={Colors.Mercury}
              multiline={true}
              numberOfLines={9}
            />
            <Text
              style={{
                ...styles.titleCount,
              }}>{`Character ${title.length}/120`}</Text>
          </View>

          <View style={{...styles.tagsContainer}}>
            <Text style={{...styles.tagsTitle}}>Tags</Text>
            <TouchableOpacity style={{...styles.tagsBtn}}>
              <Image
                source={Images.tag_upload_video}
                resizeMode={'contain'}
                style={{...styles.tagsBtnImage}}
              />
              <Text style={{...styles.tagsBtnText}}>Add a Tag</Text>
            </TouchableOpacity>
          </View>

          <View style={{...styles.socialContainer}}>
            <TouchableOpacity style={{...styles.socialBtnContainer}}>
              <View style={{...styles.socialBtnImageContainer}}>
                <Image
                  source={Images.instagram_upload_video}
                  resizeMode={'contain'}
                  style={{...styles.socialBtnImage}}
                />
              </View>
              <Text style={{...styles.socialBtnText}}>Share to Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.socialBtnContainer}}>
              <View style={{...styles.socialBtnImageContainer}}>
                <Image
                  source={Images.facebook_upload_video}
                  resizeMode={'contain'}
                  style={{...styles.socialBtnImage}}
                />
              </View>
              <Text style={{...styles.socialBtnText}}>Share to Facebook</Text>
            </TouchableOpacity>
          </View>

          <GradientButton
            label={'Post'}
            containerStyle={{...styles.gradientButtonContainer}}
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

UploadVideo.defaultProps = {};

UploadVideo.propTypes = {};

export default UploadVideo;
