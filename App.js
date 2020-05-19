import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import { Provider } from 'react-redux'
import { store } from './Functions/MainData'
import styles from './style/style'
import MainData from './Functions/MainData'


class App extends React.Component{
    render(){
      return (
        <>
          <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.container}>
                  <Provider store={store}>
                    <View style={styles.mainView}>
                      <MainData />
                    </View>
                  </Provider>
                </View>
            </ScrollView>
          </SafeAreaView>
        </>
      );
    }
}

export default App;
