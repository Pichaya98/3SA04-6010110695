import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";

export default class Forecast extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.bea}>{this.props.location}</Text>
                <Text style={styles.bea}>{this.props.main}</Text>
                <Text style={styles.bea}>สถานะ : {this.props.description}</Text>
                <Text style={styles.bea}>อุณหภูมิ : {this.props.temp} °C</Text>
                <Text style={styles.bea}>ความชื้นสัมพัทธ์ : {this.props.humidity}%</Text>
                <Text style={styles.bea}>อุณหภูมิสูงสุด : {this.props.temp_max} °C</Text>
                <Text style={styles.bea}>อุณหภูมิต่ำสุด : {this.props.temp_min} °C</Text>
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

    bea: {fontSize:30 },
    
   });
   