import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'


const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    container:{
        marginTop: 100,
    },

    APIcontainer:{
        height:200,
        width:width,
        marginTop: 40,
        flex:2,
        alignItems:'center',
        fontSize: 20
    },

    userSection: {
      flex: 1,
      width: width,
    }
})


export default styles
