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
        width: width,
        marginTop: 40,
        flex:2,
        alignItems:'center',
        fontSize: 20
    },

    userSection: {
      flex: 1,
      width: width,
      alignItems: 'center'
    },

    innerUserSection : {
      width: 300
    },

    Modal: {
      height: 200,
      width: 300,
      alignSelf: 'center',
      top:200,
      borderWidth: 0.5,
      borderColor: 'black',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
      	width: 0,
      	height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,
      elevation: 23
    },

    modalHeader: {
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center'
    },

    modalButtons: {
      flex: 1,
      justifyContent: 'center',
    }
})


export default styles
