import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { Images } from "../../theme";
import styles from './styles';
import {Layout, Header} from '../../components';

const Home = props => {
  return (
    <>
    <Header
        {...props}
        leftIcon={Images.menu}
        isLeftIconImg={true}
        isRightIconImg={true}
        rightIcon={Images.filter}
        leftBtnPress={() => props.navigation.goBack()}
        rightBtnPress={() => props.navigation.goBack()} 
        headerTextStyle={styles.headerTextStyle}
      />
      <View style={styles.homeOptions}>
        <View style={styles.UserImageView}>
          <Image style={styles.userImg} resizeMode="contain" source={Images.user}></Image>
          <TouchableOpacity style={styles.follow}><Text style={styles.followPlus}>+</Text></TouchableOpacity>
        </View>
        <View style={styles.UserOptions}>
          <TouchableOpacity><Image style={styles.optionImg} resizeMode="contain" source={Images.heartFill}></Image></TouchableOpacity> 
           <Text style={styles.optionText}>24.5k</Text> 
        </View>
        <View style={styles.UserOptions}>
          <TouchableOpacity><Image style={styles.optionImg} resizeMode="contain" source={Images.comments}></Image></TouchableOpacity> 
           <Text style={styles.optionText}>24.5k</Text> 
        </View>
        <View style={styles.UserOptions}>
          <TouchableOpacity><Image style={styles.optionImg} resizeMode="contain" source={Images.share}></Image></TouchableOpacity> 
           <Text style={styles.optionText}>24.5k</Text> 
        </View>
      </View>
      
    <Layout {...props}>
      
      <Text style={{...styles.heading}}>Home Screen</Text>
    </Layout>
    </>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
