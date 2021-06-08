import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {Picker} from '@react-native-community/picker'

export default function UnitPicker({tempUnit,setTempUnit}) {
    return (
        <View style={styles.unit}>
            <Picker selectedValue={tempUnit} onValueChange={(item)=> setTempUnit(item)} style={{width:100,height:30, alignItems:'center'}}>
                <Picker.Item label='C' value='metric'></Picker.Item>
                <Picker.Item label='F' value='imperial'></Picker.Item>
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    unit: {
        alignItems:'center',
        margin: 10,
    },
})
