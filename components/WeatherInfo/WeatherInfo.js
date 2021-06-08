import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'



export default function WeatherInfo({currentWeather}) {
    const {main: {temp},
    weather: [details],
    name,
}= currentWeather

const {icon, main, description}= details
const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Image style={styles.icon} source={{uri: iconUrl}} />
            <Text style={styles.temp}> {temp} </Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.main}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info:{
        alignItems:'center'
    },
    name: {
        
        fontSize:40,
        fontWeight:'bold'
    },
    temp:{
        
        fontSize:25,
        color: '#ff304f'

    },
    icon: {
        width: 200,
        height:200,
        
    },
    description:{
        textTransform:'capitalize',
        
        fontSize:30,
    },
    main: {
        
        fontWeight:600,
        fontSize:25,
        color: '#002651'
    }
})
