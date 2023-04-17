import React from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import HeaderView from './HeaderView';
import analytics from '@react-native-firebase/analytics';

const FlatListView = () => {
    const persons = [
        {
            id: "69584512",
            name: "Earnest Green",
        },
        {
            id: "78257845",
            name: "Winston Orn",
        },
        {
            id: "78454245",
            name: "Carlton Collins",
        },
        {
            id: "85745585",
            name: "Malcolm Labadie",
        },
        {
            id: "12457856",
            name: "Michelle Dare",
        },
        {
            id: "45788956",
            name: "Carlton Zieme",
        },
        {
            id: "23567845",
            name: "Jessie Dickinson",
        },
        {
            id: "56897845",
            name: "Julian Gulgowski",
        },
        {
            id: "23568978",
            name: "Ellen Veum",
        },
        {
            id: "12457889",
            name: "Lorena Rice",
        },
        {
            id: "23568977",
            name: "Carlton Zieme",
        },
        {
            id: "12457898",
            name: "Jessie Dickinson",
        },
        {
            id: "23475869",
            name: "Julian Gulgowski",
        },
        {
            id: "58476925",
            name: "Ellen Veum",
        },
        {
            id: "25457845",
            name: "Lorena Rice",
        },
    ];

    return (
        <FlatList
            data={persons}
            renderItem={({ item, index }) =>
                <View style={styles.listContainer} >
                    <Image style={styles.imageStyle} source={{ uri: 'https://i.picsum.photos/id/186/200/300.jpg?hmac=OcvCqU_4x7ik3BASnw4WmwKaS-Sv167Nmf5CJoTrIUs' }} />
                    <View style={styles.innerView}>
                        <Text style={{ fontSize: 17 }}> {item.name} </Text>
                        <Text style={{ fontSize: 12, color: 'darkgrey', margin: 2 }}> {'Volume: ' + item.id}</Text>
                        <Text style={{ fontSize: 12 }}> {'$: ' + '124587878754'}</Text>
                    </View>
                    <Text style={styles.tagText}> {'#' + parseInt(index + 1)}</Text>
                </View >}
            ListHeaderComponent={() => (<HeaderView />)}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3'
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    tagText: {
        fontSize: 20
    },
    innerView: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 8,
        paddingRight: 8
    }
});

export default FlatListView;