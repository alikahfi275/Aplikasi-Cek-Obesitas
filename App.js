/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          handle: '@alikahfi',
          image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
          handle: '@martin',
          image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
        },
        {
          handle: '@marvel',
          image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
        },
        {
          handle: '@stevani',
          image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
          handle: '@wiliam',
          image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        },
        {
          handle: '@figo',
          image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
          handle: '@susan',
          image: 'https://images.unsplash.com/photo-1644575492746-4a16457d07b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
          handle: '@tertan',
          image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'
        },
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#f1f1f1"} barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="rocket" size={22} color="#000000" />
          </TouchableOpacity>
          <View style={styles.tittleHeader}>
            <Text style={styles.txtHeader}>HOME</Text>
          </View>
          <TouchableOpacity>
            <Icon name="shopping-cart" size={22} color="#000000" />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={this.state.data}
            horizontal
            style={{ marginHorizontal: 5, paddingBottom: 15 }}
            renderItem={({ item, index }) =>
            (<View>
              <View style={styles.conStory}>
                <Image source={{ uri: item.image }}
                  style={styles.Image}
                />
                <Text style={styles.txtStory}>{item.handle}</Text>
              </View>
            </View>)}
          />
        </View>


        <View style={styles.body}>
          <View style={styles.card}>
            <View style={styles.icnBody}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }}
                style={styles.Image}
              />
              <View style={styles.conText}>
                <Text style={styles.txtBody1}>Ali Kahfi</Text>
                <Text style={styles.txtBody}>@alikahfi</Text>

              </View>
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Icon name="ellipsis-h" size={22} color="#878787" />
              </TouchableOpacity>
            </View>
            <View style={styles.bdyCard}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1592805723127-004b174a1798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1525264626954-d57032a1ab1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=961&q=80' }}
                style={styles.ImageCard}
              />
            </View>
            <View style={styles.btnCard}>
              <TouchableOpacity>
                <Icon name="heart" size={22} color="#878787" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 8 }}>
                <Icon name="comment" size={22} color="#878787" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="paper-plane" size={22} color="#878787" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Icon name="bookmark" size={22} color="#878787" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1"
  },
  body: {
    flex: 1,
    marginHorizontal: 20
  },
  conStory: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginLeft: 5
  },
  btnCard: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    elevation: 1,
    borderRadius: 15
  },
  header: {
    flexDirection: 'row',
    margin: 15,
  },
  tittleHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bdyCard: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  txtHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000'
  },
  txtBody1: {
    color: "#000000",
    fontWeight: 'bold',
  },
  txtStory: {
    color: "#000000",
    fontSize: 12
  },
  txtBody: {
    color: "#000000"
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  ImageCard: {
    height: 280,
    width: 280,
    borderRadius: 20,
    marginVertical: 5,
  },
  icnBody: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  conText: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1
  }
})

export default App;