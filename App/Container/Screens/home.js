import { View, Text, ScrollView, TouchableOpacity, BackHandler, Image, Alert, Modal, FlatList, Linking, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../Styles/home_style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoadingModal from '../../Utils/LoadingModal';
import Images from '../../Utils/Images';
import { getCompId, getUserId, getPackageId, getSocietyId, setSocietyId, getUserName } from '../../Utils/MasterFunctions';
import { Colors } from '../../helpers';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';


import Toast from 'react-native-simple-toast';

import moment from 'moment';
import Fonts from '../../helpers/Fonts';

import { orEmptyString, showToast } from '../../Utils/Utils';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
    const route = useRoute();
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(10);
    const [name, setName] = useState("")

    const [data, setData] = useState([]);


    const currentScreenName = route.name;
    const handleBackPress = () => {
        if (currentScreenName === "home") {
            BackHandler.exitApp();
            return true;
        }
        return false;
    };

    useFocusEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    });

    useEffect(() => {
        getUserIDFun();
    }, [])
    const getUserIDFun = async () => {

        let userId = await getUserId();
        let myname = await getUserName();


        setName(myname)


    };





    useEffect(() => {
        GetData();
    }, [limit]);

    const GetData = async () => {
        try {
            console.log("chlaaa", limit)
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
            const result = await res.json();
            if (result.length > 0) {

                setData(result);
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const LoadMore = () => {
        console.log("chlaaa")
        if (!loading) {
            setLimit((prevLimit) => prevLimit + 10);
            GetData()
        }
    };














    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <View style={styles.row_header}>
                    <Image source={Images.LOGO}
                        style={{ height: hp('8%'), width: wp('16%'), resizeMode: 'contain' }} />
                    <View style={{ width: wp('60%') }} >
                        <Text numberOfLines={2} style={styles.text_header}>Hello,  <Text style={styles.txt_name}>{name}</Text></Text>


                    </View>
                </View>

            </View>






            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => (
                    <View>
                        <Text>no data found</Text>
                    </View>
                )}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('product_detail', { data: item })}
                            style={[styles.box, styles.shadowProp]}>
                           
                                <Image source={{ uri: item.image }} style={[styles.box_img]} />
                               
                          
                            <View style={{flex:1,marginHorizontal:wp("4%"),justifyContent:'center'}}>
                                <Text numberOfLines={2} style={styles.txt_pro}>{item.title}</Text>
                                <Text numberOfLines={2} style={styles.txt_pro2}>{item.category}</Text>
                               
                               <View style={styles.row}>
                               <View style={styles.row}>
                                <Text numberOfLines={2} style={styles.txt_pro2}>{item.rating.rate}</Text>
                                <AntDesign name={"star"} color={"gold"} size={wp("4%")} />
                                </View>
                                <View style={[styles.box_trans]}>
                                    <Text style={[styles.txt_price, { marginLeft: wp('1%') }]}>${Math.round(item.price)}</Text>
                                </View>
                               
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                onEndReached={() => LoadMore()}
                onEndReachedThreshold={0.5}

            />




            <LoadingModal modalVisible={loading} />



        </View>
    )
}

export default Home