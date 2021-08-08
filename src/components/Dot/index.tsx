import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

type Props = {
    color: string
}

export default function Dot({ color }: Props) {

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.06,
        height: Dimensions.get('window').width * 0.06,
        borderRadius: (Dimensions.get('window').width * 0.06) / 2,
        marginHorizontal: '2.5%',
        elevation: 5
    }
})