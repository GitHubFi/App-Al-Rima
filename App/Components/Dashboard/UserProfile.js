import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, ToastAndroid, AsyncStorage } from 'react-native';
import { Input, Button, Spinner, Thumbnail } from "native-base";
const { height, width } = Dimensions.get('window');
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default class UserProfile extends Component {
    static navigationOptions = {
        title: 'Update Your Profile',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10, color: '#fff' },


    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ height: height - 80, width, backgroundColor: "#eeeeee" }} keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled" >
                <View style={{ flex: 1, padding: width / 20, justifyContent: "space-around" }}>
                    <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ flex: 0.1 }}>

                        </View>
                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }} >
                            <Image source={require("../../../assets/logoA.png")} style={{ width: width/2, marginTop: 20 }} resizeMode='contain' />
                        </View>
                        <View style={{ flex: 0.5, paddingTop: width / 6, justifyContent: "center", alignItems: "center" }}>
                            <Thumbnail large source={require('../../../assets/profileImage.png')} />
                        </View>
                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: '#05527c', fontSize: width / 16 }}>John Doe</Text>
                            <Text style={{ color: '#f09291' }}> Business Men</Text>


                        </View>
                    </View>
                    <View style={{ flex: 0.4, backgroundColor: '#eeeeee', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="account" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Username"}
                                placeholder="Username"
                                style={{ color: "#24516e" }}
                                keyboardType={"email-address"}
                                onChangeText={name => this.setState({ name })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="email" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Email"}
                                placeholder="Email"
                                style={{ color: "#24516e" }}
                                keyboardType={"email-address"}
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36
                            }}
                        >
                            <MaterialCommunityIcons name="lock-question" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Password"}
                                placeholder="Password"
                                style={{ color: "#24516e" }}
                                onChangeText={password => this.setState({ password })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: "row",
                                alignItems: "center",
                                borderColor: "#fff",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                height: width / 18,
                                margin: width / 36

                            }}
                        >
                            <MaterialCommunityIcons name="lock-question" size={25} color="#24516e" />
                            <Input
                                placeholderTextColor={"#24516e"}
                                placeholder={"Confirm Password"}
                                placeholder="Confirm Password"
                                style={{ color: "#24516e" }}
                                secureTextEntry
                                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                justifyContent: "center",
                                alignItems: "center",

                            }}
                        >
                            <Button
                                style={{
                                    // marginTop: height / 10,
                                    height: width / 14,
                                    width: width * 0.9,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#24516e",
                                    alignSelf: "center",
                                    // borderRadius: width / 12
                                }}
                                onPress={this.signUp}
                            >
                                <Text style={{ color: "#fff" }}>Update Profile</Text>
                            </Button>
                        </View>
                    </View>


                </View>
            </ScrollView>
        )
    }
}