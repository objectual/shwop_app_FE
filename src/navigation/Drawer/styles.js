import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  drawerStyle: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  container: {
    flex: 1,
    paddingHorizontal: Metrics.ratio(16),
    paddingVertical: Metrics.ratio(24),
  },
  profileSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: Metrics.ratio(70),
    height: Metrics.ratio(70),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.Affair,
    borderRadius: Metrics.ratio(35),
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileInfoView: {
    marginLeft: Metrics.ratio(8),
  },
  profileName: {
    fontSize: Metrics.ratio(18),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  profileUserName: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  drawerItemContainer: {
    paddingHorizontal: Metrics.ratio(16),
    marginVertical: Metrics.ratio(24),
    borderTopWidth: Metrics.ratio(1),
    borderTopColor: Colors.Affair,
    borderBottomWidth: Metrics.ratio(1),
    borderBottomColor: Colors.Affair,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.ratio(16),
  },
  drawerItemIcon: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  drawerItemLabel: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
    marginLeft: Metrics.ratio(20),
  },
  footerSec: {
    paddingHorizontal: Metrics.ratio(16),
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  backBtnText: {
    fontSize: Metrics.ratio(20),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
    marginLeft: Metrics.ratio(20),
  },
});
