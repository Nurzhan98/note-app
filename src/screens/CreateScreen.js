import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {HeaderButtons, Item, OverflowMenu, HiddenItem} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { Entypo } from '@expo/vector-icons';
import { CreateRightIcon } from '../components/CreateRightIcon'
import { CreateNote } from '../components/CreateNote'
import { HeaderSavedIcons } from '../components/HeaderSavedIcons'
import { HeaderRightBtn } from '../components/HeaderRightBtn'
import { DATA } from '../data'

export const CreateScreen = ({navigation}) => {
    const [isSave, setIsSave] = useState(false)
    const [obj, setObj] = useState({})
    const [text, setText] = useState('')
    const [desc, setDesc] = useState('')
    let note = {
        id: new Date().toString(),
        text,
        desc
    }
    console.log(note)
    const handleSaveText = (value) => {
        setText(value)
    }
    const handleSaveDesc = (value) => {
        setDesc(value)
    }
    const handleSave = () => {
        DATA.unshift(note)
        console.log(DATA)
        setIsSave(true)
    }
    if (isSave) {
        navigation.setOptions({
            title: false,
            headerStyle: {
                backgroundColor: THEME.MAIN_COLOR,
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={ HeaderSavedIcons } >
                    <Item 
                        title='Star' 
                        iconName='pencil'
                        onPress={ () => console.log('ok') } 
                    />
                    <Item 
                        title='Save' 
                        iconName='search'
                        onPress={ () => console.log('ok') } 
                    />
                    <Item 
                        title='Save' 
                        iconName='star-o'
                        onPress={ () => console.log('ok') } 
                    />
                    <OverflowMenu
                        OverflowIcon={<Entypo name="share" style={{ marginHorizontal: 10 }} size={23} color="#000" />}
                    >
                        <HiddenItem title="Файл Samsung Notes" onPress={() => alert('hidden1')} />
                        <HiddenItem title="Файл Microsoft Word" onPress={() => alert('hidden1')} />
                        <HiddenItem title="PDF-файл" onPress={() => alert('hidden1')} />
                        <HiddenItem title="Файл изображения" onPress={() => alert('hidden1')} />
                        <HiddenItem title="Текстовой файл" onPress={() => alert('hidden1')} />
                    </OverflowMenu>
                    <OverflowMenu
                        OverflowIcon={<Entypo name="dots-three-vertical" size={23} color="#000" />}
                    >
                        <HiddenItem title="Удалить" onPress={() => setIsSave(false)} />
                        <HiddenItem title="Добавить теги" onPress={() => alert('hidden1')} />
                        <HiddenItem title="Заблокировать" onPress={() => alert('hidden1')} />
                        <HiddenItem title="Закрепить на главном экране" onPress={() => alert('hidden1')} />
                        <HiddenItem title="Печать" onPress={() => alert('hidden1')} />
                    </OverflowMenu>
                </HeaderButtons>
            )
        })
    } else {
        navigation.setOptions({
            title: false,
            headerStyle: {
                backgroundColor: THEME.MAIN_COLOR,
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={ CreateRightIcon  } >
                    <Item 
                        title='Save' 
                        iconName='check'
                        onPress={ handleSave } 
                    />
                    <OverflowMenu
                        style={{ marginHorizontal: 10 }}
                        OverflowIcon={<Entypo name="dots-three-vertical" size={23} color="#000" />}
                    >
                        <HiddenItem title="Изменить" onPress={() => alert('hidden1')} />
                        <HiddenItem title="Сортирвать" onPress={() => alert('hidden1')} />
                        <HiddenItem title="Посмотреть" onPress={() => alert('hidden1')} />
                    </OverflowMenu>
                </HeaderButtons>
            )
        })
    }

    return <CreateNote handleSave={handleSaveText} handleSaveDesc={handleSaveDesc} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.MAIN_COLOR
    }
})