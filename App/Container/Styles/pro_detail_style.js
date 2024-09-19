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

        //SWIPER
        dotStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
        },
        activeDotStyle: {
            backgroundColor: 'white',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
        },

        bannerImage: {
            width: wp("90%"),
            height: hp("30"),
            alignSelf: 'center',
            resizeMode: "contain"
        },
        FillterView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: hp('2%'),
            // paddingHorizontal: wp('4%'),
            // paddingVertical: wp('3%'),
            // backgroundColor: Colors.PrimaryLight,
        },
        fill_in: {
            borderWidth: wp('0.5%'),
            borderColor: Colors.light_gray,
            padding: wp('2%'),
            borderRadius: wp('5%'),
            // alignItems:'center'
        },

        txtfill: {
            color: Colors.black,
            marginTop: hp('1%'),
            fontFamily: Fonts.Lato_Bold
        },
        txtselc: {
            color: Colors.black,
            fontWeight: 'bold',
            width: wp('70%'),

        },
        fillbutton: {
            // backgroundColor: Colors.white,
            padding: wp('1%'),
            //  width: "40%",
            alignItems: 'center',
            borderBottomWidth: wp('0.5%')
            // borderRadius: 10
        },
        Image_fill: {
            width: wp("25%"),
            height: hp("5"),
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
            fontSize: wp('3%'),
            color: Colors.price,
            marginVertical: hp('0.5%'),

            fontFamily: Fonts.Lato_Bold,

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









        text_dis: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            fontFamily: Fonts.Relway_Reguler,
            textAlign: 'justify'
        },
        text_das: {
            fontSize: wp('3.5%'),
            color: Colors.dark_grey,
            fontWeight: 'bold',
            // marginVertical: hp('0.5%'),
            width: wp('5%'), textAlign: 'center'
        },
        text_value: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            // fontWeight: 'bold',
            marginVertical: hp('0.5%'),
            fontFamily: Fonts.Lato_Reguler
        },
        text_key: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            fontFamily: Fonts.Lato_Bold,
            marginVertical: hp('0.5%'),
            textAlign: 'justify',

        },




        modalbox: {
            // alignItems: 'center',
            // borderWidth: wp('0.1%'),
            padding: wp('1%'),
            borderRadius: wp('2%'),
            marginVertical: hp('1%')
        },
        txt_modal: {
            color: Colors.black,
            fontSize: wp('4%'),

            // padding:wp('1%')
            // fontWeight: 'bold'
        },


        List: {
            marginHorizontal: wp('4%'),
            marginVertical: wp('1%'),
            flex: 1
        },





        ////
        container1: {
            flex: 1,
            //alignItems: 'center', 
            justifyContent: 'flex-end'
        },
        modalViewR: {
            paddingHorizontal: wp('4%'),
            //  borderTopEndRadius: 3,
            //  borderTopLeftRadius: 3,
            // marginTop: Dimension.getHeight(18),
            // height: Dimension.getHeight(50),
            width: wp('100%'),
            minHeight: hp('20%'),
            maxHeight: hp('80%'),
            //  width: Dimension.getWidth(95),
            // alignItems: 'flex-start',
            borderTopLeftRadius: wp('10%'),
            borderTopRightRadius: wp('10%'),
            borderColor: Colors.black,
            borderWidth: wp('0.2%'),
            //  alignSelf: 'center',
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

        bar: {
            backgroundColor: Colors.dark_grey,
            padding: wp('1%'),
            width: wp('60%'),
            alignSelf: 'center',
            borderRadius: wp('100%'),
            marginVertical: hp('0.5%')

        },

        InputView: {
            borderRadius: 10,
            marginHorizontal: wp('4%'),
            borderWidth: wp('0.1%'),
            borderRadius: wp('1%'),
            padding: wp('2%'),

        },


        input: {
            color: '#000000',
            // width: wp('85%'),
            justifyContent: 'center',
            marginVertical: hp('1%'),
            height: hp('6%'),
            borderColor: Colors.dark_grey,
            borderWidth: wp('0.1%'),
            borderRadius: wp('1%'),
            padding: wp('2%'),
            // backgroundColor: Colors.white
        },

        rowlist: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomWidth: wp('0.1%'),
            marginVertical: wp('1%'),
            borderBlockColor: Colors.dark_grey
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

        html: {
            p: { color: '#000000', textAlign: 'justify', },
            b: { color: '#000000', textAlign: 'justify', },
            div: { color: '#000000', textAlign: 'justify', },
            br: { color: '#000000', textAlign: 'justify', },
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