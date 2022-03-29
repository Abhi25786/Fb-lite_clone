import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
const logincss = StyleSheet.create({

    maincontainer: {
        flex: 1,
    },
    text: {
        color: "black",
        marginStart: 10,
        fontSize: 15,
        marginVertical: 10
    }
    ,
    forgettext: {
        marginHorizontal: 10,
        color: "#1e90ff",
        marginBottom: 10,
        marginVertical: 10
    },
    textinput: {
        borderWidth: 1,
        borderColor: "#1e90ff",
        marginHorizontal: 10,
        height: 40,
    }
});
export default logincss