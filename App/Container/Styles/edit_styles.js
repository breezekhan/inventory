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
            fontSize: wp('4%'),
            fontWeight: 'bold',
            alignSelf: 'center',
            color: Colors.black,
            marginVertical: hp('0.5%')
        },
        text_bold: {
            fontSize: wp('8%'),
            color: Colors.black,
            fontWeight: 'bold',
            alignSelf: 'center',
           // marginVertical: hp('0.5%')
        },
        Header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: Colors.Primary,
            alignItems: 'center',
            height: hp('10%'),
            paddingHorizontal: wp('4%'),
        },
        text_header: {
            fontSize: wp('6%'),
            color: Colors.Primary,
            fontFamily: Fonts.Lato_Bold,
            marginVertical: hp('0.5%'),
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
        ButtonView: {
            backgroundColor: Colors.Primary,
            flexDirection: 'row',
            marginHorizontal: "4%",
            justifyContent: 'space-between',
            borderRadius: 100,
            marginVertical: wp('4%'),
            width: wp('60%')
        },
        ButtonText: {
            fontSize: wp('4%'),
            color: Colors.white,
            fontFamily: Fonts.Lato_Bold
        },
        InputView: {
            // borderRadius: 10,
            marginHorizontal: wp('4%'),
            // borderWidth: wp('0.1%'),
            // borderRadius: wp('1%'),
            padding: wp('2%'),
            // backgroundColor: '#ffffff',
            marginBottom: hp('2%')
            // shadowColor: 'black',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.5, // Adjust the opacity as needed
            // shadowRadius: 5, // Adjust the radius as needed
            // elevation: 2, // Adjust the elevation as needed
            // alignItems: 'center'
        },
       
        input: {
            color: '#000000',
            // width: wp('85%'),
            justifyContent: 'center',
            marginVertical: hp('1%'),
            height: hp('6%'),
            borderColor: Colors.border,
            borderWidth: wp('0.1%'),
            borderRadius: wp('1%'),
            padding: wp('2%'),
           // backgroundColor: Colors.dark_gray_text,
            fontFamily: Fonts.Lato_Reguler
        },
        row: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: wp('4%')
        }
        ,
        button: {
            backgroundColor: Colors.Button,
            marginVertical: hp('3%'),
            padding: wp('3%'),
            // width: "48%",
            alignItems: 'center',
            borderRadius: 10
        },
        txt_forgt: {
            color: Colors.red,
            fontFamily: Fonts.Lato_Reguler
        },
        txt_link: {
            color: Colors.PrimaryLight,
            fontSize: wp('3.5%'),
            
        },
        txt: {
            color: Colors.white,
            fontSize: wp('3.5%'),
        },
       

        ///////
        //////
        upload_img: {
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'center',
            marginVertical: wp('2%'),
            alignSelf: 'center',
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
        editButton: {
            position: 'absolute',
            bottom: 0,
            right: 0, // Adjust the position as needed
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
            height: hp("25%"),
            alignSelf: 'center',
            //resizeMode: 'contain'
        },
        ////////////
        container1: {
            flex: 1,
            //alignItems: 'center', 
            justifyContent: 'flex-end'
        },
        modalViewR: {
            //flex: 1,
            paddingHorizontal: wp('4%'),
            //  borderTopEndRadius: 3,
            //  borderTopLeftRadius: 3,
            // marginTop: Dimension.getHeight(18),
            // height: Dimension.getHeight(50),
            width: wp('100%'),
            height: hp('60%'),
            //  width: Dimension.getWidth(95),
            // alignItems: 'center',
            borderTopLeftRadius: wp('10%'),
            borderTopRightRadius: wp('10%'),
            borderColor: 'grey',
            borderWidth: wp('0.2%'),
            //  alignSelf: 'center',
            backgroundColor: Colors.background,
            shadowColor: '#000000',
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 4,
            elevation: 44,
        },
        modal_button: {
            backgroundColor: Colors.Button,
            marginVertical: hp('4%'),
            padding: wp('3%'),
            // width: wp("40%"),
            alignItems: 'center',
            borderRadius: 10,
            //alignSelf: 'center'
        },
        title: { textAlign: 'center', fontSize: wp('5%') },
        codeFieldRoot: { marginTop: hp('2%'), marginHorizontal: wp('10%') },
        cell: {
            height: wp('12%'),
            // fontFamily: Fonts.Font_Bold,
            backgroundColor: Colors.input,
            color: Colors.white,
            // padding: wp('1%'),
            width: wp('12%'),
            // height: 40,
            lineHeight: hp('6%'),
            fontSize: wp('6%'),
            borderWidth: wp('0.5%'),
            borderColor: Colors.dark_grey,
            textAlign: 'center',
        },
        focusCell: {
            borderColor: Colors.Primary
        },
    }
)
export default styles;