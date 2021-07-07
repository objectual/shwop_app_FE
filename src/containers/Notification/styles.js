import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Concrete,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Metrics.ratio(12),
    paddingVertical: Metrics.ratio(8),
  },
  cardImage: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    borderRadius: Metrics.ratio(25),
  },
  detailRow: {
    flex: 1,
    marginLeft: Metrics.ratio(12),
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unreadHeadingText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Black,
    width: Metrics.screenWidth * 0.7,
  },
  readHeadingText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Black,
  },
  unreadIcon: {
    width: Metrics.ratio(11),
    height: Metrics.ratio(11),
    backgroundColor: Colors.Web_Orange,
    borderRadius: Metrics.ratio(5.5),
  },
  timeText: {
    fontSize: Metrics.ratio(11),
    fontFamily: Fonts.type.ArialBold,
    color: Colors.Silver_Chalice,
    marginTop: Metrics.ratio(4),
  },
});
