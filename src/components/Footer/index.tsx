import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Shoes from '../Shoes'

export default function Footer() {
    return (
        <View>
            <Text style={styles.title} >VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }} >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes
                            image={require('../../assets/5.png')}
                            description=' Nike Joyride Run'
                            cost="R$120,00"
                        />
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes
                            image={require('../../assets/4.png')}
                            description="Nike Epic React Flyknit 2"
                            cost="R$220,00"

                        />

                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes
                            image={require('../../assets/6.png')}
                            cost="R$920,00"
                            description="Nike Epic Vue 3"

                        />

                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})