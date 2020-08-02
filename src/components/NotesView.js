import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { THEME } from '../theme'

export const NotesView = ({data, navigation}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => console.log(navigation)} >
            <View style={styles.container}  >
                <View style={styles.block} >
                    <View style={styles.point}></View>
                    <Text style={styles.title}> {data.text} </Text> 
                </View>
                <View style={styles.block1}>
                    <Text style={styles.date}> {data.date} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#fff',
        height: 100,
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginBottom: 20  
    },
    point: {
        backgroundColor: THEME.MAIN_COLOR,
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 20
    },
    title: {
        color: '#000',
        fontFamily: 'open-bold',
        fontSize: 20
    },
    date: {},
    block: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    block1: {
        marginLeft: 30
    }
})