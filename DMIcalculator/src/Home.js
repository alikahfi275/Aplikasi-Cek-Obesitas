import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tinggi: '',
      berat: '',
      bmi: 0,
      status: '',
      color: '#ffffff',
    };
  }

  hitungbmi = () => {
    let tinggi = parseFloat(this.state.tinggi) / 100;
    let berat = parseFloat(this.state.berat);
    let bmi = berat / (tinggi * tinggi);
    bmi = bmi.toFixed(2);

    if (bmi > 30) {
      this.setState({status: 'OBESITAS', color: '#F44336'});
    } else if (bmi >= 23 && bmi <= 29) {
      this.setState({status: 'CENDRUNG OBESITAS', color: '#FF5722'});
    } else if (bmi >= 18.5 && bmi <= 22.9) {
      this.setState({status: 'NORMAL', color: '#4CAF50'});
    } else if (bmi < 18.5) {
      this.setState({status: 'BERAT BADAN KURANG', color: '#FFC107'});
    }
    this.setState({bmi});
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#0097A7'} />
        <View style={styles.header}>
          <Text style={styles.textHeader}>CEK OBESITAS</Text>
        </View>
        <TextInput
          placeholder="Masukan Tinggi(Cm)"
          placeholderTextColor={'#BDBDBD'}
          value={this.state.tinggi}
          keyboardType={'numeric'}
          color={'#212121'}
          onChangeText={text => this.setState({tinggi: text})}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Masukan Berat(Kg)"
          placeholderTextColor={'#BDBDBD'}
          value={this.state.berat}
          keyboardType={'numeric'}
          color={'#212121'}
          onChangeText={text => this.setState({berat: text})}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.btnHitung}
          onPress={() => this.hitungbmi()}>
          <Text style={styles.txtBtn}>HITUNG</Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 3,
            marginHorizontal: 30,
            marginTop: 50,
            borderColor: '#0097A7',
          }}>
          <View
            style={{
              borderBottomWidth: 3,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderColor: '#0097A7',
            }}>
            <Text style={{color: '#000000', fontSize: 20}}>
              {' '}
              BMI : {this.state.bmi}
            </Text>
          </View>
          <Text
            style={{
              color: this.state.color,
              paddingVertical: 40,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {this.state.status}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#0097A7',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
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
    color: '#ffffff',
  },
});

export default Home;
