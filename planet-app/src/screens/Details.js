import React from 'react'
import { Platform, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text'
import { colors } from "../theme";

export default function Details({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text preset="h1">Back Home</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'android' ? 50 : null,
    },
})
