import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, ScrollView,
    Image, 
} from 'react-native';
import styles from '../Styles/signup_style';
import { Colors } from '../../helpers';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import LoadingModal from '../../Utils/LoadingModal';
import { getUserId, getUserPass, getUserPhone, setCompId, setToken, setUserEmail, setUserId, setUserName, setUserPass, setUserPhone } from '../../Utils/MasterFunctions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import Images from '../../Utils/Images';


import Swiper from 'react-native-swiper';


import { showToast } from '../../Utils/Utils';

const SignUp = ({ navigation }) => {
    const route = useRoute();
    
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(false);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    const [isPasswordVisible, setPasswordVisible] = useState(true);
  

    const orEmptyString = (str) => {
        if (str === '' || str === undefined || str === null) {
            return true
        } else {
            return false
        }
    }



    const SIGNUP = async () => {
        if (orEmptyString(name)) {
            showToast('Please enter name');
            return;
        }
      

        if (orEmptyString(phone)) {
            showToast('Please enter mobile');
            return;
        }
        if (orEmptyString(email)) {
            showToast('Please enter email');
            return;
        }
        if (orEmptyString(password)) {
            showToast('Please enter password');
            return;
        }
        setLoading(true);
     console.log("jayegaaaaaa",name,phone,email,password)
        // await setUserId(123456);
        await setUserName(name);
       await setUserPhone(phone);
        await setUserEmail(email);
        await setUserPass(password);
        showToast("SignUp Done Succefully")
        setLoading(false);
        navigation.goBack()
       
    };

    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.Header}>
                    <Image source={Images.LOGO} style={{ width: wp('60%'), height: hp('10%'), marginVertical: hp('4%') }} />
                </View>
                <Text style={styles.text_bold}>SignUp</Text>
                <Text style={styles.Text}>Create your new account</Text>

                <View style={{ marginVertical: hp('2%') }}>
                    <View style={[styles.InputView, styles.shadowProp]}>

                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#858585"
                            //maxLength={10}
                            placeholder="Enter Your Name"
                            keyboardType='email-address'
                            value={name}
                            onChangeText={(text) => {

                                setName(text);
                            }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#858585"
                            maxLength={10}
                            placeholder="Enter Your Mobile Number"
                            keyboardType='phone-pad'
                            value={phone}
                            onChangeText={(text) => {
                                if (text.length === 1 && text[0] === '0') {
                                    return;
                                }
                                setPhone(text);
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#858585"
                            //maxLength={10}
                            placeholder="Enter Your Email"
                            keyboardType='email-address'
                            value={email}
                            onChangeText={(text) => {
                                // if (text.length === 1 && text[0] === '0') {
                                //     return;
                                // }
                                setEmail(text);
                            }}
                        />

                        <View style={{ justifyContent: 'center' }}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#858585"
                                placeholder="Password"
                                secureTextEntry={isPasswordVisible}
                                value={password}
                                // onChangeText={(text) => { setPassword(text) }}
                                onChangeText={(text) => { setPassword(text), setCheck(false), setUserPass('') }}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 1,
                                }}
                                onPress={() => setPasswordVisible(!isPasswordVisible)}
                            >
                                <MaterialIcons
                                    name={isPasswordVisible ? 'visibility-off' : 'visibility'}
                                    size={wp("6%")}
                                    color="#858585"
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            //onPress={() => navigation.navigate('BottomTab')}
                            onPress={() => SIGNUP()}
                            // onPress={() => setModalVisible(true)}
                            style={styles.button}>
                            <Text style={[styles.ButtonText, {}]}>SignUp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', marginVertical: hp('1%') }} onPress={() => navigation.goBack()}>
                            <Text style={styles.txt}>Already have an account?  <Text style={styles.txt_link}>Log in</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <LoadingModal modalVisible={loading} />
        </View>
    );
};

export default SignUp;
