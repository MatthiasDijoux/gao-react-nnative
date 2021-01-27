import * as React from 'react';
import Ordinateurs from '../OrdinateursModel';
import Users from '../UsersModel';
import { Avatar, Button, TextInput, IconButton, Card, Text, Title, DataTable, Paragraph } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import * as SqLite from 'expo-sqlite';
import { useState, useCallback } from "react";
import { or } from 'react-native-reanimated';
import Attributions from '../AttributionsModel';
import OrdinateursController from './addOrdinateur';
import UserController from './addUser';
var db = SqLite.openDatabase('gao.db');

class ComputerCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            ordinateurs: [],
            attributions: [],
        };
    }
    componentDidMount() {
        this.getUsers();

    }
    async getUsers() {
        let array = []
        await Users.createTable();
        const options = {
            columns: 'name_user, id_ordinateur',
            order: 'name_user ASC'
        }
        const createdUsers = await Users.query(options);
        createdUsers.forEach(user => {
            array.push(user)
        })
    }
    hangleGetOrdi = (ordi) => {
        let array = this.state.ordinateurs.slice();
        array.push(ordi)
        this.setState({ ordinateurs: ordi })
    }
    hangleGetUsers = (user) => {
        let array = this.state.users.slice();
        array.push(user)
        this.setState({ users: array })
    }
    render() {
        return (
            <View style={styles.container}>
                <OrdinateursController onGetOrdi={this.hangleGetOrdi} />
                {this.state.ordinateurs && this.state.ordinateurs.map((r, i) => (
                    <Card key={i} style={styles.card} >
                        <UserController r={r} i={i} onGetUsers={this.hangleGetUsers} />
                        <Card.Title title={r.name} right={(props) => <IconButton {...props} icon="delete" onPress={() => { }} />}>
                        </Card.Title>
                        <Paragraph>{r.name_user}</Paragraph>
                    </Card >
                ))
                }

            </View >
        );
    }
}
export default ComputerCards;
const styles = StyleSheet.create({
    card: {
        margin: 20,
        width: 300,
    },
    header: {
        height: 100
    }
});