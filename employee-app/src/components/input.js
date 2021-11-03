import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function Input({ onChangeText, secureTextEntry }) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        marginBottom: 16,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 10,
        borderColor: '#ccc'
    }
})
