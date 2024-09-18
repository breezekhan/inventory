import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helpers";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create(
    {
        txt: {
            color: 'white',
            fontSize: 18
        },
        txtbox: {
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: 5
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',


        },
        namerow: {
            flexDirection: 'row',
            //justifyContent: 'space-between',
            alignItems: 'center'

        },

        Container: {
            flex: 1,
            backgroundColor: Colors.Primary
        },



        box: {
            //marginHorizontal: Dimension.getWidth(2),
            marginVertical: wp('2%')


        },
        login: {
            borderTopRightRadius: 20,
            //alignItems: 'center',
            borderTopLeftRadius: 20,
            //marginTop: Dimension.getHeight(5),
            //marginBottom: 50,
            backgroundColor: 'white',
            // height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
        },
        editButton: {

            //   position: 'absolute',
            //  bottom: 0, // Adjust the position as needed
            //  right: 0, // Adjust the position as needed
            //  backgroundColor:Colors.PrimaryBlue, // Set your desired button background color
            // borderRadius: 20, // Set your desired border radius
            /// padding: 10, // Set your desired padding

        },

        container1: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        modalViewC: {
            backgroundColor: '#ffffff',
            // marginBottom: '55%',
            // borderTopEndRadius: 30,
            // borderTopLeftRadius: 30,
            // height: '50%',
            borderRadius: wp('2%'),
            width: wp('80%'),
            justifyContent: 'center',
            paddingHorizontal: wp('4%'),
            alignSelf: 'center',
            //alignItems:'center',
            shadowColor: '#000000',
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 4,
            elevation: 44,
        },
        camera_box: {
            alignItems: 'center',
            borderWidth: 1,
            padding: hp('2%'),
            height: hp('15%'),
            width: wp('25%'),
            borderRadius: wp('2.5%'),
            backgroundColor: Colors.Primary
        },

    }
)
export default styles;