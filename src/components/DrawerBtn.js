import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons'


export const DrawerBtn = props => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            color='#000'
            iconSize={24}
        />
    )
}