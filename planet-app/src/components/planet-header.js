import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../components/text/text'
import { colors, spacing } from "../theme";

export default function PlanetHeader() {
    return (
        <View style={styles.container}>
            <Text preset="h2">THE PLANETS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: spacing[6],
        paddingVertical: spacing[4],
        borderBottomWidth: 0.5,
        borderBottomColor: colors.white,
    },
})
