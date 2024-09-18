import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../helpers";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create(
    {
        Container: {
            flex: 1,
            backgroundColor: Colors.white,

            //alignItems: 'center'
        },
        Text: {
            fontSize: wp('3.5%'),
            //alignSelf:'flex-start',
            color: Colors.black
        },
        text_bold: {
            fontSize: wp('3.5%'),
            color: Colors.black,
            fontWeight: 'bold',
            marginVertical: hp('0.5%')
        },
        back_box:{
            padding:wp('4%'),
            borderRadius:wp('100%'),
            backgroundColor:"#ffffff"
        },

        Header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: Colors.Primary,
            alignItems: 'center',
            height: hp('10%'),
            paddingHorizontal: wp('4%')
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
            fontSize: wp('3.5%'),
            color: Colors.black,
            fontWeight: 'bold',


        },
        InputView: {
            borderRadius: 10,
            marginHorizontal: wp('4%'),
            marginVertical:hp('2%'),
            borderWidth: wp('0.1%'),
            borderRadius: wp('1%'),
            padding: wp('2%'), backgroundColor: '#ffffff',
            // shadowColor: 'black',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.5, // Adjust the opacity as needed
            // shadowRadius: 5, // Adjust the radius as needed
            // elevation: 2, // Adjust the elevation as needed
            // alignItems: 'center'
        },
        shadowProp: {
            shadowOffset: { width: -2, height: 4 },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
            zIndex: 1,
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

        row: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: wp('2%')
        }
        ,
        button: {
            backgroundColor: Colors.Button,
            padding: wp('3%'),
            width: "48%",
            alignItems: 'center',
            borderRadius: 10
        },
        txt_forgt: {
            color: Colors.link_color
        },


        ///////
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
            width: wp('50%'),
            
           borderRadius:wp('5%'),
             alignItems: 'center',
            
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
     },
        modalbox: {
            // alignItems: 'center',
            // borderWidth: wp('0.1%'),
            padding: wp('1%'),
            borderRadius: wp('2%'),
            marginVertical: hp('1%')
        },
        //////
        upload_img: {
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'center',
            marginVertical: wp('2%'),
         
            alignSelf: 'center',
            
        },
        dp:{
            width:wp('35%'),
            height:hp('17%'),
            borderWidth:wp('0.5%'),
            borderColor:Colors.light_gray,
            borderRadius:wp('100%'),
            resizeMode:'contain'
           // marginRight:Dimension.getWidth(7)
        },
        editButton: {
            position: 'absolute',
            bottom: 0,
          
            right: 0, // Adjust the position as needed
           
        },
        text_header: {
            fontSize: wp('6%'),
            color: Colors.black,
            fontWeight: 'bold',
            marginVertical: hp('0.5%')
        },


    }
)
export default styles;