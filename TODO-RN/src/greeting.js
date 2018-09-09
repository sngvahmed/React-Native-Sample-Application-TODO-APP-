import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import { AppRegistry, Image } from 'react-native';
import { Component } from 'React';

export class Greeting extends Component {
	constructor(props) {
		super(props)
        this.state = {counter:0};
    
		setInterval(() => {
			this.setState(previousState => {
				return {counter: previousState.counter + 1};
			});
		}, 1000);
	}
	render() {
        let counter = this.state.counter;
        let style = this.props.style;
		return (
            <View style={{flex: 0.1}}>
                <Text style={style}> Hello {this.props.name} [{counter}@Second]</Text> 
            </View>
		);
	}
}
