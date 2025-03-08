import firebase from 'firebase/app';
import 'firebase/auth';
import greeting from '../pages/greeting';
import startApp from './startApp';
import client from './client';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      greeting();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
