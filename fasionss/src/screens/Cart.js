/* eslint-disable react-native/no-inline-styles */
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            jumlahItem: 0,
            TotalBelanja: 0,
            kuponModal: false,
            daftarKupon: [{
                namaKupon: " Diskon 12.12",
                description: "Diskon Sepecial 30% untuk hari ini",
                junlahKupon: 0.7
            }],
            diskonSaatIni: 1
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            let value = await AsyncStorage.getItem('cart');
            value = JSON.parse(value);

            if (value !== null) {
                this.setState({ cart: value }, () => { this.hitungJmlhItem(), this.hitungTotalBelanja() });
            }

            console.log('Data Berhasil Diambil')
            console.log(value)
        } catch (e) {
            console.log(e);
        }
    }

    saveData = async (cart) => {
        try {
            await AsyncStorage.setItem('cart', JSON.stringify(cart),);
            console.log('Data Berhasil Disimpan');
        } catch (e) {
            console.log(e);
        }
    };

    editQty = (index, action, sisaStok) => {
        let cart = this.state.cart;
        if (action == "+") {
            if (sisaStok >= cart[index].qty + 1) {
                cart[index].qty++;
            }
        } else {
            cart[index].qty--;

            if (cart[index].qty < 1) {
                cart.splice(index, 1);
            }
        }
        this.setState({ cart }, () => {
            this.saveData(cart);
            this.hitungJmlhItem();
            this.hitungTotalBelanja();
        });
        console.log({ cart });
    };

    hitungJmlhItem = () => {
        let cart = this.state.cart;
        let jumlahItem = 0;

        for (let i = 0; i < cart.length; i++) {
            jumlahItem += parseInt(cart[i].qty);
        }

        this.setState({ jumlahItem })
    }

    hitungTotalBelanja = () => {
        let cart = this.state.cart;
        let TotalBelanja = 0;

        for (let i = 0; i < cart.length; i++) {
            TotalBelanja += parseInt(cart[i].qty) * parseInt(cart[i].harga);
        }

        this.setState({ TotalBelanja })
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
                    <FlatList
                        data={this.state.cart}
                        renderItem={({ item, index }) => (
                            <View style={styles.cartFoto}>
                                <Image source={{ uri: item.image }}
                                    style={styles.ImageProfil}
                                />
                                <View style={styles.txtBodyProduk}>
                                    <Text style={[styles.txtProduk, { fontWeight: 'bold' }]}>{item.namaProduk}({item.size})</Text>
                                    <View style={styles.cartTambah}>
                                        <TouchableOpacity style={styles.iconTambah}
                                            onPress={() => this.editQty(index, '-', item.sisaStok)}>
                                            <Icon name="minus" size={15} color="#00BCD4" />
                                        </TouchableOpacity>
                                        <View style={styles.total}>
                                            <Text style={styles.txtProduk}>{item.qty}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.iconTambah}
                                            onPress={() => this.editQty(index, '+', item.sisaStok)}>
                                            <Icon name="plus" size={15} color="#00BCD4" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 4 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.txtProduk, { textAlign: 'left', marginRight: 10, }]}>
                                                Sisa Stok : <Text style={{ color: 'crimson' }}>{item.sisaStok}</Text>
                                            </Text>
                                        </View>
                                        <Text style={[styles.txtProduk, { textAlign: 'right', marginRight: 10, }]}>Rp.
                                            {
                                                parseInt(item.qty) * parseInt(item.harga)
                                                    .toString()
                                            }
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                    <View style={{
                        backgroundColor: "#ffffff",
                        paddingTop: 10,
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#ffffff",
                            marginHorizontal: 20,
                            marginVertical: 15,
                            paddingVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            elevation: 2,
                            borderWidth: 1,
                            borderColor: "#bdbdbd",
                            flexDirection: 'row',
                        }}
                            onPress={() => this.setState({ kuponModal: true })}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: "#878787",
                                marginRight: 10
                            }}>Gunakan Kupon</Text>
                            <Icon name="chevron-right" size={20} color="#878787" />
                        </TouchableOpacity>
                        <Text style={{
                            color: "#000000",
                            marginHorizontal: 20
                        }}>Harga Barang ({this.state.jumlahItem}) :</Text>
                        <Text style={{
                            color: "#000000",
                            textAlign: 'right',
                            marginHorizontal: 20,
                            fontWeight: 'bold'
                        }}>Rp. {(this.state.TotalBelanja * this.state.diskonSaatIni)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                            <Text>
                                {this.state.diskonSaatIni < 1 ? (this.state.TotalBelanja * this.state.diskonSaatIni)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.') : ''
                                }
                            </Text>
                        </Text>
                        <TouchableOpacity style={{
                            backgroundColor: "#03ac0e",
                            marginHorizontal: 20,
                            marginVertical: 10,
                            paddingVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18
                            }}>BELI</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal isVisible={this.state.kuponModal}>
                        <View style={{
                            flex: 1,
                            backgroundColor: "#ffffff",
                            borderRadius: 6,
                            overflow: "hidden"
                        }}>
                            <FlatList
                                data={this.state.daftarKupon}
                                renderItem={({ item, index }) => (
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity style={{
                                            marginHorizontal: 20,
                                            marginVertical: 10,
                                            borderWidth: 1,
                                            padding: 10,
                                            borderColor: "#bdbdbd",
                                            borderRadius: 3,
                                            elevation: 3,
                                            backgroundColor: "#ffffff"
                                        }}>
                                            <Text style={{ color: "#bdbdbd", textAlign: 'left', fontWeight: 'bold' }}>{item.namaKupon} </Text>
                                            <Text style={{ color: "#bdbdbd", textAlign: 'left', paddingLeft: 3 }}>{item.description} </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                            backgroundColor: "#03AC0E",
                                            marginHorizontal: 20,
                                            marginVertical: 15,
                                            paddingVertical: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 10,
                                            elevation: 2,
                                            borderWidth: 1,
                                            borderColor: "#bdbdbd",
                                            flexDirection: 'row',
                                        }}
                                            onPress={() => this.setState({ kuponModal: false, diskonSaatIni: item.diskon })}>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 16,
                                                color: "#ffffff",
                                                marginRight: 10
                                            }}>Gunakan Kupon</Text>
                                            <Icon name="chevron-right" size={20} color="#ffffff" />
                                        </TouchableOpacity>
                                    </View>
                                )} />

                        </View>
                    </Modal>
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
        color: '#888888',
    },
    txtBodyProduk: {
        justifyContent: 'center',
        marginLeft: 10,
        flex: 1,
    },
    cartFoto: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#ffffff',
        marginHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        elevation: 3
    },
    cartTambah: {
        flexDirection: 'row',
        marginLeft: 4,
        marginVertical: 5
    },
    iconTambah: {
        borderWidth: 1,
        padding: 8,
        borderColor: '#00BCD4'
    },
    total: {
        justifyContent: 'center',
        borderWidth: 1,
        paddingHorizontal: 8,
        backgroundColor: '#F0F0F0',
        borderColor: '#00BCD4'
    }

})

export default Cart;