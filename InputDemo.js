import React, { useState } from 'react'
import { Text, Button, TextInput } from 'react-native'


function InputDemo({ navigation }) {
    const [text, setText] = useState('');
    const [show, setshow] = useState(false)

    const emailText = /^[\w\.\_\d\#]{5,}[ ]*[0-9]*$/
    const Click = () => {
        if (emailText.test(text)) {
            setshow(false)
            console.log(text)
            navigation.navigate('Back', { name: text })
        } else {
            setshow(true)
        }
    }


    return (
        <>

            <TextInput style={{ borderColor: "gray", borderWidth: 1, margin: 5 }} onChangeText={(event) => setText(event)} />

            <Button title='GO' onPress={Click} />
            {
                show ? <Text>Enter Valid Number</Text> : null
            }

        </>
    )
}

export default InputDemo