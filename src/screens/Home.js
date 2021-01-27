import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ComputerCards from './components/ComputerCards';
import * as SqLite from 'expo-sqlite';
import { BaseModel, types } from 'expo-sqlite-orm'
import Ordinateurs from "./OrdinateursModel";

class Home extends React.Component {

    constructor(obj) {
        super(obj)
    }

    render() {
        return (
            <View style={styles.container}>
                <ComputerCards />
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "azure",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default Home;