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

class Home extends Component {
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
            ],

            postData: [
                {
                    nama: 'ali kahfi',
                    handle: '@alikahfi',
                    profil: 'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                    image: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
                    productTittle: 'Kumpulan Thsirt High Quality',
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, massa a elementum porta, orci mauris eleifend arcu, a feugiat felis lectus quis massa. Proin sed finibus lacus. Nulla a interdum sem. Morbi ac risus nisi. Suspendisse nec convallis ipsum. Pellentesque gravida in lectus eget vehicula. Maecenas quis dictum libero',
                    sizeList: [
                        { size: 'S', stok: 34 },
                        { size: 'M', stok: 32 },
                        { size: 'L', stok: 32 },
                        { size: 'XL', stok: 12 },
                    ],
                    price: 365000,
                },
                {
                    nama: 'martin',
                    handle: '@martin',
                    profil: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
                    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZob3RvJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
                    productTittle: 'Kumpulan Mobil High Quality',
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, massa a elementum porta, orci mauris eleifend arcu, a feugiat felis lectus quis massa. Proin sed finibus lacus. Nulla a interdum sem. Morbi ac risus nisi. Suspendisse nec convallis ipsum. Pellentesque gravida in lectus eget vehicula. Maecenas quis dictum libero',
                    sizeList: [
                        { size: 'S', stok: 120 },
                        { size: 'M', stok: 12 },
                        { size: 'L', stok: 32 },
                        { size: 'XL', stok: 23 },
                    ],
                    price: 280000,
                },
                {
                    nama: 'marvel',
                    handle: '@marvel',
                    profil: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                    image: 'https://images.unsplash.com/photo-1524638067-feba7e8ed70f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZob3RvJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
                    productTittle: 'Kumpulan Sepeda High Quality',
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, massa a elementum porta, orci mauris eleifend arcu, a feugiat felis lectus quis massa. Proin sed finibus lacus. Nulla a interdum sem. Morbi ac risus nisi. Suspendisse nec convallis ipsum. Pellentesque gravida in lectus eget vehicula. Maecenas quis dictum libero',
                    sizeList: [
                        { size: 'S', stok: 14 },
                        { size: 'M', stok: 42 },
                        { size: 'L', stok: 41 },
                        { size: 'XL', stok: 12 },
                    ],
                    price: 350000,
                },
                {
                    nama: 'wiliam',
                    handle: '@wiliam',
                    profil: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
                    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmhvdG8lMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    productTittle: 'Kumpulan Motor High Quality',
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, massa a elementum porta, orci mauris eleifend arcu, a feugiat felis lectus quis massa. Proin sed finibus lacus. Nulla a interdum sem. Morbi ac risus nisi. Suspendisse nec convallis ipsum. Pellentesque gravida in lectus eget vehicula. Maecenas quis dictum libero',
                    sizeList: [
                        { size: 'S', stok: 31 },
                        { size: 'M', stok: 12 },
                        { size: 'L', stok: 21 },
                        { size: 'XL', stok: 26 },
                    ],
                    price: 200000,
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
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Cart')}>
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
                    <FlatList
                        data={this.state.postData}
                        renderItem={({ item, index }) =>
                        (<View style={styles.card}>
                            <View style={styles.icnBody}>
                                <Image source={{ uri: item.profil }}
                                    style={styles.Image}
                                />
                                <View style={styles.conText}>
                                    <Text style={styles.txtBody1}>{item.nama}</Text>
                                    <Text style={styles.txtBody}>{item.handle}</Text>

                                </View>
                                <TouchableOpacity style={{ marginRight: 20 }}>
                                    <Icon name="ellipsis-h" size={22} color="#878787" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.bdyCard}
                                onPress={() => this.props.navigation.navigate('Detail', {
                                    imageUrl: item.image,
                                    nama: item.nama,
                                    handle: item.handle,
                                    profil: item.profil,
                                    productTittle: item.productTittle,
                                    productDescription: item.productDescription,
                                    sizeList: item.sizeList,
                                    price: item.price,
                                })}>
                                <Image source={{ uri: item.image }}
                                    style={styles.ImageCard}
                                />
                            </TouchableOpacity>
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
                        </View>)}
                    />
                </View>

                <View style={styles.buttomTab}>
                    <TouchableOpacity style={styles.iconTab}>
                        <Icon name="home" size={20} color="#ffffff" />
                        <Text style={{ fontSize: 9, color: "#ffffff" }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTab}>
                        <Icon name="chart-line" size={20} color="#878787" />
                        <Text style={{ fontSize: 9, color: "#878787" }}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTab}>
                        <Icon name="plus" size={20} color="#878787" />
                        <Text style={{ fontSize: 9, color: "#878787" }}>Baru</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTab}>
                        <Icon name="user" size={20} color="#878787" />
                        <Text style={{ fontSize: 9, color: "#878787" }}>Profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTab}>
                        <Icon name="cog" size={20} color="#878787" />
                        <Text style={{ fontSize: 9, color: "#878787" }}>Setting</Text>
                    </TouchableOpacity>
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
        borderRadius: 15,
        marginBottom: 10
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
    },
    buttomTab: {
        paddingVertical: 10,
        backgroundColor: '#212121',
        flexDirection: 'row',
        elevation: 5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    iconTab: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})

export default Home;