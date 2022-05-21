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
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class Detail extends Component {
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
                    </View>
                    <Text style={styles.txtSizeTittle}>Size :</Text>

                    <FlatList
                        data={this.props.route.params.sizeList}
                        horizontal
                        style={{
                            marginTop: 5,
                            marginBottom: 10,
                            marginHorizontal: 15
                        }}
                        renderItem={({ item, index }) =>
                        (<TouchableOpacity>
                            <View style={styles.eclipseSize}>
                                <Text style={styles.txtSize}>{item.size}</Text>
                            </View>
                        </TouchableOpacity>)}
                    />


                </ScrollView>
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
        color: "#000000"
    },
    txtDescJudul: {
        color: "#000000",
        fontWeight: 'bold',
        fontSize: 18
    },
    txtDesc: {
        color: "#000000",
        textAlign: 'justify',
    },
    eclipseSize: {
        borderWidth: 1,
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
})

export default Detail;