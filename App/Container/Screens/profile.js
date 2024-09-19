import { View, Text, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, Modal, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../Styles/profile_styel'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../../Utils/Images';

import { Colors } from '../../helpers';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import LoadingModal from '../../Utils/LoadingModal';
import { clearUserId, getUserEmail, getUserId, getUserName, getUserPhone } from '../../Utils/MasterFunctions';

const Profile = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")





    useEffect(() => {
        getUserIDFun();
    }, [])
    const getUserIDFun = async () => {

        let userId = await getUserId();
        let myname = await getUserName();
        let myphone = await getUserPhone();
        let myemail = await getUserEmail();
        setName(myname)
        setEmail(myemail)
        setPhone(myphone)





    };

    const Logout = async () => {
       // await dispatch(clearMyCart());
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
                <Text style={styles.text_header}>Profile</Text>
                <Text style={styles.text_header}></Text>
            </View>
            <ScrollView>
                <View style={styles.List}>

                    <View style={{ alignItems: 'center' }}>
                        <FontAwesome name={"user"} color={Colors.Primary} size={wp("40%")} />
                        <Text numberOfLines={2} style={styles.text_key}>{name}</Text>
                    </View>



                    <View style={{ flex: 1,marginVertical:wp("2%") ,alignSelf:'center'}}>





                        <View style={styles.rowlist}>
                            <Ionicons name="mail" color={Colors.Primary} size={wp('8%')} />
                            <Text numberOfLines={2} style={styles.text_value}>{email}</Text>
                        </View>
                        <View style={styles.rowlist}>
                            <Ionicons name="call" color={Colors.Primary} size={wp('8%')} />
                            <Text style={styles.text_value}>{phone}</Text>
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