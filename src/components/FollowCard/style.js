import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(13),
    width: Metrics.screenWidth * 0.433,
    marginHorizontal: Metrics.ratio(8),
    marginBottom: Metrics.ratio(10),
    overflow: 'hidden',
  },
  bannerView: {
    width: Metrics.screenWidth * 0.433,
    height: Metrics.screenWidth * 0.452,
    borderRadius: Metrics.ratio(13),
    overflow: 'hidden',
    marginTop: Metrics.ratio(-1),
  },
  followImg: {
    width: '100%',
    height: '100%',
  },
  profileArea: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.ratio(8),
    marginTop: Metrics.ratio(8),
  },
  profileImg: {
    width: Metrics.screenWidth * 0.1,
    height: Metrics.screenWidth * 0.1,
  },
  nameArea: {
    paddingHorizontal: Metrics.ratio(8),
  },
  name: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(14),
    color: Colors.Charade,
    marginTop: Metrics.ratio(2),
  },
  clock: {
    width: Metrics.screenWidth * 0.03,
    marginTop: Metrics.ratio(2),
    height: Metrics.screenWidth * 0.03,
  },
  clockTxt: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(10),
    color: Colors.Charade,
    marginLeft: Metrics.ratio(5),
  },
  clockArea: {flexDirection: 'row'},
  desctxt: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(10),
    color: Colors.Charade,
  },
  desctxtArea: {
    paddingHorizontal: Metrics.ratio(8),
    marginTop: Metrics.ratio(8),
  },
  likeArea: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.ratio(8),
    marginTop: Metrics.ratio(8),
    marginBottom: Metrics.ratio(8),
    justifyContent: 'space-between',
  },
  likeImageText: {
    flexDirection: 'row',
  },
  likeRightSpacing: {
    flexDirection: 'row',
    marginRight: Metrics.ratio(8),
  },
  heart: {
    width: Metrics.screenWidth * 0.04,
    height: Metrics.screenWidth * 0.04,
  },
  likeTxt: {
    fontFamily: Fonts.type.LatoBold,
    fontSize: Metrics.ratio(10),
    marginLeft: Metrics.ratio(5),
  },
  play: {
    width: Metrics.screenWidth * 0.02,
    height: Metrics.screenWidth * 0.02,
    marginTop: Metrics.ratio(4),
  },
  likeSubscriber: {
    flexDirection: 'row',
  },
});

export default styles;
