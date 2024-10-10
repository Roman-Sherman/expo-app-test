import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [bgColor, setBgColor] = useState('#fff');

    const changeBackgroundColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBgColor(randomColor);
    };

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: bgColor }]} onPress={changeBackgroundColor}>
            <Text style={styles.text}>Hello there</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 48,
        color: '#000',
    },
});
