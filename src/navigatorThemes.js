import React from 'react'
import { THEME } from './theme';
import { DrawerBtn } from './components/DrawerBtn';

export const NAVIGATOR_THEMES_ANS = {
    headerTintColor: '#000',
    headerStyle: {
        backgroundColor: THEME.MAIN_COLOR
    },
    title: 'Все заметки',
    headerLeft: (props) => <DrawerBtn {...props} />
}
