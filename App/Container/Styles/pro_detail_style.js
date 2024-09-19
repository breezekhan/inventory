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
        Header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: Colors.Primary,
            alignItems: 'center',
            height: hp('10%'),
            paddingHorizontal: wp('4%'),
        },
        row_header: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: wp("38%"),
        },
        row_offer: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            position: 'absolute',
            zIndex: 999,
            width: wp('90%')

        },
        row: {
            alignItems: 'center',
            //  justifyContent: 'space-between',
            flexDirection: 'row',

        },
        row_sgg: {
            //alignItems: 'center',
            // justifyContent: 'space-between',
            //  flexDirection: 'row',
            //  paddingHorizontal: wp('6%')

        },
        row_qty: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: hp('2%')

        },

        Text: {
            fontSize: 12,
            //alignSelf:'flex-start',
            color: Colors.black
        },
        txt_offer: {
            fontSize: wp('3.5%'),
            alignSelf: 'center',
            color: Colors.white,
            fontFamily: Fonts.Font_Reguler
        },
        text_bold: {
            fontSize: wp('5%'),
            color: Colors.Primary,
            fontFamily: Fonts.Lato_Bold,
            marginVertical: hp('0.5%')
        },
        text_out: {
            fontSize: wp('5%'),
            color: Colors.red,
            fontFamily: Fonts.Lato_Bold,
            marginVertical: hp('0.5%'),
            alignSelf: 'center'
        },
        text_header: {
            fontSize: wp('6%'),
            color: Colors.Primary,
            fontFamily: Fonts.Lato_Bold,
            marginVertical: hp('0.5%'),
        },
        back_box: {
            padding: wp('4%'),
            borderRadius: wp('100%'),
            backgroundColor: "#ffffff"
        },
        bell: {
            backgroundColor: Colors.Primary,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: wp('100%'),
            height: hp('6%'), width: wp('12%'),
        },


        offer: {
            padding: wp('1%'),
            backgroundColor: Colors.offer,
            height: hp('6%'),
            width: wp('12%'),
            borderRadius: wp('100%'),
            alignItems: 'center',
            justifyContent: 'center'
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
            marginLeft: wp('2%')
        },





        bannerImage: {
            width: wp("90%"),
            height: hp("30"),
            alignSelf: 'center',
            resizeMode: "contain"
        },



        cartContainer: {
            backgroundColor: Colors.Primary,
            padding: 10,
            borderRadius: 50,
        },

        //BOX

        cat_box: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            // height: hp('20%'),
            width: wp('28%'),
            alignItems: 'center',
            justifyContent: 'center',
            padding: wp('5%')
        },
        shadowProp: {
            shadowOffset: { width: -2, height: 4 },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
            zIndex: 1,
        },
        cat_row: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: hp('1%')
        },
        cat_img: {
            height: hp('8%'), width: wp('16%'), resizeMode: 'contain'
        },
        cat_txt: {
            fontSize: wp('2.8%'),
            color: Colors.black,
            marginTop: hp('1%')
            // fontWeight: 'bold',
        },
        text_view: {
            fontSize: wp('3.5%'),
            color: Colors.link_color,

        },
        row_view: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: hp('1%')
        },

        //PRODUCT
        box: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            height: hp('25%'),
            width: wp('42.8%'),
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: wp('2.5%'),
            marginHorizontal: wp('2%'),
            marginVertical: hp('2%'),
        },
        box_trans: {
            bottom: 0,
            position: 'absolute',
            marginBottom: hp('1%'),
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            // backgroundColor: 'rgba(128, 128, 128, 0.4)',
            borderWidth: wp('0.1'),
            borderColor: 'rgba(128, 128, 128, 0.4)',
            borderRadius: wp('2%'),
            padding: wp('1%'),
            width: wp('40%')
        },
        box_img: {
            height: hp('20%'), width: wp('40%'), resizeMode: 'contain',
        },
        txt_price: {
            fontSize: wp('5%'),
            color: Colors.price,
            marginVertical: hp('0.1%'),

            fontFamily: Fonts.Lato_Bold
        },
        txt_price_box: {
            fontSize: wp('3.5%'),
            color: Colors.price,
            marginVertical: hp('0.1%'),

            fontFamily: Fonts.Lato_Bold
        },
        txt_more: {
            fontSize: wp('3.5%'),
            color: Colors.price,
            marginVertical: hp('0.5%'),



        },
        txt_pro: {
            fontSize: wp('3.5%'),
            color: '#3E3636',
            marginVertical: hp('0.1%'),
            fontFamily: Fonts.Lato_Bold
        },

        //SPECIAL
        Image_special: {
            width: wp("90%"),
            height: hp("16%"),
            alignSelf: 'center',
            resizeMode: 'contain'
        },

















        List: {
            marginHorizontal: wp('4%'),
            marginVertical: wp('1%'),
            flex: 1
        },









        button: {
            backgroundColor: Colors.Button,
            padding: wp('3%'),
            width: "80%",
            alignItems: 'center',
            borderRadius: 10,
            alignSelf: 'center',
            marginVertical: hp('1%')
        },
        button_txt: {
            color: Colors.white,
            textAlign: 'justify',
            fontSize: wp('3.5%'),
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


        box_trans1: {
            // bottom: 0,
            // position: 'absolute',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            // backgroundColor: 'rgba(128, 128, 128, 0.4)',
            borderWidth: wp('0.1'),
            borderColor: 'rgba(128, 128, 128, 0.4)',
            borderRadius: wp('2%'),
            padding: wp('1%'),

        },

    }
)
export default styles;