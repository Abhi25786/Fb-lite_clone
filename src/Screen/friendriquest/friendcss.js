import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export const styles = StyleSheet.create({
    Maincontainer: {
        backgroundColor: "white",
        flex: 1
    }
    ,
    btntext: {
        marginVertical: 5,
        color: "black",
        fontWeight: 'bold'
    }
    ,
    friendtext: {
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 20,
        color: "black"
    },
    suggestview: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginBottom: 5
    }
    ,
    seeall: {
        color: "#1e90ff",
        marginTop: 5
    },
    flatview: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10
    },
    addbtn: {
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: "#1e90ff",
        flex: 0.5,
        marginRight: 10,

    },
    deletebtn: {
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: "lightgray",
        flex: 0.5,
        marginLeft: 10
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50
    },
    suggestbtn: {
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: "lightgray",
        marginHorizontal: 10
    }, addview: {

        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 25
    },
    imageview: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    textcolour: {
        color: "white"
    }
})
export default styles