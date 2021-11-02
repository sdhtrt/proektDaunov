import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HryHry = (props) => {
    return(
        <View>
            <Text style={style.textStyle}>и хохлов</Text>
        </View>
    )
}

let style = StyleSheet.create({
    textStyle:{
        color: '#fd0',
        backgroundColor: '#00f',
        fontSize: 20,
        paddingHorizontal: 10,
    }
})