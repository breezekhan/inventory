import React from 'react';
import { View, Modal, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Colors } from '../helpers';

export default function LoadingModal(props) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            statusBarTranslucent={true}>

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <FastImage
                        style={{  width: wp('20%'), height: hp('12%') }} source={require('../Assets/loader.gif')}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    {props.check == true ? <Text style={styles.loc}>Fetching your current location please wait !</Text> : null}
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'

    },
    modalView: {
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // borderRadius: 100,
        alignItems: 'center',
    },

    modalText: {
        marginVertical: 15,
        textAlign: "center",
        fontSize: 17,
        marginLeft: 15,
        color: "#ff9800"
    },
    loc:{
        fontSize:wp("4.5%"),
        fontWeight:'bold',
        marginVertical:hp('2%'),
        color:Colors.Button,
        textShadowRadius:1,
        textShadowColor:Colors.black
    }
});
