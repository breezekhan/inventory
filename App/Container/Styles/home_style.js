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
             justifyContent: 'space-between',
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
       
        
        txt:{
            fontSize:14,
            color:"#444444", 
            width:wp("50%"),
            marginVertical:"1%"
           },
        box: {
            borderRadius: wp("2%"),
            backgroundColor: '#ffffff',
           // height: hp('25%'),
            flexDirection:'row',
           // width: wp('42.8%'),
           // alignItems: 'center',
           justifyContent: 'space-between',
            paddingHorizontal: wp('2.5%'),
            marginHorizontal: wp('2%'),
            marginVertical: hp('2%'),
        },
        box_img: {
            height: hp('16%'), width: wp('24%'),resizeMode:'contain'
        },
        box_trans: {
            // bottom: 0,
            // position: 'absolute',
            // marginBottom: hp('1%'),
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
           // marginHorizontal:wp("1%"),
            borderWidth: wp('0.1'),
            borderColor: 'rgba(128, 128, 128, 0.4)',
            borderRadius: wp('2%'),
            padding: wp('1%'),
            width: wp('30%'),
            alignItems:'center'
        },
        txt_price: {
            fontSize: wp('3.5%'),
            // color: '#21de8f',
            color: Colors.price,
            marginVertical: hp('0.2%'),
            fontWeight:'bold'
            
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
            fontSize: wp('3.5%'),
            color: Colors.Primary,
            fontWeight:'bold',
            marginVertical: hp('0.5%'),
           
        },
        txt_pro2: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            marginVertical: hp('0.5%'),
            
        },
        row2:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        },
       
      
      
     
      
     
      
    }
)
export default styles;