import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export const styles = StyleSheet.create({
    Maincontainer: {
        backgroundColor: "white",
        flex: 1
    }
    ,
    btntext: {
        marginTop: 10,
        color: "black",
        fontWeight: 'bold'
    }

})
export default styles