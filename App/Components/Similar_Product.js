import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, PermissionsAndroid, ActivityIndicator, Alert, TouchableWithoutFeedback, Modal, ImageBackground, ScrollView, ToastAndroid, Dimensions } from 'react-native'
import styles from '../Container/Styles/photoStyle';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Images from '../Utils/Images';
import Color from '../Utils/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Loader from '../Utils/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addMyProduct, removeadMyProduct, deleteadMyProduct, clearadMyProduct } from '../Utils/Redux/MyProductSlice';
import Dimension from '../Utils/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SIMILAR = ({ navigation, Data, render }) => {

    const [loading, setLoading] = useState(false);


    //REDUX//
    const dispatch = useDispatch();
    // const myCartItems = useSelector(state => state.cart);
    const myProduct = useSelector(state => state.product);
    console.log("added product", myProduct)

    const handleWishlistToggle = async (item) => {
        try {
            const Auth = await getAuth();
            console.log("roleeeeeeeeeee", Auth);

            if (Auth == 'AUTH') {
                const wishlist = myProduct.some(product => product.id === item.id);

                if (wishlist) {
                    dispatch(deleteadMyProduct(item.id));
                    ToastAndroid.show('Product Removed From Wishlist!', ToastAndroid.SHORT);
                } else {
                    dispatch(addMyProduct(item));
                    ToastAndroid.show('Product Added To Wishlist!', ToastAndroid.SHORT);
                }
            } else {
                navigation.navigate('LoginTab');
            }
        } catch (error) {
            console.error('Error in handleWishlistToggle:', error);
        }
    };

    const renderItemS = ({ item, index }) => {
        const wishlist = myProduct.some(product => product.id === item.id);

        return (
            <View style={{
                marginHorizontal: Dimension.getWidth(1),
                marginVertical: Dimension.getHeight(1),
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('product_detail', { data: item.id })}
                    //onPress={()=>Get_products_details()}

                    style={[{
                        borderRadius: 10,
                        backgroundColor: '#ffffff',
                        height: Dimension.getHeight(35),
                        width: Dimension.getWidth(45),
                        alignItems: 'center',
                        justifyContent: 'center'
                    }, styles.shadowProp]}>
                    <ImageBackground
                        source={{ uri: item.thumbnail_image }}
                        style={{
                            width: '100%',
                            height: Dimension.getHeight(30),
                            justifyContent: 'flex-end'
                        }}
                        resizeMode='cover'
                    >
                        <Text style={styles.imgtxtbox} numberOfLines={2}>{item.name}</Text>
                    </ImageBackground>
                    <TouchableOpacity onPress={() => handleWishlistToggle(item)}
                        style={{ position: 'absolute', top: 10, right: 10 }}>
                        <Ionicons name={wishlist ? 'heart' : 'heart-outline'} size={30} color="#ff0000" />
                    </TouchableOpacity>

                    {(item.discount !== '' && item.discount === null &&
                        // <Text style={styles.txtbox}>{formatCurrency(item.product_price)}</Text>
                        <Text style={styles.txtbox}>{(item.stroked_price)}</Text>
                    )}

                    {(item.discount !== '' && item.discount !== null &&
                        <View style={{ flexDirection: 'row' }}>
                            {/* <Text style={[styles.txtbox, { textDecorationLine: 'line-through', color: 'red' }]}>{formatCurrency(item.product_price)}</Text>
                  <Text style={styles.txtbox}>     {formatCurrency(item.product_price - ((item.product_price * item.discount) / 100))}</Text>
               */}

                            <Text style={[styles.txtbox, { textDecorationLine: 'line-through', color: 'red' }]}>{(item.stroked_price)}</Text>
                            <Text style={styles.txtbox}>  {item.main_price}</Text>

                        </View>
                    )}
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View>
            <View>
                <FlatList
                    // style={{ alignContent: 'center', alignSelf: 'center' }}
                    data={Data}
                    horizontal={true}
                    ListEmptyComponent={<Text style={{ color: 'black', alignSelf: 'center' }}>No Product Found</Text>}
                    ActivityIndicator
                    renderItem={renderItemS}
                />


            </View>

        </View>
    );
};

export default SIMILAR;
