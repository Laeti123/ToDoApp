import React from 'react';
import {View, Text, Button, StyleSheet, Image, FlatList, ScrollView, TouchableHighlight} from 'react-native';
import Animated from 'react-native-reanimated';

const images = [
    { id: 1, uri: require('../assets/writing.jpg') },
    { id: 2, uri: require('../assets/laptop.jpg') },
    { id: 3, uri: require('../assets/coden.jpg') },
    { id: 4, uri: require('../assets/office.jpg') }

];

const HEADER_HIGHT = 70

/*
const homeScreen = ({navigation}) => {

    return(
        
        <View style={styles.container}> 
            <View style={styles.titles}>
                <Text style={styles.title}>Dein Organisations-Guide</Text>
                <Text style={styles.subtitle}>Lass uns die nächsten Tage planen!</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={3000}
                    source={require('../assets/programmer.png')}
                    style={{
                        width: 300,
                        height: 300,
                    }}
                />  
            </View>             
         </View>
        
    );
};
*/

const homeScreen = ({navigation}) => {

    
    return(
        
        <View style={styles.container}>
             <View 
                style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 80,
                    backgroundColor: 'lavender',
                    zIndex: 1000,
                    elevation: 1000,
                }}  
            
            >
                <Text style={styles.titles}> Hast du was zu erledigen? </Text>
            </View>  
            <ScrollView >
                {images.map(image => (
                    <View key={image.id} style={{marginTop: 100, padding: 20}}>
                        <Image
                         fadeDuration={2000} 
                         source={image.uri} 
                         style={{ 
                             width: 350, 
                             height: 300, 
                             borderRadius:10,
                            }}
                         />
                    </View>
                ))}
            </ScrollView>

        </View>
           
    );
};


export default homeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'floralwhite'
    },
    titles:{
        marginTop: 45,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'dimgray',           
    },
    

});