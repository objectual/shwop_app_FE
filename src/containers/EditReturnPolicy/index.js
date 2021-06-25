import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';

import styles from './styles';

import {Layout, Header, GradientButton} from '../../components';
import {Images, Colors} from '../../theme';
import {useKeyboardStatus} from '../../hooks';

const EditReturnPolicy = props => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState();
  const [floatLabel, setFloatLabel] = useState(false);

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
    }
  };

  const onChangeTitle = text => title.length <= 120 && setTitle(text);

  return (
    <Layout {...props} isLogedIn={true}>
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

      <ScrollView style={{...styles.contentScrollView}}>
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
              onBlur={() => {
                let isFloatLabel =
                  title == '' || title == undefined ? false : true;
                setFloatLabel(isFloatLabel);
              }}
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
    </Layout>
  );
};

EditReturnPolicy.defaultProps = {};

EditReturnPolicy.propTypes = {};

export default EditReturnPolicy;
