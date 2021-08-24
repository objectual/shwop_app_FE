import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  inputAndTextContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: Colors.Mercury,
    borderRadius: Metrics.ratio(30),
    paddingHorizontal: Metrics.ratio(10),
    paddingVertical: Metrics.ratio(10),
  },
  tagTextConatiner: {
    backgroundColor: Colors.Mercury,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: Metrics.ratio(8),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(30),
    paddingHorizontal: Metrics.ratio(8),
    borderColor: Colors.Mercury,
    borderWidth: 1,
    marginBottom: Metrics.ratio(6),
  },
  tagText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Mine_Shaft,
  },
  removeBtn: {
    marginLeft: Metrics.ratio(8),
  },
  removeBtnText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Mine_Shaft,
  },
  tagTextInput: {
    backgroundColor: Colors.Mercury,
    borderRadius: Metrics.ratio(30),
    borderColor: Colors.Mercury,
    borderWidth: 1,
    paddingVertical: 0,
    height: Metrics.ratio(32),
    paddingHorizontal: Metrics.ratio(8),
    fontSize: Metrics.ratio(13),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Mine_Shaft,
  },
  addBtn: {
    backgroundColor: Colors.Affair,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    borderRadius: Metrics.ratio(30),
    borderColor: Colors.Affair,
    borderWidth: 1,
  },
  addBtnText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.Nunito,
    color: Colors.White,
  },
  errorText: {
    color: 'red',
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.Nunito,
    marginHorizontal: Metrics.ratio(16),
  },
});
