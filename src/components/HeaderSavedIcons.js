import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { FontAwesome } from '@expo/vector-icons';

export const HeaderSavedIcons = props => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={FontAwesome}
            color='#000'
            iconSize={24}
            style={{marginHorizontal: 10}}
        />
    )
}