import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Button from '../../components/Button'

import Dot from '../../components/Dot'
import Footer from '../../components/Footer'
import SizeButton from '../../components/SizeButton'

export default function Detail() {
    return (
        <ScrollView>
            <View>
                <Image
                    source={require('../../assets/detail.png')}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View>
                    <View >
                        <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
                    </View>
                    <View>
                        <Text style={[styles.title, { fontSize: 30, color: '#cececf' }]}>Nike Downshifter 10</Text>
                    </View>
                    <View style={styles.dotContainer} >
                        <Dot color="#2379f4" />
                        <Dot color="#fb6e53" />
                        <Dot color="#ddd" />
                        <Dot color="#2379f4" />
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <SizeButton bgColor="#17181a" color="#fff" label="40" />
                            <SizeButton label="37" />
                            <SizeButton label="39" />
                            <SizeButton label="42" />
                        </ScrollView>
                    </View>

                    <View style={styles.textContent}>
                        <Text style={styles.textTitle}>Nike tour speed</Text>
                        <Text style={styles.textContent} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure dolorum, aliquid vitae, qui odio amet ullam sapiente dignissimos iusto necessitatibus aliquam dicta nesciunt dolorem cumque deleniti beatae tenetur quo.
                        </Text>
                        <Text style={styles.textList} >
                            - Categoria: Amortecimento
                        </Text>
                        <Text style={styles.textList} >
                            - Material: Mesh
                        </Text>
                    </View>
                </View>
                
                <Button />

                <View style={styles.line} />

                <Footer/>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',

    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '5%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%'

    },
    textList: {
        fontSize: 16,
        lineHeight: 25
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#ddd',
        marginVertical: '2%'
    }
})