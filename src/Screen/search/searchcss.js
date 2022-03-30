import { StyleSheet, Dimensions } from 'react-native'
export const searchcss = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    searchview: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5
    },
    imagestyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 0.1
    }, inputcss: {
        paddingHorizontal: 10,
        color: "black",
    },
    inputview: {
        flex: 0.8,
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 40
    }
})
export default searchcss