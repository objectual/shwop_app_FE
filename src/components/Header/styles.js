import {StyleSheet, Platform} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    marginTop: Metrics.ratio(24),
    height: Metrics.screenHeight * 0.095,
    flexDirection: 'row',
  },
  dropShadow: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Edit: {
    color: '#fff',
  },
  EditMainView: {
    marginRight: Metrics.ratio(-30),
    paddingTop: Platform.OS === 'ios' ? Metrics.ratio(4) : Metrics.ratio(0),
  },
  imageEdit: {
    marginRight: Metrics.ratio(10),
  },
  editView: {
    flexDirection: 'row',
    marginTop: Metrics.ratio(15),
    backgroundColor: '#4DE528',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.ratio(20),
    paddingVertical: Metrics.ratio(5),
    borderRadius: Metrics.ratio(20),
  },
  backarrowView: {
    backgroundColor: '#F7F7FA',
    borderRadius: Metrics.ratio(25),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  TouchableMenu: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  centerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    width: Metrics.ratio(45),
    height: Metrics.ratio(45),
    borderRadius: Metrics.ratio(45),
    marginRight: Metrics.ratio(16),
  },
  headerText: {
    fontSize: Metrics.ratio(20),
    color: Colors.Charade,
    fontFamily: Fonts.type.NunitoBold,
    textTransform: 'capitalize',
  },
  rightText: {
    fontSize: Metrics.ratio(10),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  searchBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Concrete,
    paddingHorizontal: Metrics.ratio(8),
    paddingVertical: Metrics.ratio(4),
    borderRadius: Metrics.ratio(30),
    overflow: 'hidden',
  },
  searchBarTextInput: {
    color: Colors.Charade,
    flex: 1,
    height: Metrics.ratio(35),
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.Nunito,
    paddingVertical: 0,
    paddingHorizontal: Metrics.ratio(4),
  },
});
