import { StatusBar } from 'expo-status-bar';
import React,{ useEffect,useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import UnitPicker from './components/UnitPicker/UnitPicker'
import Reload from './components/Reload/Reload'
import WeatherDetails from './components/WeatherDetails/WeatherDetails'

const API_KEY= '50d837a4dc0ad6271fe7601dd2251c69'
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

const [error, setError]= useState(null)
const [currentWeather , setCurrentWeather]= useState(null)
const [tempUnit, setTempUnit]= useState('metric')
  useEffect(()=>{
    load()

  },[tempUnit])
async function load() {
  setCurrentWeather(null)
  setError(null)
  try {
    let {status} = await Location.requestPermissionsAsync()
    if(status !== 'granted')
    {
      setError('Please Give Permission to Access Location ')
      return
    }
    const location = await Location.getCurrentPositionAsync()
    
    const {latitude,longitude}= location.coords
    const url= `${WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${tempUnit}&appid=${API_KEY}`

    const response = await fetch(url)
    const result = await response.json()
    if(response.ok) {
      setCurrentWeather(result)
    }else{
      setError(result.message)
    }

  } catch (error) {
    setError(error.message)
   }

}

if(currentWeather){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>

        <UnitPicker tempUnit={tempUnit} setTempUnit={setTempUnit}></UnitPicker>
        <Reload load={load}></Reload>
        <WeatherInfo currentWeather={currentWeather}></WeatherInfo>
      </View>
      <WeatherDetails currentWeather={currentWeather} tempUnit={tempUnit}></WeatherDetails>
     
    </View>
  );

} else if (error) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center',color:'red',fontSize:'30'}}>{error}</Text>
        <StatusBar style="auto" />
      </View>
    )

  } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="red"></ActivityIndicator>
          <StatusBar style="auto" />
        </View>
      )

  }


 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
  main: {
  justifyContent: 'center',
  flex: 1,
  }
});
