/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeAppEventEmitter,
  NativeEventEmitter,
  NativeModules,
  Button,
  Platform,
  PermissionsAndroid
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BleManager from 'react-native-ble-manager';

const App = () => {
  
//   if (Platform.OS === 'android' && Platform.Version >= 23) {
//     PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
//         if (result) {
//           console.log("Permission is OK");
//         } else {
//           PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
//             if (result) {
//               console.log("User accept");
//             } else {
//               console.log("User refuse");
//             }
//           });
//         }
//   });
// }
// BleManager.start({showAlert: true}).then(()=>{
//   console.log('module initialized')
// });
  const [scanning, setScan] = useState(false)
  const BleManagerModule = NativeModules.BleManager;
  const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
  const startScan = () =>{
    // alert('start scan')
    console.log('start scan')
    BleManager.scan([], 3, true).then((results) => {
      console.log('scan started')
   console.log(results)
    });
  }

  const retrieveConnected=()=>{

    BleManager.getConnectedPeripherals([]).then((results) => {
      console.log(results)
      // if (results.length == 0) {
      //   console.log('No connected peripherals')
      // }
      // console.log(results);
      // var peripherals = this.state.peripherals;
      // for (var i = 0; i < results.length; i++) {
      //   var peripheral = results[i];
      //   peripheral.connected = true;
      //   peripherals.set(peripheral.id, peripheral);
      //   this.setState({ peripherals });
      // }
    });
  }

  return (
    <View style={styles.container}>
      <Text>123</Text>
      <Button title="Start Scan" onPress={startScan}></Button>
      <Button title="Retrieve Connected" onPress={retrieveConnected}></Button>
    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    flex:1
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
