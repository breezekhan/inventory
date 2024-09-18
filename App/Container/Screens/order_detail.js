// import { View, Text, ScrollView, TouchableOpacity, Image, Linking, FlatList, Alert, PermissionsAndroid } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import styles from '../Styles/Order_Detail_style'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import axios from 'axios';
// import API, { BaseUrl } from '../../Utils/API';
// import Images from '../../Utils/Images';
// import { Colors } from '../../helpers';
// import LoadingModal from '../../Utils/LoadingModal';
// import { useRoute } from '@react-navigation/native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
// import { HttpCallGet } from '../../Utils/Get_Api';
// import moment from 'moment';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import Share from 'react-native-share';
// import RNFS from 'react-native-fs';
// import { getCompId, getUserId } from '../../Utils/MasterFunctions';
// import { showToast } from '../../Utils/Utils';
// const Order_Detail = ({ navigation }) => {
//     const route = useRoute();
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState([]);
//     const [bill, setBill] = useState([]);
//     const [logo, setLogo] = useState("");
//     const [phone, setPhone] = useState("");
//     const [compname, setCompyName] = useState("");
//     const [email, setEmail] = useState("");
//     useEffect(() => {

//         GET_USER();
//         GET_COMPANY_LOGO();
//         GET_ORDER_DETAIL();

//     }, [])

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
//             const json = await response.data;
        
//             console.log("ressssssssssssssssssssss####", json?.company)
//             if (json?.status === true) {
//                 setCompyName(json.company.name);
//                 setPhone(json?.company.phone);
//                 setEmail(json?.company.email);
//                 // setPackage("Gold");

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


//     console.log(">>>>>>>", phone, compname)

//     const GET_COMPANY_LOGO = async () => {
//         try {
//             const id = await getCompId();
//             const requestData = new FormData();
//             requestData.append('company_id', id);
//             const response = await axios.post(BaseUrl + API.Comp_Logo, requestData, {
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             const json = await response.data;
//             console.log("loogg>>", json)
//             if (json?.status === true) {
//                 setLogo(json.company_logo_apps);

//             } else if (json?.status === false) {
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         } finally {
//         }
//     };

//     const GET_ORDER_DETAIL = async () => {
//         try {
//             setLoading(true);
//             const Id = route.params.data.id;
//             console.log("ayaaaaaaaaaaaa", Id);
//             const response = await axios.get(BaseUrl + API.ORDER_DETAIL + Id, {
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             const json = await response.data;
//             // console.log("ressssssssssssssssssssss", json?.data)
//             if (json?.status === true) {
//                 console.log("ressssssssssssssssssssss", json.data)
//                 console.log("ressssssssssssssssssssss", json.data.additional_data)
//                 await setData(json?.data);
//                 await setBill(json?.data?.additional_data);
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
//     const datapro =
//         [
//             { id: 1, name: "product", price: "100", image: Images.Pro },
//             { id: 2, name: "product1", price: "500", image: Images.Pro },
//         ];

//     const generatePDF = async () => {
//         try {
//             const htmlContent = `<!DOCTYPE html>
//             <html>
//             <head>
//                 <meta name="viewport" content="width=device-width, initial-scale=1">
//                 <title>INVOICE</title>
//                 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
//                 <meta charset="UTF-8">
//                 <style media="all">
//                     @page { margin: 0; padding: 0; }
//                     body { font-size: 0.875rem; font-family: sans-serif; font-weight: normal; padding: 0; margin: 0; }
//                     .gry-color, .gry-color * { color: #000; }
//                     table { width: 100%; }
//                     table th { font-weight: normal; }
//                     table.padding th { padding: .25rem .7rem; }
//                     table.padding td { padding: .25rem .7rem; }
//                     table.sm-padding td { padding: .1rem .7rem; }
//                     .border-bottom td, .border-bottom th { border-bottom: 1px solid #eceff4; }
//                     .text-left { text-align: left; }
//                     .text-right { text-align: right; }
//                 </style>
//             </head>
//             <body>
//                 <div>
//                     <div style="background: #eceff4; padding: 1rem;">
//                         <table>
//                             <tr style="margin-top: 15px !important;">
//                                 <td style="font-size: 1.5rem;" class="text-right strong">PROFORMA INVOICE</td>
//                             </tr>
//                         </table>
//                         <table>
//                             <tr>
//                                 <td class="strong">${compname}</td>
//                             </tr>
//                             <tr>
//                                 <td class="gry-color small">Email: ${email}</td>
//                                 <td class="text-right small"><span class="gry-color small">Order Date:</span> <span class="strong">${moment(data.created_at).format('DD/MM/YYYY')}</span></td>
//                             </tr>
//                             <tr>
//                                 <td class="gry-color small">Phone: ${phone}</td>
//                                 <td class="text-right small"><span class="gry-color small">Order Type:</span> <span class="strong">${data.order_type}</span></td>
//                             </tr>
//                             <tr>
//                                 <td></td>
//                                 <td class="text-right small"><span class="gry-color small">Order Status:</span> <span class="strong">${data.status === 0 ? "Pending" : "Confirmed"}</span></td>
//                             </tr>
//                         </table>
//                     </div>
//                     ${bill ? `
//                     <div style="padding-right: 1rem; padding-left: 1rem;">
//                         <table>
//                             <h3>Bill to:</h3>
//                             <tr>
//                                 <td class="small"><span class="strong">${data.order_type === "Farmer" ? bill.name : bill.shop_name}</span></td>
//                                 <td></td>
//                             </tr>
//                             <tr>
//                                 <td class="small"><span class="gry-color small">Mobile No:</span> <span class="strong">${data.order_type === "Farmer" ? bill.phone : bill.mobile}</span></td>
//                                 <td></td>
//                             </tr>
//                             <tr>
//                                 <td class="small"><span class="gry-color small">Address:</span> <span class="strong">${bill.address}</span></td>
//                                 <td></td>
//                             </tr>
//                             <tr>
//                                 <td class="small"><span class="gry-color small">City:</span> <span class="strong">${bill.city}</span></td>
//                                 <td></td>
//                             </tr>
//                         </table>
//                     </div>` : ''}
//                     <div style="padding: 1rem;">
//                         <table class="padding text-left small border-bottom">
//                             <thead>
//                                 <tr class="gry-color" style="background: #eceff4;">
//                                     <th width="5%" class="text-left">S.no</th>
//                                     <th width="45%" class="text-left">Product Name</th>
//                                     <th width="15%" class="text-left">Price</th>
//                                     <th width="10%" class="text-left">Qty</th>
//                                     <th width="10%" class="text-left">Including GST (%)</th>
//                                     <th width="15%" class="text-right">Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody class="strong">
//                                 ${data.items.map((item, index) => `
//                                 <tr>
//                                     <td>${index + 1}</td>
//                                     <td>${item.product_details.product_name}</td>
//                                     <td class="currency">₹${Math.round(item.price)}</td>
//                                     <td>${item.qty}</td>
//                                     <td>${item.gst}</td>
//                                     <td class="currency text-right">₹${Math.round(item.subtotal)}</td>
//                                 </tr>`).join('')}
//                             </tbody>
//                         </table>
//                     </div>
//                     <div style="padding:0 1.5rem;">
//                         <table class="text-right small strong">
//                             <thead>
//                                 <tr>
//                                     <th width="60%"></th>
//                                     <th width="40%"></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td class="text-left"></td>
//                                     <td>
//                                         <table class="text-right">
//                                             <tbody>
//                                                 <tr>
//                                                     <th class="gry-color text-left">TOTAL</th>
//                                                     <td class="currency text-right">₹${data.amount}</td>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </body>
//             </html>`;


//             const options = {
//                 html: htmlContent,
//                 fileName: 'invoice',
//                 directory: 'Documents',
//             };

//             const pdf = await RNHTMLtoPDF.convert(options);

//             //   if (Platform.OS === 'android') {
//             //     const granted = await PermissionsAndroid.request(
//             //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//             //       {
//             //         title: 'Storage Permission Required',
//             //         message: 'App needs access to your storage to download the PDF',
//             //         buttonNeutral: 'Ask Me Later',
//             //         buttonNegative: 'Cancel',
//             //         buttonPositive: 'OK',
//             //       },
//             //     );
//             //     if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//             //       Alert.alert('Permission Denied!', 'Storage permission is required to download the PDF');
//             //       return;
//             //     }
//             //   }

//             //NOTE: Changes in AndroidManifest and MainAtivity For Android 12+

//             // const filePath = `${RNFS.DownloadDirectoryPath}/${route.params.data.id}_invoice.pdf`;

//             // await RNFS.moveFile(pdf.filePath, filePath);

//             // Alert.alert('Success', `PDF saved to: ${filePath}`, [{ text: 'OK' }]);

//             return pdf.filePath;
//         } catch (error) {
//             console.error(error);
//             Alert.alert('Error', 'Failed to generate PDF', [{ text: 'OK' }]);
//         }
//     };


//     const handleDownloadPDF = async () => {
//         const pdfPath = await generatePDF();
//         if (pdfPath) {
//             const shareOptions = {
//                 title: 'Invoice PDF',
//                 url: `file://${pdfPath}`,
//                 type: 'application/pdf',
//             };

//             Share.open(shareOptions)
//                 .then((res) => console.log(res))
//                 .catch((err) => console.error(err));
//         }
//     };
//     return (
//         <View style={styles.Container}>
//             <View style={styles.Header}>
//                 <TouchableOpacity style={[styles.back_box, styles.shadowProp]} onPress={() => navigation.goBack()}  >
//                     <Ionicons name="arrow-back" color={Colors.Primary} size={wp('6.5%')} />
//                 </TouchableOpacity>
//                 <Text style={styles.text_header}>Order Details</Text>
//                 <Text style={styles.text_header}></Text>
//             </View>
//             <ScrollView>
//                 <View style={styles.List}>
//                     {/* ORDERS */}
//                     <View>
//                         <Text style={styles.text_bold}>View Order Details</Text>
//                     </View>
//                     <View style={[styles.box_order, styles.shadowProp]}>
//                         <View style={{ flex: 1 }}>
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key1}>Order Status</Text>
//                                 <Text style={styles.text_value}>{data.status === 0 ? "Pending" : "Confirmed"}</Text>
//                             </View>
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key1}>Order Type</Text>
//                                 <Text style={styles.text_value}>{data.order_type}</Text>
//                             </View>
//                             {/* <View style={styles.row}>
//                                 <Text style={styles.text_key1}>Name</Text>
//                                 <Text style={styles.text_value}>{data.additional_data.name}</Text>
//                             </View> */}
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key1}>Order Date</Text>
//                                 <Text style={styles.text_value}>{moment(data.created_at).format('DD/MM/YYYY')}</Text>

//                             </View>
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key1}>Order Id</Text>
//                                 <Text style={styles.text_value}>{route.params.data.id}</Text>
//                             </View>
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key1}>Order Total</Text>
//                                 <Text style={styles.text_value}> ₹{data.amount}</Text>
//                             </View>
//                         </View>
//                     </View>
//                     {
//                         bill &&
//                         <View>
//                             <View>
//                                 <Text style={styles.text_bold}>Bill To</Text>
//                             </View>
//                             <View style={[styles.box_order, styles.shadowProp]}>
//                                 <View style={{ flex: 1 }}>
//                                     <View style={styles.row}>
//                                         <Text style={styles.text_key1}>Name</Text>
//                                         <Text style={styles.text_value}>{data.order_type === "Farmer" ? bill.name : bill.shop_name}</Text>
//                                     </View>
//                                     <View style={styles.row}>
//                                         <Text style={styles.text_key1}>Mobile No</Text>
//                                         <Text style={styles.text_value}>{data.order_type === "Farmer" ? bill.phone : bill.mobile}</Text>
//                                     </View>

//                                     <View style={styles.row}>
//                                         <Text style={styles.text_key1}>City</Text>
//                                         <Text style={styles.text_value}>{bill.city}</Text>

//                                     </View>
//                                     <View style={styles.row}>
//                                         <Text style={styles.text_key1}>Address</Text>
//                                         <Text style={styles.text_value}>{bill.address}</Text>

//                                     </View>

//                                 </View>
//                             </View>
//                         </View>

//                     }

//                     {/* Payment */}
//                     {/* <View>
//                         <Text style={styles.text_bold}>Payment information</Text>
//                     </View>
//                     <View style={[styles.box_order, styles.shadowProp]}>
//                         <View style={{ marginHorizontal: wp('4%') }}>
//                             <Text style={[styles.text_bold, {}]}>Payment Methods</Text>
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key}>Payment</Text>
//                                 <Text style={styles.text_value}>Razorpay</Text>
//                             </View>
//                         </View>
//                     </View> */}
//                     {/* PRODUCT */}
//                     <View>
//                         <Text style={styles.text_bold}>Product Details</Text>
//                     </View>
//                     <FlatList
//                         data={data.items}
//                         showsVerticalScrollIndicator={false}
//                         style={{}}
//                         //  numColumns={2}
//                         ListEmptyComponent={<Text style={{ color: 'black', alignSelf: 'center' }}>No Data Found</Text>}
//                         renderItem={({ item }) => (
//                             <View
//                                 style={[styles.box, styles.shadowProp]}>
//                                 <View style={[styles.row]}>
//                                     <Image source={{ uri: item.product_details.thumbail_image }} style={styles.img} />
//                                     <View style={{ marginLeft: wp('2%'), flex: 1 }}>
//                                         <Text numberOfLines={2} style={styles.txt_pro}>{item.product_details.product_name}</Text>
//                                         <View style={styles.row_pro}>
//                                             <Text style={styles.text_key}>Price : <Text style={styles.txt_price}> ₹{Math.round(item.price)}</Text></Text>
//                                             {/* <Text style={[styles.text_key,{textAlign:'right'}]}>GST({item.gst}%) : <Text style={styles.txt_price}>₹{Math.round(item.gst_price)}</Text></Text> */}
//                                             <Text style={[styles.text_key, { textAlign: 'right' }]}>INCL ({item.gst}% GST)</Text>
//                                         </View>
//                                         <View style={styles.row_pro}>
//                                             <Text style={styles.text_key}>Quantity : <Text style={styles.txt_price}>{item.qty}</Text></Text>
//                                             <Text style={[styles.text_key, { textAlign: 'right' }]}>Total : <Text style={styles.txt_price}> ₹{Math.round(item.subtotal)}</Text></Text>
//                                         </View>
//                                     </View>
//                                 </View>
//                                 {/* <Ionicons name="chevron-forward" color={Colors.Primary} size={wp('6.5%')} /> */}
//                             </View>
//                         )}
//                         keyExtractor={(item) => item.product_id.toString()}
//                     />
//                     {/* ORDERS */}
//                     <View>
//                         <Text style={styles.text_bold}>View Order Details</Text>
//                     </View>
//                     <View style={[styles.box_order, styles.shadowProp]}>
//                         <View style={{ flex: 1 }}>
//                             {/* <View style={styles.row}>
//                                 <Text style={styles.text_key}>Sub Total</Text>
//                                 <Text style={styles.text_value}>0000</Text>
//                             </View>
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key}>Discount</Text>
//                                 <Text style={styles.text_value}>0000</Text>
//                             </View>
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key}>Shipping Cost</Text>
//                                 <Text style={styles.text_value}>0000</Text>
//                             </View>
//                             <View style={styles.row}>
//                                 <Text style={styles.text_key}>Tax</Text>
//                                 <Text style={styles.text_value}>0000</Text>
//                             </View> */}
//                             <View style={styles.row}>
//                                 <Text style={[styles.text_key, { fontWeight: 'bold', fontSize: wp('5%') }]}>Order Total:</Text>
//                                 <Text style={styles.txt_price}>₹{data.amount}</Text>
//                             </View>


//                         </View>

//                     </View>
//                     <TouchableOpacity onPress={() =>
//                         handleDownloadPDF()
//                         //  generatePDF()
//                     }
//                         style={styles.button}>
//                         <Text style={styles.button_text}>Download Invoice</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//             {/* <LoadingModal modalVisible={loading} /> */}
//         </View>
//     )
// }

// export default Order_Detail