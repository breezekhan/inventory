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
            fontWeight: 'bold',
            // marginVertical: hp('0.5%')
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
            width: wp('10%'), textAlign: 'center'
        },
        text_value: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            // fontWeight: 'bold',
            // marginVertical: hp('0.5%'),
            textAlign: 'justify',
            width: wp('50%')
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

        DateView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp('2%'),
            paddingVertical: wp('1%'),
            backgroundColor: Colors.PrimaryBlue,
            alignItems:'center'
        },
        txtfill: {
            color: Colors.black,
            // fontWeight: 'bold'
        },
        txtselc: {
            color: Colors.black,
           
            fontSize: wp('3.5%'),
          
            color: Colors.black,
            fontFamily: Fonts.Lato_Bold,
          
        },
        txtdate: {
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: wp('3.5%')
        },
        CompView: {
           
            flexDirection: 'row',
            backgroundColor: Colors.PrimaryLight,
            justifyContent: 'space-between',
            alignItems: 'center',
             paddingVertical: wp('1%'),
             paddingHorizontal: wp('2%'),
            borderTopLeftRadius: wp('2%'),
            borderTopRightRadius: wp('2%'),
           // flex:1,
            height:hp('5%'),
           

        },
        selccomp: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: wp('0.2%'),
            borderColor: Colors.black,
            paddingHorizontal: wp('2%'),
            borderRadius: wp('2%'),
            height:hp('6%')
            //flex:1
        },
        // modalbox: {
        //     // alignItems: 'center',
        //     // borderWidth: wp('0.1%'),
        //     padding: wp('1%'),
        //     borderRadius: wp('2%'),
        //     marginVertical: hp('1%')
        // },
       


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
          //  borderColor: Colors.PrimaryLight
        },
//////////////////////////////
        box: {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            height: hp('25%'),
            width: wp('42%'),
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: wp('2.5%'),
            marginHorizontal:wp('2%'),
            marginVertical:hp('2%')
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
            height: hp('20%'), width: wp('40%'), resizeMode: 'contain',
        },

        txt_price: {
            fontSize: wp('4%'),
            color: Colors.price,
            marginVertical: hp('0.1%'),
            fontFamily: Fonts.Lato_Bold,
        },
        box_trans: {
            bottom: 0,
            position: 'absolute',
            marginBottom: hp('1%'),
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
           // backgroundColor: 'rgba(128, 128, 128, 0.4)',
            borderWidth:wp('0.1'),
          borderColor: 'rgba(128, 128, 128, 0.4)',
            borderRadius: wp('2%'),
            padding: wp('1%'),
            width: wp('40%')
        },
        Image_special: {
            width: wp("95%"),
            height: hp("25%"),
            alignSelf: 'center',
            resizeMode: 'contain'
        },
        txt_pro: {
            fontSize: wp('3.2%'),
            color: Colors.black,
            marginVertical: hp('0.1%'),
            fontFamily: Fonts.Lato_Bold,
        },
        boxtxt: {
            fontSize: wp('4%'),
            //alignSelf:'flex-start',
            color: Colors.black,
            // textAlign: 'justify'

        },
        boxtxt2: {
            fontSize: wp('3.5%'),
            //alignSelf:'flex-start',
            color: Colors.black,
            fontWeight: 'bold'
        },
        total:{
            backgroundColor:Colors.Primary,
            flexDirection:'row',borderTopWidth:wp('0.5%'),
            borderBottomLeftRadius:wp('2%'),borderBottomRightRadius:wp('2%'),
            paddingHorizontal:wp('2%'),borderTopColor:Colors.dark_grey
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
            
           borderRadius:wp('5%'),
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

            fontFamily:Fonts.Lato_Reguler,
            justifyContent: 'center',
            marginVertical: hp('1%'),
            minHeight: hp('6%'),
            borderColor: Colors.border,
            borderWidth: wp('0.1%'),
            borderRadius: wp('1%'),
            padding: wp('2%'),
             backgroundColor: Colors.input
        },


        back_box:{
            padding:wp('4%'),
            borderRadius:wp('100%'),
            backgroundColor:"#ffffff"
        },






        row: {
            alignItems: 'center',
          //  justifyContent: 'space-between',
            flexDirection: 'row',
           // marginVertical: wp('2%')
        },
        rowlist: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomWidth: wp('0.1%'),
            marginVertical: wp('1%'),
            borderBottomColor:Colors.dark_grey
        },
        button: {
            backgroundColor: Colors.Primary,
            padding: wp('3%'),
            width: "48%",
            alignItems: 'center',
            borderRadius: 10
        },
        txt_modal: {
            color: Colors.black,
            fontSize: wp('4%'),
            fontFamily:Fonts.Lato_Reguler
     },
        modalbox: {
            flexDirection:'row',
             alignItems: 'center',
            // borderWidth: wp('0.1%'),
            padding: wp('1%'),
            borderRadius: wp('2%'),
            marginVertical: hp('1%'),
            
        },
        text_m_h: {
            fontSize: wp('4%'),
            color: Colors.black,
            fontFamily:Fonts.Lato_Bold,
            marginVertical: hp('0.5%'),
            alignSelf:'center',
           
        },



    }
)
export default styles;