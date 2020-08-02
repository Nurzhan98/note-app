import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const AppHeaderIcon = props => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={MaterialCommunityIcons}
            color='#000'
            iconSize={24}
        />
    )
}