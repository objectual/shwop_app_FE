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

import styles from './styles';

import {Header, GradientButton} from '../../components';
import {Images, Colors} from '../../theme';

const AddTermsAndConditions = props => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState();
  const [floatLabel, setFloatLabel] = useState(false);

  const textInputRef = useRef();

  const handleValidation = async () => {
    if (!title) {
      setTitleError('Title is required.');
      setTimeout(() => {
        setTitleError('');
      }, 3000);
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
        headerText={'Term & Conditions'}
      />

      <ScrollView style={{...styles.contentScrollView}}>
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
            label={'Post'}
            containerStyle={{...styles.gradientButtonContainer}}
            onPress={() => handleValidation()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

AddTermsAndConditions.defaultProps = {};

AddTermsAndConditions.propTypes = {};

export default AddTermsAndConditions;
