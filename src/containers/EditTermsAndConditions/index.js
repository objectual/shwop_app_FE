import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';

import util from '../../util';
import {Images, Colors} from '../../theme';
import {useKeyboardStatus} from '../../hooks';
import {OverlayLoader} from '../../components';
import ApiSauce from '../../services/ApiSauce';
import {TERM_CONDITION} from '../../config/WebServices';
import {Header, GradientButton} from '../../components';

const EditTermsAndConditions = props => {
  const userDetailsResponse = useSelector(state => state.userDetails);

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState();
  const [floatLabel, setFloatLabel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const textInputRef = useRef();

  const [isOpen] = useKeyboardStatus();

  useEffect(() => {
    if (!isOpen) {
      textInputRef.current.blur();
    }
  }, [isOpen]);

  const handleValidation = async () => {
    if (!title) {
      setTitleError('Title is required.');
      setTimeout(() => {
        setTitleError('');
      }, 3000);
    } else if (title && !titleError) {
      editTermCondition();
    }
  };

  // EDIT TERM_CONDITION FUNCTION //
  const editTermCondition = async () => {
    let payload = {
      termsandconditions: title,
    };
    try {
      setIsLoading(true);
      const result = await ApiSauce.post(
        TERM_CONDITION,
        payload,
        userDetailsResponse.data.access_token,
      );
      setIsLoading(false);
      if (result?.success) {
        props.navigation.navigate('TermsAndConditions');
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
        headerText={'Edit Term & Conditions'}
      />

      <ScrollView>
        <View style={{...styles.formContainer}}>
          <Image
            resizeMode="contain"
            style={styles.terms_bg}
            source={Images.terms}
          />
          <View style={{...styles.titleContainer}}>
            {floatLabel ? (
              <Text style={{...styles.labelTopText}}>Term and Conditions</Text>
            ) : null}
            <TextInput
              value={title}
              onChangeText={onChangeTitle}
              style={{...styles.titleTextInput}}
              placeholder={'Enter Term and Conditions'}
              placeholderTextColor={Colors.Mercury}
              ref={textInputRef}
              multiline={true}
              maxLength={120}
              numberOfLines={10}
              onFocus={() => setFloatLabel(true)}
              onBlur={() => setFloatLabel(title !== '')}
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

EditTermsAndConditions.defaultProps = {};

EditTermsAndConditions.propTypes = {};

export default EditTermsAndConditions;
