import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const calenderScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Calender Screen</Text>
        </View>

    );
};

export default calenderScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'floralwhite'
    },

});