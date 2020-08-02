import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { NotesView } from '../components/NotesView'
import { DATA } from '../data'
import { Entypo, Ionicons } from '@expo/vector-icons';
import { THEME } from '../theme';
import { DrawerBtn } from '../components/DrawerBtn';
import { HeaderRightBtn } from '../components/HeaderRightBtn';
import { HeaderButtons, Item, OverflowMenu, HiddenItem, OverflowMenuProvider } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AllNotesScreen = ({navigation}) => {
    const ReusableHiddenItem = ({ onPress }) => <HiddenItem title="hidden2" onPress={onPress} />;
    navigation.setOptions({
        title: 'Все заметки',
        headerLeft:  () => (
            <HeaderButtons HeaderButtonComponent={DrawerBtn} >
                <Item 
                    title='Write' 
                    iconName='md-menu'
                    onPress={ () => navigation.toggleDrawer() } 
                />
            </HeaderButtons> 
        ),
        headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderRightBtn } >
                <Item 
                    title='Write' 
                    iconName='search1'
                    onPress={ () => navigation.navigate('Search') } 
                />
                <OverflowMenu
                    style={{ marginHorizontal: 10 }}
                    OverflowIcon={<Entypo name="dots-three-vertical" size={23} color="blue" />}
                >
                    <HiddenItem title="Изменить" onPress={() => alert('hidden1')} />
                    <HiddenItem title="Сортирвать" onPress={() => alert('hidden1')} />
                    <HiddenItem title="Посмотреть" onPress={() => alert('hidden1')} />
                </OverflowMenu>
            </HeaderButtons>  
        ),
    })
    return (
            <View style={styles.container} >
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={ ({item}) => (
                        <NotesView data={item} navigation={navigation} />
                    )}
                />
                <View style={styles.absolute} >
                    <TouchableOpacity activeOpacity={0.5} onPress={() => (
                        navigation.navigate('Create')
                        )} >
                        <View style={styles.btn} >
                            <Entypo name="plus" size={35} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: THEME.MAIN_COLOR
    }, 
    absolute: {
        position: 'absolute',
        bottom: 50,
        right: 40
    },
    btn: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#f56c56',
        justifyContent: 'center',
        alignItems: 'center'
    },
})