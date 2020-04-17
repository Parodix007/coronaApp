import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  FlatList,
} from 'react-native';

import styles from './style/style'
import MainData from './Functions/MainData'


class App extends React.Component{
    render(){
      return (
        <>
          <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.container}>
                    <View style={styles.mainView}>
                        <MainData />
                    </View>
                </View>
            </ScrollView>
          </SafeAreaView>
        </>
      );
    }
}

export default App;
