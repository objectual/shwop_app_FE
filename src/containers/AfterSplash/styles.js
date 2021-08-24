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
    position: 'absolute',
    top: 0,
  },
  commentContainer: {
    paddingHorizontal: Metrics.ratio(16),
  },
  modalStyle: {
    backgroundColor: Colors.Concrete,
    paddingHorizontal: Metrics.ratio(16),
  },
  handleStyle: {
    backgroundColor: Colors.Concrete,
  },
  leftIconImageStyle: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  rightIconImageStyle: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  headerComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(18),
    color: Colors.Charade,
  },
  socialModalContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.ratio(6),
    marginVertical: Metrics.ratio(12),
  },
  socialCancelButton: {
    alignSelf: 'center',
    backgroundColor: Colors.Charade,
    paddingHorizontal: Metrics.ratio(32),
    paddingVertical: Metrics.ratio(10),
    borderRadius: Metrics.ratio(32),
  },
  socialCancelText: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(14),
    color: Colors.White,
  },
  socailIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.ratio(8),
    width: Metrics.ratio(71),
  },
  socailIconImage: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
  },
  socailIconLabel: {
    color: Colors.Silver_Chalice,
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(12),
    marginTop: Metrics.ratio(4),
  },
  socailCustomIconContainer: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    backgroundColor: Colors.Snuff,
    borderRadius: Metrics.ratio(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  socailCustomIconImage: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
});
