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
            fontFamily: Fonts.Lato_Bold,
            marginVertical: hp('0.5%'),
        },
        text_bold: {
            fontSize: wp('4.5%'),
            color: Colors.black,
            fontFamily: Fonts.Lato_Bold,
            marginVertical: hp('0.5%')
        },
        text_key: {
            fontSize: wp('3.5%'),
            color: Colors.dark_grey,
            fontFamily: Fonts.Lato_Bold,
            //  backgroundColor:'red',
            // width: wp('40%'),
            marginVertical: hp('0.5%'),
            // width:wp('35%')

        },
        text_key1: {
            fontSize: wp('4%'),
            color: Colors.dark_grey,
            fontFamily: Fonts.Lato_Bold,
            //  backgroundColor:'red',
            width: wp('40%'),
            marginVertical: hp('0.5%'),

        },
        text_value: {
            fontSize: wp('4%'),
            color: Colors.black,
            fontFamily: Fonts.Lato_Reguler,
            width: wp('40%'),
            marginVertical: hp('0.5%'),
            textAlign: 'right',

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
            // flexDirection: 'row',
            marginHorizontal: wp('4%'),
            marginVertical: wp('1%'),
            // justifyContent: 'space-between'
            // borderWidth: wp('0.2%'),
            // borderRadius: wp('2%'),
            // borderColor: Colors.PrimaryLight
        },

        img: {
            height: hp('8%'), width: wp('16%'), resizeMode: 'contain'
        },


        row: {

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        row_pro: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // width:wp('70%'),
            // backgroundColor:'pink'
            //alignItems:'center'
        },
        Row: {
            flexDirection: 'row',
            width: wp('35%')

        },

        //////////////////////////////
        box: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            // height: hp('12%'),
            //  width: wp('90%'),
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp('2%'),
            paddingVertical: wp('2%'),
            // marginHorizontal:wp('2%'),
            marginVertical: hp('0.5%'),
            flexDirection: 'row'
        },
        box_order: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            // height: hp('12%'),
            //  width: wp('40%'),
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp('2%'),
            paddingVertical: wp('2%'),
            // marginHorizontal:wp('2%'),
            marginVertical: hp('1%'),
            flexDirection: 'row'
        },
        back_box: {
            padding: wp('4%'),
            borderRadius: wp('100%'),
            backgroundColor: "#ffffff"
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
            fontSize: wp('4%'),
            color: Colors.Primary,
            fontFamily: Fonts.Lato_Bold,
            //  width: wp('40%'),
            marginVertical: hp('0.5%'),
            textAlign: 'right'

        },
        txt_pro: {
            fontSize: wp('3.5%'),
            color: Colors.Primary,
            marginVertical: hp('0.5%'),
            fontFamily: Fonts.Lato_Bold
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
        button: {
            padding: wp('3%'),
            backgroundColor: Colors.Button,
            borderRadius: wp('2%'),
            alignItems: 'center',
            marginVertical: hp('2%')
        },
        button_text: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            fontFamily: Fonts.Lato_Bold,
        },

    }
)
export default styles;