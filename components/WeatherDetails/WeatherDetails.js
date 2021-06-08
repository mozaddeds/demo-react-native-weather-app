import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'


export default function WeatherDetails({currentWeather, tempUnit}) {
    const {
        main: {feels_like, humidity,pressure},
        wind: {speed}
    } = currentWeather

    const windSpeed = tempUnit ==='metric' ? `${Math.round(speed)} m/s`:  `${Math.round(speed)} miles/hr`

    console.log(feels_like)
    return (
        <View>
            <View style={styles.weather}>
                <View style={styles.weather}>
                    <FontAwesome5 name='temperature-low' size={30} color='red' />
                    <View style={{marginLeft:20}}>
                        <Text style={{margin:5, fontSize: 20, fontWeight:500}}>Feels Like</Text>
                        <Text style={styles.weatherDetails}>{feels_like} deg</Text>
                    </View>  
                </View>
                <View>
                    <View style={styles.weather}>
                        <FontAwesome5 name='tint' size={30} color='red' />
                            <View style={{marginLeft:20}}>
                                <Text style={{margin:5, fontSize: 20, fontWeight:500}}>Humidity</Text>
                                <Text style={styles.weatherDetails}>{humidity}%</Text>
                            </View>
                    </View>
                </View>
            </View>

            <View style={styles.weather}>
                <View style={styles.weather}>
                    <MaterialCommunityIcons name='weather-windy' size={30} color='red' />
                    <View style={{marginLeft:20}}>
                        <Text style={{margin:5, fontSize: 20, fontWeight:500}}>Wind Speed</Text>
                        <Text style={styles.weatherDetails}>{windSpeed}</Text>
                    </View>  
                </View>
                <View>
                    <View style={styles.weather}>
                        <MaterialCommunityIcons name='speedometer' size={30} color='red' />
                            <View style={{marginLeft:20}}>
                                <Text style={{margin:5, fontSize: 20, fontWeight:500}}>Pressure</Text>
                                <Text style={styles.weatherDetails}>{pressure} hPa</Text>
                            </View>
                    </View>
                </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    weather: {
        margin:20,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    weatherDetails: {
        fontSize:20,
        margin:5,
    }
})
