import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'

import DATA from '../../components/menuflatlisht'
import styling from '../../styles/styling'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import menustyle from './menucss'
import { images } from '../../assets/Pics'
import { useDispatch } from 'react-redux'
import { logoutContinue } from '../../redux/actions/auth'


function MenuScreen({ navigation }) {
    const dispatch = useDispatch();

    const click = (title) => {
        console.log(title.key)
        if (title.key === "20") {
            dispatch(logoutContinue())
        } else if (title.key === "1") {
            navigation.navigate('Login')
        }
        else if (title.key === "2") {
            navigation.navigate('Login')
        }
        else if (title.key === "3") {
            navigation.navigate('Login')
        }
        else if (title.key === "4") {
            navigation.navigate('Login')
        }
        else if (title.key === "5") {
            navigation.navigate('Login')
        }
        else if (title.key === "6") {
            navigation.navigate('Login')
        }
        else if (title.key === "7") {
            navigation.navigate('Login')
        }
        else if (title.key === "8") {
            navigation.navigate('Login')
        }
        else if (title.key === "9") {
            navigation.navigate('Login')
        }
        else if (title.key === "10") {
            navigation.navigate('Login')
        }

    }

    return (
        //---------------------------------------------Menu Container-----------------------------------------------//


        <SafeAreaView style={menustyle.maincontainer}>


            {/* ----------------------------------------HEAD PART------------------------------------------------ */}
            <View style={menustyle.menuhead}>
                <View style={menustyle.menuview}>
                    <Text style={menustyle.menutext}>Menu</Text>
                </View>
                <TouchableOpacity>
                    <View style={menustyle.menuview}>
                        <Text style={menustyle.menutext}>Menu</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Search')} style={menustyle.menusearch}>
                    <View style={styling.searchlogo}>
                        <Image source={images.search} style={styling.logo} />
                    </View>
                </TouchableOpacity>

            </View>


            <Divider style={{ marginTop: 50 }} />
            {/* -------------------------------------------Pofile click Container-------------------------------- */}
            <ScrollView>


                <TouchableOpacity onPress={() => navigation.navigate('Abhi Thakur')} accessibilityIgnoresInvertColors={"black"}><View style={menustyle.profilehead}>
                    <View >
                        <View style={{ justifyContent: "flex-end" }} >
                            <Image source={images.Profile} style={styling.profilepic} />
                        </View>
                    </View>
                    <View >
                        <Text style={menustyle.headtextcss}>Abhi Thakur</Text>
                        <Text>View your profile</Text>
                    </View>
                </View>
                </TouchableOpacity>


                <Divider />

                {/* --------------------------------------Menu List COntainer--------------------------------------- */}
                <FlatList

                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={(element) => {
                        return (
                            <>


                                <TouchableOpacity onPress={() => click(element.item)}>
                                    <View style={menustyle.menulistview}>

                                        <Image source={element.item.uri} style={menustyle.listimg} />
                                        <Text style={menustyle.listtext}>{element.item.name}</Text>

                                    </View>
                                </TouchableOpacity>
                            </>

                        )
                    }}
                />
            </ScrollView>




        </SafeAreaView >
    )
}

export default MenuScreen
