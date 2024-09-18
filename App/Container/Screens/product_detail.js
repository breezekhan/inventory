// import { View, Text, ScrollView, TouchableOpacity, BackHandler, Image, TouchableWithoutFeedback, Modal, FlatList } from 'react-native'
// import React, { useEffect, useState, useMemo, useRef } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import styles from '../Styles/pro_detail_style'
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import LoadingModal from '../../Utils/LoadingModal';
// import Images from '../../Utils/Images';
// import { getCompId, getUserId, getUserPhone } from '../../Utils/MasterFunctions';
// import { Colors } from '../../helpers';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
// import { useRoute } from '@react-navigation/native';
// import { useFocusEffect } from '@react-navigation/native';
// import YouTubeIframe from 'react-native-youtube-iframe';
// import axios from 'axios';
// import API, { BaseUrl } from '../../Utils/API';
// import Swiper from 'react-native-swiper';
// import Share from 'react-native-share';
// import HTMLView from 'react-native-htmlview';
// import Toast from 'react-native-simple-toast';
// import { HttpCallGet, HttpCallPost } from '../../Utils/Get_Api';
// import moment from 'moment';
// import Video from 'react-native-video';
// import { WebView } from 'react-native-webview';
// import { showToast } from '../../Utils/Utils';
// import { useDispatch, useSelector } from 'react-redux';
// import { addProductToMyCart, deleteMyCartitem, removeMyCartitem } from '../../Utils/Redux/MyCartSlice';
// import Fonts from '../../helpers/Fonts';
// const Product_Detail = ({ navigation }) => {
//     const route = useRoute();
//     const [loading, setLoading] = useState(false);
//     const [qty, setQty] = useState(1);
//     const [fillid, setFillId] = useState(1);
//     const [fillname, setFillName] = useState(null);
//     const [more, setMore] = useState(false);
//     const [data, setData] = useState([]);
//     const [url, setUrl] = useState("");
//     const [image, setImage] = useState([]);
//     const [similar, setSimilarData] = useState([]);
//     const [modalVisible, setModalVisible] = useState(false);
//     const currentScreenName = route.name;
//     const handleBackPress = () => {
//         if (currentScreenName === "home") {
//             BackHandler.exitApp();
//             return true;
//         }
//         return false;
//     };
//     useFocusEffect(() => {
//         BackHandler.addEventListener('hardwareBackPress', handleBackPress);
//         return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//     });


//     useEffect(() => {
//         // getUserIDFun()
//         //GET_COMPANY_LIST()
//         GET_USER();
//         GET_PRO_DETAIL();
//     }, [])

//     React.useEffect(() => {
//         const unsubscribe = navigation.addListener('focus', () => {
//             GET_PRO_DETAIL();
//         });
//         return unsubscribe;
//     }, [navigation]);

//     const GET_USER = async () => {
//         try {
//             setLoading(true);
//             const userId = await getUserId();
//             console.log("ayaaaaaaaaaaaa", userId);
//             const response = await axios.get(BaseUrl + API.USER_DETAIL + userId, {
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             const json = response.data;

//             // console.log("ressssssssssssssssssssss", json?.user)
//             if (json?.status === true) {
//                 setLoading(false);
//             } else if (json?.status === false) {
//                 navigation.navigate('login')
//                 setLoading(false);
//                 showToast(json.message);
//             }
//         } catch (error) {
//             console.error("Error:", error.message);
//             showToast(error.message);

//         } finally {
//             setLoading(false);
//         }
//     };
//     const GET_PRO_DETAIL = async (Sd) => {
//         try {
//             setLoading(true);
//             console.log("issssssssdiiiiiiii", Sd)
//             const Id = Sd === undefined ? route.params.data.id : Sd;
//             console.log("ayaaaaaaaaaaaa", Id);
//             const response = await axios.get(BaseUrl + API.Pro_Detail + Id, {
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             const json = await response.data;
//             console.log("ressssssssssssssssssssss????", json?.product)
//             if (json?.status === true) {
//                 //   console.log("ressssssssssssssssssssss", json?.product?.video_link)
//                 setData(json?.product);
//                 // if (json?.product?.video_link !== null) {
//                 //     const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
//                 //     const match = json?.product.video_link.match(regex);
//                 //     const videoId = match ? match[1] : null;
//                 //     setUrl(videoId);
//                 // }
//                 if (json?.product?.video_link !== null) {
//                     const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
//                     const match = json?.product.video_link.match(regex);
//                     const videoId = match ? match[1] : null;
//                     setUrl(videoId);
//                 }
//                 setImage(json?.product.images);
//                 GET_Similar(json?.product.category_id);
//                 setLoading(false);
//             } else if (json?.status === false) {
//                 setLoading(false);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         } finally {
//             setLoading(false);
//         }
//     };
//     // console.log("urllllllll>>?",url,typeof(url))

//     const GET_Similar = async (id) => {
//         try {
//             setLoading(true);
//             const compId = await getCompId();
//             const requestData = new FormData();
//             requestData.append('category_id', id);
//             // requestData.append('startfrom', 1);
//             // requestData.append('totalrecords', 10);
//             const response = await axios.post(BaseUrl + API.Pro_By_Cat, requestData, {
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             const json = response.data;
//             // console.log("resssssssssssssssss____prooooooo", json.products);
//             if (json?.status === true) {
//                 setSimilarData(json.products);
//                 setLoading(false);
//             } else if (json?.status === false) {
//                 setLoading(false);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             setLoading(false);
//         } finally {

//         }
//     };

//     const shareContent = async () => {
//         const user_no = await getUserPhone();
//         console.log("nooooo", user_no)
//         try {
//             const eventTitle = data.name;
//             const price = data.price;
//             //  const url = data.video_link
//             const url = data.thumbail_image;

//             const phone = user_no;
//             const message = `
// ${url}
// ${eventTitle}
// Price: ₹${price}
// For more details, contact: ${phone}
// `;
//             const shareOptions = {
//                 message: message,
//             };

//             await Share.open(shareOptions);
//         } catch (error) {
//             console.error(error);
//             showToast(error.message);
//         }
//     };






//     const fillterdata =
//         [
//             { id: 1, name: "Description", img: Images.Discription },
//             { id: 2, name: "Specification", img: Images.Spe },
//             { id: 3, name: "Video", img: Images.Video },
//         ];


//     //REDUX
//     const dispatch = useDispatch();
//     const myCartItems = useSelector(state => state.cart);

//     const item = useMemo(() => {
//         const product = data;
//         if (!product) return null;
//         return {
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             discount: product.discount_price,
//             totalAmt: product.price - product.discount_price,
//             gstAmt: ((product.price - product.discount_price) * product.gst) / 100,
//             // subtotal: ((((product.price - product.discount_price) * product.gst) / 100) + (product.price - product.discount_price)) * qty,
//             /// price_total: ((((product.price - product.discount_price) * product.gst) / 100) + (product.price - product.discount_price)) * qty,
//             subtotal: (product.price - product.discount_price) * qty,
//             price_total: (product.price - product.discount_price),
//             qty: qty,
//             image: product.thumbail_image,
//             gst: product.gst,
//             stock: product.stock_quantity,
//             whole_sale_price: product.whole_sale_price
//         };
//     }, [data, qty]);


//     // console.log("myyyyyyyyy", item)


//     const existingCartItem = myCartItems.find(cartItem => cartItem.id === route.params.data.id);
//     // console.log("yooooooooooooooooooo", existingCartItem)
//     const scrollViewRef = useRef(null);

//     const scrollToTop = () => {
//         if (scrollViewRef.current) {
//             scrollViewRef.current.scrollTo({ y: 0, animated: true });
//         }
//     };

//     useEffect(() => {
//         if (fillid === 3 && data.video_link !== null && url !== "") {
//             // Assume the video is loading when component mounts
//             setLoading(true);
//         }
//     }, [fillid, data, url]);

//     return (
//         <View style={styles.Container}>
//             <View style={styles.Header}>
//                 <TouchableOpacity style={[styles.back_box, styles.shadowProp]} onPress={() => navigation.goBack()}  >
//                     <Ionicons name="arrow-back" color={Colors.Primary} size={wp('6.5%')} />
//                 </TouchableOpacity>
//                 <Text style={styles.text_header}>Product Details</Text>
//                 <TouchableOpacity style={styles.cartContainer} onPress={() => navigation.navigate("cart")}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <AntDesign name="shoppingcart" size={24} color="#ffffff" />
//                         {myCartItems.length > 0 && (
//                             <View
//                                 style={{
//                                     backgroundColor: 'red',
//                                     borderRadius: 10,
//                                     paddingHorizontal: 8,
//                                     paddingVertical: 2,
//                                     position: 'absolute',
//                                     top: hp('-2%'),
//                                     left: wp('4%'),
//                                 }} >
//                                 <Text style={{ color: Colors.white, fontSize: 10, fontFamily: Fonts.Lato_Reguler }}>{myCartItems.length}</Text>
//                             </View>
//                         )}
//                     </View>
//                 </TouchableOpacity>
//             </View>
//             <ScrollView ref={scrollViewRef}>
//                 <View style={styles.List}>
//                     {/* SWIPER */}

//                     <View style={styles.row_offer}>
//                         {/* <TouchableOpacity style={styles.offer}>
//                             <Text style={styles.txt_offer}>{data.discount_price} off</Text>
//                         </TouchableOpacity> */}
//                         <View></View>
//                         <TouchableOpacity style={[styles.back_box, styles.shadowProp]} onPress={() => shareContent()}>
//                             <FontAwesome name="share" color={Colors.black} size={wp('8%')} />
//                         </TouchableOpacity>

//                     </View>
//                     <Swiper
//                         autoplay={true}
//                         loop={true}
//                         style={{ marginVertical: '1%', height: hp(30) }}
//                         dotStyle={styles.dotStyle}
//                         activeDotStyle={styles.activeDotStyle}
//                     >

//                         {image.map((item, index) => (
//                             <Image
//                                 source={{ uri: item }}
//                                 style={styles.bannerImage}
//                                 key={index}
//                                 onError={(e) => console.log('Error loading image', e.nativeEvent.error)}
//                             />
//                         ))}
//                     </Swiper>

//                     <View style={{ marginVertical: hp('1%') }}>
//                         <Text style={styles.txt_pro}>{data.name}</Text>
//                         <View style={styles.row_qty}>
//                             <View style={styles.row}>
//                                 <Text style={[styles.txt_price, { textDecorationLine: item.discount > '0' ? 'line-through' : null }]}>₹{item.price}</Text>
//                                 {item.discount > '0' &&
//                                     <Text style={[styles.txt_price, { marginLeft: wp('2%') }]}>₹{item.price - item.discount}</Text>
//                                 }
//                             </View>
//                             {
//                                 existingCartItem === undefined ? (
//                                     <View style={[styles.plus_min, styles.shadowProp]}>
//                                         <TouchableOpacity onPress={() => {
//                                             if (qty === 1) {
//                                                 setQty(1)
//                                             } else {
//                                                 setQty(prevQty => prevQty - 1)
//                                             }
//                                         }}>
//                                             <FontAwesome name="minus" color={Colors.black} size={wp('5%')} />
//                                         </TouchableOpacity>
//                                         <Text style={styles.txt_pro}>{qty}</Text>
//                                         <TouchableOpacity onPress={() => {
//                                             if (qty >= data.stock_quantity) {

//                                                 showToast("out of stock")
//                                             }
//                                             else {
//                                                 setQty(prevQty => prevQty + 1)
//                                             }
//                                         }}>
//                                             <FontAwesome name="plus" color={Colors.black} size={wp('5%')} />
//                                         </TouchableOpacity>
//                                     </View>
//                                 ) : (
//                                     <View style={[styles.plus_min, styles.shadowProp]}>
//                                         <TouchableOpacity
//                                             onPress={() => {
//                                                 if (existingCartItem.qty > 1) {
//                                                     dispatch(removeMyCartitem(item))
//                                                 }
//                                                 else {
//                                                     dispatch(deleteMyCartitem(existingCartItem.id))
//                                                 }
//                                             }}
//                                         >
//                                             <FontAwesome name="minus" color={Colors.black} size={wp('5%')} />
//                                         </TouchableOpacity  >
//                                         <Text style={styles.txt_pro}>{existingCartItem.qty}</Text>
//                                         <TouchableOpacity onPress={() => {
//                                             if (qty >= data.stock_quantity) {
//                                                 showToast("out of stock")
//                                             }
//                                             else {
//                                                 dispatch(addProductToMyCart(item))
//                                             }
//                                         }}>
//                                             <FontAwesome name="plus" color={Colors.black} size={wp('5%')} />
//                                         </TouchableOpacity>
//                                     </View>
//                                 )}
//                         </View>
//                         {
//                             data.stock_quantity <= 0 ? (
//                                 <Text style={styles.text_out}>Out of stock</Text>
//                             ) : (
//                                 <TouchableOpacity
//                                     onPress={() => {
//                                         const existingCartItem = myCartItems.find(cartItem => cartItem.id === route.params.data.id);
//                                         if (existingCartItem && existingCartItem.id === item.id) {
//                                             showToast('Already Existing in Cart!');
//                                             navigation.navigate("cart");
//                                         } else {
//                                             showToast('Product Added To Cart!');
//                                             dispatch(addProductToMyCart(item));
//                                         }
//                                     }}
//                                     style={styles.button}
//                                 >
//                                     <Text style={styles.button_txt}>Add To Cart</Text>
//                                 </TouchableOpacity>
//                             )
//                         }
//                     </View>
//                     <View>
//                         <View style={styles.FillterView}>
//                             {fillterdata.map((item, index) => (
//                                 <TouchableOpacity
//                                     key={index}
//                                     onPress={() => { setFillId(item.id), setFillName(item.name), setMore(false) }}
//                                     style={[styles.fillbutton, { borderBottomColor: fillid === item.id ? Colors.Primary : 'transparent' }]}
//                                 >
//                                     <Image
//                                         source={item.img}
//                                         style={styles.Image_fill}
//                                         key={index}
//                                         onError={(e) => console.log('Error loading image', e.nativeEvent.error)}
//                                     />
//                                     <Text style={styles.txtfill}>{item.name}</Text>
//                                 </TouchableOpacity>
//                             ))}
//                         </View>

//                         <View style={styles.fill_in} >
//                             {fillid == 1 &&
//                                 <View>
                                   
//                                 </View>
//                             }
//                             {fillid == 2 &&
//                                 <View style={styles.row_sgg}>
                                   
//                                 </View>
//                             }
//                             {fillid == 3 &&
//                                 <View style={{}}>
                                   
                                  
//                                 </View>
//                             }
//                         </View>
//                     </View>
                   
                  
//                 </View>
//             </ScrollView>
//             <LoadingModal modalVisible={loading} />
//         </View >
//     )
// }

// export default Product_Detail

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const product_detail = () => {
  return (
    <View>
      <Text>product_detail</Text>
    </View>
  )
}

export default product_detail

const styles = StyleSheet.create({})