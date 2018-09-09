import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';
import {Component} from 'React';

class Greeting extends Component {
	constructor(props) {
		super(props)
        console.log(props)
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
            <View>
                <Text style={style}> Hello {this.props.name} {counter}! </Text> 
            </View>
		);
	}
}

export default class App extends Component {
  render() {
    let pic = {
      	uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
		<View style={styles.container}>
			<Image source={pic} style={{width: 193, height: 110}}/>
			<Greeting name="Ahmed" style={[styles.Red, styles['Text-Align']]}/>
			<Greeting name="Nasser" style={[styles.Orange, styles['Text-Align']]}/>
		</View>
    );
  }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Red: {
		color: 'red'
	},
	Orange: {
		color: 'orange'
	},
	'Text-Align': {
		textAlign: "center"
	}
});