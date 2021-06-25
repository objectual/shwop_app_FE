import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerSeparator: {
    width: '100%',
    height: Metrics.ratio(60),
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  activeBtn: {
    backgroundColor: Colors.Affair,
    paddingHorizontal: Metrics.ratio(24),
    paddingVertical: Metrics.ratio(8),
    borderRadius: Metrics.ratio(50),
  },
  activeBtnText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoSemiBold,
    textTransform: 'capitalize',
    color: Colors.White,
  },
  inactiveBtn: {
    paddingHorizontal: Metrics.ratio(24),
    paddingVertical: Metrics.ratio(8),
    borderRadius: Metrics.ratio(50),
  },
  inactiveBtnText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoLight,
    textTransform: 'capitalize',
    color: Colors.Charade,
  },
  contentContainerStyle: {
    paddingBottom: Metrics.ratio(80),
  },
  orderCardContainer: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    marginTop: Metrics.ratio(16),
    marginHorizontal: Metrics.ratio(16),
    padding: Metrics.ratio(12),
    borderRadius: Metrics.ratio(10),
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  orderNum: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  orderName: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  priceContainer: {
    paddingHorizontal: Metrics.ratio(8),
    paddingVertical: Metrics.ratio(2),
    borderWidth: Metrics.ratio(1),
    borderColor: Colors.Affair,
    alignSelf: 'flex-start',
    borderRadius: Metrics.ratio(6),
    backgroundColor: Colors.Concrete,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  priceText: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  buttonContainer: {
    flex: 0.8,
    justifyContent: 'space-between',
  },
  completeBtn: {
    backgroundColor: Colors.Affair,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.ratio(8),
    paddingHorizontal: Metrics.ratio(16),
    borderRadius: Metrics.ratio(50),
    marginBottom: Metrics.ratio(8),
    borderWidth: Metrics.ratio(1),
    borderColor: Colors.Affair,
  },
  completeBtnText: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoSemiBold,
    color: Colors.White,
  },
  cancelBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.ratio(8),
    paddingHorizontal: Metrics.ratio(16),
    borderRadius: Metrics.ratio(50),
    marginTop: Metrics.ratio(8),
    borderWidth: Metrics.ratio(1),
    borderColor: Colors.Gun_Powder,
  },
  cancelBtnText: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoSemiBold,
    color: Colors.Gun_Powder,
  },
});
