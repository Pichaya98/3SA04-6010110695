import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'
import { red } from 'ansi-colors';
export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }

    fetchData = () => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
            console.warn(error);
            });
        }
           
            componentDidMount = () => this.fetchData() 

    render() {
        
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../bgSky_Xr.jpg')} style={styles.backdrop}>
                    <Text style={styles.bea}>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} />
                    
                </ImageBackground>
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
   
   