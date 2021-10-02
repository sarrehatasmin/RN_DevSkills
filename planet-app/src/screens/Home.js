import React from 'react'
import { Platform, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import PlanetHeader from '../components/planet-header';
import Text from '../components/text/text'
import { colors } from "../theme";

export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
        <PlanetHeader />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Pressable onPress={() => navigation.navigate("Details")}>
                <Text preset="h1">Go to Details</Text>
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
