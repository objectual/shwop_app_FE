import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 40,
    right: 0,
    left: 0,
    zIndex: 1,
    paddingHorizontal: Metrics.ratio(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  saveButton: {
    backgroundColor: Colors.Affair,
    width: Metrics.ratio(80),
    paddingVertical: Metrics.ratio(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(40),
  },
  saveButtonText: {
    fontSize: Metrics.ratio(14),
    color: Colors.White,
    fontFamily: Fonts.type.NunitoBold,
  },
  videoPlayerContainer: {
    width: '100%',
    flex: 1,
  },
  trimmerContainer: {
    height: Metrics.ratio(75),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  selectedStyle: {
    backgroundColor: 'rgba(242, 242, 242, 0.7)',
    height: Metrics.ratio(50),
  },
  trackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: Metrics.ratio(50),
  },
  markerContainer: {
    backgroundColor: Colors.Mercury,
    height: Metrics.ratio(52),
    width: Metrics.ratio(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
