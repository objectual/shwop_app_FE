import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  heading: {
    fontSize: Metrics.ratio(18),
    fontWeight: 'bold',
    color: Colors.black,
  },
  headerTextStyle: {
    position:'absolute',
    top:0,
  },
  homeOptions: {
    backgroundColor:'#fff',
    borderRadius:40,
    height:Metrics.ratio(330),
    width:Metrics.ratio(70),
    position:'absolute',
    right:10,
    top:200,
  },
  userImg: {
    borderRadius:30,
    width:Metrics.ratio(70),
  },
  follow: {
    backgroundColor:"#F01C5B",
    width:Metrics.ratio(20),
    height:Metrics.ratio(20),
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
  },
  followPlus: {
    color:'#fff',
    fontSize:Metrics.ratio(20),
  },  
  UserImageView: {
    width:Metrics.ratio(70),
    height:Metrics.ratio(70),
  },
  optionImg: {
    height:Metrics.ratio(35),
    width:Metrics.ratio(35),
  },
  optionText: {
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.size.sixteen,
    marginTop:5,
  },
  UserOptions: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
  }
});
