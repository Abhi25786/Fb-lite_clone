import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export const styles = StyleSheet.create({
    //Main Conatiner View
    maincontainer: {
        flex: 1,
        paddingBottom: 20
    },
    //Status Bar css
    Headpart: {
        flexDirection: "row",
        paddingLeft: 20,
        alignItems: "center",
        paddingBottom: 10
    },
    smaillicons: {
        height: 15,
        width: 15,
        marginTop: 10
    },
    smailliconstext: {
        fontSize: 15,
        color: "black",
        paddingLeft: 15,
        fontWeight: 'bold',
        paddingTop: 10
    },
    //profile Container

    container: {
        alignItems: "center",
        resizeMode: 'contain',
        height: 300

    },
    profilebackimg: {
        width: 400,
        height: 200,
        marginLeft: 20,
        marginRight: 20,
    },
    profileimg: {
        height: 150,
        width: 150,
        marginTop: 150,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 5,
        position: "absolute"
    },
    imagecard: {
        height: 100,
        width: 100,
        marginHorizontal: 10,
        borderRadius: 10

    },
    border: {
        marginTop: 1,
        backgroundColor: "#ffff",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",

    },










    cameralogo: {
        height: 30,
        width: 30,
        backgroundColor: '#d3d3d3',
        borderRadius: 30 / 2,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

    profilecontainer: {
        alignItems: "center",
        resizeMode: 'contain',
        marginLeft: 10

    },

    profileview: {
        height: 300,
        width: width,
        alignItems: 'center',


    },
    iconscss: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    adddbtn: {
        backgroundColor: "#1e90ff",
        height: 35,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        flexDirection: "row"
    },
    editbtn: {
        backgroundColor: "lightgray",
        height: 35,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        flexDirection: "row"
    }
})
export default styles