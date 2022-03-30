import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styles from '../friendriquest/friendcss'
import styling from '../../styles/styling'
import DATA from '../../components/flatlist'
function Friendrequest() {
    return (
        <>
            {/* -----------------------------------------------Friend Request Main Container-------------------------------------------- */}
            <View style={styles.Maincontainer}>
                <Divider width={1} />

                <ScrollView>
                    {/* -----------------------------------------Friend search container--------------------------------------- */}
                    <View>


                        <Text style={styles.friendtext}>Friends</Text>
                        <View style={styling.mainline}>
                            <View style={styling.imagebtn} >
                                <Text style={styles.btntext}>Suggestions</Text>
                            </View>
                            <View style={styling.imagebtn} >
                                <Text style={styles.btntext}>Your Friend</Text>
                            </View>
                        </View>
                        <View style={styles.suggestview}>

                            <Text style={styles.btntext}>Suggestions</Text>


                            <Text style={styles.seeall}>See all</Text>

                        </View>
                        <Divider width={1} />
                    </View>
                    {/* ---------------------------------------Confirm Friend COntainer----------------------------------------- */}
                    <View style={styling.flat}>
                        <FlatList

                            showsHorizontalScrollIndicator={false}
                            data={DATA}
                            renderItem={(element) => {
                                return (

                                    <View style={styles.flatview}>
                                        <View style={styles.imageview}>
                                            <Image source={element.item.uri} style={styles.image} />
                                        </View>
                                        <View style={{ flex: 0.8 }}>
                                            <Text style={styles.btntext}>{element.item.name}</Text>
                                            <View style={styles.addview}>
                                                <View style={styles.addbtn}>
                                                    <TouchableOpacity>
                                                        <Text style={styles.textcolour}>Confirm</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.deletebtn}>
                                                    <TouchableOpacity>
                                                        <Text >Delete</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>


                                    </View>
                                )
                            }}
                        />
                        <TouchableOpacity><View style={styles.suggestbtn}>
                            <Text style={styles.btntext}>See All</Text>
                        </View></TouchableOpacity>
                    </View>
                    <Divider />
                    {/* ---------------------------------------------------Add Friend Container------------------------------------ */}
                    <FlatList

                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={(element) => {
                            return (

                                <View style={styles.flatview}>
                                    <View style={styles.imageview}>
                                        <Image source={element.item.uri} style={styles.image} />
                                    </View>
                                    <View style={{ flex: 0.8 }}>
                                        <Text style={styles.btntext}>{element.item.name}</Text>
                                        <View style={styles.addview}>
                                            <View style={styles.addbtn}>
                                                <Text style={styles.textcolour}>Add Friend</Text>
                                            </View>
                                            <View style={styles.deletebtn}>
                                                <Text >Delete</Text>
                                            </View>
                                        </View>

                                    </View>


                                </View>


                            )
                        }}
                    />
                </ScrollView>
            </View >
        </>
    )
}

export default Friendrequest