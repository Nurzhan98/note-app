import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import {DATA} from '../data'

export const CreateNote = ({handleSave, handleSaveDesc}) => {
    const handleChangeTitle = (value) => {
        handleSave(value)
    }
    const handleChangeDesc = (value) => {
        handleSaveDesc(value)
    }
    return (
        <View style={styles.container} >
            <TouchableOpacity activeOpacity={0.5} >
                <View style={styles.categoryBtn} >
                    <Text style={styles.text} >Нет категории</Text>
                </View>
            </TouchableOpacity>
            <TextInput style={styles.input1} onChangeText={handleChangeTitle} placeholder='Название' />
            <TextInput style={styles.input2} onChangeText={handleChangeDesc} placeholder='Примечение' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    categoryBtn: {
        width: 120,
        height: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: '#000'
    },
    text: {
        fontFamily: 'open-regular'
    },
    input1: {
        marginTop: 15
    },
    input2: {
        marginTop: 15
    }
})