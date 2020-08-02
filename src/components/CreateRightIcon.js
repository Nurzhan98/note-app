import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Entypo } from '@expo/vector-icons';

export const CreateRightIcon = props => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Entypo}
            color='#000'
            iconSize={24}
        />
    )
}