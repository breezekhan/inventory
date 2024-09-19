import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../Styles/profile_styel'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Ionicons from 'react-native-vector-icons/Ionicons';


import { Colors } from '../../helpers';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import LoadingModal from '../../Utils/LoadingModal';
import { clearUserId, getUserAdd, getUserEmail, getUserId, getUserName,  getUserPhone } from '../../Utils/MasterFunctions';
import { useDispatch } from 'react-redux';
import { clearMyCart } from '../../Utils/Redux/MyCartSlice';

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")





    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserIDFun();
        });
        return unsubscribe;
    }, [navigation]);
    const getUserIDFun = async () => {

        let userId = await getUserId();
        let myname = await getUserName();
        let myphone = await getUserPhone();
        let myemail = await getUserEmail();
        let myadd = await getUserAdd();

        setName(myname)
        setEmail(myemail)
        setPhone(myphone)
        setAddress(myadd)





    };

    const Logout = async () => {
        await dispatch(clearMyCart());
        await clearUserId();
        navigation.reset({
            index: 0,
            routes: [{ name: 'login' }]
        });
    };


    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity style={[styles.back_box, styles.shadowProp]} onPress={() => navigation.goBack()}  >
                    <Ionicons name="arrow-back" color={Colors.Primary} size={wp('6.5%')} />
                </TouchableOpacity>
                <Text style={styles.text_header}>Account</Text>
                <TouchableOpacity style={{ }} onPress={() => navigation.navigate("edit")}>
                                <FontAwesome name={"edit"} size={wp("8%")}  color={Colors.Primary} />
                            </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.List}>

                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.row}>
                            <FontAwesome name={"user"} color={Colors.Primary} size={wp("40%")} />
                           
                        </View>

                        <Text numberOfLines={2} style={styles.text_key}>{name}</Text>
                    </View>



                    <View style={{ flex: 1, marginVertical: wp("2%"), marginHorizontal: wp("4%") }}>





                        <View style={styles.rowlist}>
                            <Ionicons name="mail" color={Colors.Primary} size={wp('8%')} />
                            <Text numberOfLines={2} style={styles.text_value}>{email}</Text>
                        </View>
                        <View style={styles.rowlist}>
                            <Ionicons name="call" color={Colors.Primary} size={wp('8%')} />
                            <Text style={styles.text_value}>{phone}</Text>
                        </View>
                        <View style={styles.rowlist}>
                            <Ionicons name="home" color={Colors.Primary} size={wp('8%')} />
                            <Text style={styles.text_value}>{address}</Text>
                        </View>

                    </View>

                    <TouchableOpacity
                        onPress={() => Logout()}
                        style={[styles.box, styles.shadowProp]}>
                        <View style={styles.rowlist}>
                            <Ionicons name="log-out" color={Colors.Primary} size={wp('6.5%')} />
                            <Text style={styles.boxtxt}>Logout</Text>
                        </View>
                        <Ionicons name="chevron-forward" color={Colors.Primary} size={wp('6.5%')} />
                    </TouchableOpacity>




                </View>
            </ScrollView>
            <LoadingModal modalVisible={loading} />
        </View>
    )
}

export default Profile