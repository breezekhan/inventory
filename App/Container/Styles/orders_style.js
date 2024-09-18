import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../helpers";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Fonts from "../../helpers/Fonts";
const styles = StyleSheet.create(
    {
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
        text_header: {
            fontSize: wp('6%'),
            color: Colors.Primary,
            fontFamily:Fonts.Lato_Bold,
            marginVertical: hp('0.5%'),
        },
        text_bold: {
            fontSize: wp('5%'),
            color: Colors.black,
            fontWeight: 'bold',
            // marginVertical: hp('0.5%')
        },back_box:{
            padding:wp('4%'),
            borderRadius:wp('100%'),
            backgroundColor:"#ffffff"
        },


        Header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: Colors.Primary,
            alignItems: 'center',
            height: hp('10%'),
            paddingHorizontal: wp('4%'),
        },

        FillterView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp('4%'),
            paddingVertical: wp('1%'),
            backgroundColor: Colors.PrimaryLight,
        },

        List: {
            flexDirection: 'row',
            marginHorizontal: wp('4%'),
            marginVertical: wp('1%'),
            justifyContent: 'space-between'
            // borderWidth: wp('0.2%'),
            // borderRadius: wp('2%'),
            // borderColor: Colors.PrimaryLight
        },

        //////////////////////////////
        box: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            height: hp('12%'),
          //  width: wp('40%'),
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp('2%'),
            marginHorizontal:wp('2%'),
            marginVertical:hp('1%'),
            flexDirection:'row'
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
            fontFamily:Fonts.Lato_Bold,
        },
        txt_value: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            marginVertical: hp('0.5%'),
            fontFamily:Fonts.Lato_Bold,
        },
        txt_pro: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            marginVertical: hp('0.5%'),
            fontFamily:Fonts.Lato_Reguler,
        },
        
        pic: {
            width: wp('18%'),
            height: hp('9%'),
            borderWidth: wp('0.5%'),
            borderColor: Colors.light_gray,
            borderRadius: wp('100%'),
            resizeMode: 'contain'
            // marginRight:Dimension.getWidth(7)
        },
        row:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        },
        text_msg: {
            fontSize: wp('4%'),
            color: "black",
            marginVertical: hp('1%'),
            // fontFamily: Fonts.Relway_Bold,
          },
          button_book1: {
            padding: wp('0.2%'),
            width:wp('43%'),
            backgroundColor: "#FFB61D",
            borderRadius: wp('2%'),
            marginVertical: hp('1%'),
            alignItems: 'center',
            // alignSelf: 'flex-end',
            // marginBottom:hp("4.5%")
          
          },
          inputField: {
            borderWidth: 1,
            width: wp(75),
            minHeight: 40,
            borderRadius: 13,
            color: "black",
            borderColor: "lightgrey",
            marginVertical: hp(1),
            
        },
        

    }
)
export default styles;