import { View, Text, ScrollView, TouchableOpacity, Image, Modal, FlatList,  TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../Styles/checkout_styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Images from '../../Utils/Images';
import { Colors } from '../../helpers';
import LoadingModal from '../../Utils/LoadingModal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { HttpCallGet } from '../../Utils/Get_Api';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
//import DropdownComponent from '../../Components/dropdown';
import { addProductToMyCart, clearMyCart, deleteMyCartitem, removeMyCartitem } from '../../Utils/Redux/MyCartSlice';
import { orEmptyString, showToast } from '../../Utils/Utils';
import { getCompId, getUserAdd, getUserEmail, getUserId, getUserName, getUserPhone } from '../../Utils/MasterFunctions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CheckOut = ({ navigation }) => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("");
  const [modalvisible, setmodalVisible] = useState(false);
  const handleCleanCart = () => {
    dispatch(clearMyCart());
  };
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
    console.log("yooooo===",myname,myadd)

    setName(myname)
    setEmail(myemail)
    setPhone(myphone)
    setAddress(myadd)
};

const PlaceOrder = async () => {
    
    setmodalVisible(true);
  
   
    await dispatch(clearMyCart());
  
    showToast("Order Placed Successfully")
    setTimeout(() => {
      
      setmodalVisible(false);
  
      
      navigation.navigate("home");
    }, 1500); 
   };
  
 
  //REDUX

  const myCartItems = route.params.data
  const dispatch = useDispatch();
  const getTotal = (myCartItems) => {
    let total = 0;
    // console.log("455555555545%%%%%%%%%%%%%%%", myCartItems)
    myCartItems.forEach(item => {
      // console.log("455555555545%%%%%%%%%%%%%%%", item.qty, item.subtotal)
      total += item.price * item.qty;
    });
    //return formatCurrency(total);
    return Math.round(total);
  };

  
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <TouchableOpacity style={[styles.back_box, styles.shadowProp]} onPress={() => navigation.goBack()}  >
          <Ionicons name="arrow-back" color={Colors.Primary} size={wp('6.5%')} />
        </TouchableOpacity>
        <Text style={styles.text_header}>Checkout</Text>
        <Text style={styles.text_header}></Text>
      </View>
      <ScrollView>
        <View style={styles.List}>
          <FlatList
            data={myCartItems}
            showsVerticalScrollIndicator={false}
            style={{}}
            //  numColumns={2}
            ListEmptyComponent={<Text style={{ color: 'black', alignSelf: 'center' }}>No Item Found</Text>}
            renderItem={({ item }) => (
              <View style={[styles.box, styles.shadowProp]}>
                <View style={styles.Row}>
                  <Image source={{ uri: item.image }} style={styles.img} />
                  <View style={{ marginLeft: wp('2%'), width: wp('60%') }}>
                    <Text numberOfLines={2} style={styles.txt_pro}>{item.name}</Text>
                    <View style={styles.row}>
                    <Text style={styles.text_key}>Price: <Text style={styles.txt_price}> ${Math.round(item.price)}</Text></Text>
                    <Text style={styles.text_key}>Quantity: <Text style={styles.txt_price}> {item.qty}</Text></Text>
                   </View>
                    <Text style={styles.text_key}>Total: <Text style={styles.txt_price}> ${Math.round(item.subtotal)}</Text></Text>
                  </View>
                </View>
               
              </View>
            )}
          //  keyExtractor={(item) => item.id.toString()}
          />

        </View>
        {myCartItems.length > 0 &&
        <View style={{marginHorizontal:wp("4%"),paddingHorizontal:wp("2%")}}>
            <View style={styles.row}> 
            <Text style={styles.text_final}>Name: <Text style={styles.txt_price}>{name}</Text></Text>
            <Text style={styles.text_final}>Mobile: <Text style={styles.txt_price}>{phone}</Text></Text>
            </View>
           
             <Text style={styles.text_final}>Email: <Text style={styles.txt_price}>{email}</Text></Text>
             <View style={styles.row}> 
             <Text style={styles.text_final}>Address: <Text style={styles.txt_price}>{address}</Text></Text>
             <TouchableOpacity onPress={()=>navigation.navigate("edit")}>
             <FontAwesome name={"edit"} size={wp("8%")} color={"#000000"} />
             </TouchableOpacity>
             
             </View> 
        <View style={[styles.row_total, {}]}>
       
          <Text style={styles.txttotal}>Total : </Text>
          <Text style={styles.txt_underline}>${getTotal(myCartItems)}</Text>
        </View>
        <TouchableOpacity style={[styles.button, {}]}
          onPress={() => PlaceOrder()}
        >
          <Text style={styles.text_bold}>Place order</Text>
        </TouchableOpacity>
        </View>
}
      </ScrollView >
     
      <Modal transparent={true} animation="slide" visible={modalvisible}>
        <TouchableWithoutFeedback onPress={() => setmodalVisible(false)}>
          <View style={styles.modal}>
            <TouchableWithoutFeedback>
              <View style={[styles.modalV, styles.shadowProp]}>
              <Image source={Images.Placed} style={{height:hp("30%"),width:wp("80%")}} />
              <Text style={[styles.text_modal]}>Order Placed Successfully</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <LoadingModal modalVisible={loading} />
    </View >
  )
}

export default CheckOut