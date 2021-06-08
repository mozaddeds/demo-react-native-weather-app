import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons';

export default function Reload({load}) {
    const reloadIcon = Platform.OS=='ios' ? 'reload-circle' : 'md-refresh'
    return (
        <View style={styles.reloadIcon}>
            <Ionicons name={reloadIcon} size={24} color="black" onPress={load } />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon:{
        position: 'absolute',
        top:30,
        right:70
    }
})
