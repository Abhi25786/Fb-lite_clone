import React from 'react'
import { Text, Button, TextInput } from 'react-native'
function Buttondemo({ route }) {
    const { name } = route.params
    return (
        <>
            <Text>{name}</Text>
        </>
    )
}

export default Buttondemo