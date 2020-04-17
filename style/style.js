import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F8FF",
        flex:1,
        flexDirection:'row',
        height: height
    },

    mainView: {
        flex:1,
        flexDirection:'row',
        width: 20,
        justifyContent: 'center'
    }
});

export default styles
