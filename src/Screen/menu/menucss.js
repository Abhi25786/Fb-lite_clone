import { StyleSheet } from "react-native";
export const menustyle = StyleSheet.create({
    //--------------------------Main Container --------------------------//
    maincontainer: {
        flex: 1
        , backgroundColor: "white"
    },
    //--------------------------Head part css --------------------------//
    headtextcss: {
        color: "black",
        fontSize: 15,
        marginTop: 10
    },
    menuhead: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    menutext: {
        fontSize: 20,
        color: "black"
    },
    menuview: {
        flex: 0.7,
        position: "absolute",
        left: 60,
        top: 15
    },
    menusearch: {
        position: "absolute",
        top: 10,
        end: 10
    }
    ,
    profilehead: {
        flexDirection: "row"

    },
    menulistview: {
        margin: 10,
        flexDirection: "row"
    },
    listimg: {
        height: 35,
        width: 35,
        justifyContent: "center"
    },
    listtext: {
        margin: 8,
        paddingHorizontal: 10,
        color: "black"
    }
});
export default menustyle