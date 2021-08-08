import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Shoes from '../../components/Shoes'

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#cececf' }]}>•</Text>
                    <Text style={[styles.text, { color: '#cececf' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }} >
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <Text style={styles.text} >LANÇAMENTOS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Shoes
                        image={require('../../assets/1.png')}
                        cost="R$140,90"
                        description=' Nike Air Max Dia'
                        handlePress={() => navigation.navigate('Detail') }
                    >

                    </Shoes>
                    <Shoes
                        image={require('../../assets/2.png')}
                        cost="R$280,90"
                        description="Nike Downshifter 10"
                        handlePress={() => navigation.navigate('Detail')}
                    >

                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Shoes
                        image={require('../../assets/3.png')}
                        cost="R$560,00"
                        description=' Nike Squidward Tentacles'
                         handlePress={() => navigation.navigate('Detail')}
                    >

                    </Shoes>
                    <Shoes
                        image={require('../../assets/4.png')}
                        cost="R$220,00"
                        description="Nike Epic React Flyknit 2"
                         handlePress={() => navigation.navigate('Detail')}
                    >

                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Shoes
                        image={require('../../assets/5.png')}
                        cost="R$120,00"
                        description=' Nike Joyride Run'
                         handlePress={() => navigation.navigate('Detail')}
                    >

                    </Shoes>
                    <Shoes
                        image={require('../../assets/6.png')}
                        cost="R$920,00"
                        description="Nike Epic Vue 3"
                         handlePress={() => navigation.navigate('Detail')}
                    >

                    </Shoes>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2
    }
})