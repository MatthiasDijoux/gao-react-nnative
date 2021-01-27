import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as SqLite from 'expo-sqlite';
import { BaseModel, types } from 'expo-sqlite-orm'
import Ordinateurs from "../OrdinateursModel";
import { Button, TextInput } from "react-native-paper";
import DatabaseLayer from 'expo-sqlite-orm/src/DatabaseLayer'
import Users from "../UsersModel";

class OrdinateursController extends React.Component {

    constructor(obj) {
        super(obj)
        this.state = {
            text: null
        };
        this.addOrdinateur = this.addOrdinateur.bind(this);
    }
    componentDidMount() {
        this.getOrdinateurs()
    }
    async getOrdinateurs() {
        let array = []
        await Ordinateurs.createTable();
        const options = {
            columns: 'name, id',
            order: 'name ASC'
        }
        const databaseLayer = new DatabaseLayer(async () => SqLite.openDatabase('gao.db'))
        databaseLayer.executeSql('SELECT ordinateurs.id, ordinateurs.name, users.name_user FROM ordinateurs LEFT JOIN users ON ordinateurs.id = users.id_ordinateur').then(response => {
            response.rows.forEach(ordi => {
                array.push(ordi)
            })
            this.props.onGetOrdi(array)
        })
    }
    async addOrdinateur() {
        console.log(this.state.text)
        const newOrd = await Ordinateurs.create({
            name: this.state.text,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Button icon='plus' onPress={this.addOrdinateur}></Button>
                <TextInput
                    style={styles.input}
                    label="Name"
                    value={this.state.text}
                    onChangeText={texte => this.setState({ text: texte })}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 100
    }
});
export default OrdinateursController; 