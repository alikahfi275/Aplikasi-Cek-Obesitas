/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={"#f1f1f1"} barStyle="dark-content" />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Icon name="arrow-left" size={22} color="#000000" />
                    </TouchableOpacity>
                    <View style={styles.tittleHeader}>
                        <Text style={styles.txtHeader}>Cart</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="ellipsis-h" size={22} color="#000000" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.cartFoto}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' }}
                            style={styles.ImageProfil}
                        />
                        <View style={styles.txtBodyProduk}>
                            <Text style={[styles.txtProduk, { fontWeight: 'bold' }]}> Nama Produk</Text>
                            <View style={styles.cartTambah}>
                                <TouchableOpacity style={styles.iconTambah}>
                                    <Icon name="minus" size={15} color="#000000" />
                                </TouchableOpacity>
                                <View style={{ justifyContent: 'center', borderWidth: 1, paddingHorizontal: 5, backgroundColor: '#c1c1c1' }}>
                                    <Text style={styles.txtProduk}> 4 </Text>
                                </View>
                                <TouchableOpacity style={styles.iconTambah}>
                                    <Icon name="plus" size={15} color="#000000" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.txtProduk}> Rp. 350.000 </Text>
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
    header: {
        flexDirection: 'row',
        margin: 15,
    },
    tittleHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000000'
    },
    ImageProfil: {
        height: 80,
        width: 80,
        borderRadius: 1,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtProduk: {
        color: '#000000',
    },
    txtBodyProduk: {
        justifyContent: 'center',
        marginLeft: 10
    },
    cartFoto: {
        flexDirection: 'row',
    },
    cartTambah: {
        flexDirection: 'row',
        marginLeft: 4,
        marginVertical: 5
    },
    iconTambah: {
        borderWidth: 1,
        padding: 5,
    },

})

export default Cart;