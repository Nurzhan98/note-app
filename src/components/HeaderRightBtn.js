import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { AntDesign } from '@expo/vector-icons';



export const HeaderRightBtn = props => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={ AntDesign }
            color='#000'
            iconSize={24}
        />
    )
}
