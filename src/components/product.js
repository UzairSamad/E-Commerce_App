import React from 'react';
import {
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient'
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import { TextInput } from 'react-native-paper';


const vh = Dimensions.get("window").height
const vw = Dimensions.get("window").width

const Products = () => {
    const users = [
        {
            id: 1,
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            featured: true
        },
        {
            id: 2,
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            featured: false

        },
        {
            id: 3,
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            featured: true

        },
        {
            id: 4,
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            featured: false

        },
        {
            id: 5,
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            featured: true

        },
        {
            id: 6,
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            featured: false

        },
    ]

    const renderProducts = ({ item }) => {
        console.log(item, 'item');
        return (
            <Card containerStyle={styles.product}>
                <TouchableOpacity style={styles.touchable}>
                    <Image source={{ uri: item.avatar }} style={styles.productImg}>
                        {/* {item.featured &&
                            <View style={styles.featured}>
                                <Badge
                                    status="success"
                                    containerStyle={{ padding:5 }}
                                    value={<Text style={{color:'white',padding:15,borderStartColor:'green'}}>Featured</Text>}
                                />
                            </View>
                        } */}
                    </Image>
                </TouchableOpacity>
                <View style={styles.price}>
                    <Text style={{ fontWeight: 'bold' }}>Women Clothes</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', marginTop: 2, marginRight: 10 }}>$100</Text>
                        <TouchableOpacity style={{ backgroundColor: '#38E69F', borderRadius: 10, padding: 5 }}>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Card>

        )
    }
    const renderListHeader = () => {
        return (
            <View style={{ paddingTop: 5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'black' }}>Products</Text>
                <Text style={{ color: 'red', borderColor: 'red', borderBottomWidth: 1 }}>View all</Text>
            </View>

        )
    }
    return (
        <View style={styles.mainContainer}>
            <KeyboardAvoidingView
                behavior="padding"
                style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                }}
            >
                <LinearGradient
                    colors={['#38E69F', 'white']}
                    style={{ flex: 1, borderBottomRightRadius: 100 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1.2 }}
                >
                    <View style={{ marginTop: vh * 0.1, flexDirection: 'row' }}>
                        <Avatar
                            size="large"
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                        <Text style={{ marginHorizontal: 10, marginTop: 15, color: 'white', fontSize: 30, fontWeight: 'bold' }}>MR:JHON DOE</Text>
                    </View>
                    <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                        <TextInput
                            style={{ fontSize: 16, fontWeight: 'normal', backgroundColor: 'transparent', width: '70%', borderWidth: 1, borderColor: 'white', borderTopEndRadius: 30, borderTopStartRadius: 30, borderRadius: 30 }}
                            placeholder="Search For Products"
                            placeholderTextColor="white"
                            underlineColor="transparent"
                        />
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>
            <View style={{ flex: 2 }}>
                <FlatList
                    key={(item) => { item.id }}
                    data={users}
                    renderItem={(users) => renderProducts(users)}
                    numColumns={2}
                    ListHeaderComponent={renderListHeader()}
                />
            </View>
        </View>
    )
}


export default Products



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainCard: {
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    servicebox: {
        width: vw * 0.50,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        alignSelf: 'stretch'

        // marginVertical: Metrics.ratio(10)
    },
    product: {
        // margin: 10,
        // alignSelf: 'flex-start',
        // alignItems: 'center',
        width: vw * 0.42,
        height:vh*0.30,
        shadowColor: '#ccc',
        borderRadius:10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 0.4
    },
    touchable: {
        alignSelf: 'stretch',


    },
    productImg: {
        height: 120,
        // to width: 100% the image
        alignSelf: 'stretch',
        width: null,
        // borderRadius: vw * 0.10,
        // to align the "featured" badge
        flexDirection: 'row',
        // to center the "featured" badge horizontally
        // justifyContent: 'center',
    },
    featured: {
        // to send the badge to the bottom
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    price: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom:0
    }
})