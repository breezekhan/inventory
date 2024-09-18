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
            paddingHorizontal: wp('4%')
        },
        row_header: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: wp("38%"),
        },
        row: {
            alignItems: 'center',
            // justifyContent: 'space-between',
            flexDirection: 'row',
        },
        Text: {
            fontSize: 12,
            //alignSelf:'flex-start',
            color: Colors.black
        },
        text_bold: {
            fontSize: wp('5%'),
            color: Colors.black,
            fontFamily: Fonts.Relway_Bold,
            marginVertical: hp('0.5%')
        },
        text_header: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            fontFamily: Fonts.Lato_Bold,
            marginLeft: wp('2%'),
            marginVertical: wp('0.5%')

        },
        txt_name: {
            fontSize: wp('4%'),
            color: Colors.Primary,
            fontFamily: Fonts.Lato_Bold,
            marginLeft: wp('2%'),
            marginVertical: wp('0.5%')

        },
        bell: {
            backgroundColor: Colors.Primary,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: wp('100%'),
            height: hp('6%'), width: wp('12%'),
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
            width: wp("95%"),
            height: hp("15%"),
            alignSelf: 'center',
            resizeMode: 'contain'
        },
        //BOX
        cat_box: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            // height: hp('20%'),
            width: wp('28%'),
            alignItems: 'center',
            justifyContent: 'center',
            padding: wp('2%')
        },
        cat_box_Society: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            // height: hp('20%'),
            width: wp('45%'),
            alignItems: 'center',
            justifyContent: 'center',
            padding: wp('10%')
        },
        cat_img: {
            height: hp('8%'), width: wp('16%'), resizeMode: 'contain'
        },
        cat_box1: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            // height: hp('20%'),
            // width: wp('21%'),
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: wp('2%'),
            paddingHorizontal: wp('6%')
        },
        cat_img1: {
            height: hp('8%'), width: wp('16%'), resizeMode: 'contain'
        },
        cat_box2: {
            borderRadius: wp('2%'),
            backgroundColor: '#ffffff',
            // height: hp('20%'),
            width: wp('21%'),
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: wp('2%'),
            //  paddingHorizontal:wp('4%')
        },
        cat_img2: {
            height: hp('5%'), width: wp('10%'), resizeMode: 'contain'
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
        cat_txt: {
            fontSize: wp('3%'),
            color: Colors.black,
            marginTop: hp('1%'),
            fontFamily: Fonts.Relway_Reguler
            // fontWeight: 'bold',
        },
        text_view: {
            fontSize: wp('3.5%'),
            color: Colors.Primary,
            fontFamily: Fonts.Lato_Bold
        },
        row_view: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: hp('1%'),
        },
        //PRODUCT
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
        
        txt:{
            fontSize:14,
            color:"#444444", 
            width:wp("50%"),
            marginVertical:"1%"
           },
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
        box_img: {
            height: hp('25%'), width: wp('40%'), resizeMode: 'contain'
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
        txt_price: {
            fontSize: wp('3.5%'),
            // color: '#21de8f',
            color: Colors.price,
            marginVertical: hp('0.2%'),
            fontFamily: Fonts.Lato_Bold
        },
        offerTxt: {
            //flex: 0.70,
            textAlign: 'right',
            color: Colors.link_color,
            fontFamily: Fonts.Font_Semibold,
            fontSize: wp('2.8%'),
            // textTransform: 'uppercase',
            // textDecorationLine: 'line-through'
        },
        txt_pro: {
            fontSize: wp('3.2%'),
            color: Colors.black,
            // marginVertical: hp('0.2%'),
          //  width:wp('35%'),
            fontFamily: Fonts.Lato_Bold
        },
        txt_pro2: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            marginVertical: hp('0.5%'),
            fontFamily:Fonts.Lato_Reguler,
        },
        row2:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        },
       //SPECIAL
        Image_special: {
            width: wp("95%"),
            height: hp("20%"),
            alignSelf: 'center',
            resizeMode: 'contain'
        },
        text_key: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            fontWeight: 'bold',
            //marginVertical: hp('0.5%'),
            width: wp('30%'), textAlign: 'left'
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
            // marginVertical: hp('0.5%'),
            textAlign: 'justify',
            width: wp('50%')
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
            backgroundColor: Colors.Primary,
            padding: wp('3%'),
            width: "48%",
            alignItems: 'center',
            borderRadius: 10
        },
        txt_forgt: {
            color: Colors.link_color
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
        box_Society:{  borderRadius: 10,
            backgroundColor: '#ffffff',
            height: hp('12%'),
          //  width: wp('40%'),
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp('2%'),
            marginHorizontal:wp('0.5%'),
            marginVertical:hp('1%'),
            flexDirection:'row'},
            txt_value: {
                fontSize: wp('3.5%'),
                color: Colors.black,
                marginVertical: hp('0.5%'),
                fontFamily:Fonts.Lato_Bold,
            },
            text_msg: {
                fontSize: wp('4%'),
                color: "black",
                marginVertical: hp('1%'),
                // fontFamily: Fonts.Relway_Bold,
              },
              button_book1: {
                padding: wp('0.2%'),
                width:wp('40%'),
                backgroundColor: "#FFB61D",
                borderRadius: wp('2%'),
                marginVertical: hp('1%'),
                alignItems: 'center',
                alignSelf: 'flex-end',
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