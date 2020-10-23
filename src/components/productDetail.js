import React from 'react';
import { SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, View, Text, StatusBar, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient'
import { registerCustomIconType, Badge } from 'react-native-elements';
const vh = Dimensions.get("window").height
const vw = Dimensions.get("window").width
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'

const ProductDetail = () => {
    return (
        <View style={styles.main} >
            <View style={{ flex: 2 }}>
                <Image style={{ width: null, height: vh * 0.45 }} source={{ uri: 'https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg' }} />
            </View>
            <View style={{ flex: 2,flexDirection:'row',justifyContent:'space-around' }} >
                <Text>T-Shirt</Text>
                <TouchableOpacity  style={{backgroundColor:'red'}}>
                <Text>ADD To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    }
})

export default ProductDetail