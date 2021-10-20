import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import Task from '../components/Task';

const todosScreen = ({navigation}) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
  
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }
    
    const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
    }
    
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Das sind deine ToDos</Text>
            </View>

            {/* Added this scroll view to enable scrolling when list gets longer than the page */}
            <ScrollView
                contentContainerStyle={{
                flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
            
            {/* Today's Tasks */}
                <View style={styles.tasksWrapper}>   
                    <View style={styles.items}>
                    {/* This is where the tasks will go! */}
                    {
                        taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                            <Task text={item} /> 
                            </TouchableOpacity>
                        )
                        })
                    }    
                    </View>
                </View>
                
            </ScrollView>
        
            {/* Write a task */}
            {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'schreibe ein neues ToDo...'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
          
        </View>

    );
};

export default todosScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'floralwhite',
      },
      tasksWrapper: {
        paddingTop: 70,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      items: {
        marginTop: 30,
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 130,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: 'lavender',
        borderWidth: 1,
        width: 250,
      },
      addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lavender',
        borderWidth: 1,
      },
      addText: {
          color: 'lightgrey',
          fontSize: 20,
      },

      header: {
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
      },
      headerText:{
        marginTop: 45,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'dimgray',    
      },

});