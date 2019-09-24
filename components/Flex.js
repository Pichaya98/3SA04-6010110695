import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'
export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }
    render() {
        return (
            
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 300, width: 50, backgroundColor: 'red' }} />
                <View style={{ height: 250, width: 50, backgroundColor: 'blue' }} />
                <View style={{ height: 200, width: 50, backgroundColor: 'green' }} />
                <View style={{ height: 150, width: 50, backgroundColor: 'black' }} />
            </View>
                
               
        );
    }
}
   const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%'},
   });
   
   