// // import { View, Text } from 'react-native';
// // import React, { useEffect } from 'react';
// // import AppNavigation from '../../Navigation/AppNavigation';

// // const Main = () => {

// //     return (
// //         <AppNavigation />
// //     );
// // };

// // export default Main;



// import React, { useEffect, useState } from 'react';
// import { View, Text, Linking, Modal, TouchableOpacity, StyleSheet, Platform } from 'react-native';
// import axios from 'axios';
// import VersionInfo from 'react-native-version-info';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import AppNavigation from '../../Navigation/AppNavigation';
// import API, { BaseUrl } from '../../Utils/API';
// import Fonts from '../../helpers/Fonts';

// const Main = () => {
//     const [modal, setModal] = useState(false);

//     useEffect(() => {
//         getVersion();
//     }, []);

//     const getVersion = async () => {
//         try {
//             const response = await axios.get(BaseUrl + API.Version, {
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             const json = response.data;

//             if (json.data.version !== VersionInfo.appVersion) {
            
            
//                 setModal(true);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <>
//             <AppNavigation />
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modal}
//                 onRequestClose={() => setModal(false)} // Corrected handling of modal close
//             >
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalView}>
//                         <Text style={styles.modalText}>New Updates Arrived</Text>
//                         <Text style={styles.modalText}>To enjoy the new version, update your app.</Text>
//                         <TouchableOpacity
//                             style={styles.button}
//                             onPress={() => {
//                                 Linking.openURL(
//                                     Platform.OS === 'android'
//                                         ? 'https://play.google.com/store/apps/details?id=com.agrival'
//                                         : '' // Provide appropriate URL for iOS if needed
//                                 );
//                                 setModal(false);
//                             }}
//                         >
//                             <Text style={styles.textStyle}>Update</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalView: {
//         height: hp('30%'),
//         width: wp('90%'),
//         backgroundColor: 'white',
//         borderRadius: wp('2%'),
//         padding: wp('2%'),
//         alignItems: 'center',
//         justifyContent: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalText: {
//         fontFamily: Fonts.Lato_Bold,
//         color: 'black',
//         fontSize: wp('4%'),
//         marginVertical: hp('1.5%'),
//     },
//     button: {
//         backgroundColor: '#FFB61D',
//         padding: wp('2%'),
//         width: '70%',
//         borderRadius: wp('2%'),
//         marginVertical: hp('2%'),
//     },
//     textStyle: {
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
// });

// export default Main;


