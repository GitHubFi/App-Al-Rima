// import React, { Component } from 'react';
// import { Text, StyleSheet, View } from 'react-native';

// export default class BedOne extends Component {
//     render() {
//         return (
//             <View>
//                 <Text>bed one class</Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.flatten({});


import React, { Component } from 'react'
import {
    View,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import {
    Text,
    Button,
    DeckSwiper,
    Card, CardItem

} from 'native-base';
import { connect } from "react-redux";

import OneBedRoom from './OneBedRoom';
const result = [
    {
        url: 'http://www.in-prague.org/images/otavlesicku/apartments-vlesicku-prague-561138_w815h470a1c1bgcfff.jpg', price: ' 2 lacs',
        location: 'Condo Hotel  City Suites', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'newest', name: 'Le Meridien Al Khobar',


    },
    {
        url: 'https://www.youstylish.com/wp-content/uploads/2014/03/Luxury-1-bedroom-Barcelona-933x700.jpg', price: ' 2 lacs',
        location: 'Kempinski Al Othman Hotel Al Khobar', purpose: 'For Rent', area: '8.9 Marla',
        bath: '-', bedroom: '-', added: '18 hours ago', filterValue: 'newest', name: 'Le Meridien Al Khobar1'

    },
    
]
const { width, height } = Dimensions.get("window");

class BedOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueSelect: 'newest',
            selectValue: result
        }
        this.changeState = this.changeState.bind(this)
    }

    static navigationOptions = {
        title: 'PROPERTY LIST',
        headerStyle: {
            backgroundColor: "#8b6e4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center', textAlign: "center", flex: 1, marginLeft: -10 },


    }

    changeState = event => {
        console.log(event)
        this.setState({
            selectValue: this.state.selectValue.filter(
                item => item.cityName.toLowerCase().indexOf(event.toLowerCase()) > -1
            )
        })

    }
    filterList = (filter) => {
        // console.log(filter)
        let filterList = result.filter((item) => item.filterValue === filter)
        this.setState({
            selectValue: filterList,
            valueSelect: filter
        })
    }
  
    render() {
        console.log(this.state.valueSelect, 'stattat')
        return (
            <View style={{ flex: 1, backgroundColor: '#eee' }}>
                {/* <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flex: 0.3, }} onPress={() => this.filterList('newest')}>
                        <Text style={{ textAlign: 'center', borderBottomWidth: 2, color: this.state.valueSelect === 'newest' ? '#05527c' : '#000', borderBottomColor: this.state.valueSelect === 'newest' ? '#05527c' : '#000' }}>Newest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.3, margin: width / 46 }} onPress={() => this.filterList('topRated')}>
                        <Text style={{ textAlign: 'center', borderBottomWidth: 2, color: this.state.valueSelect === 'topRated' ? '#05527c' : '#000', borderBottomColor: this.state.valueSelect === 'topRated' ? '#05527c' : '#000' }}>Top Rated</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.3 }} onPress={() => this.filterList('premium')}>
                        <Text style={{ textAlign: 'center', borderBottomWidth: 2, color: this.state.valueSelect === 'premium' ? '#05527c' : '#000', borderBottomColor: this.state.valueSelect === 'premium' ? '#05527c' : '#000' }}>Premium</Text>
                    </TouchableOpacity>

                </View> */}
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.props.GET_ONE_BED_PROPERTY}

                        renderItem={({ item, id }) => (
                            <View>

                                <TouchableOpacity style={{
                                    flex: 1,
                                    marginTop: width / 26,
                                    marginBottom: width / 26,
                                }}
                                    onPress={() => this.props.navigation.navigate('OneBedRoom', { propertyItem: item })}>
                                    {/* onPress={this.navigation.bind(this, item.name)} */}
                                    
                                    <View style={{ flex: 0.4 }}>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                padding: 5
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: width / 2,
                                                    alignItems: "flex-start",
                                                    paddingLeft: width / 36
                                                }}
                                            >
                                                <Text style={{ color: "#000", fontSize: width / 32 }}>
                                                    {item.address}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: width / 2,
                                                    alignItems: "flex-end",
                                                    paddingRight: width / 36
                                                }}
                                            >
                                                <Text style={{ color: "#000", fontSize: width / 32 }}>
                                                    {/* Added {item.added} */}
                                                </Text>
                                            </View>
                                        </View>
                                        <Image source={{ uri: item.url }} style={{ width: width, height: height / 4 }}
                                        />

                                    </View>
                                    <View
                                        style={{
                                            // flex: 0.1,
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // marginTop: width / 16,
                                            backgroundColor: "#05527c",
                                            paddingTop: width / 36,
                                            paddingBottom: width / 40
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: width / 2,
                                                alignItems: "flex-start",
                                                paddingLeft: width / 36
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: "#fff",
                                                    fontSize: width / 22,
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {/* RIMA RESIDENCE */}{item.name}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: width / 2,
                                                flexDirection: "row",
                                                justifyContent: "flex-end",
                                                paddingRight: width / 36
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: "#fff",
                                                    fontSize: width / 20,
                                                    height: height / 20
                                                }}
                                            >
                                                SAR {item.price}
                                            </Text>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {

    return {
        UserList: state.authReducer.UserList,
        currentUser: state.authReducer.currentUser,
        GET_ONE_BED_PROPERTY: state.appReducer.GET_ONE_BED_PROPERTY
    }
}
function mapDispatchToProps(dispatch) {
    return {
    
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(BedOne)
// export default BedOne;