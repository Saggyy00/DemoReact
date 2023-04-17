import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DraggableGrid } from 'react-native-draggable-grid'
import * as ImagePicker from 'react-native-image-picker'

const Draggable = () => {
    const [images, setimages] = useState([]);

    const openLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.assets?.[0].uri };
                console.log('response', JSON.stringify(response));
                console.log('uri', response.assets?.[0].uri);

                if (images[0].key == 0 && images[0].name === "") {
                    let newArr = [...images];
                    newArr[0] = { name: response.assets?.[0].uri, key: 0 }
                    setimages(newArr);
                } else if (images[1].key == 1 && images[1].name === "") {
                    let newArr = [...images];
                    newArr[1] = { name: response.assets?.[0].uri, key: 1 }
                    setimages(newArr);
                } else if (images[2].key == 2 && images[2].name === "") {
                    let newArr = [...images];
                    newArr[2] = { name: response.assets?.[0].uri, key: 2 }
                    setimages(newArr);
                } else if (images[3].key == 3 && images[3].name === "") {
                    let newArr = [...images];
                    newArr[3] = { name: response.assets?.[0].uri, key: 3 }
                    setimages(newArr);
                } else if (images[4].key == 4 && images[4].name === "") {
                    let newArr = [...images];
                    newArr[4] = { name: response.assets?.[0].uri, key: 4 }
                    setimages(newArr);
                } else if (images[5].key == 5 && images[5].name === "") {
                    let newArr = [...images];
                    newArr[5] = { name: response.assets?.[0].uri, key: 5 }
                    setimages(newArr);
                }
            }
        });
    }

    const deleteImage = (index) => {
        if (index !== -1) {
            let newArr = [...images];
            console.log('Before', newArr);
            newArr[index] = { name: "", key: index }
            setimages(newArr);
            console.log('After', newArr);
        }
    }

    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            setimages((oldArray) => [...oldArray, { name: '', key: i }]);
        }
    }, [])

    const render_item = (item, index) => {
        return (
            <View style={styles.item} key={item.key}>
                <TouchableOpacity onPress={openLibrary} disabled={item.name !== ""}>
                    <Image style={{ height: 120, width: 120, borderRadius: 8 }} source={item.name === "" ? require('../assets/placeholder.png') : { uri: item.name }} />
                </TouchableOpacity>
                {item.name !== "" &&
                    <TouchableOpacity onPress={() => deleteImage(index)} style={{ position: 'absolute', alignSelf: 'flex-end', marginTop: -5, marginRight: -5 }}>
                        <Image style={{ height: 25, width: 25, borderRadius: 25 / 2 }} source={require('../assets/remove.png')} />
                    </TouchableOpacity>}
            </View>
        );
    }

    return (
        <View style={styles.wrapper}>
            <DraggableGrid
                numColumns={3}
                renderItem={render_item}
                data={images}
                onItemPress={ () => {
                    console.log('Press');
                }}
                onDragStart={ () => {
                    console.log('Start');
                }}
                onDragging={ () => {
                    console.log('Dragging');
                }}
                onDragRelease={(images) => {
                    console.log('Release');
                    let array = images.map((item, index) => {
                        return { name: item.name, key: index }
                    })
                    setimages(array);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 100,
        backgroundColor: 'blue',
    },
    wrapper: {
        marginTop: 50,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    item: {
        width: 120,
        height: 120,
        borderRadius: 8,
    },
    item_text: {
        fontSize: 40,
        color: '#FFFFFF',
    },
});

export default Draggable;