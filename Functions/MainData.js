//Code made by Sebastian Siarczyński

//Dodaj do reduxa fetchowanie danych 

import React from 'react'

import { View, Text, Button, TextInput, Modal } from 'react-native'

import styles from './FunStyles/MainDataStyle'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { reducer } from "./reducer.js"
import { actionModal } from "./actions"


export const store = createStore(reducer)

class MainData extends React.Component{

    state = {
      conf: 0,
      dead: 0,
      recovered: 0,
      location: false,
      new: 0,
    };


    _searchFun = () => {

      let dane = ""

      fetch(`https://covid-193.p.rapidapi.com/statistics?country=${this.state.location || "Poland"}`, {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-host": "covid-193.p.rapidapi.com",
      		"x-rapidapi-key": "c5a3cb0bf5msh8ddf0bdd20db605p12b483jsn5661d04d9293"
      	}
      })
      .then( response => dane = response.json() )
      .then(() => {
        this.setState({conf: this.state.conf = dane._55.response[0]['cases']['total'], dead: this.state.dead = dane._55.response[0]['deaths']['total'], recovered: this.state.recovered = dane._55.response[0]['cases']['recovered'], new: this.state.new = dane._55.response[0]['cases']['new']  })
      })
      .catch(err => {
      	console.error(err);
      });

    };

    componentDidMount() {
        this._searchFun()
    };


    render(){

        const { setModal, modal } = this.props



        return(
            <>
                <View>
                  <Modal animationType='fade' visible={modal} transparent={true}>
                    <View style={styles.Modal}>
                      <Text style={styles.modalHeader}>Wyszukaj kraj...</Text>
                      <TextInput
                        placeholder='wpisz nazwe kraju...'
                        placeholderTextColor="#696969"
                        onEndEditing={ (e) =>{
                          e.nativeEvent.text === "" ? false : this.setState({location: this.state.location = e.nativeEvent.text.toUpperCase(), modal: this.state.modal = false})
                          return this._searchFun()
                        }}
                        style={{borderBottomWidth: 0.5, borderBottomColor: 'black', margin: 10, height:50, padding: 5}}
                      />
                      <View style={styles.modalButtons}>
                        <Button title="Anuluj" onPress={setModal} color="#DC143C"/>
                      </View>
                    </View>
                  </Modal>
                </View>


                <View style={styles.container}>
                    <Text style={styles.header}>
                        {this.state.location || "POLAND"}:
                    </Text>
                    <View style={styles.APIcontainer}>
                        <Text style={{fontSize:30, margin: 10}}><Text style={{color:'#1E90FF'}}>Lacznie: </Text>{this.state.conf}</Text>
                        <Text style={{fontSize:30, margin: 10}}><Text style={{color:'red'}}>Zmarlych: </Text>{this.state.dead}</Text>
                        <Text style={{fontSize:30, margin: 10}}><Text style={{color:'#7CFC00'}}>Wyleczonych: </Text>{this.state.recovered}</Text>
                        <Text style={{fontSize:30, margin: 10}}><Text style={{color:'#8B0000'}}>Nowi: </Text>{this.state.new}</Text>
                    </View>

                    <View style={styles.userSection}>
                        <View style={styles.innerUserSection}>
                        <Button title='Szukaj' onPress={setModal} color='#228B22' />
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: () => dispatch(actionModal())
  }
}

MainData = connect(mapStateToProps, mapDispatchToProps)(MainData)

export default MainData
