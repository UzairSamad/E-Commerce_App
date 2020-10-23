import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient'


const vh = Dimensions.get("window").height
const vw = Dimensions.get("window").width

const MainScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LinearGradient
        colors={['#38E69F', 'white']}
        style={{ flex: 1.8, borderBottomRightRadius: 100 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 2, y: 2 }}
      >
        <View style={{ flex: 1.8, borderBottomRightRadius: 100 }}>
          <LinearGradient
            colors={['#38E69F', 'white']}
            style={{ flex: 0.5, borderBottomRightRadius: 80 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 2, y: 2 }}
          >
            <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: 50, shadowColor: 'black', borderBottomRightRadius: 120, opacity: 0.8 }}>
              <Text style={{ color: 'white', alignSelf: 'flex-start', fontSize: 70 }}>Givees</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={{ color: 'white', marginHorizontal: 10 }}>Icon</Text>
                <Text style={{ color: 'white', fontSize: 20 }}>Wallet</Text>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['#38E69F', 'white']}
            style={{ flex: 0.2, borderBottomRightRadius: 70, marginTop: 3 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 2, y: 2 }}
          >
            <View style={{ paddingHorizontal: 50, paddingVertical: 10, flexDirection: 'row', flex: 1, shadowColor: 'black', borderBottomRightRadius: 70 }}>
              <Text style={{ color: 'white', marginHorizontal: 10 }}>Icon</Text>
              <Text style={{ color: 'white', fontSize: 20 }}>Profile</Text>
            </View>

          </LinearGradient>
          <LinearGradient
            colors={['#38E69F', 'white']}
            style={{ flex: 0.2, borderBottomRightRadius: 70, marginTop: 3 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 2, y: 2 }}
          >
            <View style={{ paddingHorizontal: 50, paddingVertical: 10, flexDirection: 'row', flex: 1, shadowColor: 'black', borderBottomRightRadius: 70 }}>
              <Text style={{ color: 'white', marginHorizontal: 10 }}>Icon</Text>
              <Text style={{ color: 'white', fontSize: 20 }}>Friend List</Text>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={['#38E69F', 'white']}
            style={{ flex: 0.2, borderBottomRightRadius: 80, marginTop: 3 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 2, y: 2 }}
          >
            <View style={{ paddingHorizontal: 50, paddingVertical: 10, flexDirection: 'row', flex: 1, shadowColor: 'black', borderBottomRightRadius: 70 }}>
              <Text style={{ color: 'white', marginHorizontal: 10 }}>Icon</Text>
              <Text style={{ color: 'white', fontSize: 20 }}>Payment Info</Text>
            </View>
          </LinearGradient>
        </View>
      </LinearGradient >

      <View style={{ flex: 0.2 }}></View>
      <View style={{ flex: 0.1, padding: 5, justifyContent: 'space-between', backgroundColor: '#43c4a4', flexDirection: 'row', }}>
        <Text style={{ color: 'white', fontSize: 15 }}>Home </Text>
        <Text style={{ color: 'white', fontSize: 15 }}>About </Text>
        <Text style={{ color: 'white', fontSize: 15 }}>Setting </Text>
      </View>

    </View>
  );
};



export default MainScreen;
