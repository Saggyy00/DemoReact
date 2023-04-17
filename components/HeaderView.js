import React from "react";
import { Text, View } from "react-native";

const HeaderView = () => {

    return (
        <React.Fragment>
            <View style={{ height: 50, alignItems: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', padding: 10 }}> List of coins</Text>
            </View>
        </React.Fragment>
    )
}

export default HeaderView;