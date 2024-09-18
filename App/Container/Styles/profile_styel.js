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
            marginVertical: hp('0.5%')
        },
        text_bold: {
            fontSize: wp('5%'),
            color: Colors.black,
            fontWeight: 'bold',
            // marginVertical: hp('0.5%')
        },
        text_key: {
            fontSize: wp('4.5%'),
            color: Colors.black,
            fontWeight: 'bold',
            fontFamily: Fonts.Lato_Bold,
            textAlign: 'left',
            width: wp('42%')
        },
        text_value: {
            fontSize: wp('4%'),
            color: Colors.black,
            marginLeft: hp('1%'),
            // fontWeight: 'bold',
            marginVertical: hp('0.5%'),
            fontFamily: Fonts.Lato_Reguler,
        },
        text_das: {
            fontSize: wp('3.5%'),
            color: Colors.dark_grey,
            fontWeight: 'bold',
            // marginVertical: hp('0.5%'),
            // width: wp('5%'),
            // textAlign: 'center'
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
            paddingHorizontal: wp('6%'),
            paddingVertical: wp('1%'),
            backgroundColor: Colors.PrimaryLight,
        },

        DateView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp('2%'),
            paddingVertical: wp('1%'),
            backgroundColor: Colors.PrimaryBlue,
            alignItems: 'center'
        },
        txtfill: {
            color: Colors.black,
            // fontWeight: 'bold'
        },
        txtselc: {
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: wp('4.5%')
        },
        txtdate: {
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: wp('3.5%')
        },
        CompView: {
            flexDirection: 'row',
            flexDirection: 'row',
            backgroundColor: Colors.PrimaryLight,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: wp('1%'),
            paddingHorizontal: wp('2%'),
            borderTopLeftRadius: wp('2%'),
            borderTopRightRadius: wp('2%')

        },
        selccomp: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: wp('0.2%'),
            borderColor: Colors.black,
            paddingHorizontal: wp('1%'),
            borderRadius: wp('2%')
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
            // fontWeight: 'bold'
        },
        back_box: {
            padding: wp('4%'),
            borderRadius: wp('100%'),
            backgroundColor: "#ffffff"
        },

        fillbutton: {
            backgroundColor: Colors.Primary,
            padding: wp('1%'),
            width: "20%",
            alignItems: 'center',
            borderRadius: 10
        },
        ButtonText: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            fontWeight: 'bold',


        },
        List: {
            marginHorizontal: wp('4%'),
            // marginVertical: wp('1%'),
            // borderWidth: wp('0.2%'),
            // borderRadius: wp('2%'),
            // borderColor: Colors.PrimaryLight
        },

        box: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            height: hp('6%'),
            //  width: wp('40%'),
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp('2%'),
            marginHorizontal: wp('2%'),
            marginVertical: hp('1%'),
            flexDirection: 'row'
        },
        boxtxt: {
            fontSize: wp('4%'),
            //alignSelf:'flex-start',
            color: Colors.black,
            marginLeft: wp('2%'),
            fontFamily: Fonts.Lato_Bold,

        },
        boxtxt2: {
            fontSize: wp('3.5%'),
            //alignSelf:'flex-start',
            color: Colors.black,
            fontWeight: 'bold'
        },
        upload_img: {
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: wp('2%'),
            //  width: wp('100%')
            // alignSelf: 'center',
            //  backgroundColor:'red'

        },
        editButton: {
            position: 'absolute',
            bottom: 0, // Adjust the position as needed
            right: 0, // Adjust the position as needed
            backgroundColor: Colors.Primary, // Set your desired button background color
            borderRadius: 20, // Set your desired border radius
            padding: 10, // Set your desired padding
            //left: 0
        },
        dp: {
            width: wp('35%'),
            height: hp('17%'),
            borderWidth: wp('0.5%'),
            borderColor: Colors.light_gray,
            borderRadius: wp('100%'),
            resizeMode: 'contain'
            // marginRight:Dimension.getWidth(7)
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

        cat_row: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: hp('1%')
        },
       
        cat_txt: {
            fontSize: wp('2.8%'),
            color: Colors.black,
            marginTop: hp('1%'),
            fontFamily: Fonts.Lato_Reguler,
        },
        cat_box: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            // height: hp('15%'),
            width: wp('28%'),
            alignItems: 'center',
            justifyContent: 'center',
            padding: wp('2%')
        },
        cat_img: {
            height: hp('8%'), width: wp('16%'), resizeMode: 'contain'
        },
        cat_box1: {
           
            borderRadius: 10,
            backgroundColor: '#ffffff',
            // height: hp('20%'),
            width: wp('28%'),
            alignItems: 'center',
            justifyContent: 'center',
            padding: wp('5%')
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















        row: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: wp('1%')
        },
        rowlist: {
            alignItems: 'center',
            // justifyContent: 'space-between',
            flexDirection: 'row',
            // borderBottomWidth: wp('0.1%'),
            marginVertical: wp('0.5%'),
            // borderBottomColor: Colors.dark_grey
        },
        button: {
            backgroundColor: Colors.Button,
            padding: wp('3%'),
            width: "48%",
            alignItems: 'center',
            borderRadius: 10
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
            height: hp('30%'),
            width: wp('85%'),

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

        input: {
            color: '#000000',
            // width: wp('70%'),
            justifyContent: 'center',
            marginVertical: hp('3%'),
            height: hp('6%'),
            borderColor: Colors.dark_grey,
            borderWidth: wp('0.1%'),
            borderRadius: wp('1%'),
            padding: wp('2%'),
            // backgroundColor: Colors.white
        },


    }
)
export default styles;