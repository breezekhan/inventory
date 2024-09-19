import React, { useEffect, useState, useRef } from "react";
//Created By Sameer(18Sep2024)
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { NavigationContainer, NavigationHelpersContext, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../helpers";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Splash from "../Container/Screens/splash_screen";
import Login from "../Container/Screens/login";
import Home from "../Container/Screens/home";


import Profile from "../Container/Screens/profile";

import Product from "../Container/Screens/products";



import Product_Detail from "../Container/Screens/product_detail";



import Cart from "../Container/Screens/cart";
import SignUp from "../Container/Screens/signup";
import { useSelector } from "react-redux";
import CheckOut from "../Container/Screens/checkout";
import Edit from "../Container/Screens/edit";





const MainStack = createNativeStackNavigator();
const HomeTabStack = createNativeStackNavigator();
const ProductTabStack = createNativeStackNavigator();

const ProfileTabStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const AppNavigation = ({ navigation, route }) => {

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="splash_screen">
                <MainStack.Screen name="splash_screen" component={Splash} options={{ headerShown: false }} />
                <MainStack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <MainStack.Screen name="signup" component={SignUp} options={{ headerShown: false }} />
                <MainStack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};



const HomeTab = () => {
    return (
        <HomeTabStack.Navigator initialRouteName="home">
            <HomeTabStack.Screen name="home" component={Home} options={{ headerShown: false }} />
            <HomeTabStack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
            <HomeTabStack.Screen name="product_detail" component={Product_Detail} options={{ headerShown: false }} />
            <HomeTabStack.Screen name="cart" component={Cart} options={{ headerShown: false }} />
            <HomeTabStack.Screen name="checkout" component={CheckOut} options={{ headerShown: false }} />
            <HomeTabStack.Screen name="edit" component={Edit} options={{ headerShown: false }} />
        </HomeTabStack.Navigator>
    )
};

const ProductTab = () => {
    return (
        <ProductTabStack.Navigator initialRouteName="cart">
            <ProductTabStack.Screen name="cart" component={Cart} options={{ headerShown: false }} />
            <ProductTabStack.Screen name="checkout" component={CheckOut} options={{ headerShown: false }} />
            <ProductTabStack.Screen name="edit" component={Edit} options={{ headerShown: false }} />
        </ProductTabStack.Navigator>
    )
};



const ProfileTab = () => {
    return (
        <ProfileTabStack.Navigator initialRouteName="profile">
            <ProfileTabStack.Screen name="home" component={Home} options={{ headerShown: false }} />
            <ProfileTabStack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
            <ProfileTabStack.Screen name="edit" component={Edit} options={{ headerShown: false }} />

        </ProfileTabStack.Navigator>
    )
};

const BottomTab = ({ }) => {

    const myCartItems = useSelector(state => state.cart);
    console.log("yyyyrammmmmyyyyy", myCartItems)
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: Colors.Bottom,
                tabBarInactiveTintColor: Colors.white,
                // tabBarLabelStyle: { },
                tabBarStyle: { borderTopWidth: 0.5, height: 60, backgroundColor: Colors.Primary, zIndex: 999, borderTopLeftRadius: wp('5%'), borderTopRightRadius: wp('5%'), },
            }}
            tabBarOptions={{
                showLabel: false,
                backgroundColor: '#689f38',
                keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeTab}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <View style={{}}>
                            <FontAwesome name="home" color={focused ? Colors.Bottom : Colors.white} size={wp('8%')} />
                        </View>
                    ),
                    tabBarLabelStyle: {
                        top: -8, // Adjust the value as needed
                    },
                }}
            />
            {/* <Tab.Screen
                name="cart"

                component={ProductTab}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome6 name="cart-shopping" color={focused ? Colors.Bottom : Colors.white} size={wp('6%')} />
                    ),
                    tabBarLabelStyle: {
                        top: -8, // Adjust the value as needed
                    },
                }}
            /> */}

            <Tab.Screen
                name="cart"
                component={ProductTab}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome6
                                name="cart-shopping"
                                color={focused ? Colors.Bottom : Colors.white}
                                size={wp('6%')}
                            />
                            {myCartItems.length > 0 && (
                                <View
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: 'red',
                                        borderRadius: 10,
                                        paddingHorizontal: 6,
                                        paddingVertical: 2,
                                        right: -8,
                                        top: -5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{ color: Colors.white, fontSize: 10 }}>
                                        {myCartItems.length}
                                    </Text>
                                </View>
                            )}
                        </View>
                    ),
                    tabBarLabelStyle: {
                        top: -8, // Adjust the value as needed
                    },
                }}
            />


            <Tab.Screen
                name="profile"
                component={ProfileTab}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={focused ? Colors.Bottom : Colors.white}
                            size={wp('10%')}
                        />
                    ),
                    tabBarLabelStyle: {
                        top: -8,
                    },
                }}
            />
        </Tab.Navigator>
    )
};



export default AppNavigation;