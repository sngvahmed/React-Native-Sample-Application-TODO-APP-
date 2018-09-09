import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import { AppRegistry, Image } from 'react-native';
import { Component } from 'React';
import { ToDoCard } from './src/todo';
import { Greeting } from './src/greeting';

export default class App extends Component {
  render() {
    let pic = {
      	uri: 'https://www.askideas.com/media/13/Welcome-3d-Text-Picture.jpg'
    };
    return (
		<View style={styles.container}>
			<Image source={pic} style={{alignSelf: 'stretch', height: 40, flex: 1}}/>
			<Greeting name="Ahmed" style={[styles.Red, styles['Text-Align']]}/>
			<ToDoCard ></ToDoCard>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
	},
	Red: {
		color: 'red'
	},
	Orange: {
		color: 'orange'
	},
	'Text-Align': {
		textAlign: "center",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
	}
});
