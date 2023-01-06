import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");

    const getResult = async () => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult();
    }, []);

    // if no data in the result then return null else return the info we like to show
    if (!result) {
        return null;
    }

    return (
        <View>
            <Text> {result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo} // actual URL of photo
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
    },
});

export default ResultsShowScreen;
