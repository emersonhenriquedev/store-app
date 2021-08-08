import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

type Props = {
    image: ImageSourcePropType,
    cost: string,
    description: string,
    handlePress?: () => void
}

const Shoes: React.FC<Props> = ({ image, cost, description, handlePress }) => {

    const filterDesc = (desc: string): string =>
        desc.length < 20 ? desc : `${desc.substring(0, 20)}...`

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image
                source={image}
                style={styles.shoesImg}
            />
            <Text style={styles.shoesText}>{filterDesc(description)}</Text>
            <Text style={[styles.shoesText, { color: '#cececf' }]}>{cost}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    shoesImg: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontSize: 16
    }
})

export default Shoes