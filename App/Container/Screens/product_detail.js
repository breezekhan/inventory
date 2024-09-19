import { View, Text, ScrollView, TouchableOpacity, BackHandler, Image } from 'react-native'
import React, { useEffect, useState, useMemo, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../Styles/pro_detail_style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoadingModal from '../../Utils/LoadingModal';

import { Colors } from '../../helpers';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { showToast } from '../../Utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, deleteMyCartitem, removeMyCartitem } from '../../Utils/Redux/MyCartSlice';
import Fonts from '../../helpers/Fonts';
const Product_Detail = ({ navigation }) => {
    const route = useRoute();
    const [loading, setLoading] = useState(false);
    const [qty, setQty] = useState(1);
    
    
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



    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            GET_PRO_DETAIL();
        });
        return unsubscribe;
    }, [navigation]);

    const GET_PRO_DETAIL = async () => {
        try {
            console.log("iddddddddd", route.params.data.id)
            const id = await route.params.data.id;
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const result = await res.json();

            console.log("ayaaaaa", result)
            setData(result);

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };









    // //REDUX
    const dispatch = useDispatch();
    const myCartItems = useSelector(state => state.cart);

    const item = useMemo(() => {
        const product = data;
        if (!product) return null;
        return {
            id: product.id,
            name: product.title,
            price: product.price,
           
           
            subtotal: product.price  * qty,
           
            qty: qty,
            image: product.image,
           
        };
    }, [data, qty]);


   


    const existingCartItem = myCartItems.find(cartItem => cartItem.id === route.params.data.id);
    

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity style={[styles.back_box, styles.shadowProp]} onPress={() => navigation.goBack()}  >
                    <Ionicons name="arrow-back" color={Colors.Primary} size={wp('6.5%')} />
                </TouchableOpacity>
                <Text style={styles.text_header}>Product Details</Text>
                <TouchableOpacity style={styles.cartContainer} onPress={() => navigation.navigate("cart")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="shoppingcart" size={24} color="#ffffff" />
                        {myCartItems.length > 0 && (
                            <View
                                style={{
                                    backgroundColor: 'red',
                                    borderRadius: 10,
                                    paddingHorizontal: 8,
                                    paddingVertical: 2,
                                    position: 'absolute',
                                    top: hp('-2%'),
                                    left: wp('4%'),
                                }} >
                                <Text style={{ color: Colors.white, fontSize: 10, fontFamily: Fonts.Lato_Reguler }}>{myCartItems.length}</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView >
                <View style={styles.List}>


                    <Image
                        source={{ uri: data.image }}
                        style={styles.bannerImage}

                    />
                    <View style={{ marginVertical: hp('1%') }}>
                        <Text style={styles.txt_pro}>{data.name}</Text>
                        <View style={styles.row_qty}>
                            <View style={styles.row}>
                                <Text style={styles.txt_price}>${Math.round(item.price)}</Text>
                                {item.discount > '0' &&
                                    <Text style={[styles.txt_price, { marginLeft: wp('2%') }]}>₹{item.price - item.discount}</Text>
                                }
                            </View>
                            {
                                existingCartItem === undefined ? (
                                    <View style={[styles.plus_min, styles.shadowProp]}>
                                        <TouchableOpacity onPress={() => {
                                            if (qty === 1) {
                                                setQty(1)
                                            } else {
                                                setQty(prevQty => prevQty - 1)
                                            }
                                        }}>
                                            <FontAwesome name="minus" color={Colors.black} size={wp('5%')} />
                                        </TouchableOpacity>
                                        <Text style={styles.txt_pro}>{qty}</Text>
                                        <TouchableOpacity onPress={() => {
                                            if (qty >= data.stock_quantity) {

                                                showToast("out of stock")
                                            }
                                            else {
                                                setQty(prevQty => prevQty + 1)
                                            }
                                        }}>
                                            <FontAwesome name="plus" color={Colors.black} size={wp('5%')} />
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <View style={[styles.plus_min, styles.shadowProp]}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                if (existingCartItem.qty > 1) {
                                                    dispatch(removeMyCartitem(item))
                                                }
                                                else {
                                                    dispatch(deleteMyCartitem(existingCartItem.id))
                                                }
                                            }}
                                        >
                                            <FontAwesome name="minus" color={Colors.black} size={wp('5%')} />
                                        </TouchableOpacity  >
                                        <Text style={styles.txt_pro}>{existingCartItem.qty}</Text>
                                        <TouchableOpacity onPress={() => {
                                            if (qty >= data.stock_quantity) {
                                                showToast("out of stock")
                                            }
                                            else {
                                                dispatch(addProductToMyCart(item))
                                            }
                                        }}>
                                            <FontAwesome name="plus" color={Colors.black} size={wp('5%')} />
                                        </TouchableOpacity>
                                    </View>
                                )}
                        </View>
                        {
                            data.stock_quantity <= 0 ? (
                                <Text style={styles.text_out}>Out of stock</Text>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        const existingCartItem = myCartItems.find(cartItem => cartItem.id === route.params.data.id);
                                        if (existingCartItem && existingCartItem.id === item.id) {
                                            showToast('Already Existing in Cart!');
                                            navigation.navigate("cart");
                                        } else {
                                            showToast('Product Added To Cart!');
                                            dispatch(addProductToMyCart(item));
                                        }
                                    }}
                                    style={styles.button}
                                >
                                    <Text style={styles.button_txt}>Add To Cart</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <View>
                        <View style={styles.box_trans1}>
                            <Text style={styles.txt_more}>{data.description}</Text>
                        </View>


                    </View>


                </View>
            </ScrollView>
            <LoadingModal modalVisible={loading} />
        </View >
    )
}

export default Product_Detail

