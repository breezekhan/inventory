import React, { useEffect } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';

import AppNavigation from './App/Navigation/AppNavigation';
const App = () => {

useEffect(()=>{
  // requestLocationPermission();
  // requestNotificationPermission();
  // requestLocationBackPermission();
},[])

// const requestLocationPermission = async () => {
//   try {
//       const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//               title: 'Location Permission',
//               message: 'This app needs access to your location.',
//               buttonNeutral: 'Ask Me Later',
//               buttonNegative: 'Cancel',
//               buttonPositive: 'OK',
//           }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           console.log('Location permission granted');

//       } else {
//           console.log('Location permission denied');

//       }
//   } catch (err) {
//       console.warn(err);
//   }
// };

  // const requestNotificationPermission = async () => {
  //   try {
  //     if (Platform.OS === 'android') {
  //       const status = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  //       if (!status) {
  //         const result = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  //           {
  //             title: 'Notification Permission',
  //             message: 'This app needs access to your notifications.',
  //             buttonNeutral: 'Ask Me Later',
  //             buttonNegative: 'Cancel',
  //             buttonPositive: 'OK',
  //           }
  //         );
  //         if (result === PermissionsAndroid.RESULTS.GRANTED) {
  //           console.log('Notification permission granted');
  //         } else {
  //           console.log('Notification permission denied');
  //         }
  //       } else {
  //         console.log('Notification permission already granted');
  //       }
  //     } else if (Platform.OS === 'ios') {
  //       const authStatus = await messaging().requestPermission();
  //       const enabled =
  //         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //       if (enabled) {
  //         console.log('Notification permission granted.');
  //       } else {
  //         console.log('Notification permission denied.');
  //       }
  //     }
  //   } catch (error) {
  //     console.warn('Error requesting notification permission:', error);
  //   }
  // }


 return (
    <AppNavigation />
  );

};

export default App;