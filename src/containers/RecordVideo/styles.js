import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: Metrics.ratio(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: Metrics.ratio(50),
    zIndex: 1,
  },
  headerLeftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backBtnImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  saveBtn: {
    backgroundColor: Colors.Affair,
    width: Metrics.ratio(80),
    paddingVertical: Metrics.ratio(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(40),
  },
  saveBtnText: {
    fontSize: Metrics.ratio(14),
    color: Colors.White,
    fontFamily: Fonts.type.NunitoBold,
  },
  actionButtonsContainer: {
    position: 'absolute',
    top: Metrics.ratio(100),
    right: Metrics.ratio(24),
    zIndex: 1,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.ratio(8),
  },
  actionButtonImage: {
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
  },
  actionButtonText: {
    fontSize: Metrics.ratio(10),
    fontFamily: Fonts.type.LatoSemibold,
    color: Colors.White,
    marginTop: Metrics.ratio(-6),
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: Colors.Black,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  recorderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Metrics.ratio(100),
    left: 0,
    right: 0,
    zIndex: 1,
  },
  swapCameraImage: {
    width: Metrics.ratio(45),
    height: Metrics.ratio(45),
    marginTop: Metrics.ratio(28),
    marginHorizontal: Metrics.ratio(16),
  },
  flashImage: {
    width: Metrics.ratio(45),
    height: Metrics.ratio(45),
    marginTop: Metrics.ratio(30),
    marginHorizontal: Metrics.ratio(16),
  },
  timelineContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: Metrics.ratio(62),
  },
  timelineTimerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.ratio(2),
  },
  timelineTimerText: {
    fontSize: Metrics.ratio(10),
    fontFamily: Fonts.type.LatoSemibold,
    color: Colors.White,
  },
  videoTimingsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: Metrics.ratio(16),
    left: 0,
    right: 0,
  },
  videoTimingItem: {
    alignItems: 'center',
    marginHorizontal: Metrics.ratio(8),
  },
  videoTimingText: {
    fontSize: Metrics.ratio(16),
    color: Colors.White,
  },
  videoTimingActive: {
    backgroundColor: Colors.White,
    width: Metrics.ratio(7),
    height: Metrics.ratio(7),
    borderRadius: Metrics.ratio(7),
  },
  headerComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(16),
    color: Colors.Charade,
  },
  closeBtn: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
    backgroundColor: Colors.Concrete,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(15),
    position: 'absolute',
    top: Metrics.ratio(-8),
    right: Metrics.ratio(12),
    zIndex: 1,
  },
});
