import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerSeparator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(50),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  contentScrollView: {
    marginTop: Metrics.ratio(-40),
    marginBottom: Metrics.ratio(55),
  },
  uploadBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtn: {
    width: Metrics.screenWidth * 0.32,
    height: Metrics.screenWidth * 0.32,
    borderRadius: Metrics.ratio(10),
    backgroundColor: Colors.White,
    margin: Metrics.ratio(12),
    padding: Metrics.ratio(12),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  uploadBtnImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
    flex: 1,
  },
  uploadBtnText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
  },
  recordBtn: {
    width: Metrics.screenWidth * 0.32,
    height: Metrics.screenWidth * 0.32,
    borderRadius: Metrics.ratio(10),
    backgroundColor: Colors.Affair,
    margin: Metrics.ratio(12),
    padding: Metrics.ratio(12),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  recordBtnImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
    flex: 1,
  },
  recordBtnText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.White,
  },
  formContainer: {
    paddingHorizontal: Metrics.ratio(16),
  },
  titleContainer: {
    marginTop: Metrics.ratio(16),
  },
  titleTextInput: {
    backgroundColor: Colors.White,
    textAlignVertical: 'top',
    borderRadius: Metrics.ratio(16),
    padding: Metrics.ratio(12),
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoLight,
    color: Colors.Black,
    borderColor: Colors.Mercury,
    borderWidth: Metrics.ratio(1),
  },
  titleCount: {
    fontSize: Metrics.ratio(10),
    color: Colors.Charade,
    fontFamily: Fonts.type.Nunito,
    marginTop: Metrics.ratio(6),
    textAlign: 'right',
    marginRight: Metrics.ratio(20),
  },
  tagsContainer: {
    marginTop: Metrics.ratio(16),
  },
  tagsTitle: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  tagsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    alignSelf: 'flex-start',
    paddingHorizontal: Metrics.ratio(12),
    paddingVertical: Metrics.ratio(6),
    borderRadius: Metrics.ratio(32),
    marginTop: Metrics.ratio(8),
  },
  tagsBtnImage: {
    width: Metrics.ratio(12),
    height: Metrics.ratio(12),
  },
  tagsBtnText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
    marginLeft: Metrics.ratio(12),
  },
  socialContainer: {
    marginTop: Metrics.ratio(32),
  },
  socialBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.ratio(12),
  },
  socialBtnImageContainer: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBtnImage: {
    width: Metrics.ratio(16),
    height: Metrics.ratio(16),
  },
  socialBtnText: {
    fontSize: Metrics.ratio(12),
    color: Colors.Charade,
    fontFamily: Fonts.type.Nunito,
    marginLeft: Metrics.ratio(16),
  },
  gradientButtonContainer: {
    marginTop: Metrics.ratio(8),
    marginBottom: Metrics.ratio(40),
  },
});
