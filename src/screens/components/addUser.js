import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Users from "../UsersModel";
class UserController extends React.Component {

    constructor(obj) {
        super(obj)
        this.addUser = this.addUser.bind(this);
        this.state = {
            textName: null
        };
    }


    addUser = async (id) => {
        const newUser = await Users.create({
            name_user: this.state.textName,
            id_ordinateur: id
        })
        this.props.onGetUsers(newUser)
    }
    render() {
        return (
            <View>
                <Button icon="plus" onPress={() => this.addUser(this.props.r.id)}></Button>
                <TextInput
                    label="Name"
                    key={this.props.i}
                    value={this.state.textName}
                    onChangeText={texte => this.setState({ textName: texte })}
                />
            </View>
        )
    }
}
export default UserController; 