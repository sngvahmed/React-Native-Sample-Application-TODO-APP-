import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import { AppRegistry, Image } from 'react-native';
import {Component} from 'React';

export class ToDoCard extends Component {
    toDoCards = [];
    constructor(props) {
        super(props);
        
        props.titlePlaceHolder = "Enter Card Name";
        props.descriptionPlaceHolder = "Card Description";

        this.state = {
            title: "",
            description: ""
        };
    }

    _onSubmitCard = () => {
        this.toDoCards.push({title: this.state.title, description: this.state.description}); 
        this.setState({ title: "", description: ""});
    }

    _showCards = () => {
        console.log(this.toDoCards)
        Alert.alert(this.toDoCards.toString());
    }

    render() {
        return(
            <ScrollView style={ToDoCardStyle.Card}>
                <TextInput 
                    style={ToDoCardStyle.Title}
                    placeholder={this.props.titlePlaceHolder}
                    value={this.state.title}
                    onChangeText={(title) => this.setState({title})}
                ></TextInput>
                <TextInput 
                    style={ToDoCardStyle.Description}
                    editable = {true}
                    multiline = {true}
                    numberOfLines = {4}
                    placeholder={this.props.descriptionPlaceHolder}
                    value={this.state.description}
                    onChangeText={(description) => this.setState({description})}
                ></TextInput>
                <Button
                    title="Submit Card"
                    onPress={this._onSubmitCard}
                />
                <Button
                    title="Show Cards"
                    onPress={this._showCards}
                />
            </ScrollView>
        );
    }
}


const ToDoCardStyle = StyleSheet.create({
    Card: {
        flex: 3, 
        alignSelf: 'stretch', 
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        marginBottom: 25
    },
    Description: {
        height: 100,
        textAlign: "left", 
        borderBottomColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginTop: 5
    },
    Title: {
        height: 40,
        textAlign: "left",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    }
});