//Import libs for Components

// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList';




//Make a Component

// const App = () => {
//   return(
//     <Text>Some Text</Text>
//
//   );
//
// };
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList/>
  </View>
);
// adb shell date -s $(get-date -format yyyyMMdd.HHmmss)
//Render it on the device
AppRegistry.registerComponent('albums', () => App)
