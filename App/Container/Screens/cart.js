import { View, Text, ScrollView, TouchableOpacity, Image,FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../Styles/cart_style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Ionicons from 'react-native-vector-icons/Ionicons';


import { Colors } from '../../helpers';
import LoadingModal from '../../Utils/LoadingModal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { HttpCallGet } from '../../Utils/Get_Api';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { addProductToMyCart, clearMyCart, deleteMyCartitem, removeMyCartitem } from '../../Utils/Redux/MyCartSlice';
import { orEmptyString, showToast } from '../../Utils/Utils';

const Cart = ({ navigation }) => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  const handleCleanCart = () => {
    dispatch(clearMyCart());
  };
 
  const formatCurrency = (amount) => {
    // Use regular expression to add commas to the number
    const formattedAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `₹${formattedAmount}`;
  };
  //REDUX

  const myCartItems = useSelector(state => state.cart);
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
        <Text style={styles.text_header}>My Cart</Text>
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
                    <Text style={styles.text_key}>Price: <Text style={styles.txt_price}> ${Math.round(item.price)}</Text></Text>

                    <Text style={styles.text_key}>Total: <Text style={styles.txt_price}> ${Math.round(item.subtotal)}</Text></Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.row_qty}>
                    <Text style={styles.txt_price}></Text>
                    <View style={[styles.plus_min, styles.shadowProp]}>
                      <TouchableOpacity
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(removeMyCartitem(item))
                          }
                          else {
                            // dispatch(deleteMyCartitem(item.id))
                          }
                        }}
                      >
                        <FontAwesome name="minus" color={Colors.black} size={wp('5%')} />
                      </TouchableOpacity  >
                      <Text style={styles.txt_pro}>{item.qty}</Text>
                      <TouchableOpacity onPress={() => { dispatch(addProductToMyCart(item)) }}>
                        <FontAwesome name="plus" color={Colors.black} size={wp('5%')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity style={{}}
                    onPress={() => {
                      showToast('Removed From Cart')
                      dispatch(deleteMyCartitem(item.id))
                    }}>
                    <FontAwesome name="trash" color={Colors.black} size={wp('5%')} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          //  keyExtractor={(item) => item.id.toString()}
          />

        </View>
        {myCartItems.length > 0 &&
        <View style={{alignSelf:'flex-end',marginHorizontal:wp("2%")}}>
        <View style={[styles.row_total, {}]}>
          <Text style={styles.txttotal}>Total : </Text>
          <Text style={styles.txt_underline}>${getTotal(myCartItems)}</Text>
        </View>
        <TouchableOpacity style={[styles.button, {}]}
          onPress={() => navigation.navigate("checkout",{data:myCartItems})}
        >
          <Text style={styles.text_bold}>Check Out</Text>
        </TouchableOpacity>
        </View>
}
      </ScrollView >
      <LoadingModal modalVisible={loading} />
    </View >
  )
}

export default Cart