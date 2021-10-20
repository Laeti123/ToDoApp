import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from '../screens/homeScreen';
import todosScreen from '../screens/todosScreen';
import calenderScreen from '../screens/calenderScreen';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
        initialRouteName= "Home"  
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle:{
                position: 'absolute',
                backgroundColor: 'lavender',
                borderTopWidth: 0,
                bottom: 30,
                left: 20,
                right: 20,
                height: 70,
                borderRadius: 15,
                       
            }
           
        }}
        >
            <Tab.Screen name="Home" component={homeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
                        <Image 
                        source={require('../assets/neuesHaus.png')}
                        resizeMode='contain'
                        style={{
                            width: 42,
                            height: 42,
                        }}
                        />
                        <Text style={{fontSize: 10, color: focused ? 'dimgray' : 'lightgray', fontWeight: 'bold'}}>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="ToDos" component={todosScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
                        <Image 
                        source={require('../assets/todo.png')}
                        resizeMode='contain'
                        style={{
                            width: 42,
                            height: 42,                       
                        }}
                        />
                        <Text style={{fontSize: 10, color: focused ? 'dimgray' : 'lightgray', fontWeight: 'bold'}}>ToDos</Text>
                    </View>
                ),    
            }}/>
            <Tab.Screen name="Calender" component={calenderScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
                        <Image 
                        source={require('../assets/Kalender.png')}
                        resizeMode='contain'
                        style={{
                            width: 42,
                            height: 42,                       
                        }}
                        />
                        <Image 

                        />
                        <Text style={{fontSize: 10, color: focused ? 'dimgray' : 'lightgray', fontWeight: 'bold'}}>Calender</Text>
                    </View>
                ),    
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;





