import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const TrashScreen = () => {
    return (
        <View style={styles.container} >
            <Text>TrashScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})