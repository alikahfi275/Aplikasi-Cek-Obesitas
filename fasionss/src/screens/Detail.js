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
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemSeleksi: '',
            cart: [],
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
                this.setState({ cart: value });
            }

            console.log('Data Berhasil Diambil')
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
    }

    tambahItem = (namaProduk, size, harga, sisaStok, image) => {
        if (size == undefined) {
            Alert.alert('WARNING', 'Silahkan Pilih Size');
        } else {
            let cart = this.state.cart;

            if (cart.length == 0) {
                cart.push({
                    namaProduk: namaProduk,
                    size: size,
                    harga: harga,
                    sisaStok: sisaStok,
                    qty: 1,
                    image: image,
                });
            } else {
                for (let i = 0; i < cart.length; i++) {
                    console.log(i);
                    if (namaProduk == cart[i].namaProduk &&
                        size == cart[i].size) {
                        cart[i].qty++;
                        console.log("Ketemu yang sama");
                        break;
                    }

                    if (i == cart.length - 1) {
                        console.log("Tidak ketemu yang sama");
                        cart.push({
                            namaProduk: namaProduk,
                            size: size,
                            harga: harga,
                            sisaStok: sisaStok,
                            qty: 1,
                            image: image,
                        });
                    }
                }
            }

            console.log("Cart And", cart);
            this.setState({ cart });
            this.saveData(cart);
        }
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
                        <Text style={styles.txtHeader}>Product</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="ellipsis-h" size={22} color="#000000" />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flex: 1 }}>
                    <Image source={{ uri: this.props.route.params.imageUrl }}
                        style={styles.Image}
                    />
                    <View style={styles.iconProfil}>
                        <Image source={{ uri: this.props.route.params.profil }}
                            style={styles.ImageProfil}
                        />
                        <View style={styles.txtProfil}>
                            <Text style={styles.txtBody1}>{this.props.route.params.nama}</Text>
                            <Text style={styles.txtBody}>{this.props.route.params.handle}</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 5 }}>
                            <Icon name="bookmark" size={22} color="#878787" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.txtDescription}>
                        <Text style={styles.txtDescJudul}>{this.props.route.params.productTittle}</Text>
                        <Text style={styles.txtDesc}>{this.props.route.params.productDescription}</Text>
                        <Text style={[styles.txtDescJudul,
                        {
                            marginTop: 10,
                            textAlign: 'right',
                            marginRight: 10,
                        }
                        ]}>Rp. {
                                this.props.route.params.price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                            }</Text>
                    </View>
                    <Text style={styles.txtSizeTittle}>Size :</Text>

                    <FlatList
                        data={this.props.route.params.sizeList}
                        horizontal
                        style={{
                            marginTop: 5,
                            marginBottom: 10,
                            marginHorizontal: 15,
                        }}
                        renderItem={({ item, index }) =>
                        (<TouchableOpacity
                            style={[styles.eclipseSize,
                            {
                                borderColor: this.state.itemSeleksi == item ? "#00BCD4" : "#BDBDBD",
                                borderWidth: this.state.itemSeleksi == item ? 3 : 1,

                            }]}
                            onPress={() => this.setState({ itemSeleksi: item })}>
                            <Text style={styles.txtSize}>{item.size}</Text>
                        </TouchableOpacity>
                        )}
                    />
                </ScrollView>
                <TouchableOpacity style={styles.cart}
                    onPress={() => this.tambahItem(
                        this.props.route.params.productTittle,
                        this.state.itemSeleksi.size,
                        this.props.route.params.price,
                        this.state.itemSeleksi.stok,
                        this.props.route.params.imageUrl,
                    )}>
                    <Text>Add Chart</Text>
                </TouchableOpacity>
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
    Image: {
        height: 400,
        width: '100%',
    },
    txtBody1: {
        color: "#000000",
        fontWeight: 'bold',
    },
    txtBody: {
        color: "#4D5156"
    },
    txtDescJudul: {
        color: "#000000",
        fontWeight: 'bold',
        fontSize: 18
    },
    txtDesc: {
        color: "#4D5156",
        textAlign: 'justify',
    },
    eclipseSize: {
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    txtSizeTittle: {
        color: "#000000",
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 10
    },
    txtSize: {
        color: "#000000",
        fontSize: 15,
        fontWeight: 'bold',
    },
    ImageProfil: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    iconProfil: {
        flexDirection: 'row',
        margin: 10
    },
    txtProfil: {
        justifyContent: 'center',
        marginLeft: 5
    },
    txtDescription: {
        justifyContent: 'center',
        marginHorizontal: 15
    },
    cart: {
        justifyContent: 'center',
        marginHorizontal: 20,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 10
    },
})

export default Detail;