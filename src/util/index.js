import {Platform, Alert, ToastAndroid} from 'react-native';

class Util {
  isPlatformAndroid = () => Platform.OS === 'android';

  showToast(message) {
    if (this.isPlatformAndroid()) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  }

  showYesNoMessage({title, message, onPressConfirm, onPressCancel}) {
    setTimeout(() => {
      Alert.alert(
        title,
        message,
        [
          {
            text: 'Cancel',
            onPress: onPressCancel,
          },
          {
            text: 'Confirm',
            onPress: onPressConfirm,
          },
        ],
        {cancelable: false},
      );
    }, 150);
  }

  showCommonMessage({title, message, onPress}) {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Ok',
          onPress: onPress,
        },
      ],
      {cancelable: false},
    );
  }

  showAlertWithDelay({title, message}) {
    setTimeout(() => {
      this.showCommonMessage({title, message});
    }, 150);
  }

  expiryCountdownFormatter(expiryDate) {
    let countDownDate = new Date(expiryDate).getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (!countDownDate || distance < 0) {
      return 'Expired';
    }

    if (hours > 0) {
      return `${days} days ${hours} hr`;
    } else {
      return `${days} days ${minutes} min`;
    }
  }

  nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }
}

export default new Util();
