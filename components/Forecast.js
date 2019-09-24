import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
export default class Forecast extends React.Component {
    render() {
        return (
        <View>
            <Text style={styles.bea}>{this.props.main}</Text>
            <Text style={styles.bea}>{this.props.description}</Text>
            <Text style={styles.bea}>{this.props.temp}</Text>
            <Text style={styles.bea}>°C</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({

    container: { 
        // paddingTop: 25,
        //flex: 1,
        // marginLeft: 24,
        // marginRight: 24,
        // marginBottom: 24

    },
    backdrop: { 
        
        width: '100%',
        height: '100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },

    bea: {fontSize:40},
    
   });
   