import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';

import util from '../../util';
import {Images, Colors} from '../../theme';
import {OverlayLoader} from '../../components';
import ApiSauce from '../../services/ApiSauce';
import {RETURN_POLICY} from '../../config/WebServices';
import {Header, GradientButton} from '../../components';

const EditReturnPolicy = props => {
  const userDetailsResponse = useSelector(state => state.userDetails);

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState();
  const [floatLabel, setFloatLabel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const textInputRef = useRef();

  const handleValidation = async () => {
    if (!title) {
      setTitleError('Return policy is required.');
      setTimeout(() => {
        setTitleError('');
      }, 3000);
    } else if (title && !titleError) {
      editReturnPolicy();
    }
  };

  // EDIT RETURN POLICY FUNCTION //
  const editReturnPolicy = async () => {
    let payload = {
      returnpolicy: title,
    };
    try {
      setIsLoading(true);
      const result = await ApiSauce.post(
        RETURN_POLICY,
        payload,
        userDetailsResponse.data.access_token,
      );
      setIsLoading(false);
      if (result?.success) {
        props.navigation.navigate('ReturnPolicy');
      }
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
    }
  };

  const onChangeTitle = text => title.length <= 120 && setTitle(text);

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
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Edit Return Policy'}
      />

      <ScrollView>
        <View style={{...styles.formContainer}}>
          <Image
            resizeMode="contain"
            style={styles.terms_bg}
            source={Images.returnPolicy}
          />
          <View style={{...styles.titleContainer}}>
            {floatLabel ? (
              <Text style={{...styles.labelTopText}}>Return Policy</Text>
            ) : null}
            <TextInput
              value={title}
              onChangeText={onChangeTitle}
              style={{...styles.titleTextInput}}
              placeholder={'Enter Return Policy'}
              placeholderTextColor={Colors.Mercury}
              multiline={true}
              ref={textInputRef}
              numberOfLines={10}
              maxLength={120}
              onFocus={() => setFloatLabel(true)}
              onBlur={() => setFloatLabel(title !== '')}
              onPressOut={Keyboard.dismiss}
            />
            <Text
              style={{
                ...styles.titleCount,
              }}>{`Character ${title.length}/120`}</Text>
          </View>
          {titleError ? (
            <Text style={styles.errormsg}> {titleError}</Text>
          ) : null}
          <GradientButton
            label={'Save'}
            containerStyle={{...styles.gradientButtonContainer}}
            onPress={() => handleValidation()}
          />
        </View>
      </ScrollView>
      <OverlayLoader isLoading={isLoading} />
    </View>
  );
};

EditReturnPolicy.defaultProps = {};

EditReturnPolicy.propTypes = {};

export default EditReturnPolicy;
