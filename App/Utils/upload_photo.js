import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, PermissionsAndroid, ActivityIndicator, Alert, TouchableWithoutFeedback, Modal, ImageBackground, ScrollView, ToastAndroid, Dimensions } from 'react-native'
import styles from '../Container/Styles/photoStyle';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Colors } from '../helpers';
import Images from './Images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { getUserId } from './MasterFunctions';
import { HttpCallPost } from './Get_Api';
import API from "../Utils/API";
import { showToast } from '../Utils/Utils';
import RNFS from 'react-native-fs';
import Loader from '../Utils/Loader';
import Fonts from '../helpers/Fonts';

const PHOTO = ({ selectedImage, setSelectedImage, getProfile,modalVisible,setModalVisible }) => {
    //console.log("ayaaaaaaaaa",modalVisible)
    // const [selectedImage, setSelectedImage] = useState(null);
   // const [modalUVisible, setModalUVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const closeModal = () => {
       // setModalUVisible(false);
        setModalVisible(false);
    };
    useEffect(() => {
      //  requestCameraPermission();
       // setModalUVisible(modalVisible);

    }, [modalVisible])

  
  const requestCameraPermission = async (selectedImage) => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Location Permission',
                    message: 'This app needs access to your camera.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Camera permission granted');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    // const handleCamera = () => {
    //     launchCamera({ options }, (response) => {
    //         if (response.assets && response.assets.length > 0) {
    //             console.log(response.assets[0].uri);
    //             setSelectedImage(response.assets[0].uri);
               
    //             RNFS.readFile(response.assets[0]['uri'], 'base64')
    //                 // RNFS.readFile(profileImage, 'base64')
    //                 .then(response => {
    //                     //setBase64(res)
    //                     // console.log(response);
    //                    // Update_Profile_Pic(response)
    //                 });
    //         }
    //     });
    //     setModalVisible(false)
    //    // setModalUVisible(false);
    // };
    // const handleImageLibrary = () => {
    //     launchImageLibrary({ options }, (response) => {
    //         console.log("pooohootooooooooo", response.assets[0].uri);
    //         setSelectedImage(response.assets[0].uri);
    //         RNFS.readFile(response.assets[0]['uri'], 'base64')
    //         // RNFS.readFile(profileImage, 'base64')
    //         .then(response => {
    //             //setBase64(res)
    //           //  console.log("resssssssssssssssssssssss333",response);
    //             Update_Profile_Pic(response)
    //         });
    //     },)
    //     console.log("hyyyyyRC", selectedImage)
    //     setModalUVisible(false);
    // };


    const handleImageLibrary = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 400,
                maxWidth: 400,
            },
            (response) => {
                if (response.didCancel) {
                    showToast("Image not selected");
                } else {
                    openImagePicker(response);
                }
            }
        );

    };


    // const openImagePicker = async (res) => {
    //     setSelectedImage(res.assets[0]['uri'])
    //     setModalVisible(false)
    //     RNFS.readFile(res.assets[0]['uri'], 'base64')
    //         // RNFS.readFile(profileImage, 'base64')
    //         .then(res => {
    //             //setBase64(res)
    //             ///console.log(res);
    //             // Update_Profile_Pic(res)
    //             getProfile(res)
    //         });

    //     //  Update_Profile_Pic(response)
        
    // }


const openImagePicker = async (res) => {

    // Update_Profile_Pic(res.assets[0]['uri']);
    setSelectedImage(res.assets[0]['uri'])
   
    setModalVisible(false)
    getProfile(res.assets[0]['uri'])
}

const handleCamera = () => {
    launchCamera({ options }, (response) => {
        if (response.assets && response.assets.length > 0) {
            console.log(response.assets[0].uri);
            setSelectedImage(response.assets[0].uri);
           getProfile(response.assets[0]['uri']);
        }
    });
    setModalVisible(false);
};

    const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 800,
        maxWidth: 800,
    };
    return (
       
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <TouchableWithoutFeedback
                    onPress={() => closeModal()}>
                    <View style={styles.container1}>
                        <TouchableWithoutFeedback>
                            <View style={[styles.modalViewC, {
                            }]}>
                                <Text style={{ fontSize: wp('4.5%'),color: 'black', alignSelf: 'center', marginVertical: wp('2%'), fontFamily:Fonts.Lato_Bold }}>Upload Image from</Text>
                                <View style={[styles.row, { alignItems: 'center', marginVertical: "8%", marginHorizontal: "8%" }]}>
                                    <TouchableOpacity style={styles.camera_box} onPress={handleImageLibrary}>
                                    <Text style={{ fontSize: wp('3.5%'), color: '#ffffff', fontFamily:Fonts.Lato_Bold,marginVertical:hp('1%') }}>Gallery</Text>
                                     
                                        <MaterialCommunityIcons name="view-gallery" size={wp('14%')} color={Colors.white} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.camera_box} onPress={handleCamera}>
                                        <Text style={{ fontSize: wp('3.5%'), color: '#ffffff', fontFamily:Fonts.Lato_Bold ,marginVertical:hp('1%')}}>Camera</Text>
                                        <MaterialIcons name="camera" size={wp('14%')} color={Colors.white} />
                                       
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>
                </TouchableWithoutFeedback>
            </Modal >
          
       
    );
};

export default PHOTO;
