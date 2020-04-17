import React from 'react'

import { View, Text, Button, TextInput } from 'react-native'

import styles from './FunStyles/MainDataStyle'


class MainData extends React.Component{

    state = {
      conf: 0,
      dead: 0,
      recovered: 0,
      location: "Poland",
      new: 0
    };


    _searchFun = () => {
      let dane = ""

      fetch(`https://covid-193.p.rapidapi.com/statistics?country=${this.state.location}`, {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-host": "covid-193.p.rapidapi.com",
      		"x-rapidapi-key": "c5a3cb0bf5msh8ddf0bdd20db605p12b483jsn5661d04d9293"
      	}
      })
      .then(response => dane = response.json() )
      .then(() => {
        this.setState({conf: this.state.conf = dane._55.response[0]['cases']['total'], dead: this.state.dead = dane._55.response[0]['deaths']['total'], recovered: this.state.recovered = dane._55.response[0]['cases']['recovered'], new: this.state.new = dane._55.response[0]['cases']['new']  })
      })
      .catch(err => {
      	console.error(err);
      });

    }

    componentDidMount() {
        this._searchFun()
    };


    render(){
        return(
            <>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        {this.state.location.toUpperCase()}:
                    </Text>
                    <View style={styles.APIcontainer}>
                        <Text style={{fontSize:30, margin: 10}}><Text style={{color:'#1E90FF'}}>Lacznie: </Text>{this.state.conf}</Text>
                        <Text style={{fontSize:30, margin: 10}}><Text style={{color:'red'}}>Zmarlych: </Text>{this.state.dead}</Text>
                        <Text style={{fontSize:30, margin: 10}}><Text style={{color:'#7CFC00'}}>Wyleczonych: </Text>{this.state.recovered}</Text>
                        <Text style={{fontSize:30, margin: 10}}><Text style={{color:'#8B0000'}}>Nowi: </Text>{this.state.new}</Text>
                    </View>

                    <View style={styles.userSection}>
                        <View style={styles.innerUserSection}>
                          <TextInput
                            placeholder='wpisz nazwe kraju...'
                            placeholderTextColor="#696969"
                            onEndEditing={(e) => {
                              e.nativeEvent.text === "" ? this.setState({location: this.state.location = "Poland"}) : this.setState({location: this.state.location = e.nativeEvent.text})
                              return this._searchFun()
                            }}
                            style={{borderBottomWidth: 1, borderBottomColor: 'black', margin: 10, height:50, padding: 5}}
                          />
                        </View>
                    </View>
                </View>
            </>
        )
    }
}


export default MainData
