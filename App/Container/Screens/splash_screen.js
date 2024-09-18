// import React, {useEffect} from "react";
// import{View,Image,Text} from 'react-native';
// import { Colors } from "../../helpers";
// import Images from '../../Utils/Images';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


// export default function Splash({navigation})
// {
//   useEffect(()=>{
//     setTimeout(()=>{
//       //navigation.navigate("Screen1");
//       //navigation.navigate("BottomTab");
//       navigation.navigate("login");
//     },900);
//   });

//   return(
//     <View
//     style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: Colors.white}}>
//       {/* <Text style={{fontWeight:'bold',color:Colors.black,fontSize:50}}>TechRep</Text> */}
//       <Image source={Images.LOGO}
//                     style={{ height: hp('10%'), width: wp('40%'),resizeMode:'contain' }}
//                 />
//     </View>
//   );
// }



import { getUserId } from "../../Utils/MasterFunctions";
import React, {useRef, useEffect } from "react";
import { View, Image, Text, ImageBackground, Animated } from 'react-native';

import { Colors } from "../../helpers";
import Images from '../../Utils/Images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


var userId = ''

const orEmptyString = (str) => {
  if (str === '' || str === undefined || str === null) {
    return true
  } else {
    return false
  }
}
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    getUserIDFun()
    getvalu()
  }, [])

  const getUserIDFun = async () => {
    userId = await getUserId()
  }


  const getvalu = async () => {
    var id = await getUserId()

    setTimeout(() => {
      if (orEmptyString(id)) {
        navigation.navigate('login', { id: id })

      } else {
       
       navigation.navigate('BottomTab', { id: id });
      }

    }, 1000)

  }

  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(
      translateY,
      {
        toValue: 0,
        duration: 1000, // Adjust duration as needed
        useNativeDriver: true,
      }
    ).start();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white }}>
    {/* <ImageBackground
      source={Images.Ellipes} 
      style={{
        height: hp('50%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
      }}
    > */}
      <Animated.Image
        source={Images.Splash}
        style={{
          height: hp('20%'),
          width: wp('40%'),
          resizeMode: 'contain',
          transform: [{ translateY }] // Apply translateY animation
        }}
      />
    {/* </ImageBackground> */}
  </View>

  )
}
export default SplashScreen;
