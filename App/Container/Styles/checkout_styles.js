import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../helpers";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Fonts from "../../helpers/Fonts";
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.white,
        //alignItems: 'center'
    },
    Text: {
        fontSize: wp('5%'),
        //alignSelf:'flex-start',
        color: Colors.black
    },
    modal: {
        flex: 1,
        //backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
      },
      modalV: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        height: "40%",
        width: "80%",
        borderRadius: "2%",
      },
      shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 1,
    },
    text_sel: {
        fontSize: wp('3.5%'),
        fontFamily: Fonts.Lato_Reguler,
        color: Colors.black
    },
    text_header: {
        fontSize: wp('6%'),
        color: Colors.Primary,
        fontFamily: Fonts.Lato_Bold,
        marginVertical: hp('0.5%'),
    },
    text_modal: {
        fontSize: wp('6%'),
        color: Colors.Primary,
       fontWeight:'bold',
        marginVertical: hp('0.5%'),
    },
    text_bold: {
        fontSize: wp('4%'),
        color: Colors.white,
       fontWeight:'bold',
        marginVertical: hp('0.5%')
    },
    text_key: {
        fontSize: wp('4%'),
        color: Colors.dark_grey,
        fontFamily: Fonts.Lato_Bold,
        width: wp('40%'),
        marginVertical: hp('0.5%'),

    },
    text_final: {
        fontSize: wp('4%'),
        color: Colors.dark_grey,
        fontFamily: Fonts.Lato_Bold,
       // width: wp('40%'),
        marginVertical: hp('0.5%'),

    },
    text_value: {
        fontSize: wp('4%'),
        color: Colors.black,
        fontFamily: Fonts.Lato_Reguler,
        width: wp('40%'),
        marginVertical: hp('0.5%'),
        textAlign: 'right'

    },


    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: Colors.Primary,
        alignItems: 'center',
        height: hp('10%'),
        paddingHorizontal: wp('4%'),
    },
    List: {
        marginHorizontal: wp('4%'),
        marginVertical: wp('1%'),
    },
    img: {
        height: hp('12%'), width: wp('22%'), resizeMode: 'contain'
    },
    Row: {
        flex:1,
        flexDirection: 'row',
       // justifyContent: 'space-between',
        alignItems: 'center',
       // backgroundColor:'red'
    },
    row: {
       // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor:'pink'
    },
    row_total: {
        // flex:1,
         flexDirection: 'row',
        // justifyContent: 'flex-end',
         alignItems: 'center',
         marginVertical:hp('0.5%'),
       alignSelf:'flex-end'
         //backgroundColor:'pink'
     },
    box: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        //  height: hp('12%'),
        //  width: wp('40%'),
        // alignItems: 'center',
        // justifyContent: 'space-between',
        padding: wp('2%'),
         marginHorizontal:wp('1%'),
        marginVertical: hp('1%'),
        //  flexDirection: 'row'
    },
    back_box:{
        padding:wp('4%'),
        borderRadius:wp('100%'),
        backgroundColor:"#ffffff"
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 1,
    },
    box_img: {
        height: hp('10%'), width: wp('20%'), resizeMode: 'contain',
    },
    txt_price: {
        fontSize: wp('3.5%'),
        color: Colors.price,
        marginVertical: hp('0.5%'),
        fontWeight: 'bold',
    },
    txt_pro: {
        fontSize: wp('4%'),
        color: Colors.black,
        marginVertical: hp('0.5%'),
        fontFamily: Fonts.Lato_Bold,
    },
    row_qty: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: hp('0.8%')

    },
    plus_min: {
        paddingHorizontal: wp('2.5%'),
        backgroundColor: Colors.white,
        height: hp('4.5%'),
        width: wp('30%'),
        borderRadius: wp('100%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },

/////////////////
total: {
    //marginHorizontal:Dimension.getWidth(15),
   // alignItems:'flex-end',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    //alignSelf:'flex-end',
    //  height: hp('12%'),
    //  width: wp('40%'),
    // alignItems: 'center',
    // justifyContent: 'space-between',
    padding: wp('2%'),
    // marginHorizontal:wp('2%'),
    marginVertical: hp('1%'),
    //  flexDirection: 'row'
    marginBottom:hp('15%')

},
txttotal: {
    fontWeight: "bold", color: 'black',
    fontSize: wp('5%'),marginVertical:hp('1%') ,fontWeight:"bold"
},
txt_underline: {
    fontWeight: "bold", color: 'black',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    fontFamily: Fonts.Lato_Reguler
},
button: {
    alignItems: 'center',
  alignSelf:'flex-end',
    justifyContent: 'center',
   
     backgroundColor: Colors.Button,
    borderRadius: wp("2%"),
    marginVertical: "1%",
   
    padding: wp('2%'),
    width:wp("50%")
  
},

input: {
    
    justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',
    color: '#000000',
    fontFamily: Fonts.Lato_Reguler,
   // justifyContent: 'center',
    marginVertical: hp('1%'),
    minHeight: hp('6%'),
    borderColor: Colors.border,
    borderWidth: wp('0.1%'),
    borderRadius: wp('1%'),
    padding: wp('2%'),
    backgroundColor: Colors.input,width:wp("40%")
},
container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
modalViewR: {
    paddingHorizontal: wp('4%'),
    //  borderTopEndRadius: 3,
    //  borderTopLeftRadius: 3,
    // marginTop: Dimension.getHeight(18),
    height: hp('40%'),
    width: wp('80%'),

    borderRadius: wp('5%'),
  // alignItems: 'center',

    borderColor: Colors.black,
    borderWidth: wp('0.2%'),
    alignSelf: 'center',
    backgroundColor: '#5f9ea0',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 44,
},
txt_modal: {
    color: Colors.black,
    fontSize: wp('4%'),
    fontFamily:Fonts.Lato_Reguler
},
modalbox: {
    alignItems: 'center',
    // borderWidth: wp('0.1%'),
    padding: wp('1%'),
    borderRadius: wp('2%'),
    marginVertical: hp('1%'),
    flexDirection:'row'
},
text_m_h: {
    fontSize: wp('4%'),
    color: Colors.black,
    fontFamily:Fonts.Lato_Bold,
    marginVertical: hp('0.5%'),
    alignSelf:'center',
   
},
 /////////////////////////
 containerD: {

    backgroundColor: 'white',
    //  padding: wp('2%'),
    marginVertical: hp('2%')
},
dropdown: {
    height: wp('12%'),
    width:wp('41%'),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
    marginVertical:hp('1%')
},
icon: {
    marginRight: 5,
},
label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
},
placeholderStyle: {
    fontSize: wp('3.5%'),
    color: 'black'
},
selectedTextStyle: {
    fontSize: wp('3.5%'),
    color: 'black'
},
iconStyle: {
    width: 20,
    height: 20,
},
inputSearchStyle: {
    fontSize: wp('3.5%'),
    color: 'black'
},
itemTextStyle: {
    fontSize: wp('3.5%'),
    color: 'black',
    marginVertical:wp('-4%')
},
itemContainerStyle: {
   // paddingVertical: wp('-10%'),  // Adjust this value to increase/decrease the vertical space between items
},
})
export default styles;