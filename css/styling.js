import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export const styles = StyleSheet.create({

    maincontainer: {
        flex: 1,

    },
    mainline: {
        flexDirection: 'row',
        justifyContent: "space-between",
        justifyContent: "flex-end",
        paddingRight: 10,
        paddingLeft: 10,



    },
    //first Container
    //Facebook logo css
    brandname: {

        color: "#1e90ff",
        fontSize: 25,
        fontWeight: 'bold',
    },
    //search logo  and profile css
    searchlogo: {
        height: 30,
        width: 30,
        backgroundColor: '#d3d3d3',
        borderRadius: 30 / 2,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        height: 17,
        width: 17,

    },
    profile: {
        height: 30,
        width: 30
    },
    //Second Container

    secondline: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 5
    },
    home: {
        height: width / 20,
        width: width / 20,
        marginStart: 20,
        marginEnd: 20,

    },
    homemain: {
        justifyContent: "center"
    },
    hometext: {
        color: "white",
        fontSize: 10
    },
    hometextstyling: {
        position: "absolute",
        backgroundColor: "red",
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 10,
        marginLeft: 25,
        borderColor: "white",
        borderWidth: 1
    }
    ,
    picuplode: {
        justifyContent: "center"
    }
    ,
    //background color
    ScrollViewborder: {
        backgroundColor: "#d3d3d3"
    },
    //Third Container
    profilepic: {
        height: 35,
        width: 35,
        marginStart: 15,
        borderRadius: 30,
        margin: 10
    },


    border: {
        marginTop: 1,
        backgroundColor: "#ffff",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    writetext: {
        margin: 3,
        backgroundColor: "#d3d3d3",
        flex: 1,
        paddingLeft: 10,
        borderRadius: 30,

    },

    phototext: {
        fontSize: 10,
        paddingLeft: 15,
        textAlign: "center",
        paddingEnd: 20,
        color: "black"

    },
    logoflex: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        // flexWrap: 'wrap'
    },
    //forth container
    emojis: {
        paddingStart: 20,
        paddingEnd: 20,
        color: "black",
        flexDirection: "row",
        alignItems: "center"

    },
    emojiimage: {
        height: 15,
        width: 15,
        marginRight: 5
    },
    //flat list

    story: {
        height: 170,
        width: 100,
        margin: 5,
        borderRadius: 10,
        flex: 1
    },
    imagetext: {
        position: "absolute",
        paddingTop: 150,
        paddingLeft: 10,
        color: "#ffff",
        fontSize: 15,
        zIndex: 101
    },
    flat: {
        backgroundColor: "#ffff",
        marginTop: 5,
        paddingBottom: 5,
        flex: 1
    },
    //postlist css
    postimages: {
        height: 400,
        width: width,

    },
    post: {
        flexDirection: "row",
        alignItems: "center"
    },
    imagebtn: {
        height: 40,
        width: 100,
        backgroundColor: "#dcdcdc",
        justifyContent: "space-between",
        margin: 5,
        marginTop: 10,
        flex: 0.5,
        borderRadius: 30,
        alignItems: 'center',

    },
    imagelogo: {
        height: 20,
        width: 20,
        marginTop: 10
    },

    menuarrow: {
        height: 20,
        width: 20,
    }






});
export default styles