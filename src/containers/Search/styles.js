import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  bannerImageContainer: {
    height: Metrics.screenHeight * 0.45,
  },
  searchContainerStyle: {
    marginTop: Metrics.ratio(45),
    backgroundColor: Colors.White,
  },
  container: {
    flex: 1,
    marginHorizontal: Metrics.ratio(16),
    paddingBottom: Metrics.ratio(75),
  },
  brandContainer: {
    marginTop: Metrics.ratio(12),
  },
  brandRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.ratio(4),
  },
  brandHeading: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  brandNumbers: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
  },
  brandImageContainer: {
    height: Metrics.ratio(80),
    width: '100%',
    overflow: 'hidden',
    borderRadius: Metrics.ratio(8),
    marginVertical: Metrics.ratio(4),
  },
  brandImage: {
    width: '100%',
    height: '100%',
  },
  peopleContainer: {
    marginTop: Metrics.ratio(12),
  },
  peopleHeading: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
    marginBottom: Metrics.ratio(4),
  },
  peopleScrollView: {
    marginTop: Metrics.ratio(6),
  },
  peopleProfileContainer: {
    width: Metrics.ratio(75),
    height: Metrics.ratio(84),
    marginRight: Metrics.ratio(8),
  },
  peopleProfileImageContainer: {
    width: Metrics.ratio(75),
    height: Metrics.ratio(75),
    borderRadius: Metrics.ratio(37.5),
    overflow: 'hidden',
  },
  peopleProfileImage: {
    width: '100%',
    height: '100%',
  },
  peopleAddBtn: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
    backgroundColor: Colors.Razzmatazz,
    position: 'absolute',
    bottom: Metrics.ratio(0),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(10),
  },
  peopleAddBtnImage: {
    width: Metrics.ratio(10),
    height: Metrics.ratio(10),
  },
  trandingContainer: {
    marginTop: Metrics.ratio(12),
  },
  trandingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trandingHeading: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  trandingNumber: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
  },
  productContainerStyle: {
    width: '100%',
    marginHorizontal: Metrics.ratio(0),
    marginTop: Metrics.ratio(12),
  },
});
