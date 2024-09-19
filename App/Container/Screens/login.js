import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, 
    Image, BackHandler
} from 'react-native';
import styles from '../Styles/login_style';
import { Colors } from '../../helpers';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import LoadingModal from '../../Utils/LoadingModal';
import {  getUserPass, getUserPhone,  setUserId, setUserPass } from '../../Utils/MasterFunctions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import Images from '../../Utils/Images';
import Toast from 'react-native-simple-toast';
import Swiper from 'react-native-swiper';
import { showToast } from '../../Utils/Utils';
const Login = ({ navigation }) => {
    const route = useRoute();

    const [loading, setLoading] = useState(false);

    const [phone, setPhone] = useState("");
    const [myphone, setMyPhone] = useState("");

    const [password, setPassword] = useState("");

    const [mypassword, setMyPassword] = useState("");
    const [isPasswordVisible, setPasswordVisible] = useState(true);
  
     const currentScreenName = route.name;
    const handleBackPress = () => {
        if (currentScreenName === "login") {
            BackHandler.exitApp();
            return true;
        }
        return false;
    };
    useFocusEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    });

    const orEmptyString = (str) => {
        if (str === '' || str === undefined || str === null) {
            return true
        } else {
            return false
        }
    }

    // useEffect(() => {
    //     getUserIDFun()
    // }, [])

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserIDFun()
        });
        return unsubscribe;
    }, [navigation]);


    const getUserIDFun = async () => {

        // let userId = await getUserId();
        let mypass = await getUserPass();
        let myphone = await getUserPhone();
        console.log("ayaaaaaaaaaaaaa", mypass, myphone);
        if (myphone !== null) {
            setPhone(myphone);
            setMyPhone(myphone);
            setMyPassword(mypass);
        }

    };

    // const Logout = async () => {
    //    // await dispatch(clearMyCart());
    //     await clearUserId();
    //     navigation.reset({
    //         index: 0,
    //         routes: [{ name: 'login' }]
    //     });
    // };

    const LOGIN = async () => {
        if (orEmptyString(phone)) {
            showToast('Please enter your mobile');
            return;
        }
        if (phone != myphone) {
            showToast('New user please signup first');
            //navigation.navigate("signup")
            return;
        }
        if (orEmptyString(password)) {
            showToast('Please enter your password');
            return;
        }

        if (password == mypassword && phone == myphone) {
            await setUserId(123456);
            navigation.navigate("BottomTab")
        }
        else {
            showToast('Invalid password');
        }

    };





    const [check, setCheck] = useState(false);


    return (
        <View style={styles.Container}>
            <Swiper
                autoplay={true}
                loop={true}
                style={{}}
                showsButtons={false}
                showsPagination={false}
            >
                <Image
                    source={Images.Reel}

                    style={styles.bannerImage}

                />
                <Image
                    source={Images.Reel1}
                    style={styles.bannerImage}

                />
                <Image
                    source={Images.Reel2}
                    style={styles.bannerImage}

                />

            </Swiper>

            <View style={{ position: 'absolute', bottom: hp('20%'), alignSelf: 'center', width: wp('90%') }}>
                <Text style={styles.text_bold}>Welcome back</Text>
                <Text style={styles.Text}>Login to your account</Text>

                <View style={{}}>
                    <View style={[styles.InputView]}>
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
                        <View style={{ justifyContent: 'center' }}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#858585"
                                placeholder="Password"
                                secureTextEntry={isPasswordVisible}
                                value={password}
                                // onChangeText={(text) => { setPassword(text) }}
                                onChangeText={(text) => { setPassword(text), setCheck(false)}}
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
                            onPress={() => LOGIN()}
                            // onPress={() => setModalVisible(true)}
                            // onPress={() => Logout(true)}

                            style={styles.button}>
                            <Text style={[styles.ButtonText, {}]}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', marginVertical: hp('1%') }} onPress={() => { setPhone(""), setPassword(""), navigation.navigate("signup") }}>
                            <Text style={styles.txt}>Dont have an account?  <Text style={styles.txt_link}>SignUp</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            <LoadingModal modalVisible={loading} />
        </View>
    );
};

export default Login;
