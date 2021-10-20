import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const Task = (props) => {

    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}>
            <View>
              <Image 
                style={styles.check} 
                source={require('../assets/check.png')}
              ></Image>
            </View>
          </View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'mistyrose',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      borderColor: 'lightpink',
      borderWidth: 1,
      
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: 'plum',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
    check:{
      width: 50,
      height: 50,
      marginLeft: -10,
      marginTop: -10
    }
    
  });
  
  export default Task;