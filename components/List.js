import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, View, Image, ActivityIndicator, Text } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import ImageLoad from 'react-native-image-placeholder';
import Lightbox from "react-native-lightbox";
import { useDispatch, useSelector } from "react-redux";
import { getCatList } from "../actions/actions";

const List = () => {
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    
    const dispatch = useDispatch();
    const store = useSelector((store) => store.item);
    console.log('----->', store)

    useEffect(() => {
        dispatch(getCatList());
        // setTotalPage(5);
        // fetchCats();
    }, [])


    const fetchCats = async () => {
        setLoading(true);
        setRefreshing(true);
        let url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=' + currentPage
        const response = await fetch(url);
        const data = await response.json();
        setList(currentPage === 1 ? data : [...list, ...data]);
        setTimeout(() => {
            setLoading(false);
        }, 3000);

        setRefreshing(false);
    }

    const fetchMoreData = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage <= totalPage) {
            fetchCats()
        }
    }
    const onRefresh = () => {
        setCurrentPage(1)
        fetchCats()
    }
    const ItemSeparator = () => {
        return (<View style={{ height: 0.2, backgroundColor: "gray", marginHorizontal: 15 }} />)
    }
    const renderFooter = () => {
        return (loading && <View style={{ height: 50, justifyContent: 'center' }}>
            <ActivityIndicator color={'red'}></ActivityIndicator>
        </View>)
    }

    return (
        <SafeAreaView>
            <FlatList
                data={store}
                renderItem={({ item, index }) =>
                    <View style={{ padding: 10 }}>
                        <Lightbox underlayColor='white'>
                            <ImageLoad
                                style={styles.image}
                                borderRadius={20}
                                //loadingStyle={{ size: 'large', color: 'blue' }}
                                source={{ uri: item.url }}
                            />
                        </Lightbox>

                    </View>
                }
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ItemSeparator}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0}
                onEndReached={() => fetchMoreData()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        borderRadius: 15,
    }
});

export default List;