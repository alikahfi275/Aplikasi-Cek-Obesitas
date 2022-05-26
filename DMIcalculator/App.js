import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tinggi: '',
      berat: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#0097A7'} />
        <View style={styles.header}>
          <Text style={styles.textHeader}> DMI CALCULATOR</Text>
        </View>
        <TextInput
          placeholder='Masukan Tinggi(Cm)'
          placeholderTextColor={'#BDBDBD'}
          value={this.state.tinggi}
          color={'#212121'}
          onChangeText={(text) => this.setState({ tinggi: text })}
          style={styles.textInput}
        />
        <TextInput
          placeholder='Masukan Berat(Kg)'
          placeholderTextColor={'#BDBDBD'}
          value={this.state.berat}
          color={'#212121'}
          onChangeText={(text) => this.setState({ berat: text })}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.btnHitung}>
          <Text style={styles.txtBtn}>HITUNG</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#0097A7',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 10
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  textInput: {
    borderBottomWidth: 1,
    marginTop: 10,
    marginHorizontal: 45,
  },
  btnHitung: {
    backgroundColor: '#0097A7',
    marginHorizontal: 45,
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtBtn: {
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default App;