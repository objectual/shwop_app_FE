import utils from '../util';

class ErrorHelper {
  handleErrors(err, doAlert) {
    if (doAlert) {
      if (err) {
        utils.showAlertWithDelay({title: 'Error', message: err});
      }
    }
  }
}

export default new ErrorHelper();
