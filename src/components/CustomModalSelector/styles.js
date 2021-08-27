import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  inputContainer: {
    borderColor: Colors.Mercury,
    borderWidth: 1,
    borderRadius: Metrics.ratio(30),
    paddingHorizontal: Metrics.ratio(12),
    textTransform: 'capitalize',
    height: Metrics.ratio(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    position: 'absolute',
    color: Colors.Affair,
    top: Metrics.ratio(4),
    left: Metrics.ratio(20),
    fontSize: Metrics.ratio(10),
    zIndex: Metrics.ratio(2),
  },
  modalSelectorStyle: {
    flex: 1,
  },
  selectStyle: {
    borderWidth: 0,
  },
  initValueTextStyle: {
    color: Colors.Mercury,
    fontFamily: Fonts.type.Nunito,
    textAlign: 'left',
    fontSize: Metrics.ratio(13),
    textTransform: 'capitalize',
  },
  optionTextStyle: {
    color: Colors.Mine_Shaft,
    fontFamily: Fonts.type.Nunito,
    textAlign: 'left',
    fontSize: Metrics.ratio(14),
    textTransform: 'capitalize',
  },
  cancelTextStyle: {
    color: Colors.Alizarin_Crimson,
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(14),
    textTransform: 'capitalize',
  },
  selectTextStyle: {
    color: Colors.Mine_Shaft,
    fontFamily: Fonts.type.Nunito,
    textAlign: 'left',
    fontSize: Metrics.ratio(13),
    textTransform: 'capitalize',
  },
  dropdownIconContainer: {
    height: Metrics.ratio(45),
    marginRight: Metrics.ratio(4),
    marginTop: Metrics.ratio(4),
    justifyContent: 'center',
  },
  dropdownIcon: {
    height: Metrics.ratio(14),
    width: Metrics.ratio(14),
  },
  errorText: {
    color: 'red',
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.Nunito,
    marginHorizontal: Metrics.ratio(15),
  },
});
